<script setup lang="ts">
import { ref } from 'vue';
import { useSearchStore, usePlaylistStore, useSettingsStore } from '@/stores/index';
import { createDefaultProviders } from '@/provider/index';
import type { SearchResult } from '@/types';
import Icon from './Icon.vue';
import { t } from '@/i18n';

const searchStore = useSearchStore();
const playlistStore = usePlaylistStore();
const settingsStore = useSettingsStore();

const keyword = ref(searchStore.keyword);
const addedIds = ref<Set<string>>(new Set());
const playingId = ref<string | null>(null);

async function doSearch(): Promise<void> {
  searchStore.setKeyword(keyword.value);
  const mgr = createDefaultProviders(settingsStore.settings.providers);
  await searchStore.search(mgr);
}

const retrySearch = (): void => {
  void doSearch();
};

function addAndPlay(result: SearchResult): void {
  const key = result.provider + result.id;
  if (playingId.value === key) return; // prevent double-click
  playingId.value = key;
  const beforeLen = playlistStore.list.length;
  playlistStore.addFromSearch(result);
  const newIdx = playlistStore.list.length - 1;
  if (newIdx >= beforeLen) {
    playlistStore.play(newIdx);
  }
  setTimeout(() => {
    addedIds.value.add(key);
    playingId.value = null;
  }, 600);
}

function addToList(result: SearchResult): void {
  const key = result.provider + result.id;
  if (addedIds.value.has(key)) return;
  playlistStore.addFromSearch(result);
  addedIds.value.add(key);
}

function isAdded(result: SearchResult): boolean {
  return addedIds.value.has(result.provider + result.id);
}

function isPlaying(result: SearchResult): boolean {
  return playingId.value === result.provider + result.id;
}
</script>

<template>
  <div class="stmp-search">
    <div class="stmp-search-bar">
      <input
        v-model="keyword"
        class="stmp-search-input"
        :placeholder="t('Search Song...')"
        @keydown.enter="doSearch"
      />
      <button class="stmp-icon-btn" :disabled="searchStore.isSearching" @click="doSearch">
        <Icon v-if="!searchStore.isSearching" name="search" :size="16" />
        <Icon v-else name="loader" :size="16" class="stmp-spin" />
      </button>
    </div>

    <div v-if="searchStore.error" class="stmp-search-error">
      <span>{{ searchStore.error }}</span>
      <button class="stmp-retry-btn" :aria-label="t('Retry')" @click="retrySearch">{{ t('Retry') }}</button>
    </div>

    <div v-if="searchStore.isSearching" class="stmp-search-loading">{{ t('Searching...') }}</div>

    <div v-else-if="keyword && !searchStore.results.length" class="stmp-search-empty">
      {{ t('No results') }}
    </div>

    <div v-if="searchStore.results.length" class="stmp-results">
      <div
        v-for="result in searchStore.results"
        :key="result.provider + result.id"
        class="stmp-result"
        :class="{ 'stmp-result-playing': isPlaying(result) }"
      >
        <div class="stmp-result-info" @click="addAndPlay(result)">
          <span class="stmp-result-name">{{ result.name }}</span>
          <span v-if="result.artist" class="stmp-result-artist">{{ result.artist }}</span>
        </div>
        <button
          class="stmp-icon-btn stmp-result-add"
          :class="{ added: isAdded(result) }"
          :aria-label="isAdded(result) ? t('Added') : t('Add to list')"
          @click.stop="addToList(result)"
        >
          <Icon :name="isAdded(result) ? 'check' : 'plus'" :size="16" />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.stmp-search {
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-height: 0;
  flex: 1;
}

.stmp-search-bar {
  display: flex;
  gap: 6px;
}

.stmp-search-input {
  flex: 1;
  padding: 6px 10px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.2);
  color: var(--SmartThemeBodyColor, #fff);
  font-size: calc(var(--fontSize, 14px) * 0.85);
  outline: none;
}

.stmp-search-input:focus {
  border-color: rgba(255, 255, 255, 0.15);
  outline: none;
  box-shadow: none;
}

.stmp-search .stmp-search-input:focus-visible {
  outline: none;
  box-shadow: none;
}

.stmp-icon-btn {
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  color: var(--SmartThemeBodyColor, #fff);
  cursor: pointer;
  padding: 4px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.15s;
}

.stmp-icon-btn:disabled {
  opacity: 0.5;
  cursor: wait;
}

.stmp-icon-btn:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.1);
}

.stmp-spin {
  animation: stmp-spin 0.8s linear infinite;
}

@keyframes stmp-spin {
  to { transform: rotate(360deg); }
}

.stmp-search-error {
  color: #ff6b6b;
  font-size: calc(var(--fontSize, 14px) * 0.8);
  padding: 4px 0;
  display: flex;
  align-items: center;
  gap: 8px;
}

.stmp-retry-btn {
  background: none;
  border: 1px solid rgba(255, 107, 107, 0.4);
  border-radius: 6px;
  color: #ff6b6b;
  cursor: pointer;
  padding: 2px 8px;
  font-size: calc(var(--fontSize, 14px) * 0.78);
  flex-shrink: 0;
}

.stmp-search-loading,
.stmp-search-empty {
  text-align: center;
  padding: 20px 0;
  opacity: 0.6;
  color: var(--SmartThemeBodyColor, #ccc);
  font-size: calc(var(--fontSize, 14px) * 0.85);
}

.stmp-results {
  display: flex;
  flex-direction: column;
  gap: 2px;
  overflow-y: auto;
  min-height: 0;
  flex: 1;
}

.stmp-result {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 4px 6px 8px;
  border-radius: 8px;
  transition: background 0.15s;
}

.stmp-result:hover {
  background: rgba(255, 255, 255, 0.08);
}

.stmp-result-playing {
  background: var(--SmartThemeQuoteColor, rgba(126, 87, 194, 0.15));
  animation: stmp-flash 0.6s ease;
}

@keyframes stmp-flash {
  0% { background: var(--SmartThemeQuoteColor, rgba(126, 87, 194, 0.4)); }
  100% { background: var(--SmartThemeQuoteColor, rgba(126, 87, 194, 0.15)); }
}

.stmp-result-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  cursor: pointer;
}

.stmp-result-name {
  font-size: calc(var(--fontSize, 14px) * 0.85);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--SmartThemeBodyColor, #fff);
}

.stmp-result-artist {
  font-size: calc(var(--fontSize, 14px) * 0.72);
  opacity: 0.6;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--SmartThemeBodyColor, #ccc);
}

.stmp-result-add {
  border: none;
  padding: 4px;
  opacity: 0.5;
}

.stmp-result-add:hover {
  opacity: 1;
  background: rgba(255, 255, 255, 0.1);
}

.stmp-result-add.added {
  color: #4caf50;
  opacity: 1;
}
</style>
