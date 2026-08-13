/**
 * Custom API client for Function Call mode (custom API path).
 *
 * Implements a true agent tool-call loop:
 * 1. Send [system, user] with tools definitions
 * 2. If AI returns tool_calls, execute them, append results, repeat
 * 3. If AI returns plain text (no tool_calls), loop ends
 * 4. Max loop iterations to prevent infinite loops
 */

import type { SearchResult } from '@/types';
import { logger } from '@/utils/logger';
import { useSettingsStore } from '@/stores/settings';
import { usePlayerStore } from '@/stores/player';
import { usePlaylistStore } from '@/stores/playlist';
import { createDefaultProviders } from '@/provider';
import { addBgmHistory } from '@/ai/BgmHistory';
import { t } from '@/i18n';
import {
  FC_TOOL_SEARCH_NAME,
  FC_TOOL_SEARCH_DESC,
  FC_TOOL_SEARCH_PARAM_KEYWORD,
  FC_TOOL_PLAY_NAME,
  FC_TOOL_PLAY_DESC,
  FC_TOOL_PLAY_PARAM_ID,
  FC_TOOL_STOP_NAME,
  FC_TOOL_STOP_DESC,
  FC_TOOL_GET_CURRENT_NAME,
  FC_TOOL_GET_CURRENT_DESC,
  FC_TOOL_SEARCH_NO_KEYWORD,
  FC_TOOL_SEARCH_NO_RESULTS,
  FC_TOOL_SEARCH_RESULT,
  FC_TOOL_PLAY_MISSING_ID,
  FC_TOOL_PLAY_INVALID_ID,
  FC_TOOL_PLAY_SUCCESS,
  FC_TOOL_STOP_SUCCESS,
  FC_TOOL_STOP_NOTHING,
  FC_TOOL_GET_CURRENT_RESULT,
  FC_TOOL_GET_CURRENT_NONE,
} from '@/ai/prompts';

const MAX_LOOP_ITERATIONS = 5;

// ===== Tool definitions (OpenAI function calling format) =====

const TOOLS = [
  {
    type: 'function' as const,
    function: {
      name: FC_TOOL_SEARCH_NAME,
      description: FC_TOOL_SEARCH_DESC,
      parameters: {
        type: 'object',
        properties: {
          keyword: { type: 'string', description: FC_TOOL_SEARCH_PARAM_KEYWORD },
        },
        required: ['keyword'],
      },
    },
  },
  {
    type: 'function' as const,
    function: {
      name: FC_TOOL_PLAY_NAME,
      description: FC_TOOL_PLAY_DESC,
      parameters: {
        type: 'object',
        properties: {
          result_id: { type: 'string', description: FC_TOOL_PLAY_PARAM_ID },
        },
        required: ['result_id'],
      },
    },
  },
  {
    type: 'function' as const,
    function: {
      name: FC_TOOL_STOP_NAME,
      description: FC_TOOL_STOP_DESC,
      parameters: {
        type: 'object',
        properties: {},
      },
    },
  },
  {
    type: 'function' as const,
    function: {
      name: FC_TOOL_GET_CURRENT_NAME,
      description: FC_TOOL_GET_CURRENT_DESC,
      parameters: {
        type: 'object',
        properties: {},
      },
    },
  },
];

// ===== Types =====

interface ToolCall {
  id: string;
  type: 'function';
  function: { name: string; arguments: string };
}

interface ChatMessage {
  role: 'system' | 'user' | 'assistant' | 'tool';
  content: string | null;
  tool_calls?: ToolCall[];
  tool_call_id?: string;
}

/**
 * Semantic error thrown by the custom API client.
 * - `cors`: browser blocked the request (likely CORS policy); cross-origin fetch threw before any response arrived
 * - `network`: request never reached the server (DNS failure, connection refused, offline, etc.)
 * - `http`: server responded with a non-2xx status code (see `status`)
 * - `unknown`: anything else
 *
 * Note: browsers cannot reliably distinguish CORS rejection from a genuine network
 * failure (both surface as a TypeError "Failed to fetch" with no response body). We
 * therefore flag cross-origin failures that look like a CORS preflight rejection as
 * `cors`, but callers should treat `cors` and `network` as "endpoint unreachable
 * from the browser" when giving user-facing advice.
 */
export class AiApiError extends Error {
  readonly kind: 'cors' | 'network' | 'http' | 'unknown';
  readonly status?: number;
  readonly endpoint?: string;

