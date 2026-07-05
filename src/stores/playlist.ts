import { defineStore } from 'pinia';
import type {
  Cue,
  PlaylistItem,
  PlayMode,
  ResolvedTrack,
  ScanCursor,
  SearchResult,
} from '@/types';
import type { ChatIndexer } from '@/tavern/ChatIndexer';
import { CURSOR_KEY, USERLIST_KEY } from '@/storage';
import { createDefaultProviders } from '@/provider';
import { useSettingsStore } from './settings';
import { usePlayerStore } from './player';
import { t } from '@/i18n';

function genId(): string {
  return `stmp-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

export const usePlaylistStore = defineStore('playlist', {
  state: () => ({
    list: [] as PlaylistItem[],
    currentIndex: -1,
    chatIndexer: null as ChatIndexer | null,
    chatId: null as string | null,
  }),

  getters: {
    current(state): PlaylistItem | null {
      return state.currentIndex >= 0 ? state.list[state.currentIndex] ?? null : null;
    },
    isEmpty(state): boolean {
      return state.list.length === 0;
    },
    playMode(): PlayMode {
      return useSettingsStore().settings.playMode;
    },
  },

  actions: {
    init(indexer: ChatIndexer): void {
      this.chatIndexer = indexer;
    },

    setChatId(chatId: string): void {
      this.chatId = chatId;
      this.list = this.list.filter((i) => i.source !== 'chat');
      this.loadFromStorage();
      const settingsStore = useSettingsStore();
      const storage = settingsStore.storage;
      if (storage) {
        const cursor = storage.getMetadata<ScanCursor>(CURSOR_KEY);
        if (cursor && cursor.chatId === chatId) {
          this.chatIndexer?.setCursor(chatId, cursor.lastScannedMessageId);
        }
      }
    },

    loadFromStorage(): void {
      const settingsStore = useSettingsStore();
      const storage = settingsStore.storage;
      if (!storage || !this.chatId) return;
      const stored = storage.getMetadata<PlaylistItem[]>(USERLIST_KEY);
      if (stored && Array.isArray(stored)) {
        const userList = stored.filter((item) => item && item.source === 'user');
        this.list = [...this.list.filter((i) => i.source !== 'user'), ...userList];
      }
    },

    addItem(item: PlaylistItem): void {
      this.list.push(item);
      if (item.source === 'user') {
        this.saveUserList();
      }
    },

    removeItem(index: number): void {
      if (index < 0 || index >= this.list.length) return;
      const removed = this.list.splice(index, 1)[0];
      if (removed && removed.source === 'user') {
        this.saveUserList();
      }
      if (index === this.currentIndex) {
        this.currentIndex = -1;
      } else if (index < this.currentIndex) {
        this.currentIndex--;
      }
    },

    addFromCue(cue: Cue, messageId: number): void {
      const item: PlaylistItem = {
        id: genId(),
        song: cue.song,
        artist: cue.artist,
        source: 'chat',
        messageId,
        addedAt: Date.now(),
      };
      this.list.push(item);
    },

    addFromSearch(result: SearchResult): void {
      const item: PlaylistItem = {
        id: genId(),
        song: result.name,
        artist: result.artist,
        source: 'user',
        providerId: result.provider,
        providerTrackId: result.id,
        providerPicId: result.picId,
        addedAt: Date.now(),
      };
      this.list.push(item);
      this.saveUserList();
    },

    addLocalFile(name: string, blobKey: string): void {
      const item: PlaylistItem = {
        id: genId(),
        song: name,
        source: 'local',
        localBlobKey: blobKey,
        addedAt: Date.now(),
      };
      this.list.push(item);
    },

    play(index: number): void {
      if (index < 0 || index >= this.list.length) return;
      this.currentIndex = index;
      void this.resolveAndPlay(index);
    },

    next(): void {
      if (this.list.length === 0) return;
      const mode = this.playMode;
      let newIndex = this.currentIndex;
      if (mode === 'single') {
        newIndex = this.currentIndex;
      } else if (mode === 'random') {
        if (this.list.length === 1) {
          newIndex = 0;
        } else {
          for (let attempt = 0; attempt < 5; attempt++) {
            const candidate = Math.floor(Math.random() * this.list.length);
            if (candidate !== this.currentIndex) {
              newIndex = candidate;
              break;
            }
          }
          if (newIndex === this.currentIndex) {
            newIndex = (this.currentIndex + 1) % this.list.length;
          }
        }
      } else {
        newIndex = this.currentIndex + 1;
        if (newIndex >= this.list.length) newIndex = 0;
      }
      this.play(newIndex);
    },

    prev(): void {
      if (this.list.length === 0) return;
      let newIndex = this.currentIndex - 1;
      if (newIndex < 0) newIndex = this.list.length - 1;
      this.play(newIndex);
    },

    async resolveAndPlay(index: number): Promise<void> {
      const item = this.list[index];
      if (!item) return;
      const settingsStore = useSettingsStore();
      const storage = settingsStore.storage;
      if (!storage) return;

      let resolved: ResolvedTrack | null = null;
      const mgr = createDefaultProviders(settingsStore.settings.providers);

      // 1. Local file: blob → object URL
      if (item.source === 'local' && item.localBlobKey) {
        const blob = await storage.getBlob(item.localBlobKey);
        if (blob) {
          resolved = {
            url: URL.createObjectURL(blob),
            name: item.song,
            artist: item.artist ?? '',
            source: 'local',
          };
        }
      }

      // 2. Search + resolve + probe (iterates results until playable)
      if (!resolved && item.song) {
        resolved = await mgr.searchAndResolve(item.song, item.artist);
        if (resolved) {
          item.providerId = resolved.source;
        }
      }

      if (!resolved) {
        console.warn(`[playlist] resolve failed for "${item.song}"`);
        if (typeof toastr !== 'undefined') {
          toastr.warning(`${t('Cannot play')}: ${item.song}`);
        }
        return;
      }

      const playerStore = usePlayerStore();
      await playerStore.loadAndPlay(resolved);
    },

    handleNewCues(cues: { messageId: number; cues: Cue[] }[]): void {
      if (cues.length === 0) return;
      const settingsStore = useSettingsStore();
      let latestItem: PlaylistItem | null = null;
      for (const batch of cues) {
        for (const cue of batch.cues) {
          const item: PlaylistItem = {
            id: genId(),
            song: cue.song,
            artist: cue.artist,
            source: 'chat',
            messageId: batch.messageId,
            addedAt: Date.now(),
          };
          this.list.push(item);
          latestItem = item;
        }
      }
      if (settingsStore.settings.autoPlayOnNewCue && latestItem) {
        const idx = this.list.indexOf(latestItem);
        if (idx >= 0) this.play(idx);
      }
    },

    handleMessageUpdate(messageId: number): void {
      if (!this.chatIndexer || !this.chatId) return;
      const settingsStore = useSettingsStore();
      const result = this.chatIndexer.scanMessage(
        this.chatId,
        messageId,
        settingsStore.settings.customCueRules,
      );
      const indices = this.list
        .map((item, i) => (item.messageId === messageId ? i : -1))
        .filter((i) => i >= 0);

      if (indices.length === 0) {
        if (result.cue) {
          this.addFromCue(result.cue, messageId);
        }
        return;
      }

      if (!result.cue) {
        for (const idx of [...indices].reverse()) {
          this.removeItem(idx);
        }
        return;
      }

      const firstIdx = indices[0];
      const item = this.list[firstIdx];
      item.song = result.cue.song;
      item.artist = result.cue.artist;
      for (const idx of [...indices].reverse()) {
        if (idx !== firstIdx) this.removeItem(idx);
      }
    },

    handleMessageDelete(messageId: number): void {
      const indices = this.list
        .map((item, i) => (item.messageId === messageId ? i : -1))
        .filter((i) => i >= 0);
      for (const idx of [...indices].reverse()) {
        this.removeItem(idx);
      }
    },

    saveUserList(): void {
      const settingsStore = useSettingsStore();
      const storage = settingsStore.storage;
      if (!storage || !this.chatId) return;
      const userList = this.list.filter((item) => item.source === 'user');
      storage.setMetadata(USERLIST_KEY, userList);
    },

    getCursor(): number {
      if (!this.chatIndexer || !this.chatId) return -1;
      return this.chatIndexer.getCursor(this.chatId);
    },

    setCursor(msgId: number): void {
      if (!this.chatIndexer || !this.chatId) return;
      this.chatIndexer.setCursor(this.chatId, msgId);
      const settingsStore = useSettingsStore();
      const storage = settingsStore.storage;
      if (storage) {
        storage.setMetadata(CURSOR_KEY, {
          chatId: this.chatId,
          lastScannedMessageId: msgId,
          updatedAt: Date.now(),
        });
      }
    },
  },
});
