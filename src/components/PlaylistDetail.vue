<script setup lang="ts">
import { computed } from 'vue';
import { usePlaylistStore } from '@/stores/index';
import Icon from './Icon.vue';
import { t } from '@/i18n';

const playlistStore = usePlaylistStore();

const selectedPlaylist = computed(() => playlistStore.selectedPlaylist);
const songs = computed(() => selectedPlaylist.value?.songs ?? []);
const isLoading = computed(() => {
  if (!selectedPlaylist.value) return false;
  return playlistStore.syncingPlaylistIds.includes(selectedPlaylist.value.id);
});

function playFromSong(songIndex: number): void {
  if (playlistStore.selectedPlaylistId) {
    playlistStore.playFromHere(playlistStore.selectedPlaylistId, songIndex);
  }
}

function removeSong(songId: string): void {
  if (playlistStore.selectedPlaylistId) {
    playlistStore.removeFromPlaylist(playlistStore.selectedPlaylistId, songId);
  }
}
</script>

<template>
  <div class="stmp-detail-list">
    <div v-if="isLoading && songs.length === 0" class="stmp-empty">
      {{ t('Syncing...') }}
    </div>
    <div v-else-if="songs.length === 0" class="stmp-empty">
      {{ t('No Songs') }}
    </div>
    <template v-else>
      <div
        v-for="(item, i) in songs"
        :key="item.id"
        class="stmp-item"
        :class="{ active: playlistStore.queue.sourcePlaylistId === selectedPlaylist?.id && playlistStore.queue.currentIndex === i }"
        @click="playFromSong(i)"
      >
        <span class="stmp-item-index">{{ i + 1 }}</span>
        <div class="stmp-item-info">
          <span class="stmp-item-song">{{ item.song }}</span>
          <span v-if="item.artist" class="stmp-item-artist">{{ item.artist }}</span>
        </div>
        <button class="stmp-item-del" @click.stop="removeSong(item.id)">
          <Icon name="x" :size="14" />
        </button>
      </div>
    </template>
  </div>
</template>

<style scoped>
.stmp-detail-list {
  display: flex;
  flex-direction: column;
  gap: 2px;
  overflow-y: auto;
  flex: 1;
  min-height: 0;
}

.stmp-empty {
  text-align: center;
  padding: 24px 0;
  color: var(--stmp-text-dim);
  opacity: 0.6;
  font-size: calc(var(--mainFontSize, 14px) * 0.9);
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