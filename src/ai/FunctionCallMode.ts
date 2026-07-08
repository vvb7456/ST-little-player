import type { SearchResult } from '@/types';
import { useSettingsStore } from '@/stores/settings';
import { usePlayerStore } from '@/stores/player';
import { usePlaylistStore } from '@/stores/playlist';
import { createDefaultProviders } from '@/provider';
import { addBgmHistory } from '@/ai/BgmHistory';
import { buildChatContext } from '@/ai/ContextBuilder';
import { buildFcAuxPrompt, buildFcSystemPrompt, buildFcUserPrompt } from '@/ai/PromptBuilder';
import { runBgmAgentLoop } from '@/ai/CustomApiClient';
import { t } from '@/i18n';
import { logger } from '@/utils/logger';
import {
  FC_TOOL_SEARCH_NAME,
  FC_TOOL_SEARCH_DESC,
  FC_TOOL_SEARCH_PARAM_KEYWORD,
  FC_TOOL_PLAY_NAME,
  FC_TOOL_PLAY_DESC,
  FC_TOOL_PLAY_PARAM_ID,
  FC_TOOL_PLAY_DISPLAY,
  FC_TOOL_PLAY_FORMAT,
  FC_TOOL_STOP_NAME,
  FC_TOOL_STOP_DESC,
  FC_TOOL_STOP_DISPLAY,
  FC_TOOL_STOP_FORMAT,
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

const PROMPT_KEY = 'xiaoyue_fc';

/**
 * Module-level search cache shared between search_music and play_music
 * for the ST native tool calling path.
 *
 * ST's recursion guarantees search_music executes before play_music.
 * The cache is cleared at the start of each generation.
 */
const stSearchCache = new Map<string, SearchResult>();

/**
 * Function Call mode — two paths sharing the same tools and prompts.
 *
 * Main API path: registers 4 stealth function tools + auxiliary prompt in ST.
 *   ST's built-in recursion handles the agent loop.
 *   search_music → stSearchCache → play_music(result_id)
 *
 * Custom API path: listens for CHARACTER_MESSAGE_RENDERED, runs runBgmAgentLoop
 *   via CustomApiClient with the same system prompt and tool definitions.
 *   search_music → local searchCache → play_music(result_id)
 */
export class FunctionCallMode {
  private isAnalyzing = false;
  private lastTriggerTime = 0;
  private destroyed = false;

  private onGenerationStarted = (): void => {
    stSearchCache.clear();
  };

  private onCharacterMessageRendered = (messageId: number): void => {
    const settingsStore = useSettingsStore();
    if (!settingsStore.settings.aiAutoTrigger) return;
    const ctx = SillyTavern.getContext();
    const isGreeting = messageId <= 0 || ctx.chat.filter((m: any) => m.is_user).length === 0;
    if (isGreeting && !settingsStore.settings.aiTriggerOnGreeting) return;
    void this.triggerAgent(messageId);
  };

  private onMessageSwiped = (messageId: number): void => {
    const settingsStore = useSettingsStore();
    if (!settingsStore.settings.aiAutoTrigger) return;
    const cooldown = Math.floor(settingsStore.settings.aiCooldownMs / 2);
    if (Date.now() - this.lastTriggerTime < cooldown) return;
    void this.triggerAgent(messageId, true);
  };

  init(): void {
    const settingsStore = useSettingsStore();
    if (settingsStore.settings.aiUseCustomApi) {
      this.initCustomApiPath();
    } else {
      this.initMainApiPath();
    }
  }

  // ===== Main API path: register ST function tools =====

  private initMainApiPath(): void {
    const ctx = SillyTavern.getContext();

    if (!ctx.isToolCallingSupported()) {
      logger.warn('Function tool calling is not supported by the current API. Switch to custom API or use Together mode.');
      return;
    }

    ctx.eventSource.on(ctx.event_types.GENERATION_STARTED, this.onGenerationStarted);

    const shouldReg = () => {
      const s = useSettingsStore();
      return s.settings.aiMode === 'function_call' && !s.settings.aiUseCustomApi;
    };

    // search_music — returns up to 5 results, caches them
    ctx.registerFunctionTool({
      name: FC_TOOL_SEARCH_NAME,
      displayName: '搜索音乐',
      description: FC_TOOL_SEARCH_DESC,
      parameters: {
        type: 'object',
        properties: {
          keyword: { type: 'string', description: FC_TOOL_SEARCH_PARAM_KEYWORD },
        },
        required: ['keyword'],
      },
      action: async ({ keyword }: { keyword?: string }) => {
        if (!keyword) return FC_TOOL_SEARCH_NO_KEYWORD;

        const settingsStore = useSettingsStore();
        const mgr = createDefaultProviders(settingsStore.settings.providers);
        const results = await mgr.searchAll(keyword);

        if (results.length === 0) {
          return FC_TOOL_SEARCH_NO_RESULTS.replace('{keyword}', keyword);
        }

        const topResults = results.slice(0, 5);
        for (const r of topResults) {
          stSearchCache.set(r.id, r);
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
      },
      formatMessage: ({ keyword }: { keyword?: string }) =>
        `搜索音乐: ${keyword ?? ''}`,
      shouldRegister: shouldReg,
      stealth: true,
    });

    // play_music — takes result_id from search cache
    ctx.registerFunctionTool({
      name: FC_TOOL_PLAY_NAME,
      displayName: FC_TOOL_PLAY_DISPLAY,
      description: FC_TOOL_PLAY_DESC,
      parameters: {
        type: 'object',
        properties: {
          result_id: { type: 'string', description: FC_TOOL_PLAY_PARAM_ID },
        },
        required: ['result_id'],
      },
      action: async ({ result_id }: { result_id?: string }) => {
        if (!result_id) return FC_TOOL_PLAY_MISSING_ID;

        const searchResult = stSearchCache.get(result_id);
        if (!searchResult) {
          return FC_TOOL_PLAY_INVALID_ID.replace('{id}', result_id);
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
      },
      formatMessage: ({ result_id }: { result_id?: string }) =>
        FC_TOOL_PLAY_FORMAT.replace('{song}', result_id ?? '').replace('{artist}', ''),
      shouldRegister: shouldReg,
      stealth: true,
    });

    // stop_music
    ctx.registerFunctionTool({
      name: FC_TOOL_STOP_NAME,
      displayName: FC_TOOL_STOP_DISPLAY,
      description: FC_TOOL_STOP_DESC,
      parameters: {
        type: 'object',
        properties: {},
      },
      action: async () => {
        const player = usePlayerStore();
        if (!player.currentTrack) return FC_TOOL_STOP_NOTHING;
        player.pause();
        return FC_TOOL_STOP_SUCCESS;
      },
      formatMessage: () => FC_TOOL_STOP_FORMAT,
      shouldRegister: shouldReg,
      stealth: true,
    });

    // get_current_track
    ctx.registerFunctionTool({
      name: FC_TOOL_GET_CURRENT_NAME,
      displayName: '当前播放',
      description: FC_TOOL_GET_CURRENT_DESC,
      parameters: {
        type: 'object',
        properties: {},
      },
      action: async () => {
        const player = usePlayerStore();
        if (!player.currentTrack) return FC_TOOL_GET_CURRENT_NONE;
        return FC_TOOL_GET_CURRENT_RESULT(
          player.currentTrack.name,
          player.currentTrack.artist ?? null,
          player.isPlaying,
        );
      },
      formatMessage: () => '获取当前播放',
      shouldRegister: shouldReg,
      stealth: true,
    });

    const auxPrompt = buildFcAuxPrompt();
    ctx.setExtensionPrompt(PROMPT_KEY, auxPrompt, 1, 0, false, 0);

    logger.info('Function Call (main API): 4 tools registered + aux prompt set');
  }

  // ===== Custom API path: event-driven agent loop =====

  private initCustomApiPath(): void {
    const ctx = SillyTavern.getContext();
    ctx.eventSource.on(
      ctx.event_types.CHARACTER_MESSAGE_RENDERED,
      this.onCharacterMessageRendered,
    );
    ctx.eventSource.on(
      ctx.event_types.MESSAGE_SWIPED,
      this.onMessageSwiped,
    );

    logger.info('Function Call (custom API): event listeners registered');
  }

  async manualTrigger(): Promise<void> {
    if (this.destroyed || this.isAnalyzing) return;
    const ctx = SillyTavern.getContext();
    const chat = ctx.chat;
    const lastId = chat && chat.length > 0 ? chat.length - 1 : undefined;
    await this.triggerAgent(lastId, true);
  }

  private async triggerAgent(
    _messageId: number | undefined,
    bypassCooldown = false,
  ): Promise<void> {
    if (this.isAnalyzing) return;

    const settingsStore = useSettingsStore();
    if (!bypassCooldown) {
      if (Date.now() - this.lastTriggerTime < settingsStore.settings.aiCooldownMs) return;
    }

    const ctx = SillyTavern.getContext();
    if (ctx.generationInProgress) return;

    if (!settingsStore.settings.aiApiUrl || !settingsStore.settings.aiModel) {
      logger.warn('Custom API path requires API URL + Model');
      return;
    }

    this.isAnalyzing = true;
    this.lastTriggerTime = Date.now();
    logger.info('BGM agent loop started');

    try {
      const chatText = await buildChatContext(settingsStore.settings.aiContextMessages);

      const systemPrompt = buildFcSystemPrompt();
      const userPrompt = buildFcUserPrompt(chatText);
      await runBgmAgentLoop(systemPrompt, userPrompt);
    } catch (err) {
      logger.error('AI agent loop failed:', err);
      if (typeof toastr !== 'undefined') {
        toastr.error(t('AI recommendation failed'), '晓乐');
      }
    } finally {
      this.isAnalyzing = false;
    }
  }

  destroy(): void {
    const settingsStore = useSettingsStore();
    const path = settingsStore.settings.aiUseCustomApi ? 'custom API' : 'main API';
    logger.info('Function Call destroyed: ' + path);
    this.destroyed = true;
    const ctx = SillyTavern.getContext();

    if (settingsStore.settings.aiUseCustomApi) {
      ctx.eventSource.removeListener(
        ctx.event_types.CHARACTER_MESSAGE_RENDERED,
        this.onCharacterMessageRendered,
      );
      ctx.eventSource.removeListener(
        ctx.event_types.MESSAGE_SWIPED,
        this.onMessageSwiped,
      );
    } else {
      ctx.eventSource.removeListener(ctx.event_types.GENERATION_STARTED, this.onGenerationStarted);
      ctx.unregisterFunctionTool(FC_TOOL_SEARCH_NAME);
      ctx.unregisterFunctionTool(FC_TOOL_PLAY_NAME);
      ctx.unregisterFunctionTool(FC_TOOL_STOP_NAME);
      ctx.unregisterFunctionTool(FC_TOOL_GET_CURRENT_NAME);
      ctx.setExtensionPrompt(PROMPT_KEY, '', -1, 0);
      stSearchCache.clear();
    }
  }
}
