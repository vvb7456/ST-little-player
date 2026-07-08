/**
 * Centralized slash command registration for the 晓乐 extension.
 *
 * All commands use the `xy` prefix.
 * Commands are registered once on activate and unregistered on disable.
 *
 * Command list:
 *   /xyplay [song]   Toggle play/pause, or search & play a song by name
 *   /xynext          Next track
 *   /xyprev          Previous track
 *   /xyvol [0-100]   Get or set volume
 *   /xyadd <song>    Search and add to playlist
 *   /xybgm           Manually trigger AI BGM analysis
 *   /xynow           Show current track info
 */

import { logger } from '@/utils/logger';
import { usePlayerStore } from '@/stores/player';
import { usePlaylistStore } from '@/stores/playlist';
import { useSettingsStore } from '@/stores/settings';
import { getBgmController } from '@/ai/BgmController';
import { createDefaultProviders } from '@/provider';
import type { SearchResult } from '@/types';
import { t } from '@/i18n';

const CMD_PREFIX = 'xy';
const TITLE = '晓乐';
const registeredNames: string[] = [];

function toStr(unnamedArgs: unknown): string {
  if (unnamedArgs == null) return '';
  if (typeof unnamedArgs === 'string') return unnamedArgs;
  if (Array.isArray(unnamedArgs)) return unnamedArgs.map(String).join(' ').trim();
  return String(unnamedArgs);
}

