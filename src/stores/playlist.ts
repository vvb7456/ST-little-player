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
import { CURSOR_KEY } from '@/storage';
import { createDefaultProviders } from '@/provider';
import { useSettingsStore } from './settings';
import { usePlayerStore } from './player';
import { t } from '@/i18n';
import { uploadFile, deleteFile } from '@/storage/STFileClient';

function genId(): string {
  return `stmp-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

export type PlaylistTab = 'network' | 'server' | 'chat';

interface PlaylistPersistData {
  network: PlaylistItem[];
  server: PlaylistItem[];
}

export const usePlaylistStore = defineStore('playlist', {
  state: () => ({
    networkList: [] as PlaylistItem[],
    serverList: [] as PlaylistItem[],
    chatList: [] as PlaylistItem[],
    activeTab: 'network' as PlaylistTab,
    currentList: 'network' as PlaylistTab,
    currentIndex: -1,
    chatIndexer: null as ChatIndexer | null,
    chatId: null as string | null,
  }),

  getters: {
    current(state): PlaylistItem | null {
      const list = state[`${state.currentList}List` as 'networkList' | 'serverList' | 'chatList'];
      return state.currentIndex >= 0 ? list[state.currentIndex] ?? null : null;
    },
    isEmpty(state): boolean {
      return state.networkList.length === 0 && state.serverList.length === 0 && state.chatList.length === 0;
    },
    playMode(): PlayMode {
      return useSettingsStore().settings.playMode;
    },
    activeList(state): PlaylistItem[] {
      return state[`${state.activeTab}List` as 'networkList' | 'serverList' | 'chatList'];
    },
    playingList(state): PlaylistItem[] {
      return state[`${state.currentList}List` as 'networkList' | 'serverList' | 'chatList'];
    },
  },

  actions: {
    init(indexer: ChatIndexer): void {
      this.chatIndexer = indexer;
      this.loadFromStorage();
    },

    setChatId(chatId: string): void {
      this.chatId = chatId;
      this.chatList = [];
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
      if (!storage) return;
      const stored = storage.getPlaylistData<PlaylistPersistData>();
      if (stored) {
        this.networkList = Array.isArray(stored.network) ? stored.network : [];
        this.serverList = Array.isArray(stored.server) ? stored.server : [];
      }
    },

    savePlaylistData(): void {
      const settingsStore = useSettingsStore();
      const storage = settingsStore.storage;
      if (!storage) return;
      const data: PlaylistPersistData = {
        network: this.networkList,
        server: this.serverList,
      };
      storage.setPlaylistData(data);
    },

    getListByTab(tab: PlaylistTab): PlaylistItem[] {
      return this[`${tab}List` as 'networkList' | 'serverList' | 'chatList'];
    },

    addItem(item: PlaylistItem): void {
      if (item.source === 'network') {
        this.networkList.push(item);
        this.savePlaylistData();
      } else if (item.source === 'server') {
        this.serverList.push(item);
        this.savePlaylistData();
      } else if (item.source === 'chat') {
        this.chatList.push(item);
      }
    },

    removeItem(tab: PlaylistTab, index: number): void {
      const list = this.getListByTab(tab);
      if (index < 0 || index >= list.length) return;
      const removed = list.splice(index, 1)[0];
      if (tab === 'network' || tab === 'server') {
        this.savePlaylistData();
      }
      if (tab === 'server' && removed?.serverPath) {
        void deleteFile(removed.serverPath);
      }
      if (tab === this.currentList && index === this.currentIndex) {
        this.currentIndex = -1;
      } else if (tab === this.currentList && index < this.currentIndex) {
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
      this.chatList.push(item);
    },

    addFromSearch(result: SearchResult, autoplay: boolean = true): boolean {
      // Dedup by providerTrackId
      const existingIdx = this.networkList.findIndex(
        (item) => item.providerId === result.provider && item.providerTrackId === result.id,
      );
      this.activeTab = 'network';
      if (existingIdx >= 0) {
        if (autoplay) {
          this.currentList = 'network';
          this.play('network', existingIdx);
        }
        return false;
      }
      const item: PlaylistItem = {
        id: genId(),
        song: result.name,
        artist: result.artist,
        source: 'network',
        providerId: result.provider,
        providerTrackId: result.id,
        providerPicId: result.picId,
        addedAt: Date.now(),
      };
      this.networkList.push(item);
      this.savePlaylistData();
      if (autoplay) {
        this.currentList = 'network';
        this.play('network', this.networkList.length - 1);
      }
      return true;
    },

    async addServerFile(name: string, file: File): Promise<void> {
      const serverPath = await uploadFile(file);
      const item: PlaylistItem = {
        id: genId(),
        song: name,
        source: 'server',
        serverPath,
        addedAt: Date.now(),
      };
      this.serverList.push(item);
      this.savePlaylistData();
    },

    play(tab: PlaylistTab, index: number): void {
      const list = this.getListByTab(tab);
      if (index < 0 || index >= list.length) return;
      this.currentList = tab;
      this.activeTab = tab;
      this.currentIndex = index;
      void this.resolveAndPlay(tab, index);
    },

    next(): void {
      const list = this.playingList;
      if (list.length === 0) return;
      const mode = this.playMode;
      let newIndex = this.currentIndex;
      if (mode === 'single') {
        newIndex = this.currentIndex;
      } else if (mode === 'random') {
        if (list.length === 1) {
          newIndex = 0;
        } else {
          for (let attempt = 0; attempt < 5; attempt++) {
            const candidate = Math.floor(Math.random() * list.length);
            if (candidate !== this.currentIndex) {
              newIndex = candidate;
              break;
            }
          }
          if (newIndex === this.currentIndex) {
            newIndex = (this.currentIndex + 1) % list.length;
          }
        }
      } else {
        newIndex = this.currentIndex + 1;
        if (newIndex >= list.length) newIndex = 0;
      }
      this.currentIndex = newIndex;
      void this.resolveAndPlay(this.currentList, newIndex);
    },

    prev(): void {
      const list = this.playingList;
      if (list.length === 0) return;
      let newIndex = this.currentIndex - 1;
      if (newIndex < 0) newIndex = list.length - 1;
      this.currentIndex = newIndex;
      void this.resolveAndPlay(this.currentList, newIndex);
    },

    async resolveAndPlay(tab: PlaylistTab, index: number): Promise<void> {
      const list = this.getListByTab(tab);
      const item = list[index];
      if (!item) return;

      let resolved: ResolvedTrack | null = null;
      const mgr = createDefaultProviders(useSettingsStore().settings.providers);

      // Server file: use stored path as URL
      if (item.source === 'server' && item.serverPath) {
        resolved = {
          url: item.serverPath,
          name: item.song,
          artist: item.artist ?? '',
          source: 'server',
        };
      }

      // Network/chat: search + resolve
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
      let latestItem: PlaylistItem | null = null;
      for (const batch of cues) {
        for (const cue of batch.cues) {
          console.log('[晓乐] cue found:', cue.song, cue.artist ?? '', 'from message', batch.messageId);
          const item: PlaylistItem = {
            id: genId(),
            song: cue.song,
            artist: cue.artist,
            source: 'chat',
            messageId: batch.messageId,
            addedAt: Date.now(),
          };
          this.chatList.push(item);
          latestItem = item;
        }
      }
      if (latestItem) {
        const idx = this.chatList.indexOf(latestItem);
        if (idx >= 0) {
          this.currentList = 'chat';
          this.activeTab = 'chat';
          this.play('chat', idx);
        }
      }
    },

    handleMessageUpdate(messageId: number): void {
      if (!this.chatIndexer || !this.chatId) return;
      const result = this.chatIndexer.scanMessage(
        this.chatId,
        messageId,
      );
      const indices = this.chatList
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
          this.chatList.splice(idx, 1);
        }
        if (this.currentList === 'chat') {
          for (const idx of [...indices].reverse()) {
            if (idx === this.currentIndex) this.currentIndex = -1;
            else if (idx < this.currentIndex) this.currentIndex--;
          }
        }
        return;
      }

      const firstIdx = indices[0];
      const item = this.chatList[firstIdx];
      item.song = result.cue.song;
      item.artist = result.cue.artist;
      for (const idx of [...indices].reverse()) {
        if (idx !== firstIdx) this.chatList.splice(idx, 1);
      }
      if (this.currentList === 'chat') {
        const removedBefore = indices.filter((idx) => idx !== firstIdx && idx < this.currentIndex).length;
        this.currentIndex -= removedBefore;
        if (this.currentIndex < 0) this.currentIndex = -1;
      }
    },

    handleMessageDelete(messageId: number): void {
      const indices = this.chatList
        .map((item, i) => (item.messageId === messageId ? i : -1))
        .filter((i) => i >= 0);
      for (const idx of [...indices].reverse()) {
        this.chatList.splice(idx, 1);
      }
      if (this.currentList === 'chat') {
        for (const idx of [...indices].reverse()) {
          if (idx === this.currentIndex) this.currentIndex = -1;
          else if (idx < this.currentIndex) this.currentIndex--;
        }
      }
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

    setActiveTab(tab: PlaylistTab): void {
      this.activeTab = tab;
    },
  },
});
