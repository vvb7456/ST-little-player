<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { usePlayerStore, usePlaylistStore, useSettingsStore } from '@/stores/index';
import type { PlayMode } from '@/types';
import PlaylistView from './PlaylistView.vue';
import SearchView from './SearchView.vue';
import SettingsView from './SettingsView.vue';

defineEmits<{ collapse: [] }>();

const playerStore = usePlayerStore();
const playlistStore = usePlaylistStore();
const settingsStore = useSettingsStore();

const activeTab = ref<'list' | 'search' | 'settings'>('list');
const showLyrics = ref(true);
const coverError = ref(false);

const coverUrl = computed(() => playerStore.currentTrack?.cover || '');

const onCoverError = (): void => {
  coverError.value = true;
};

watch(
  () => playerStore.currentTrack,
  () => {
    coverError.value = false;
  },
);

const progressPercent = computed(() =>
  playerStore.duration > 0 ? (playerStore.currentTime / playerStore.duration) * 100 : 0,
);

const currentLyric = computed(() =>
  playerStore.currentLyricIndex >= 0
    ? playerStore.lyrics[playerStore.currentLyricIndex]?.text ?? null
    : null,
);

const nextLyric = computed(() => {
  const idx = playerStore.currentLyricIndex;
  if (idx < 0) return null;
  return playerStore.lyrics[idx + 1]?.text ?? null;
});

function formatTime(s: number): string {
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return m + ':' + sec.toString().padStart(2, '0');
}

function onSeek(e: Event): void {
  const target = e.target as HTMLInputElement;
  playerStore.seek((Number(target.value) / 100) * playerStore.duration);
}

const playModeOrder: PlayMode[] = ['list', 'random', 'single'];
const playModeIcon: Record<PlayMode, string> = {
  list: '🔁',
  random: '🔀',
  single: '🔂',
};

function cyclePlayMode(): void {
  const current = settingsStore.settings.playMode;
  const idx = playModeOrder.indexOf(current);
  const next = playModeOrder[(idx + 1) % playModeOrder.length];
  settingsStore.setPlayMode(next);
  playlistStore.playMode = next;
}

function onVolume(e: Event): void {
  const target = e.target as HTMLInputElement;
  playerStore.setVolume(Number(target.value));
}
</script>

<template>
  <div class="stmp-panel">
    <!-- Top Bar -->
    <div class="stmp-topbar">
      <div class="stmp-cover">
        <img
          v-if="coverUrl && !coverError"
          :src="coverUrl"
          alt="cover"
          @error="onCoverError"
        />
        <span v-else class="stmp-cover-placeholder">♪</span>
      </div>
      <div class="stmp-track-info">
        <div class="stmp-track-name">{{ playerStore.currentTrack?.name || 'No Song' }}</div>
        <div v-if="playerStore.currentTrack?.artist" class="stmp-track-artist">
          {{ playerStore.currentTrack.artist }}
        </div>
      </div>
      <button
        class="stmp-collapse-btn"
        aria-label="收起面板"
        @click="$emit('collapse')"
      >▾</button>
    </div>

    <!-- Lyrics -->
    <div v-if="showLyrics" class="stmp-lyrics" @click="showLyrics = false">
      <div v-if="currentLyric" class="stmp-lyric-current">{{ currentLyric }}</div>
      <div v-if="nextLyric" class="stmp-lyric-next">{{ nextLyric }}</div>
      <div v-if="!currentLyric && !nextLyric" class="stmp-lyric-empty">♪</div>
    </div>
    <div v-else class="stmp-lyrics-toggle" @click="showLyrics = true">♪ show lyrics</div>

    <!-- Progress -->
    <div class="stmp-progress">
      <input
        type="range"
        min="0"
        max="100"
        step="0.1"
        :value="progressPercent"
        class="stmp-range"
        @input="onSeek"
      />
      <div class="stmp-time">
        <span>{{ formatTime(playerStore.currentTime) }}</span>
        <span>{{ formatTime(playerStore.duration) }}</span>
      </div>
    </div>

    <!-- Controls -->
    <div class="stmp-controls">
      <button class="stmp-ctrl-btn" aria-label="上一首" @click="playlistStore.prev()">⏮</button>
      <button
        class="stmp-ctrl-btn stmp-play-btn"
        :aria-label="playerStore.isPlaying ? '暂停' : '播放'"
        @click="playerStore.togglePlay()"
      >
        {{ playerStore.isPlaying ? '⏸' : '▶' }}
      </button>
      <button class="stmp-ctrl-btn" aria-label="下一首" @click="playlistStore.next()">⏭</button>
      <button
        class="stmp-ctrl-btn"
        aria-label="切换播放模式"
        @click="cyclePlayMode"
      >
        {{ playModeIcon[settingsStore.settings.playMode] }}
      </button>
      <input
        type="range"
        min="0"
        max="100"
        :value="playerStore.volume"
        class="stmp-volume"
        @input="onVolume"
      />
    </div>

    <!-- Tabs -->
    <div class="stmp-tabs">
      <button
        class="stmp-tab"
        :class="{ active: activeTab === 'list' }"
        @click="activeTab = 'list'"
      >
        List
      </button>
      <button
        class="stmp-tab"
        :class="{ active: activeTab === 'search' }"
        @click="activeTab = 'search'"
      >
        Search
      </button>
      <button
        class="stmp-tab"
        :class="{ active: activeTab === 'settings' }"
        @click="activeTab = 'settings'"
      >
        Settings
      </button>
    </div>

    <!-- Tab Content -->
    <div class="stmp-tab-content">
      <PlaylistView v-if="activeTab === 'list'" />
      <SearchView v-else-if="activeTab === 'search'" />
      <SettingsView v-else-if="activeTab === 'settings'" />
    </div>
  </div>
