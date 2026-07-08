/**
 * Replaces xiaoyue macros in a string with current player state values.
 *
 * ST does not run substituteParams on individual chat messages during
 * prompt assembly, so we must replace our own macros before injecting.
 */

import { usePlayerStore } from '@/stores/player';
import { getRecentPlayed } from '@/ai/BgmHistory';

export function replaceXiaoyueMacros(text: string): string {
  let result = text;

  try {
    const player = usePlayerStore();
    const song = player.currentTrack?.name ?? '';
    const artist = player.currentTrack?.artist ?? '';
    const isPlaying = String(player.isPlaying);
    const hasTrack = String(!!player.currentTrack);
    const recentPlayed = getRecentPlayed(5).join(', ');

    result = result
      .replace(/\{\{xiaoyueCurrentSong\}\}/gi, song)
      .replace(/\{\{xiaoyueCurrentArtist\}\}/gi, artist ? ' - ' + artist : '')
      .replace(/\{\{xiaoyueIsPlaying\}\}/gi, isPlaying)
      .replace(/\{\{xiaoyueHasTrack\}\}/gi, hasTrack)
      .replace(/\{\{xiaoyueRecentPlayed\}\}/gi, recentPlayed);
  } catch {
    // player store not available
  }

  return result;
}
