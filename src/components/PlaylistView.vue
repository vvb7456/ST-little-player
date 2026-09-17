<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { usePlaylistStore, useSettingsStore } from '@/stores/index';
import type { Playlist, PlaylistItem } from '@/types';
import type { OverlayTab } from '@/stores/playlist';
import Icon from './Icon.vue';
import { t } from '@/i18n';
import { logger } from '@/utils/logger';

const playlistStore = usePlaylistStore();
const settingsStore = useSettingsStore();

const fileInputRef = ref<HTMLInputElement | null>(null);
const uploading = ref(false);

const triggerUpload = (): void => {
  fileInputRef.value?.click();
};

const onFileSelect = async (e: Event): Promise<void> => {
  const input = e.target as HTMLInputElement;
  if (!input.files || !input.files[0]) return;
  const file = input.files[0];
  uploading.value = true;
  try {
    await playlistStore.addServerFile(file.name, file);
    if (typeof toastr !== 'undefined') toastr.success(`${t('Uploaded')}：${file.name}`, '晓乐');
  } catch (err) {
    logger.error('Upload failed:', err);
    if (typeof toastr !== 'undefined') toastr.error(`${t('Upload failed')}：${file.name}`, '晓乐');
  } finally {
    uploading.value = false;
  }
  input.value = '';
};

// ===== Queue tab =====
const queueItems = computed((): { index: number; item: PlaylistItem }[] => {
  return playlistStore.queue.items.map((item, index) => ({ index, item }));
});

const isQueueEmpty = computed(() => playlistStore.queue.items.length === 0);

function playQueueItem(index: number): void {
  playlistStore.playQueueIndex(index);
}

function removeQueueItem(index: number): void {
  playlistStore.removeFromQueue(index);
}

// ===== Playlists tab =====
const localPlaylists = computed(() => playlistStore.localPlaylists);
const neteasePlaylists = computed(() => playlistStore.neteasePlaylists);
const hasNeteaseCookie = computed(() => settingsStore.neteaseStatus === 'ok');

const tabs = computed((): { value: OverlayTab; label: string }[] => [
  { value: 'queue', label: t('Now Playing') },
  { value: 'playlists', label: t('Playlists') },
]);

watch(tabs, (newTabs) => {
  if (!newTabs.some((tab) => tab.value === playlistStore.activeTab)) {
    playlistStore.setActiveTab('queue');
  }
});

let autoSynced = false;
function onTabClick(tab: OverlayTab): void {
  playlistStore.setActiveTab(tab);
  if (tab === 'playlists' && hasNeteaseCookie.value && !autoSynced && neteasePlaylists.value.length === 0) {
    autoSynced = true;
    void playlistStore.syncNeteasePlaylists();
  }
}

async function refreshNeteasePlaylists(): Promise<void> {
  await playlistStore.syncNeteasePlaylists();
}

function isPlaylistSyncing(id: string): boolean {
  return playlistStore.syncingPlaylistIds.includes(id);
}

async function syncPlaylist(playlistId: string): Promise<void> {
  const ok = await playlistStore.syncNeteasePlaylist(playlistId);
  if (typeof toastr === 'undefined') return;
  if (ok) toastr.success(t('Playlist synced'), '晓乐');
  else toastr.warning(t('Sync failed'), '晓乐');
}

function openPlaylistDetail(playlistId: string): void {
  const pl = playlistStore.getPlaylist(playlistId);
  if (!pl) return;
  if (pl.source === 'netease' && !pl.syncedAt) {
    void syncPlaylist(playlistId);
  }
  playlistStore.selectPlaylist(playlistId);
}

function playlistSongCount(pl: Playlist): string {
  if (isPlaylistSyncing(pl.id)) return t('Syncing...');
  if (pl.source === 'netease' && !pl.syncedAt) return t('Not synced');
  return `${pl.songs.length} ${t('songs')}`;
}

function isNeteaseNotSynced(pl: Playlist): boolean {
  return pl.source === 'netease' && !pl.syncedAt;
}
</script>

