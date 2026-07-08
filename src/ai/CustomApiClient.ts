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

const MAX_LOOP_ITERATIONS = 4;

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

// ===== Model fetching =====

export async function fetchCustomModels(): Promise<string[]> {
  const settings = useSettingsStore().settings;
  const url = settings.aiApiUrl.replace(/\/$/, '') + '/models';

  const res = await fetch(url, {
    method: 'GET',
    headers: {
      ...(settings.aiApiKey ? { Authorization: `Bearer ${settings.aiApiKey}` } : {}),
    },
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`API ${res.status}: ${text}`);
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

  console.log('[晓乐] BGM API request:', { model: settings.aiModel, messageCount: messages.length });

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(settings.aiApiKey ? { Authorization: `Bearer ${settings.aiApiKey}` } : {}),
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`API ${res.status}: ${text}`);
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
      const mgr = createDefaultProviders(settingsStore.settings.providers);
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
      console.log('[晓乐] search_music results:', topResults.length, 'items for:', keyword);
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
        toastr.success(`${t('AI selected:')} ${searchResult.name}`);
      }

      console.log('[晓乐] play_music success:', searchResult.name, '-', searchResult.artist);
      return FC_TOOL_PLAY_SUCCESS
        .replace('{name}', searchResult.name)
        .replace('{artist}', searchResult.artist ? ' - ' + searchResult.artist : '');
    }

    case FC_TOOL_STOP_NAME: {
      const player = usePlayerStore();
      if (!player.currentTrack) return FC_TOOL_STOP_NOTHING;
      player.pause();
      console.log('[晓乐] stop_music success');
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
      console.log('[晓乐] get_current_track:', result);
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
    console.log(`[晓乐] BGM agent loop iteration ${iteration + 1}/${MAX_LOOP_ITERATIONS}`);

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
      console.log('[晓乐] BGM agent loop ended — no tool calls');
      if (response.content) {
        console.log('[晓乐] BGM agent final text:', response.content);
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
        console.warn('[晓乐] Failed to parse tool arguments:', toolCall.function.arguments);
      }

      console.log(`[晓乐] Executing tool: ${toolName}`, args);
      const result = await executeTool(toolName, args, searchCache);
      console.log(`[晓乐] Tool result:`, result);

      messages.push({
        role: 'tool',
        content: result,
        tool_call_id: toolCall.id,
      });
    }
  }

  console.warn('[晓乐] BGM agent loop reached max iterations');
}
