/**
 * Registers ST macros (variables) for use in presets and prompts.
 *
 * Available macros:
 *   {{xiaoyueCurrentSong}}    — Current playing song name, or empty
 *   {{xiaoyueCurrentArtist}}  — Current playing artist name, or empty
 *   {{xiaoyueIsPlaying}}      — "true" if currently playing, "false" otherwise
 *   {{xiaoyueRecentPlayed}}   — Comma-separated list of recently played songs (up to 5)
 *   {{xiaoyueHasTrack}}       — "true" if a track is loaded, "false" otherwise
 */

import { usePlayerStore } from '@/stores/player';
import { getRecentPlayed } from '@/ai/BgmHistory';
import { logger } from '@/utils/logger';

const MACROS: { name: string; description: string; fn: () => string }[] = [
  {
    name: 'xiaoyueCurrentSong',
    description: 'Name of the currently loaded track. Empty if no track is loaded.',
    fn: () => {
      try {
        return usePlayerStore().currentTrack?.name ?? '';
      } catch {
        return '';
      }
    },
  },
  {
    name: 'xiaoyueCurrentArtist',
    description: 'Artist of the currently loaded track. Empty if no track is loaded.',
    fn: () => {
      try {
        return usePlayerStore().currentTrack?.artist ?? '';
      } catch {
        return '';
      }
    },
  },
  {
    name: 'xiaoyueIsPlaying',
    description: 'Whether audio is currently playing. Returns "true" or "false".',
    fn: () => {
      try {
        return String(usePlayerStore().isPlaying);
      } catch {
        return 'false';
      }
    },
  },
  {
    name: 'xiaoyueHasTrack',
    description: 'Whether a track is loaded. Returns "true" or "false".',
    fn: () => {
      try {
        return String(!!usePlayerStore().currentTrack);
      } catch {
        return 'false';
      }
    },
  },
  {
    name: 'xiaoyueRecentPlayed',
    description: 'Comma-separated list of recently played songs (up to 5). Empty if no history.',
    fn: () => {
      try {
        return getRecentPlayed(5).join(', ');
      } catch {
        return '';
      }
    },
  },
];

export function registerMacros(): void {
  const ctx = SillyTavern.getContext();
  const macros = (ctx as any).macros;
  const MacrosParser = (ctx as any).MacrosParser;

  if (!macros?.register && !MacrosParser?.registerMacro) {
    logger.warn('Macros API not available, skipping registration');
    return;
  }

  for (const macro of MACROS) {
    if (macros?.register) {
      macros.register(macro.name, {
        category: 'misc',
        description: macro.description,
        handler: macro.fn,
      });
    } else if (MacrosParser?.registerMacro) {
      MacrosParser.registerMacro(macro.name, macro.fn, macro.description);
    }
  }
  logger.info('Macros registered:', MACROS.map(m => m.name).join(', '));
}

export function unregisterMacros(): void {
  const ctx = SillyTavern.getContext();
  const macros = (ctx as any).macros;
  const MacrosParser = (ctx as any).MacrosParser;

  for (const macro of MACROS) {
    if (macros?.registry?.unregisterMacro) {
      macros.registry.unregisterMacro(macro.name);
    } else if (MacrosParser?.unregisterMacro) {
      MacrosParser.unregisterMacro(macro.name);
    }
  }
  logger.info('Macros unregistered');
}