  constructor(
    kind: 'cors' | 'network' | 'http' | 'unknown',
    message: string,
    opts?: { status?: number; endpoint?: string; cause?: unknown },
  ) {
    super(message);
    this.name = 'AiApiError';
    this.kind = kind;
    this.status = opts?.status;
    this.endpoint = opts?.endpoint;
    if (opts?.cause !== undefined) {
      (this as any).cause = opts.cause;
    }
  }
}

/** True if `err` is an AiApiError with the given kind. */
export function isAiApiError(
  err: unknown,
  kind?: 'cors' | 'network' | 'http' | 'unknown',
): err is AiApiError {
  return err instanceof AiApiError && (kind === undefined || err.kind === kind);
}

/**
 * Classify a raw fetch error into a semantic kind.
 *
 * Browsers collapse CORS rejection, DNS failure, connection refused, and TLS
 * errors all into a `TypeError: Failed to fetch` with no status. We can only
 * guess: if the target URL is cross-origin, treat it as `cors`; otherwise it's
 * a `network` failure.
 */
function classifyFetchFailure(
  err: unknown,
  targetUrl: string,
): 'cors' | 'network' | 'unknown' {
  // Any non-TypeError thrown before response → unknown
  if (!(err instanceof TypeError)) return 'unknown';
  // Cross-origin → most likely CORS (preflight blocked or no ACAO header)
  try {
    const u = new URL(targetUrl);
    const sameOrigin =
      typeof window !== 'undefined' &&
      u.origin === window.location.origin;
    return sameOrigin ? 'network' : 'cors';
  } catch {
    return 'network';
  }
}

/** Wrap a fetch call and rethrow failures as AiApiError. */
async function fetchOrThrow(
  url: string,
  init: RequestInit,
): Promise<Response> {
  try {
    return await fetch(url, init);
  } catch (err) {
    const kind = classifyFetchFailure(err, url);
    throw new AiApiError(kind, kindMessage(kind, url), {
      endpoint: url,
      cause: err,
    });
  }
}

function kindMessage(kind: 'cors' | 'network' | 'http' | 'unknown', url: string): string {
  switch (kind) {
    case 'cors':
      return `Endpoint blocked by CORS (browser cannot read response): ${url}`;
    case 'network':
      return `Cannot reach endpoint (network error): ${url}`;
    case 'http':
      return `Endpoint returned an HTTP error: ${url}`;
    case 'unknown':
      return `Request to endpoint failed: ${url}`;
  }
}

// ===== Model fetching =====

