import type { BgmHistoryEntry } from '@/types';
import { BGM_HISTORY_KEY } from '@/storage';
import { useSettingsStore } from '@/stores/settings';

const MAX_HISTORY = 50;

/**
 * Get BGM play history from chatMetadata.
 */
export function getBgmHistory(): BgmHistoryEntry[] {
  const settingsStore = useSettingsStore();
  const storage = settingsStore.storage;
  if (!storage) return [];
  const stored = storage.getMetadata<BgmHistoryEntry[]>(BGM_HISTORY_KEY);
  return Array.isArray(stored) ? stored : [];
}

/**
 * Add a song to BGM play history in chatMetadata.
 */
export function addBgmHistory(song: string, artist?: string, messageId?: number): void {
  const history = getBgmHistory();
  history.push({ song, artist, messageId, playedAt: Date.now() });

  // Trim to MAX_HISTORY
  if (history.length > MAX_HISTORY) {
    history.splice(0, history.length - MAX_HISTORY);
  }

  const settingsStore = useSettingsStore();
  const storage = settingsStore.storage;
  if (storage) {
    storage.setMetadata(BGM_HISTORY_KEY, history);
  }
}

/**
 * Get recently played songs as formatted strings for prompt injection.
 * @param count number of recent entries to return
 * @returns array like ["Song - Artist", "Song2 - Artist2", ...]
 */
export function getRecentPlayed(count: number): string[] {
  const history = getBgmHistory();
  return history
    .slice(-count)
    .reverse()
    .map((e) => `${e.song}${e.artist ? ' - ' + e.artist : ''}`);
}
