import { createApp } from 'vue';
import type { App } from 'vue';
import { createPinia } from 'pinia';
import AppVue from './App.vue';
import { useSettingsStore, usePlayerStore, usePlaylistStore } from './stores';
import { createSTStorageAdapter } from './storage/STStorageAdapter';
import { createSTEventBridge } from './tavern/STEventBridge';
import { ChatIndexer } from './tavern/ChatIndexer';
import type { STEventBridge } from './tavern/STEventBridge';

let app: App<Element> | null = null;
let eventBridge: STEventBridge | null = null;

export async function init(): Promise<void> {
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

  console.log('[ST-Music-Player] 播放器加载完成');
}

export function destroy(): void {
  eventBridge?.stop();
  const playerStore = usePlayerStore();
  playerStore.destroy();
  if (app) {
    app.unmount();
    app = null;
  }
  const root = document.getElementById('st-music-player-root');
  if (root) root.remove();
}
