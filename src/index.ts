import { createApp } from 'vue';
import type { App } from 'vue';
import { createPinia } from 'pinia';
import AppVue from './App.vue';
import { useSettingsStore, usePlayerStore, usePlaylistStore } from './stores';
import { createSTStorageAdapter } from './storage/STStorageAdapter';
import { createSTEventBridge } from './tavern/STEventBridge';
import { ChatIndexer } from './tavern/ChatIndexer';
import type { STEventBridge } from './tavern/STEventBridge';
import { MODULE_NAME } from '@/storage';

let app: App<Element> | null = null;
let eventBridge: STEventBridge | null = null;
let appReadyHandler: (() => void) | null = null;
let settingsEntry: HTMLElement | null = null;

const SETTINGS_HTML = `
<div class="inline-drawer">
  <div class="inline-drawer-toggle inline-drawer-header">
    <b data-i18n="悬浮音乐播放器">悬浮音乐播放器</b>
    <div class="inline-drawer-icon fa-solid fa-circle-chevron-down down"></div>
  </div>
  <div class="inline-drawer-content stmp-ext-settings-content">
    <p>悬浮音乐播放器已加载。点击播放器浮窗进行操作。</p>
  </div>
</div>
`;

function addSettingsEntry(): void {
  const $container = $('#extensions_settings2');
  if (!$container || !$container.length) return;
  $container.append(SETTINGS_HTML);
  settingsEntry = $container.children('.inline-drawer').last()[0] ?? null;
  if (settingsEntry) {
    const header = settingsEntry.querySelector('.inline-drawer-toggle');
    header?.addEventListener('click', () => {
      window.dispatchEvent(new CustomEvent('stmp:toggle-expand'));
    });
  }
}

function removeSettingsEntry(): void {
  settingsEntry?.remove();
  settingsEntry = null;
}

function setupEventBridge(
  indexer: ChatIndexer,
  playlistStore: ReturnType<typeof usePlaylistStore>,
  settingsStore: ReturnType<typeof useSettingsStore>,
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
        settingsStore.settings.customCueRules,
      );
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
      settingsStore.settings.customCueRules,
    );
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
  settingsStore: ReturnType<typeof useSettingsStore>,
): void {
  const ctx = SillyTavern.getContext();
  if (ctx.chatId && ctx.chat.length > 0) {
    playlistStore.setChatId(ctx.chatId);
    if (playlistStore.getCursor() < 0) {
      const cues = indexer.scanIncremental(
        ctx.chatId,
        0,
        ctx.chat.length - 1,
        settingsStore.settings.customCueRules,
      );
      playlistStore.handleNewCues(cues);
      playlistStore.setCursor(ctx.chat.length - 1);
    }
  }
}

export async function init(): Promise<void> {
  try {
    const container = document.createElement('div');
    container.id = 'st-music-player-root';
    document.body.appendChild(container);

    const pinia = createPinia();
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
    playlistStore.playMode = settingsStore.settings.playMode;

    addSettingsEntry();

    const ctx = SillyTavern.getContext();
    appReadyHandler = () => {
      setupEventBridge(indexer, playlistStore, settingsStore);
      scanCurrentChat(indexer, playlistStore, settingsStore);
    };
    ctx.eventSource.on(ctx.event_types.APP_READY, appReadyHandler);

    console.log('[ST-Music-Player] 播放器加载完成');
  } catch (err) {
    console.error('[ST-Music-Player] init failed:', err);
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

  if (app) {
    try {
      const playerStore = usePlayerStore();
      playerStore.destroy();
    } catch {
    }
    app.unmount();
    app = null;
  }

  const root = document.getElementById('st-music-player-root');
  if (root) root.remove();

  removeSettingsEntry();
}

export function disable(): void {
  destroy();
}

export async function clean(): Promise<void> {
  try {
    const ctx = SillyTavern.getContext();
    delete ctx.extensionSettings[MODULE_NAME];
    ctx.saveSettingsDebounced();
  } catch (err) {
    console.error('[ST-Music-Player] clean: failed to delete settings:', err);
  }

  try {
    const forage = (SillyTavern as any).libs?.localforage;
    if (forage && typeof forage.keys === 'function') {
      const keys: string[] = await forage.keys();
      await Promise.all(
        keys
          .filter((k: string) => k.startsWith(MODULE_NAME) || k.startsWith('stmp:'))
          .map((k: string) => forage.removeItem(k)),
      );
    }
  } catch (err) {
    console.error('[ST-Music-Player] clean: failed to clear localforage:', err);
  }
}

async function deleteExtension(): Promise<void> {
  await clean();
  destroy();
}

export { deleteExtension as delete };