</template>

<style scoped>
.stmp-panel {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}

.stmp-topbar {
  display: flex;
  align-items: center;
  gap: 10px;
}

.stmp-cover {
  width: 48px;
  height: 48px;
  border-radius: 8px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
}

.stmp-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.stmp-cover-placeholder {
  font-size: 24px;
  opacity: 0.5;
  color: var(--SmartThemeBodyColor, #ccc);
}

.stmp-track-info {
  flex: 1;
  overflow: hidden;
}

.stmp-track-name {
  font-size: calc(var(--fontSize, 14px) * 0.95);
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--SmartThemeBodyColor, #fff);
}

.stmp-track-artist {
  font-size: calc(var(--fontSize, 14px) * 0.78);
  opacity: 0.6;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--SmartThemeBodyColor, #ccc);
}

.stmp-collapse-btn {
  background: none;
  border: none;
  color: var(--SmartThemeBodyColor, #ccc);
  cursor: pointer;
  font-size: 18px;
  padding: 2px 6px;
  border-radius: 6px;
  flex-shrink: 0;
}

.stmp-collapse-btn:hover {
  background: rgba(255, 255, 255, 0.1);
}

.stmp-lyrics {
  text-align: center;
  padding: 4px 8px;
  cursor: pointer;
  min-height: 36px;
}

.stmp-lyric-current {
  font-size: calc(var(--fontSize, 14px) * 0.88);
  color: var(--SmartThemeQuoteColor, #fff);
  font-weight: 600;
}

.stmp-lyric-next {
  font-size: calc(var(--fontSize, 14px) * 0.78);
  opacity: 0.4;
  margin-top: 2px;
  color: var(--SmartThemeBodyColor, #ccc);
}

.stmp-lyric-empty {
  font-size: 18px;
  opacity: 0.3;
  color: var(--SmartThemeBodyColor, #ccc);
}

.stmp-lyrics-toggle {
  text-align: center;
  font-size: calc(var(--fontSize, 14px) * 0.75);
  opacity: 0.4;
  cursor: pointer;
  padding: 2px;
  color: var(--SmartThemeBodyColor, #ccc);
}

.stmp-progress {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.stmp-range {
  width: 100%;
  cursor: pointer;
}

.stmp-time {
  display: flex;
  justify-content: space-between;
  font-size: calc(var(--fontSize, 14px) * 0.72);
  opacity: 0.6;
  color: var(--SmartThemeBodyColor, #ccc);
}

.stmp-controls {
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
}

.stmp-ctrl-btn {
  background: none;
  border: none;
  color: var(--SmartThemeBodyColor, #fff);
  cursor: pointer;
  font-size: 18px;
  padding: 4px 8px;
  border-radius: 8px;
  transition: background 0.15s;
}

.stmp-ctrl-btn:hover {
  background: rgba(255, 255, 255, 0.1);
}

.stmp-play-btn {
  font-size: 22px;
}

.stmp-volume {
  width: 70px;
  cursor: pointer;
}

.stmp-tabs {
  display: flex;
  gap: 2px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.stmp-tab {
  flex: 1;
  background: none;
  border: none;
  color: var(--SmartThemeBodyColor, #ccc);
  cursor: pointer;
  padding: 6px 4px;
  font-size: calc(var(--fontSize, 14px) * 0.82);
  opacity: 0.6;
  border-bottom: 2px solid transparent;
  transition: all 0.15s;
}

.stmp-tab.active {
  opacity: 1;
  border-bottom-color: var(--SmartThemeQuoteColor, #fff);
}

.stmp-tab-content {
  min-height: 100px;
}
</style>