<template>
  <div class="stmp-playlist">
    <!-- ===== 双 tab ===== -->
    <div class="stmp-main-view">
      <!-- Tabs -->
      <div class="stmp-tabs">
        <div
          v-for="tab in tabs"
          :key="tab.value"
          class="stmp-tab"
          :class="{ active: playlistStore.activeTab === tab.value }"
          @click="onTabClick(tab.value)"
        >
          {{ tab.label }}
        </div>
      </div>

      <!-- ===== Queue tab ===== -->
      <div v-show="playlistStore.activeTab === 'queue'" class="stmp-queue-view">
        <!-- Upload button (only if upload source enabled) -->
        <div v-if="settingsStore.settings.providers.find(p => p.id === 'local')?.enabled" class="stmp-upload-area">
          <input
            type="file"
            accept="audio/*"
            ref="fileInputRef"
            @change="onFileSelect"
            style="display:none"
          />
          <button class="stmp-upload-btn" :disabled="uploading" @click="triggerUpload">
            {{ uploading ? '...' : '+ ' + t('Upload audio file') }}
          </button>
        </div>

        <div v-if="isQueueEmpty" class="stmp-empty">{{ t('No Songs') }}</div>
        <template v-else>
          <div
            v-for="entry in queueItems"
            :key="entry.item.id"
            class="stmp-item"
            :class="{ active: entry.index === playlistStore.queue.currentIndex }"
            @click="playQueueItem(entry.index)"
          >
            <span class="stmp-item-index">{{ entry.index + 1 }}</span>
            <div class="stmp-item-info">
              <span class="stmp-item-song">{{ entry.item.song }}</span>
              <span v-if="entry.item.artist" class="stmp-item-artist">{{ entry.item.artist }}</span>
            </div>
            <button class="stmp-item-del" @click.stop="removeQueueItem(entry.index)">
              <Icon name="x" :size="14" />
            </button>
          </div>
        </template>
      </div>

      <!-- ===== Playlists tab ===== -->
      <div v-show="playlistStore.activeTab === 'playlists'" class="stmp-playlists-view">
        <!-- 本地歌单分类 -->
        <div class="stmp-section-header">
          <span class="stmp-section-title">{{ t('My Playlists') }}</span>
        </div>
        <div
          v-for="pl in localPlaylists"
          :key="pl.id"
          class="stmp-pl-item"
          @click="openPlaylistDetail(pl.id)"
        >
          <div class="stmp-pl-icon">
            <Icon :name="pl.source === 'upload' ? 'upload' : pl.source === 'ai' ? 'sparkles' : 'bookmark'" :size="16" />
          </div>
          <div class="stmp-pl-info">
            <span class="stmp-pl-name">{{ pl.name }}</span>
          </div>
          <span class="stmp-pl-count">{{ playlistSongCount(pl) }}</span>
        </div>

        <!-- 网易云歌单分类 -->
        <div class="stmp-section-header stmp-section-header-netease">
          <span class="stmp-section-title">{{ t('NetEase Playlists') }}</span>
          <button
            v-if="hasNeteaseCookie"
            class="stmp-refresh-btn"
            :class="{ 'stmp-spin': playlistStore.neteasePlaylistsLoading }"
            :disabled="playlistStore.neteasePlaylistsLoading"
            @click="refreshNeteasePlaylists"
          >
            <Icon :name="playlistStore.neteasePlaylistsLoading ? 'loader' : 'refresh-cw'" :size="14" />
          </button>
        </div>

        <div v-if="!hasNeteaseCookie" class="stmp-empty stmp-empty-sm">
          {{ t('Configure in settings') }}
        </div>
        <div v-else-if="neteasePlaylists.length === 0 && !playlistStore.neteasePlaylistsLoading" class="stmp-empty stmp-empty-sm">
          {{ t('No Songs') }}
        </div>
        <template v-else>
          <div
            v-for="pl in neteasePlaylists"
            :key="pl.id"
            class="stmp-pl-item"
            @click="openPlaylistDetail(pl.id)"
          >
            <div class="stmp-pl-icon">
              <Icon :name="pl.neteaseSpecialType === 5 ? 'heart' : 'list'" :size="16" />
            </div>
            <div class="stmp-pl-info">
            <span class="stmp-pl-name">{{ pl.name }}</span>
            </div>
            <span v-if="isNeteaseNotSynced(pl) && !isPlaylistSyncing(pl.id)" class="stmp-pl-sync" @click.stop="syncPlaylist(pl.id)">
              <Icon name="refresh-cw" :size="14" />
            </span>
            <span v-else-if="isPlaylistSyncing(pl.id)" class="stmp-pl-sync stmp-spin">
              <Icon name="loader" :size="14" />
            </span>
            <span v-else class="stmp-pl-count">{{ playlistSongCount(pl) }}</span>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
.stmp-playlist {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  flex: 1;
  min-height: 0;
  position: relative;
}

/* ===== Main view ===== */
.stmp-main-view {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
}

/* ===== Tabs ===== */
.stmp-tabs {
  display: flex;
  gap: 0;
  flex-shrink: 0;
  border-bottom: 1px solid var(--stmp-border);
  margin-bottom: 2px;
}

