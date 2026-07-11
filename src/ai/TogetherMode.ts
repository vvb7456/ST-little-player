import type { BgmRecommendation } from '@/types';
import { parseJsonSafe } from '@/ai/JsonRepair';
import { buildTogetherPrompt, MARKER_START, MARKER_END } from '@/ai/PromptBuilder';
import { addBgmHistory } from '@/ai/BgmHistory';
import { useSettingsStore } from '@/stores/settings';
import { usePlaylistStore } from '@/stores/playlist';
import { createDefaultProviders } from '@/provider';
import { t } from '@/i18n';
import { logger } from '@/utils/logger';

const MARKER_REGEX = /<!--XY_BGM_START-->[\s\S]*?<!--XY_BGM_END-->/g;

export class TogetherMode {
  private interceptor: ((chat: any[], contextSize: number, abort: Function, type: string) => void) | null = null;

  private onGenerationEndedBound = (messageId: number): void => {
    void this.onGenerationEnded(messageId);
  };

  init(): void {
    this.interceptor = (chat: any[], _contextSize: number, _abort: Function, _type: string): void => {
      const stCtx = SillyTavern.getContext();
      const settings = stCtx.extensionSettings['st-little-player'];
      if (!settings || settings.aiMode !== 'together') return;

      const settingsStore = useSettingsStore();
      const prompt = buildTogetherPrompt(
        settingsStore.settings.togetherCustomPromptEnabled,
        settingsStore.settings.togetherCustomPrompt,
      );

      const role = settings.togetherPromptRole || 'system';
      const isSystem = role === 'system';

      chat.splice(Math.max(0, chat.length - 1), 0, {
        is_user: !isSystem,
        is_system: isSystem,
        name: '晓乐',
        mes: prompt,
        extra: { isSmallSys: isSystem },
      });
    };

    (globalThis as any).xiaoyueInterceptor = this.interceptor;

    const ctx = SillyTavern.getContext();
    ctx.eventSource.on(ctx.event_types.GENERATION_ENDED, this.onGenerationEndedBound);

    logger.info('Together mode initialized');
  }

  destroy(): void {
    logger.info('Together mode destroyed');
    const ctx = SillyTavern.getContext();
    ctx.eventSource.removeListener(ctx.event_types.GENERATION_ENDED, this.onGenerationEndedBound);

    delete (globalThis as any).xiaoyueInterceptor;
    this.interceptor = null;
  }

  async onGenerationEnded(messageId: number): Promise<void> {
    try {
      const ctx = SillyTavern.getContext();
      // GENERATION_ENDED passes chat.length, not the array index.
      // The last message is at chat.length - 1.
      const actualId = messageId > 0 ? messageId - 1 : 0;
      const msg = ctx.chat[actualId];
      if (!msg) {
        logger.warn('Together: GENERATION_ENDED but message not found', { messageId, actualId, chatLen: ctx.chat.length });
        return;
      }

      const text = msg.mes ?? '';
      const startIdx = text.indexOf(MARKER_START);
      if (startIdx === -1) return;
      logger.debug('Together: marker found in message ' + actualId);

      const endIdx = text.indexOf(MARKER_END, startIdx);
      if (endIdx === -1) {
        logger.warn('Together: MARKER_END not found, marker may be truncated');
        return;
      }

      const extracted = text.slice(startIdx + MARKER_START.length, endIdx).trim();
      logger.debug('Together: extracted marker content:', extracted);

      const recommendation = parseJsonSafe(extracted) as BgmRecommendation | null;
      logger.debug('Together: parsed recommendation:', recommendation);

      if (!recommendation) {
        this.cleanupMarker(actualId, msg);
        return;
      }

      if (recommendation.action === 'keep') {
        logger.debug('Together: action=keep, no change');
        this.cleanupMarker(actualId, msg);
        return;
      }

      if (recommendation.action === 'play' && recommendation.song) {
        logger.debug('Together: searching for: ' + recommendation.song, recommendation.artist);
        const settingsStore = useSettingsStore();
        const mgr = createDefaultProviders(settingsStore.settings);
        const results = await mgr.searchAll(recommendation.artist
          ? `${recommendation.song} ${recommendation.artist}`
          : recommendation.song);

        if (results.length > 0) {
          const playlistStore = usePlaylistStore();
          playlistStore.addFromAi(results[0], true);
          addBgmHistory(recommendation.song, recommendation.artist, actualId);
          logger.debug('Together: playing: ' + results[0].name + ' - ' + results[0].artist);
          if (typeof toastr !== 'undefined') {
            toastr.success(`${t('AI selected:')}：${recommendation.song}`, '晓乐');
          }
        } else {
          logger.warn('Together: track not found: ' + recommendation.song);
          if (typeof toastr !== 'undefined') {
            toastr.warning(`${t('Cannot play')}：${recommendation.song}`, '晓乐');
          }
        }
      }

      this.cleanupMarker(actualId, msg);
    } catch (err) {
      logger.error('Together: onGenerationEnded error:', err);
    }
  }

  private cleanupMarker(messageId: number, msg: any): void {
    msg.mes = (msg.mes ?? '').replace(MARKER_REGEX, '').trim();
    const ctx = SillyTavern.getContext();
    if (typeof ctx.updateMessageBlock === 'function') {
      try {
        ctx.updateMessageBlock(messageId, msg);
      } catch (err) {
        logger.warn('Together: failed to update message block', err);
      }
    }
  }
}
