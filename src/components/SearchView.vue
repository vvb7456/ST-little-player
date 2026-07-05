<script setup lang="ts">
import { ref } from 'vue';
import { useSearchStore, usePlaylistStore, useSettingsStore } from '@/stores/index';
import { createDefaultProviders } from '@/provider/index';
import type { SearchResult } from '@/types';

const searchStore = useSearchStore();
const playlistStore = usePlaylistStore();
const settingsStore = useSettingsStore();

const keyword = ref(searchStore.keyword);

async function doSearch(): Promise<void> {
  searchStore.setKeyword(keyword.value);
  const mgr = createDefaultProviders(settingsStore.settings.providers);
  await searchStore.search(mgr);
}

const retrySearch = (): void => {
  void doSearch();
};

function addAndPlay(result: SearchResult): void {
  const beforeLen = playlistStore.list.length;
  playlistStore.addFromSearch(result);
  const newIdx = playlistStore.list.length - 1;
  if (newIdx >= beforeLen) {
    playlistStore.play(newIdx);
  }
}
</script>

<template>
  <div class="stmp-search">
    <div class="stmp-search-bar">
      <input
        v-model="keyword"
        class="stmp-search-input"
        placeholder="Search Song..."
        @keydown.enter="doSearch"
      />
      <button class="stmp-search-btn" :disabled="searchStore.isSearching" @click="doSearch">
        {{ searchStore.isSearching ? '...' : '🔍' }}
      </button>
    </div>

    <div v-if="searchStore.error" class="stmp-search-error">
      <span>{{ searchStore.error }}</span>
      <button class="stmp-retry-btn" aria-label="重试搜索" @click="retrySearch">重试</button>
    </div>

    <div v-if="searchStore.isSearching" class="stmp-search-loading">Searching...</div>

    <div v-else-if="keyword && !searchStore.results.length" class="stmp-search-empty">
      No results
    </div>

    <div v-if="searchStore.results.length" class="stmp-results">
      <div
        v-for="result in searchStore.results"
        :key="result.provider + result.id"
        class="stmp-result"
        @click="addAndPlay(result)"
      >
        <div class="stmp-result-info">
          <span class="stmp-result-name">{{ result.name }}</span>
          <span v-if="result.artist" class="stmp-result-artist">{{ result.artist }}</span>
        </div>
        <span class="stmp-result-provider">{{ result.provider }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.stmp-search {
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 240px;
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
  border-color: var(--SmartThemeQuoteColor, rgba(255, 255, 255, 0.3));
}

.stmp-search-btn {
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  color: var(--SmartThemeBodyColor, #fff);
  cursor: pointer;
  padding: 4px 10px;
  font-size: 14px;
}

.stmp-search-btn:disabled {
  opacity: 0.5;
  cursor: wait;
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
}

.stmp-result {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 8px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.15s;
}

.stmp-result:hover {
  background: rgba(255, 255, 255, 0.08);
}

.stmp-result-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
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

.stmp-result-provider {
  font-size: calc(var(--fontSize, 14px) * 0.68);
  padding: 1px 6px;
  border-radius: 4px;
  background: var(--SmartThemeQuoteColor, rgba(255, 255, 255, 0.12));
  color: var(--SmartThemeBodyColor, #ccc);
  flex-shrink: 0;
}
</style>