.stmp-tab {
  flex: 1;
  text-align: center;
  padding: 5px 4px;
  cursor: pointer;
  font-size: calc(var(--mainFontSize, 14px) * 0.82);
  color: var(--stmp-text-dim);
  border-bottom: 2px solid transparent;
  transition: all 0.15s;
  user-select: none;
}

.stmp-tab:hover {
  color: var(--stmp-text);
}

.stmp-tab.active {
  color: var(--stmp-accent);
  border-bottom-color: var(--stmp-accent);
}

/* ===== Queue / Playlists views ===== */
.stmp-queue-view,
.stmp-playlists-view {
  display: flex;
  flex-direction: column;
  gap: 2px;
  overflow-y: auto;
  flex: 1;
  min-height: 0;
}

/* ===== Upload area ===== */
.stmp-upload-area {
  padding: 2px 0 4px;
  flex-shrink: 0;
}

.stmp-upload-btn {
  width: 100%;
  background: none;
  border: 1px dashed color-mix(in srgb, var(--stmp-border) 60%, transparent);
  border-radius: 8px;
  color: var(--stmp-text);
  cursor: pointer;
  padding: 6px;
  font-size: calc(var(--mainFontSize, 14px) * 0.8);
  opacity: 0.7;
  transition: all 0.15s;
}

.stmp-upload-btn:hover {
  background: var(--stmp-hover);
  opacity: 1;
}

.stmp-upload-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

/* ===== Empty state ===== */
.stmp-empty {
  text-align: center;
  padding: 24px 0;
  color: var(--stmp-text-dim);
  opacity: 0.6;
  font-size: calc(var(--mainFontSize, 14px) * 0.9);
}

.stmp-empty-sm {
  padding: 12px 0;
}

/* ===== Song items (queue + detail) ===== */
.stmp-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 8px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.15s;
}

.stmp-item:hover {
  background: var(--stmp-hover);
}

.stmp-item.active {
  background: color-mix(in srgb, var(--stmp-accent) 15%, transparent);
}

.stmp-item-index {
  font-size: calc(var(--mainFontSize, 14px) * 0.75);
  opacity: 0.5;
  min-width: 20px;
  text-align: right;
  color: var(--stmp-text-dim);
}

.stmp-item-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.stmp-item-song {
  font-size: calc(var(--mainFontSize, 14px) * 0.85);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--stmp-text);
}

.stmp-item-artist {
  font-size: calc(var(--mainFontSize, 14px) * 0.72);
  opacity: 0.6;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--stmp-text-dim);
}

.stmp-item-del {
  background: none;
  border: none;
  color: var(--stmp-text-dim);
  opacity: 0.4;
  cursor: pointer;
  font-size: 12px;
  padding: 2px 4px;
  border-radius: 4px;
  flex-shrink: 0;
}

.stmp-item-del:hover {
  opacity: 1;
  background: color-mix(in srgb, var(--fullred, rgba(255, 80, 80, 0.5)) 30%, transparent);
}

/* ===== Playlist list items ===== */
.stmp-section-header {
  display: flex;
  align-items: center;
  padding: 8px 4px 4px;
  flex-shrink: 0;
}

.stmp-section-header-netease {
  justify-content: space-between;
}

.stmp-section-title {
  font-size: calc(var(--mainFontSize, 14px) * 0.72);
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--stmp-accent);
  opacity: 0.8;
}

.stmp-refresh-btn {
  background: none;
  border: none;
  color: var(--stmp-text-dim);
  cursor: pointer;
  padding: 2px 4px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s;
}

.stmp-refresh-btn:hover:not(:disabled) {
  color: var(--stmp-accent);
  background: var(--stmp-hover);
}

.stmp-refresh-btn:disabled {
  opacity: 0.5;
  cursor: wait;
}

.stmp-pl-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 7px 8px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.15s;
}

.stmp-pl-item:hover {
  background: var(--stmp-hover);
}

.stmp-pl-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: var(--stmp-text-dim);
  flex-shrink: 0;
}

.stmp-pl-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.stmp-pl-name {
  font-size: calc(var(--mainFontSize, 14px) * 0.85);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--stmp-text);
}

.stmp-pl-count {
  font-size: calc(var(--mainFontSize, 14px) * 0.72);
  color: var(--stmp-text-dim);
  opacity: 0.6;
  flex-shrink: 0;
}

.stmp-pl-sync {
  color: var(--stmp-accent);
  opacity: 0.7;
  cursor: pointer;
  padding: 2px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.15s;
}

.stmp-pl-sync:hover {
  opacity: 1;
  background: var(--stmp-hover);
}

/* ===== Spin animation ===== */
.stmp-spin {
  animation: stmp-spin 0.8s linear infinite;
}

@keyframes stmp-spin {
  to { transform: rotate(360deg); }
}
</style>