<script setup lang="ts">
import { ref, computed } from 'vue';
import { usePlaylistStore, useSettingsStore } from '@/stores/index';
import type { PlaylistItem } from '@/types';
import Icon from './Icon.vue';
import { t } from '@/i18n';

const playlistStore = usePlaylistStore();
const settingsStore = useSettingsStore();

const localProviderEnabled = computed(() => {
  return settingsStore.settings.providers.find((p) => p.id === 'local')?.enabled ?? false;
});

const fileInputRef = ref<HTMLInputElement | null>(null);

const triggerUpload = (): void => {
  fileInputRef.value?.click();
};

const onFileSelect = async (e: Event): Promise<void> => {
  const input = e.target as HTMLInputElement;
  if (!input.files || !input.files[0]) return;
  const file = input.files[0];
  const blobKey = `stmp:audio:${Date.now()}-${file.name}`;
  const storage = settingsStore.storage;
  if (storage) {
    await storage.setBlob(blobKey, file);
    playlistStore.addLocalFile(file.name, blobKey);
  }
  input.value = '';
};

const groups = computed(() => {
  const map: Record<string, { index: number; item: PlaylistItem }[]> = {
    chat: [],
    user: [],
    local: [],
  };
  playlistStore.list.forEach((item, index) => {
    if (map[item.source]) {
      map[item.source].push({ index, item });
    }
  });
  return map;
});

const groupLabels: Record<string, string> = {
  chat: t('From Chat'),
  user: t('My List'),
  local: t('Local Files'),
};

function play(index: number): void {
  playlistStore.play(index);
}

function remove(index: number): void {
  playlistStore.removeItem(index);
}
</script>

<template>
  <div class="stmp-playlist">
    <div class="stmp-upload-area" v-if="localProviderEnabled">
      <input
        type="file"
        accept="audio/*"
        ref="fileInputRef"
        @change="onFileSelect"
        style="display:none"
      />
      <button class="stmp-upload-btn" :aria-label="t('Add local file')" @click="triggerUpload">
        + {{ t('Add local file') }}
      </button>
    </div>
    <div v-if="playlistStore.isEmpty" class="stmp-empty">{{ t('No Songs') }}</div>
    <template v-else>
      <div v-for="src in ['chat', 'user', 'local']" :key="src" class="stmp-group">
        <template v-if="groups[src].length">
          <div class="stmp-group-label">{{ groupLabels[src] }}</div>
          <div
            v-for="entry in groups[src]"
            :key="entry.item.id"
            class="stmp-item"
            :class="{ active: entry.index === playlistStore.currentIndex }"
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
  </div>
</template>

<style scoped>
.stmp-playlist {
  display: flex;
  flex-direction: column;
  gap: 2px;
  overflow-y: auto;
  flex: 1;
  min-height: 0;
}

.stmp-upload-area {
  padding: 2px 0 6px;
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

.stmp-empty {
  text-align: center;
  padding: 24px 0;
  color: var(--stmp-text-dim);
  opacity: 0.6;
  font-size: calc(var(--mainFontSize, 14px) * 0.9);
}

.stmp-group-label {
  font-size: calc(var(--mainFontSize, 14px) * 0.75);
  opacity: 0.5;
  padding: 6px 4px 2px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--stmp-text-dim);
}

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