export function registerSlashCommands(): void {
  const ctx = SillyTavern.getContext();
  const { SlashCommandParser, SlashCommand } = ctx;

  const add = (props: Record<string, unknown>): void => {
    const cmd = SlashCommand.fromProps(props);
    SlashCommandParser.addCommandObject(cmd);
    if (typeof props.name === 'string') registeredNames.push(props.name);
    if (Array.isArray(props.aliases)) {
      for (const a of props.aliases) registeredNames.push(String(a));
    }
  };

  // ===== /xyplay [song] =====
  add({
    name: `${CMD_PREFIX}play`,
    aliases: [`${CMD_PREFIX}p`],
    helpString: 'Toggle play/pause. With a song name argument, searches and plays it immediately.',
    callback: async (_named: unknown, unnamed: unknown): Promise<string> => {
      const songName = toStr(unnamed).trim();
      const playerStore = usePlayerStore();
      if (!songName) {
        await playerStore.togglePlay();
        if (typeof toastr !== 'undefined') {
          toastr.success(playerStore.isPlaying ? t('Now playing') : t('Paused'), TITLE);
        }
        return '';
      }
      const settingsStore = useSettingsStore();
      const mgr = createDefaultProviders(settingsStore.settings.providers);
      const track = await mgr.searchAndResolve(songName);
      if (track) {
        track.name = songName;
        await playerStore.loadAndPlay(track);
        if (typeof toastr !== 'undefined') toastr.success(`${t('Now playing')}：${track.name}`, TITLE);
      } else {
        if (typeof toastr !== 'undefined') toastr.warning(`${t('Cannot play')}：${songName}`, TITLE);
      }
      return '';
    },
  });

  // ===== /xynext =====
  add({
    name: `${CMD_PREFIX}next`,
    aliases: [`${CMD_PREFIX}n`],
    helpString: 'Skip to the next track.',
    callback: async (): Promise<string> => {
      const playlistStore = usePlaylistStore();
      playlistStore.next();
      const track = playlistStore.current;
      if (track && typeof toastr !== 'undefined') {
        toastr.success(`${t('Now playing')}：${track.song}`, TITLE);
      }
      return '';
    },
  });

  // ===== /xyprev =====
  add({
    name: `${CMD_PREFIX}prev`,
    aliases: [`${CMD_PREFIX}pp`],
    helpString: 'Go back to the previous track.',
    callback: async (): Promise<string> => {
      const playlistStore = usePlaylistStore();
      playlistStore.prev();
      const track = playlistStore.current;
      if (track && typeof toastr !== 'undefined') {
        toastr.success(`${t('Now playing')}：${track.song}`, TITLE);
      }
      return '';
    },
  });

  // ===== /xyvol [0-100] =====
  add({
    name: `${CMD_PREFIX}vol`,
    helpString: 'Get or set the player volume (0-100). No argument shows the current volume.',
    callback: async (_named: unknown, unnamed: unknown): Promise<string> => {
      const arg = toStr(unnamed).trim();
      const playerStore = usePlayerStore();
      if (!arg) {
        return String(playerStore.volume);
      }
      const vol = parseInt(arg, 10);
      if (Number.isNaN(vol) || vol < 0 || vol > 100) {
        if (typeof toastr !== 'undefined') toastr.warning(t('Volume must be 0-100'), TITLE);
        return '';
      }
      playerStore.setVolume(vol);
      useSettingsStore().setVolume(vol);
      if (typeof toastr !== 'undefined') toastr.success(`${t('Volume set to')} ${vol}`, TITLE);
      return '';
    },
  });

  // ===== /xyadd <song> [artist] =====
  add({
    name: `${CMD_PREFIX}add`,
    helpString: 'Search for a song and add it to the playlist.',
    callback: async (_named: unknown, unnamed: unknown): Promise<string> => {
      const query = toStr(unnamed).trim();
      if (!query) {
        if (typeof toastr !== 'undefined') toastr.warning(t('Enter song name'), TITLE);
        return '';
      }
      const settingsStore = useSettingsStore();
      const mgr = createDefaultProviders(settingsStore.settings.providers);
      const results: SearchResult[] = await mgr.searchAll(query);
      if (results.length === 0) {
        if (typeof toastr !== 'undefined') toastr.info(t('No results'), TITLE);
        return '';
      }
      usePlaylistStore().addFromSearch(results[0], false);
      if (typeof toastr !== 'undefined') {
        toastr.success(`${t('Added to playlist')}：${results[0].name} - ${results[0].artist}`, TITLE);
      }
      return '';
    },
  });

  // ===== /xybgm =====
  add({
    name: `${CMD_PREFIX}bgm`,
    helpString: 'Manually trigger AI BGM analysis for the current conversation.',
    callback: async (): Promise<string> => {
      const controller = getBgmController();
      if (!controller) {
        if (typeof toastr !== 'undefined') toastr.warning(t('AI BGM off'), TITLE);
        return '';
      }
      const settingsStore = useSettingsStore();
      if (!settingsStore.settings.aiApiUrl || !settingsStore.settings.aiModel) {
        if (typeof toastr !== 'undefined') toastr.warning(t('AI not configured'), TITLE);
        return '';
      }
      if (typeof toastr !== 'undefined') toastr.info(t('AI analyzing'), TITLE);
      await controller.manualTrigger();
      return '';
    },
  });

  // ===== /xynow =====
  add({
    name: `${CMD_PREFIX}now`,
    helpString: 'Show information about the currently playing track.',
    callback: async (): Promise<string> => {
      const playerStore = usePlayerStore();
      const track = playerStore.currentTrack;
      if (!track) {
        if (typeof toastr !== 'undefined') toastr.info(t('No Song'), TITLE);
        return '';
      }
      const artist = track.artist ? ` - ${track.artist}` : '';
      if (typeof toastr !== 'undefined') toastr.info(`${t('Now playing track')}：${track.name}${artist}`, TITLE);
      return `${track.name}${artist}`;
    },
  });

  logger.info('Slash commands registered: ' + registeredNames.join(', '));
}

export function unregisterSlashCommands(): void {
  const ctx = SillyTavern.getContext();
  const { SlashCommandParser } = ctx;
  if (!SlashCommandParser?.commands) return;
  for (const name of registeredNames) {
    if (name in SlashCommandParser.commands) {
      delete SlashCommandParser.commands[name];
    }
  }
  registeredNames.length = 0;
  logger.info('Slash commands unregistered');
}
