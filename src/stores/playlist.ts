import { defineStore } from 'pinia';
import type {
  Playlist,
  PlaylistItem,
  PlaylistSourceType,
  PlayMode,
  PlayQueue,
  ResolvedTrack,
  SearchResult,
} from '@/types';
import { createDefaultProviders } from '@/provider';
import { getNeteaseWorkerURL } from '@/provider';
import { NetEaseProvider } from '@/provider/NetEaseProvider';
import { useSettingsStore } from './settings';
import { usePlayerStore } from './player';
import { t } from '@/i18n';
import { uploadFile, deleteFile } from '@/storage/STFileClient';
import { logger } from '@/utils/logger';

function genId(): string {
  return `stmp-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

// 固定歌单 id 常量
const LOCAL_PLAYLIST_ID = '__local__';
const UPLOAD_PLAYLIST_ID = '__upload__';
const AI_PLAYLIST_ID = '__ai__';

export type OverlayTab = 'queue' | 'playlists';

interface PlaylistPersistData {
  playlists: Playlist[];
  queue: PlayQueue;
  version: number;
}

// 旧存储结构（用于迁移检测）
interface LegacyPersistData {
  network?: PlaylistItem[];
  server?: PlaylistItem[];
}

function isLegacyData(raw: unknown): raw is LegacyPersistData {
  if (!raw || typeof raw !== 'object') return false;
  const obj = raw as Record<string, unknown>;
  return ('network' in obj || 'server' in obj) && !('playlists' in obj);
}

function migrateLegacy(legacy: LegacyPersistData): PlaylistPersistData {
  const now = Date.now();
  const playlists: Playlist[] = [];

  const networkItems = Array.isArray(legacy.network) ? legacy.network : [];
  if (networkItems.length > 0) {
    playlists.push({
      id: LOCAL_PLAYLIST_ID,
      name: t('Network Collection'),
      source: 'local',
      songs: networkItems,
      updatedAt: now,
    });
  }

  const serverItems = Array.isArray(legacy.server) ? legacy.server : [];
  if (serverItems.length > 0) {
    playlists.push({
      id: UPLOAD_PLAYLIST_ID,
      name: t('Upload'),
      source: 'upload',
      songs: serverItems,
      updatedAt: now,
    });
  }

  return {
    playlists,
    queue: { items: [], currentIndex: -1 },
    version: 2,
  };
}

function ensureFixedPlaylists(playlists: Playlist[]): Playlist[] {
  const result = [...playlists];
  const now = Date.now();

  // Fix names of fixed playlists (in case they were stored as i18n keys)
  const fixedNames: Record<string, string> = {
    [LOCAL_PLAYLIST_ID]: t('Network Collection'),
    [UPLOAD_PLAYLIST_ID]: t('Upload'),
    [AI_PLAYLIST_ID]: t('AI Picks'),
  };
  for (const pl of result) {
    if (pl.id in fixedNames) {
      pl.name = fixedNames[pl.id];
    }
  }

  const hasLocal = result.some((p) => p.id === LOCAL_PLAYLIST_ID);
  const hasUpload = result.some((p) => p.id === UPLOAD_PLAYLIST_ID);
  const hasAi = result.some((p) => p.id === AI_PLAYLIST_ID);

  // Ensure local playlist exists and is first
  if (!hasLocal) {
    result.unshift({
      id: LOCAL_PLAYLIST_ID,
      name: t('Network Collection'),
      source: 'local',
      songs: [],
      updatedAt: now,
    });
  }

  // Ensure upload playlist exists, right after local
  if (!hasUpload) {
    const localIdx = result.findIndex((p) => p.id === LOCAL_PLAYLIST_ID);
    result.splice(localIdx + 1, 0, {
      id: UPLOAD_PLAYLIST_ID,
      name: t('Upload'),
      source: 'upload',
      songs: [],
      updatedAt: now,
    });
  }

  // Ensure AI playlist exists, right after upload
  if (!hasAi) {
    const uploadIdx = result.findIndex((p) => p.id === UPLOAD_PLAYLIST_ID);
    result.splice(uploadIdx + 1, 0, {
      id: AI_PLAYLIST_ID,
      name: t('AI Picks'),
      source: 'ai',
      songs: [],
      updatedAt: now,
    });
  }

  return result;
}

export const usePlaylistStore = defineStore('playlist', {
  state: () => ({
    playlists: [] as Playlist[],
    queue: { items: [], currentIndex: -1 } as PlayQueue,
    activeTab: 'queue' as OverlayTab,
    selectedPlaylistId: null as string | null,
    neteasePlaylistsLoading: false,
    syncingPlaylistIds: [] as string[],
  }),

  getters: {
    current(state): PlaylistItem | null {
      const idx = state.queue.currentIndex;
      return idx >= 0 && idx < state.queue.items.length ? state.queue.items[idx] ?? null : null;
    },
    isEmpty(state): boolean {
      return state.queue.items.length === 0 && state.playlists.every((p) => p.songs.length === 0);
    },
    playMode(): PlayMode {
      return useSettingsStore().settings.playMode;
    },
    selectedPlaylist(state): Playlist | null {
      if (!state.selectedPlaylistId) return null;
      return state.playlists.find((p) => p.id === state.selectedPlaylistId) ?? null;
    },
    localPlaylists(state): Playlist[] {
      return state.playlists.filter((p) => p.source === 'local' || p.source === 'upload' || p.source === 'ai');
    },
    neteasePlaylists(state): Playlist[] {
      const list = state.playlists.filter((p) => p.source === 'netease');
      list.sort((a, b) => {
        if (a.neteaseSpecialType === 5 && b.neteaseSpecialType !== 5) return -1;
        if (a.neteaseSpecialType !== 5 && b.neteaseSpecialType === 5) return 1;
        return 0;
      });
      return list;
    },
    queueSourceName(state): string | null {
      const srcId = state.queue.sourcePlaylistId;
      if (!srcId) return null;
      const pl = state.playlists.find((p) => p.id === srcId);
      return pl?.name ?? null;
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
      const stored = storage.getPlaylistData<PlaylistPersistData | LegacyPersistData>();
      if (stored) {
        if (isLegacyData(stored)) {
          const migrated = migrateLegacy(stored);
          this.playlists = ensureFixedPlaylists(migrated.playlists);
          this.queue = migrated.queue;
          this.savePlaylistData();
          logger.info('Playlist data migrated from legacy format');
        } else if ((stored as PlaylistPersistData).version === 2) {
          const data = stored as PlaylistPersistData;
          this.playlists = ensureFixedPlaylists(data.playlists ?? []);
          this.queue = data.queue ?? { items: [], currentIndex: -1 };
        } else {
          this.playlists = ensureFixedPlaylists([]);
          this.queue = { items: [], currentIndex: -1 };
        }
      } else {
        this.playlists = ensureFixedPlaylists([]);
        this.queue = { items: [], currentIndex: -1 };
      }
    },

    savePlaylistData(): void {
      const settingsStore = useSettingsStore();
      const storage = settingsStore.storage;
      if (!storage) return;
      const data: PlaylistPersistData = {
        playlists: this.playlists,
        queue: this.queue,
        version: 2,
      };
      storage.setPlaylistData(data);
    },

    // ===== 歌单管理 =====

    getPlaylist(id: string): Playlist | undefined {
      return this.playlists.find((p) => p.id === id);
    },

    addToPlaylist(playlistId: string, item: PlaylistItem): boolean {
      const pl = this.getPlaylist(playlistId);
      if (!pl) return false;
      const exists = pl.songs.some(
        (s) => s.providerId === item.providerId && s.providerTrackId === item.providerTrackId,
      );
      if (exists) return false;
      pl.songs.push(item);
      pl.updatedAt = Date.now();
      this.savePlaylistData();
      return true;
    },

    removeFromPlaylist(playlistId: string, songId: string): void {
      const pl = this.getPlaylist(playlistId);
      if (!pl) return;
      pl.songs = pl.songs.filter((s) => s.id !== songId);
      pl.updatedAt = Date.now();
      this.savePlaylistData();
    },

    deletePlaylist(id: string): void {
      const pl = this.getPlaylist(id);
      if (!pl) return;
      if (id === LOCAL_PLAYLIST_ID || id === UPLOAD_PLAYLIST_ID || id === AI_PLAYLIST_ID) return;
      if (pl.source === 'upload') {
        const paths = pl.songs.map((s) => s.serverPath).filter((p): p is string => !!p);
        void Promise.all(paths.map((p) => deleteFile(p).catch(() => {})));
      }
      this.playlists = this.playlists.filter((p) => p.id !== id);
      if (this.queue.sourcePlaylistId === id) {
        this.queue.sourcePlaylistId = undefined;
      }
      this.savePlaylistData();
    },

    // ===== 队列管理 =====

    playPlaylist(playlistId: string, startIndex: number = 0): void {
      const pl = this.getPlaylist(playlistId);
      if (!pl || pl.songs.length === 0) return;
      this.queue = {
        items: pl.songs.slice(),
        currentIndex: Math.max(0, Math.min(startIndex, pl.songs.length - 1)),
        sourcePlaylistId: playlistId,
      };
      this.activeTab = 'queue';
      this.savePlaylistData();
      void this.resolveAndPlay(this.queue.currentIndex);
    },

    playFromHere(playlistId: string, songIndex: number): void {
      this.playPlaylist(playlistId, songIndex);
    },

    playQueueIndex(index: number): void {
      if (index < 0 || index >= this.queue.items.length) return;
      this.queue.currentIndex = index;
      this.savePlaylistData();
      void this.resolveAndPlay(index);
    },

    removeFromQueue(index: number): void {
      if (index < 0 || index >= this.queue.items.length) return;
      this.queue.items.splice(index, 1);
      if (this.queue.currentIndex === index) {
        this.queue.currentIndex = -1;
      } else if (index < this.queue.currentIndex) {
        this.queue.currentIndex--;
      }
      this.savePlaylistData();
    },

    clearQueue(): void {
      this.queue = { items: [], currentIndex: -1 };
      this.savePlaylistData();
    },

    // ===== 播放控制 =====

    peekNextIndex(): number {
      const list = this.queue.items;
      if (list.length === 0) return -1;
      const mode = this.playMode;
      const cur = this.queue.currentIndex;
      if (mode === 'single') return cur;
      if (mode === 'random') {
        if (list.length === 1) return 0;
        for (let attempt = 0; attempt < 5; attempt++) {
          const candidate = Math.floor(Math.random() * list.length);
          if (candidate !== cur) return candidate;
        }
        return (cur + 1) % list.length;
      }
      let next = cur + 1;
      if (next >= list.length) next = 0;
      return next;
    },

    next(): void {
      const list = this.queue.items;
      if (list.length === 0) return;
      const mode = this.playMode;
      let newIndex = this.queue.currentIndex;
      if (mode === 'single') {
        newIndex = this.queue.currentIndex;
      } else if (mode === 'random') {
        if (list.length === 1) {
          newIndex = 0;
        } else {
          for (let attempt = 0; attempt < 5; attempt++) {
            const candidate = Math.floor(Math.random() * list.length);
            if (candidate !== this.queue.currentIndex) {
              newIndex = candidate;
              break;
            }
          }
          if (newIndex === this.queue.currentIndex) {
            newIndex = (this.queue.currentIndex + 1) % list.length;
          }
        }
      } else {
        newIndex = this.queue.currentIndex + 1;
        if (newIndex >= list.length) newIndex = 0;
      }
      this.queue.currentIndex = newIndex;
      this.savePlaylistData();
      void this.resolveAndPlay(newIndex);
    },

    prev(): void {
      const list = this.queue.items;
      if (list.length === 0) return;
      let newIndex = this.queue.currentIndex - 1;
      if (newIndex < 0) newIndex = list.length - 1;
      this.queue.currentIndex = newIndex;
      this.savePlaylistData();
      void this.resolveAndPlay(newIndex);
    },

    async resolveTrack(index: number): Promise<ResolvedTrack | null> {
      const item = this.queue.items[index];
      if (!item) return null;

      if (item.source === 'server' && item.serverPath) {
        return { url: item.serverPath, name: item.song, artist: item.artist ?? '', source: 'server' };
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

    async resolveAndPlay(index: number): Promise<void> {
      const item = this.queue.items[index];
      if (!item) return;

      let resolved: ResolvedTrack | null = null;

      if (item.source === 'server' && item.serverPath) {
        resolved = { url: item.serverPath, name: item.song, artist: item.artist ?? '', source: 'server' };
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

    // ===== 搜索结果 =====

    addFromSearch(result: SearchResult, autoplay: boolean = true): void {
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
      this.addToPlaylist(LOCAL_PLAYLIST_ID, item);

      if (autoplay) {
        this.queue = {
          items: [item],
          currentIndex: 0,
          sourcePlaylistId: LOCAL_PLAYLIST_ID,
        };
        this.activeTab = 'queue';
        this.savePlaylistData();
        void this.resolveAndPlay(0);
      }
    },

    // ===== AI 选曲 =====

    addFromAi(result: SearchResult, autoplay: boolean = true): void {
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
      this.addToPlaylist(AI_PLAYLIST_ID, item);

      if (autoplay) {
        const insertIdx = this.queue.currentIndex + 1;
        this.queue.items.splice(insertIdx, 0, item);
        this.queue.currentIndex = insertIdx;
        this.savePlaylistData();
        void this.resolveAndPlay(insertIdx);
      }
    },

    // ===== 上传 =====

    async addServerFile(name: string, file: File): Promise<void> {
      const serverPath = await uploadFile(file);
      const item: PlaylistItem = {
        id: genId(),
        song: name,
        source: 'server',
        serverPath,
        addedAt: Date.now(),
      };
      this.addToPlaylist(UPLOAD_PLAYLIST_ID, item);
      this.queue = {
        items: [item],
        currentIndex: 0,
        sourcePlaylistId: UPLOAD_PLAYLIST_ID,
      };
      this.savePlaylistData();
      void this.resolveAndPlay(0);
    },

    // ===== 网易云歌单同步 =====

    async syncNeteasePlaylists(): Promise<void> {
      if (this.neteasePlaylistsLoading) return;
      const settingsStore = useSettingsStore();
      const workerURL = getNeteaseWorkerURL(settingsStore.settings);
      const cookie = settingsStore.settings.neteaseCookie;
      if (!workerURL || !cookie) {
        logger.warn('Cannot sync netease playlists: worker or cookie missing');
        return;
      }
      this.neteasePlaylistsLoading = true;
      try {
        const provider = new NetEaseProvider({ workerURL, cookie });
        const list = await provider.fetchPlaylists();
        if (!list) return;
        const now = Date.now();
        const existingMap = new Map(this.playlists.filter((p) => p.source === 'netease').map((p) => [p.neteaseId, p]));
        const newNetease: Playlist[] = list.map((p) => {
          const existing = existingMap.get(p.id);
          return {
            id: existing?.id ?? genId(),
            name: p.name,
            source: 'netease' as PlaylistSourceType,
            neteaseId: p.id,
            neteaseSpecialType: p.specialType,
            cover: p.cover,
            songs: existing?.songs ?? [],
            updatedAt: existing?.updatedAt ?? now,
            syncedAt: existing?.syncedAt,
          };
        });
        this.playlists = [
          ...this.playlists.filter((p) => p.source !== 'netease'),
          ...newNetease,
        ];
        if (
          this.queue.sourcePlaylistId &&
          !this.playlists.some((p) => p.id === this.queue.sourcePlaylistId)
        ) {
          this.queue.sourcePlaylistId = undefined;
        }
        this.savePlaylistData();

        // Refresh songs for every playlist (limited concurrency)
        if (newNetease.length > 0) {
          const CONCURRENCY = 3;
          for (let i = 0; i < newNetease.length; i += CONCURRENCY) {
            const batch = newNetease.slice(i, i + CONCURRENCY);
            await Promise.all(batch.map((p) => this.syncNeteasePlaylist(p.id, false).catch((err) => {
              logger.warn('Auto-sync playlist failed: ' + p.name, err);
            })));
          }
          this.savePlaylistData();
        }
      } catch (err) {
        logger.error('syncNeteasePlaylists failed:', err);
      } finally {
        this.neteasePlaylistsLoading = false;
      }
    },

    async syncNeteasePlaylist(playlistId: string, persist = true): Promise<boolean> {
      const pl = this.getPlaylist(playlistId);
      if (!pl || pl.source !== 'netease' || !pl.neteaseId) return false;
      if (this.syncingPlaylistIds.includes(playlistId)) return false;
      const settingsStore = useSettingsStore();
      const workerURL = getNeteaseWorkerURL(settingsStore.settings);
      const cookie = settingsStore.settings.neteaseCookie;
      if (!workerURL || !cookie) return false;
      this.syncingPlaylistIds.push(playlistId);
      try {
        const provider = new NetEaseProvider({ workerURL, cookie });
        const detail = await provider.fetchPlaylist(pl.neteaseId);
        if (!detail) return false;
        const target = this.getPlaylist(playlistId);
        if (!target || target.neteaseId !== pl.neteaseId) return false;
        target.songs = detail.songs.map((s) => ({
          id: genId(),
          song: s.name,
          artist: s.artist,
          source: 'network' as const,
          providerId: 'netease',
          providerTrackId: s.id,
          providerPicId: s.picId,
          addedAt: Date.now(),
        }));
        target.cover = detail.cover;
        target.syncedAt = Date.now();
        target.updatedAt = Date.now();
        if (persist) this.savePlaylistData();
        return true;
      } catch (err) {
        logger.error('syncNeteasePlaylist failed:', err);
        return false;
      } finally {
        this.syncingPlaylistIds = this.syncingPlaylistIds.filter((id) => id !== playlistId);
      }
    },

    // ===== Tab / 选择 =====

    setActiveTab(tab: OverlayTab): void {
      this.activeTab = tab;
    },

    selectPlaylist(id: string | null): void {
      this.selectedPlaylistId = id;
    },
  },
});

export { LOCAL_PLAYLIST_ID, UPLOAD_PLAYLIST_ID, AI_PLAYLIST_ID };