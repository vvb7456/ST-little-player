<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { usePlayerStore, usePlaylistStore, useSettingsStore } from '@/stores/index';
import type { PlayMode } from '@/types';
import Icon from './Icon.vue';
import PlaylistView from './PlaylistView.vue';
import SearchView from './SearchView.vue';

defineEmits<{ collapse: [] }>();

const playerStore = usePlayerStore();
const playlistStore = usePlaylistStore();
const settingsStore = useSettingsStore();

const activeTab = ref<'list' | 'search'>('list');
const showLyrics = ref(true);
const coverError = ref(false);
const showVolumeSlider = ref(false);
let volumeHoverTimer: ReturnType<typeof setTimeout> | null = null;

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
  list: 'repeat',
  random: 'shuffle',
  single: 'repeat-one',
};

function cyclePlayMode(): void {
  const current = settingsStore.settings.playMode;
  const idx = playModeOrder.indexOf(current);
  const next = playModeOrder[(idx + 1) % playModeOrder.length];
  settingsStore.setPlayMode(next);
}

function onVolume(e: Event): void {
  const target = e.target as HTMLInputElement;
  playerStore.setVolume(Number(target.value));
}

function onVolumeEnter(): void {
  if (volumeHoverTimer) clearTimeout(volumeHoverTimer);
  showVolumeSlider.value = true;
}

function onVolumeLeave(): void {
  volumeHoverTimer = setTimeout(() => {
    showVolumeSlider.value = false;
  }, 300);
}

function toggleMute(): void {
  if (playerStore.volume > 0) {
    playerStore.setVolume(0);
  } else {
    playerStore.setVolume(65);
  }
}
</script>

<template>
  <div class="stmp-panel">
    <!-- Top Bar (draggable handle) -->
    <div class="stmp-topbar stmp-drag-handle">
      <div class="stmp-cover">
        <img
          v-if="coverUrl && !coverError"
          :src="coverUrl"
          alt="cover"
          @error="onCoverError"
        />
        <Icon v-else name="music" :size="24" />
      </div>
      <div class="stmp-track-info">
        <div class="stmp-track-name">{{ playerStore.currentTrack?.name || 'No Song' }}</div>
        <div v-if="playerStore.currentTrack?.artist" class="stmp-track-artist">
          {{ playerStore.currentTrack.artist }}
        </div>
      </div>
      <button
        class="stmp-icon-btn"
        aria-label="收起面板"
        @click.stop="$emit('collapse')"
      >
        <Icon name="chevron-down" :size="18" />
      </button>
    </div>

    <!-- Lyrics -->
    <div v-if="showLyrics" class="stmp-lyrics" @click="showLyrics = false">
      <div v-if="currentLyric" class="stmp-lyric-current">{{ currentLyric }}</div>
      <div v-if="nextLyric" class="stmp-lyric-next">{{ nextLyric }}</div>
      <div v-if="!currentLyric && !nextLyric" class="stmp-lyric-empty">
        <Icon name="music" :size="18" />
      </div>
    </div>
    <div v-else class="stmp-lyrics-toggle" @click="showLyrics = true">
      <Icon name="chevron-up" :size="14" /> show lyrics
    </div>

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
      <button class="stmp-ctrl-btn" aria-label="上一首" @click="playlistStore.prev()">
        <Icon name="prev" :size="18" />
      </button>
      <button
        class="stmp-ctrl-btn stmp-play-btn"
        :aria-label="playerStore.isPlaying ? '暂停' : '播放'"
        @click="playerStore.togglePlay()"
      >
        <Icon :name="playerStore.isPlaying ? 'pause' : 'play'" :size="24" />
      </button>
      <button class="stmp-ctrl-btn" aria-label="下一首" @click="playlistStore.next()">
        <Icon name="next" :size="18" />
      </button>
      <button
        class="stmp-ctrl-btn"
        :class="{ active: settingsStore.settings.playMode !== 'list' }"
        aria-label="切换播放模式"
        @click="cyclePlayMode"
      >
        <Icon :name="playModeIcon[settingsStore.settings.playMode]" :size="18" />
      </button>

      <!-- Volume: icon always visible, slider hidden until hover -->
      <div
        class="stmp-volume-container"
        @mouseenter="onVolumeEnter"
        @mouseleave="onVolumeLeave"
      >
        <button
          class="stmp-ctrl-btn"
          aria-label="静音/取消静音"
          @click="toggleMute"
        >
          <Icon :name="playerStore.volume === 0 ? 'volume-mute' : 'volume'" :size="18" />
        </button>
        <div class="stmp-volume-popup" :class="{ show: showVolumeSlider }">
          <input
            type="range"
            min="0"
            max="100"
            :value="playerStore.volume"
            class="stmp-volume-vertical"
            orient="vertical"
            @input="onVolume"
          />
        </div>
      </div>
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
    </div>

    <!-- Tab Content -->
    <div class="stmp-tab-content">
      <PlaylistView v-if="activeTab === 'list'" />
      <SearchView v-else-if="activeTab === 'search'" />
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

.stmp-drag-handle {
  cursor: grab;
  touch-action: none;
}

.stmp-drag-handle:active {
  cursor: grabbing;
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
  color: var(--SmartThemeBodyColor, #ccc);
  opacity: 0.5;
}

.stmp-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
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

.stmp-icon-btn {
  background: none;
  border: none;
  color: var(--SmartThemeBodyColor, #ccc);
  cursor: pointer;
  padding: 4px;
  border-radius: 8px;
  transition: background 0.15s;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.stmp-icon-btn:hover {
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
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
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

/* Controls: 5 icons equal spacing, play bigger */
.stmp-controls {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 4px;
  position: relative;
}

.stmp-ctrl-btn {
  background: none;
  border: none;
  color: var(--SmartThemeBodyColor, #ccc);
  cursor: pointer;
  padding: 6px;
  border-radius: 8px;
  transition: background 0.15s;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  opacity: 0.8;
}

.stmp-ctrl-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  opacity: 1;
}

.stmp-ctrl-btn.active {
  color: var(--SmartThemeQuoteColor, #7e57c2);
  opacity: 1;
}

.stmp-play-btn {
  opacity: 1;
}

/* Volume container */
.stmp-volume-container {
  position: relative;
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.stmp-volume-popup {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%) scaleY(0);
  transform-origin: bottom center;
  transition: transform 0.2s ease, opacity 0.2s ease;
  opacity: 0;
  padding: 8px 4px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  margin-bottom: 4px;
  pointer-events: none;
}

.stmp-volume-popup.show {
  transform: translateX(-50%) scaleY(1);
  opacity: 1;
  pointer-events: auto;
}

.stmp-volume-vertical {
  writing-mode: vertical-lr;
  direction: rtl;
  width: 8px;
  height: 80px;
  cursor: pointer;
  -webkit-appearance: slider-vertical;
  appearance: slider-vertical;
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
