import { createApp } from 'vue';
import type { App } from 'vue';
import { createPinia, type Pinia } from 'pinia';
import AppVue from './App.vue';
import SettingsView from './components/SettingsView.vue';
import { useSettingsStore, usePlayerStore, usePlaylistStore } from './stores';
import { createSTStorageAdapter } from './storage/STStorageAdapter';
import { BgmController } from './ai/BgmController';
import { registerMacros, unregisterMacros } from './tavern/Macros';
import { registerSlashCommands, unregisterSlashCommands } from './tavern/SlashCommands';
import { MODULE_NAME, BGM_HISTORY_KEY } from '@/storage';
import { deleteFile } from '@/storage/STFileClient';
import { logger } from '@/utils/logger';

let app: App<Element> | null = null;
let appReadyHandler: (() => void) | null = null;
let settingsEntry: HTMLElement | null = null;
let settingsApp: App<Element> | null = null;
let piniaInstance: Pinia | null = null;
let bgmController: BgmController | null = null;

const SETTINGS_HTML = `
<div class="inline-drawer">
  <div class="inline-drawer-toggle inline-drawer-header">
    <b data-i18n="晓乐">晓乐</b>
    <div class="inline-drawer-icon fa-solid fa-circle-chevron-down down"></div>
  </div>
  <div class="inline-drawer-content stmp-ext-settings-content">
    <div id="stmp-settings-mount"></div>
  </div>
</div>
`;

function addSettingsEntry(): void {
  const $container = $('#extensions_settings2');
  if (!$container || !$container.length) {
    logger.warn('Settings container #extensions_settings2 not found');
    return;
  }
  $container.append(SETTINGS_HTML);
  settingsEntry = $container.children('.inline-drawer').last()[0] ?? null;
  if (!settingsEntry) return;

  const mount = settingsEntry.querySelector('#stmp-settings-mount');
  if (mount && piniaInstance) {
    settingsApp = createApp(SettingsView);
    settingsApp.use(piniaInstance);
    settingsApp.mount(mount);
  }
}

function removeSettingsEntry(): void {
  if (settingsApp) {
    settingsApp.unmount();
    settingsApp = null;
  }
  settingsEntry?.remove();
  settingsEntry = null;
}

export async function init(): Promise<void> {
  try {
    const container = document.createElement('div');
    container.id = 'st-little-player-root';
    document.body.appendChild(container);

    const pinia = createPinia();
    piniaInstance = pinia;
    app = createApp(AppVue);
    app.use(pinia);
    app.mount(container);

    const settingsStore = useSettingsStore();
    const storage = createSTStorageAdapter();
    settingsStore.init(storage);

    const playerStore = usePlayerStore();
    playerStore.init();
    playerStore.setVolume(settingsStore.settings.volume);

    const playlistStore = usePlaylistStore();
    playlistStore.init();

    addSettingsEntry();

    const ctx = SillyTavern.getContext();
    appReadyHandler = () => {
      registerMacros();
      registerSlashCommands();
      bgmController = new BgmController();
      bgmController.init();
    };
    ctx.eventSource.on(ctx.event_types.APP_READY, appReadyHandler);

    logger.info('Player loaded');
  } catch (err) {
    logger.error('Init failed:', err);
  }
}

export function destroy(): void {
  logger.info('Player destroyed');
  if (appReadyHandler) {
    try {
      const ctx = SillyTavern.getContext();
      ctx.eventSource.removeListener(ctx.event_types.APP_READY, appReadyHandler);
    } catch {
    }
    appReadyHandler = null;
  }

  unregisterMacros();
  unregisterSlashCommands();

  bgmController?.destroy();
  bgmController = null;

  if (app) {
    try {
      const playerStore = usePlayerStore();
      playerStore.destroy();
    } catch {
    }
    app.unmount();
    app = null;
  }

  const root = document.getElementById('st-little-player-root');
  if (root) root.remove();

  removeSettingsEntry();
  piniaInstance = null;
}

export function disable(): void {
  destroy();
}

export async function clean(): Promise<void> {
  try {
    const ctx = SillyTavern.getContext();

    // 1. Delete uploaded server files in parallel before wiping playlist data
    const playlistData = ctx.extensionSettings[`${MODULE_NAME}-playlist`];
    if (playlistData && typeof playlistData === 'object') {
      const serverList = (playlistData as { server?: { serverPath?: string }[] }).server;
      if (Array.isArray(serverList)) {
        const paths = serverList.map((item) => item?.serverPath).filter((p): p is string => !!p);
        await Promise.all(paths.map((p) => deleteFile(p).catch((err) => {
          logger.warn('Clean: failed to delete file:', p, err);
        })));
      }
    }

    // 2. Delete extensionSettings keys
    delete ctx.extensionSettings[MODULE_NAME];
    delete ctx.extensionSettings[`${MODULE_NAME}-playlist`];
    ctx.saveSettingsDebounced();

    // 3. Clean chatMetadata keys for the current chat
    const meta = ctx.chatMetadata;
    if (meta && typeof meta === 'object') {
      delete meta[BGM_HISTORY_KEY];
      delete meta['stmp_cursor']; // legacy scan cursor (removed in 0.1.0)
      await ctx.saveMetadata();
    }
    if (typeof toastr !== 'undefined') toastr.success('Data cleaned', '晓乐');
  } catch (err) {
    logger.error('Clean: failed to delete settings:', err);
  }
}