export async function fetchCustomModels(): Promise<string[]> {
  const settings = useSettingsStore().settings;
  const url = settings.aiApiUrl.replace(/\/$/, '') + '/models';

  const res = await fetchOrThrow(url, {
    method: 'GET',
    headers: {
      ...(settings.aiApiKey ? { Authorization: `Bearer ${settings.aiApiKey}` } : {}),
    },
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new AiApiError('http', `${res.status} ${res.statusText}`.trim() + (text ? `: ${text.slice(0, 200)}` : ''), {
      status: res.status,
      endpoint: url,
    });
  }

  const data = await res.json();
  const models: string[] = (data?.data ?? []).map((m: any) => m.id).filter(Boolean);
  return models.sort();
}

// ===== API call =====

async function callChatCompletions(
  messages: ChatMessage[],
): Promise<{ content: string | null; tool_calls?: ToolCall[] }> {
  const settings = useSettingsStore().settings;
  const url = settings.aiApiUrl.replace(/\/$/, '') + '/chat/completions';

  const body: Record<string, unknown> = {
    model: settings.aiModel,
    messages,
    max_tokens: 4096,
    stream: false,
    temperature: 0.7,
    tools: TOOLS,
    tool_choice: 'auto',
    thinking: { type: 'disabled' },
  };

  logger.debug('BGM API request:', { model: settings.aiModel, messageCount: messages.length });

  const res = await fetchOrThrow(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(settings.aiApiKey ? { Authorization: `Bearer ${settings.aiApiKey}` } : {}),
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    logger.warn('BGM API error: ' + res.status, text);
    throw new AiApiError('http', `${res.status} ${res.statusText}`.trim() + (text ? `: ${text.slice(0, 200)}` : ''), {
      status: res.status,
      endpoint: url,
    });
  }

  const data = await res.json();
  const message = data?.choices?.[0]?.message;
  return {
    content: message?.content ?? null,
    tool_calls: message?.tool_calls,
  };
}

// ===== Tool execution =====

async function executeTool(
  toolName: string,
  args: Record<string, unknown>,
  searchCache: Map<string, SearchResult>,
): Promise<string> {
  switch (toolName) {
    case FC_TOOL_SEARCH_NAME: {
      const keyword = args.keyword as string | undefined;
      if (!keyword) return FC_TOOL_SEARCH_NO_KEYWORD;

      const settingsStore = useSettingsStore();
      const mgr = createDefaultProviders(settingsStore.settings);
      const results = await mgr.searchAll(keyword);

      if (results.length === 0) {
        return FC_TOOL_SEARCH_NO_RESULTS.replace('{keyword}', keyword);
      }

      const topResults = results.slice(0, 5);
      for (const r of topResults) {
        searchCache.set(r.id, r);
      }

      const formatted = FC_TOOL_SEARCH_RESULT(
        topResults.map(r => ({
          id: r.id,
          name: r.name,
          artist: r.artist,
          duration: r.duration,
        })),
      );
      logger.debug('search_music results: ' + topResults.length + ' items for: ' + keyword);
      return formatted;
    }

    case FC_TOOL_PLAY_NAME: {
      const resultId = args.result_id as string | undefined;
      if (!resultId) return FC_TOOL_PLAY_MISSING_ID;

      const searchResult = searchCache.get(resultId);
      if (!searchResult) {
        return FC_TOOL_PLAY_INVALID_ID.replace('{id}', resultId);
      }

      const playlistStore = usePlaylistStore();
      playlistStore.addFromAi(searchResult, true);
      addBgmHistory(searchResult.name, searchResult.artist);

      if (typeof toastr !== 'undefined') {
        toastr.success(`${t('AI selected:')}：${searchResult.name}`, '晓乐');
      }

      logger.debug('play_music success: ' + searchResult.name + ' - ' + searchResult.artist);
      return FC_TOOL_PLAY_SUCCESS
        .replace('{name}', searchResult.name)
        .replace('{artist}', searchResult.artist ? ' - ' + searchResult.artist : '');
    }

    case FC_TOOL_STOP_NAME: {
      const player = usePlayerStore();
      if (!player.currentTrack) return FC_TOOL_STOP_NOTHING;
      player.pause();
      logger.debug('stop_music success');
      return FC_TOOL_STOP_SUCCESS;
    }

    case FC_TOOL_GET_CURRENT_NAME: {
      const player = usePlayerStore();
      if (!player.currentTrack) return FC_TOOL_GET_CURRENT_NONE;
      const result = FC_TOOL_GET_CURRENT_RESULT(
        player.currentTrack.name,
        player.currentTrack.artist ?? null,
        player.isPlaying,
      );
      logger.debug('get_current_track:', result);
      return result;
    }

    default:
      return `Unknown tool: ${toolName}`;
  }
}

// ===== Agent loop =====

/**
 * Run the BGM agent loop with tool calling.
 *
 * @param systemPrompt - System prompt string
 * @param userPrompt - User prompt string (conversation context)
 * @returns void — side effects (playing music) happen during tool execution
 */
export async function runBgmAgentLoop(
  systemPrompt: string,
  userPrompt: string,
): Promise<void> {
  const messages: ChatMessage[] = [
    { role: 'system', content: systemPrompt },
    { role: 'user', content: userPrompt },
  ];

  const searchCache = new Map<string, SearchResult>();

  for (let iteration = 0; iteration < MAX_LOOP_ITERATIONS; iteration++) {
    logger.debug('BGM agent loop iteration ' + (iteration + 1) + '/' + MAX_LOOP_ITERATIONS);

    const response = await callChatCompletions(messages);

    // Append assistant message
    const assistantMsg: ChatMessage = {
      role: 'assistant',
      content: response.content,
      ...(response.tool_calls ? { tool_calls: response.tool_calls } : {}),
    };
    messages.push(assistantMsg);

    // No tool calls = AI decided not to act (or finished acting)
    if (!response.tool_calls || response.tool_calls.length === 0) {
      logger.debug('BGM agent loop ended — no tool calls');
      if (response.content) {
        logger.debug('BGM agent final text:', response.content);
      }
      return;
    }

    // Execute each tool call and append results
    for (const toolCall of response.tool_calls) {
      const toolName = toolCall.function.name;
      let args: Record<string, unknown> = {};
      try {
        args = JSON.parse(toolCall.function.arguments || '{}');
      } catch {
        logger.warn('Failed to parse tool arguments:', toolCall.function.arguments);
      }

      logger.debug('Executing tool: ' + toolName, args);
      const result = await executeTool(toolName, args, searchCache);
      logger.debug('Tool result:', result);

      messages.push({
        role: 'tool',
        content: result,
        tool_call_id: toolCall.id,
      });
    }
  }

  logger.warn('BGM agent loop reached max iterations');
}
