import { defineStore } from 'pinia';
import type {
  PlaylistItem,
  PlayMode,
  ResolvedTrack,
  SearchResult,
} from '@/types';
import { createDefaultProviders } from '@/provider';
import { useSettingsStore } from './settings';
import { usePlayerStore } from './player';
import { t } from '@/i18n';
import { uploadFile, deleteFile } from '@/storage/STFileClient';
import { logger } from '@/utils/logger';

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
    init(): void {
      this.loadFromStorage();
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

    addFromSearch(result: SearchResult, autoplay: boolean = true): boolean {
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

    addFromAi(result: SearchResult, autoplay: boolean = true): void {
      const existingIdx = this.chatList.findIndex(
        (item) => item.providerId === result.provider && item.providerTrackId === result.id,
      );
      this.activeTab = 'chat';
      if (existingIdx >= 0) {
        if (autoplay) {
          this.currentList = 'chat';
          this.play('chat', existingIdx);
        }
        return;
      }
      const item: PlaylistItem = {
        id: genId(),
        song: result.name,
        artist: result.artist,
        source: 'chat',
        providerId: result.provider,
        providerTrackId: result.id,
        providerPicId: result.picId,
        addedAt: Date.now(),
      };
      this.chatList.push(item);
      if (autoplay) {
        this.currentList = 'chat';
        this.play('chat', this.chatList.length - 1);
      }
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

    peekNextIndex(): number {
      const list = this.playingList;
      if (list.length === 0) return -1;
      const mode = this.playMode;
      if (mode === 'single') {
        return this.currentIndex;
      } else if (mode === 'random') {
        if (list.length === 1) return 0;
        for (let attempt = 0; attempt < 5; attempt++) {
          const candidate = Math.floor(Math.random() * list.length);
          if (candidate !== this.currentIndex) return candidate;
        }
        return (this.currentIndex + 1) % list.length;
      } else {
        let newIndex = this.currentIndex + 1;
        if (newIndex >= list.length) newIndex = 0;
        return newIndex;
      }
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

    async resolveTrack(tab: PlaylistTab, index: number): Promise<ResolvedTrack | null> {
      const list = this.getListByTab(tab);
      const item = list[index];
      if (!item) return null;

      if (item.source === 'server' && item.serverPath) {
        return {
          url: item.serverPath,
          name: item.song,
          artist: item.artist ?? '',
          source: 'server',
        };
      }

      if (item.providerId && item.providerTrackId) {
        const mgr = createDefaultProviders(useSettingsStore().settings);
        const resolved = await mgr.resolve(item.providerTrackId, item.providerId, item.providerPicId);
        if (resolved) {
          resolved.name = item.song;
          resolved.artist = item.artist ?? '';
        }
        return resolved;
      }

      return null;
    },

    async resolveAndPlay(tab: PlaylistTab, index: number): Promise<void> {
      const list = this.getListByTab(tab);
      const item = list[index];
      if (!item) return;

      let resolved: ResolvedTrack | null = null;

      if (item.source === 'server' && item.serverPath) {
        resolved = {
          url: item.serverPath,
          name: item.song,
          artist: item.artist ?? '',
          source: 'server',
        };
      } else if (item.providerId && item.providerTrackId) {
        const mgr = createDefaultProviders(useSettingsStore().settings);
        resolved = await mgr.resolve(item.providerTrackId, item.providerId, item.providerPicId);
        if (resolved) {
          resolved.name = item.song;
          resolved.artist = item.artist ?? '';
        }
      }

      if (!resolved) {
        const settingsStore = useSettingsStore();
        const status = settingsStore.neteaseStatus;
        let msg: string;
        if (item.source === 'server') {
          msg = `${t('Cannot play')}：${item.song}`;
        } else if (status === 'no-cookie') {
          msg = t('Cookie not configured');
        } else if (status === 'expired') {
          msg = t('Cookie expired');
        } else if (status === 'invalid') {
          msg = t('Cookie invalid');
        } else {
          msg = `${t('Cannot play')}：${item.song}（${t('Delisted')}）`;
        }
        logger.warn('Track unavailable: "' + item.song + '"');
        if (typeof toastr !== 'undefined') {
          toastr.warning(msg, '晓乐');
        }
        return;
      }

      const playerStore = usePlayerStore();
      await playerStore.loadAndPlay(resolved);
    },

    setActiveTab(tab: PlaylistTab): void {
      this.activeTab = tab;
    },
  },
});
