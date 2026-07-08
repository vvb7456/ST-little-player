import { createApp } from 'vue';
import type { App } from 'vue';
import { createPinia, type Pinia } from 'pinia';
import AppVue from './App.vue';
import SettingsView from './components/SettingsView.vue';
import { useSettingsStore, usePlayerStore, usePlaylistStore } from './stores';
import { createSTStorageAdapter } from './storage/STStorageAdapter';
import { createSTEventBridge } from './tavern/STEventBridge';
import { ChatIndexer } from './tavern/ChatIndexer';
import type { STEventBridge } from './tavern/STEventBridge';
import { BgmController } from './ai/BgmController';
import { registerMacros, unregisterMacros } from './tavern/Macros';
import { registerSlashCommands, unregisterSlashCommands } from './tavern/SlashCommands';
import { MODULE_NAME, CURSOR_KEY, BGM_HISTORY_KEY } from '@/storage';
import { deleteFile } from '@/storage/STFileClient';

let app: App<Element> | null = null;
let eventBridge: STEventBridge | null = null;
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
  if (!$container || !$container.length) return;
  $container.append(SETTINGS_HTML);
  settingsEntry = $container.children('.inline-drawer').last()[0] ?? null;
  if (!settingsEntry) return;

  // Mount SettingsView into the settings panel, sharing the same Pinia instance
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

function setupEventBridge(
  indexer: ChatIndexer,
  playlistStore: ReturnType<typeof usePlaylistStore>,
): void {
  eventBridge = createSTEventBridge();

  eventBridge.on('chat-changed', () => {
    const ctx = SillyTavern.getContext();
    const chatId = ctx.chatId ?? String(Date.now());
    playlistStore.setChatId(chatId);
    if (playlistStore.getCursor() < 0 && ctx.chat.length > 0) {
      const cues = indexer.scanIncremental(
        chatId,
        0,
        ctx.chat.length - 1,
      );
      console.log('[晓乐] chat-changed: scanned', ctx.chat.length, 'messages, found', cues.length, 'cues');
      playlistStore.handleNewCues(cues);
      playlistStore.setCursor(ctx.chat.length - 1);
    }
  });

  eventBridge.on('message-generated', (payload) => {
    const ctx = SillyTavern.getContext();
    const chatId = playlistStore.chatId ?? ctx.chatId ?? '';
    if (!chatId || payload.messageId === undefined) return;
    const fromId = playlistStore.getCursor() + 1;
    const toId = payload.messageId;
    if (toId < fromId) return;
    const cues = indexer.scanIncremental(
      chatId,
      fromId,
      toId,
    );
    console.log('[晓乐] message-generated: scanned', fromId, '-', toId, 'found', cues.length, 'cues');
    playlistStore.handleNewCues(cues);
    playlistStore.setCursor(toId);
  });

  eventBridge.on('message-updated', (payload) => {
    if (payload.messageId !== undefined) {
      playlistStore.handleMessageUpdate(payload.messageId);
    }
  });

  eventBridge.on('message-deleted', (payload) => {
    if (payload.messageId !== undefined) {
      playlistStore.handleMessageDelete(payload.messageId);
    }
  });

  eventBridge.on('message-swiped', (payload) => {
    if (payload.messageId !== undefined) {
      playlistStore.handleMessageUpdate(payload.messageId);
    }
  });

  eventBridge.start();
}

function scanCurrentChat(
  indexer: ChatIndexer,
  playlistStore: ReturnType<typeof usePlaylistStore>,
): void {
  const ctx = SillyTavern.getContext();
  if (ctx.chatId && ctx.chat.length > 0) {
    playlistStore.setChatId(ctx.chatId);
    if (playlistStore.getCursor() < 0) {
      const cues = indexer.scanIncremental(
        ctx.chatId,
        0,
        ctx.chat.length - 1,
      );
      playlistStore.handleNewCues(cues);
      playlistStore.setCursor(ctx.chat.length - 1);
    }
  }
}

export async function init(): Promise<void> {
  try {
    const container = document.createElement('div');
    container.id = 'st-little-player-root';
    // Attach to <body> so the widget participates in ST's stacking context
    // (a child of <html> would always paint above <body> regardless of z-index).
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

    const indexer = new ChatIndexer((index: number): string | undefined => {
      const ctx = SillyTavern.getContext();
      return ctx.chat[index]?.mes;
    });

    const playlistStore = usePlaylistStore();
    playlistStore.init(indexer);

    addSettingsEntry();

    const ctx = SillyTavern.getContext();
    appReadyHandler = () => {
      setupEventBridge(indexer, playlistStore);
      scanCurrentChat(indexer, playlistStore);
      registerMacros();
      registerSlashCommands();
      bgmController = new BgmController();
      bgmController.init();
    };
    ctx.eventSource.on(ctx.event_types.APP_READY, appReadyHandler);

    console.log('[晓乐] 播放器加载完成');
  } catch (err) {
    console.error('[晓乐] init failed:', err);
  }
}

export function destroy(): void {
  if (appReadyHandler) {
    try {
      const ctx = SillyTavern.getContext();
      ctx.eventSource.removeListener(ctx.event_types.APP_READY, appReadyHandler);
    } catch {
    }
    appReadyHandler = null;
  }

  eventBridge?.stop();
  eventBridge = null;

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
          console.warn('[晓乐] clean: failed to delete file:', p, err);
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
      delete meta[CURSOR_KEY];
      delete meta[BGM_HISTORY_KEY];
      await ctx.saveMetadata();
    }
  } catch (err) {
    console.error('[晓乐] clean: failed to delete settings:', err);
  }
}
