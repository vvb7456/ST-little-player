<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { usePlaylistStore, useSettingsStore } from '@/stores/index';
import type { PlaylistItem } from '@/types';
import type { PlaylistTab } from '@/stores/playlist';
import Icon from './Icon.vue';
import { t } from '@/i18n';

const playlistStore = usePlaylistStore();
const settingsStore = useSettingsStore();

const tabs = computed((): { value: PlaylistTab; label: string }[] => {
  const result: { value: PlaylistTab; label: string }[] = [
    { value: 'network', label: t('Network') },
  ];
  const localEnabled = settingsStore.settings.providers.find((p) => p.id === 'local')?.enabled;
  if (localEnabled) {
    result.push({ value: 'server', label: t('Upload') });
  }
  result.push({ value: 'chat', label: t('Chat') });
  return result;
});

// If active tab disappears, fall back to network
watch(tabs, (newTabs) => {
  if (!newTabs.some((tab) => tab.value === playlistStore.activeTab)) {
    playlistStore.setActiveTab('network');
  }
});

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
    if (typeof toastr !== 'undefined') toastr.success(t('Added'));
  } catch (err) {
    console.error('[stmp] upload failed', err);
    if (typeof toastr !== 'undefined') toastr.error(t('Cannot play') + ': ' + file.name);
  } finally {
    uploading.value = false;
  }
  input.value = '';
};

const tabItems = computed((): { index: number; item: PlaylistItem }[] => {
  const list = playlistStore.getListByTab(playlistStore.activeTab);
  return list.map((item, index) => ({ index, item }));
});

const isEmpty = computed(() => tabItems.value.length === 0);

function play(index: number): void {
  playlistStore.play(playlistStore.activeTab, index);
}

function remove(index: number): void {
  playlistStore.removeItem(playlistStore.activeTab, index);
}

function onTabClick(tab: PlaylistTab): void {
  playlistStore.setActiveTab(tab);
}
</script>

<template>
  <div class="stmp-playlist">
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

    <!-- Upload button (only in server tab) -->
    <div v-if="playlistStore.activeTab === 'server'" class="stmp-upload-area">
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

    <!-- Song list -->
    <div v-if="isEmpty" class="stmp-empty">{{ t('No Songs') }}</div>
    <template v-else>
      <div
        v-for="entry in tabItems"
        :key="entry.item.id"
        class="stmp-item"
        :class="{ active: playlistStore.activeTab === playlistStore.currentList && entry.index === playlistStore.currentIndex }"
        @click="play(entry.index)"
      >
        <span class="stmp-item-index">{{ entry.index + 1 }}</span>
        <div class="stmp-item-info">
          <span class="stmp-item-song">{{ entry.item.song }}</span>
          <span v-if="entry.item.artist" class="stmp-item-artist">{{ entry.item.artist }}</span>
        </div>
        <button class="stmp-item-del" @click.stop="remove(entry.index)">
          <Icon name="x" :size="14" />
        </button>
      </div>
    </template>
  </div>
</template>

<style scoped>
.stmp-playlist {
  display: flex;
  flex-direction: column;
  gap: 4px;
  overflow-y: auto;
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

/* ===== Song items ===== */
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
</style>
