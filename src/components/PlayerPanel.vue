<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { usePlayerStore, usePlaylistStore, useSettingsStore } from '@/stores/index';
import type { PlayMode } from '@/types';
import Icon from './Icon.vue';
import PlaylistView from './PlaylistView.vue';
import SearchView from './SearchView.vue';
import { t } from '@/i18n';

defineEmits<{ collapse: [] }>();

const playerStore = usePlayerStore();
const playlistStore = usePlaylistStore();
const settingsStore = useSettingsStore();

// 'cover' mode: large cover art display; 'lyric' mode: more lyric lines
const viewMode = ref<'cover' | 'lyric'>('cover');
const activeOverlay = ref<'list' | 'search' | null>(null);
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

const prevLyric = computed(() => {
  const idx = playerStore.currentLyricIndex;
  if (idx <= 0) return null;
  return playerStore.lyrics[idx - 1]?.text ?? null;
});

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

function toggleOverlay(which: 'list' | 'search'): void {
  if (activeOverlay.value === which) {
    activeOverlay.value = null;
  } else {
    activeOverlay.value = which;
  }
}

function closeOverlay(): void {
  activeOverlay.value = null;
}
</script>

<template>
  <div class="stmp-panel">
    <!-- Top Bar (draggable handle) -->
    <div class="stmp-topbar stmp-drag-handle">
      <div class="stmp-cover-mini">
        <img
          v-if="coverUrl && !coverError"
          :src="coverUrl"
          alt="cover"
          @error="onCoverError"
        />
        <Icon v-else name="music" :size="20" />
      </div>
      <div class="stmp-track-info">
        <div class="stmp-track-name">{{ playerStore.currentTrack?.name || t('No Song') }}</div>
        <div v-if="playerStore.currentTrack?.artist" class="stmp-track-artist">
          {{ playerStore.currentTrack.artist }}
        </div>
      </div>
      <button
        class="stmp-icon-btn"
        :aria-label="t('Collapse panel')"
        @click.stop="$emit('collapse')"
      >
        <Icon name="chevron-down" :size="18" />
      </button>
    </div>

    <!-- Display area: cover mode or lyric mode -->
    <div class="stmp-display" @click="viewMode = viewMode === 'cover' ? 'lyric' : 'cover'">
      <!-- Cover mode: large cover art -->
      <div v-if="viewMode === 'cover'" class="stmp-cover-large">
        <img
          v-if="coverUrl && !coverError"
          :src="coverUrl"
          alt="cover"
          @error="onCoverError"
        />
        <div v-else class="stmp-cover-placeholder">
          <Icon name="music" :size="40" />
        </div>
      </div>
      <!-- Lyric mode: 3 lines -->
      <div v-else class="stmp-lyrics">
        <div v-if="prevLyric" class="stmp-lyric-prev">{{ prevLyric }}</div>
        <div v-if="currentLyric" class="stmp-lyric-current">{{ currentLyric }}</div>
        <div v-if="nextLyric" class="stmp-lyric-next">{{ nextLyric }}</div>
        <div v-if="!prevLyric && !currentLyric && !nextLyric" class="stmp-lyric-empty">
          <Icon name="music" :size="18" />
        </div>
      </div>
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

    <!-- Controls: 7 buttons -->
    <div class="stmp-controls">
      <button class="stmp-ctrl-btn" :aria-label="t('Toggle play mode')" @click="cyclePlayMode">
        <Icon :name="playModeIcon[settingsStore.settings.playMode]" :size="18" />
      </button>
      <button class="stmp-ctrl-btn" :aria-label="t('Previous')" @click="playlistStore.prev()">
        <Icon name="prev" :size="18" />
      </button>
      <button
        class="stmp-ctrl-btn stmp-play-btn"
        :aria-label="playerStore.isPlaying ? t('Pause') : t('Play')"
        @click="playerStore.togglePlay()"
      >
        <Icon :name="playerStore.isPlaying ? 'pause' : 'play'" :size="24" />
      </button>
      <button class="stmp-ctrl-btn" :aria-label="t('Next')" @click="playlistStore.next()">
        <Icon name="next" :size="18" />
      </button>

      <!-- Volume: icon always visible, slider hidden until hover -->
      <div
        class="stmp-volume-container"
        @mouseenter="onVolumeEnter"
        @mouseleave="onVolumeLeave"
      >
        <button
          class="stmp-ctrl-btn"
          :aria-label="t('Mute / Unmute')"
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

      <!-- Search button -->
      <button
        class="stmp-ctrl-btn"
        :class="{ active: activeOverlay === 'search' }"
        :aria-label="t('Search')"
        @click.stop="toggleOverlay('search')"
      >
        <Icon name="search" :size="18" />
      </button>

      <!-- Playlist button -->
      <button
        class="stmp-ctrl-btn"
        :class="{ active: activeOverlay === 'list' }"
        :aria-label="t('Playlist')"
        @click.stop="toggleOverlay('list')"
      >
        <Icon name="list-music" :size="18" />
      </button>
    </div>

    <!-- Overlay panel: slide up from bottom -->
    <Transition name="stmp-overlay">
      <div v-if="activeOverlay" class="stmp-overlay">
        <div class="stmp-overlay-header">
          <span class="stmp-overlay-title">
            {{ activeOverlay === 'list' ? t('Playlist') : t('Search') }}
          </span>
          <button class="stmp-overlay-close" :aria-label="t('Close')" @click.stop="closeOverlay">
            <Icon name="chevron-down" :size="16" />
          </button>
        </div>
        <div class="stmp-overlay-body">
          <PlaylistView v-if="activeOverlay === 'list'" />
          <SearchView v-else />
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.stmp-panel {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
}

.stmp-topbar {
  display: flex;
  align-items: center;
  gap: 8px;
}

.stmp-cover-mini {
  width: 36px;
  height: 36px;
  border-radius: 6px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
  color: var(--SmartThemeBodyColor, #ccc);
  opacity: 0.6;
}

.stmp-cover-mini img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.stmp-track-info {
  flex: 1;
  overflow: hidden;
}

.stmp-track-name {
  font-size: calc(var(--fontSize, 14px) * 0.9);
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--SmartThemeBodyColor, #fff);
}

.stmp-track-artist {
  font-size: calc(var(--fontSize, 14px) * 0.75);
  opacity: 0.55;
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

/* Display area: cover or lyrics */
.stmp-display {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.stmp-cover-large {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 4px 0;
}

.stmp-cover-large img {
  width: 120px;
  height: 120px;
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
}

.stmp-cover-placeholder {
  width: 120px;
  height: 120px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.2);
  color: var(--SmartThemeBodyColor, #ccc);
  opacity: 0.3;
}

.stmp-lyrics {
  text-align: center;
  padding: 4px 8px;
  min-height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
}

.stmp-lyric-prev {
  font-size: calc(var(--fontSize, 14px) * 0.75);
  opacity: 0.35;
  color: var(--SmartThemeBodyColor, #ccc);
}

.stmp-lyric-current {
  font-size: calc(var(--fontSize, 14px) * 0.88);
  color: var(--SmartThemeQuoteColor, #fff);
  font-weight: 600;
}

.stmp-lyric-next {
  font-size: calc(var(--fontSize, 14px) * 0.75);
  opacity: 0.35;
  color: var(--SmartThemeBodyColor, #ccc);
}

.stmp-lyric-empty {
  opacity: 0.3;
  color: var(--SmartThemeBodyColor, #ccc);
}

.stmp-progress {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.stmp-range {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  cursor: pointer;
  outline: none;
}

.stmp-range::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--SmartThemeQuoteColor, #fff);
  cursor: pointer;
}

.stmp-range::-moz-range-thumb {
  width: 12px;
  height: 12px;
  border: none;
  border-radius: 50%;
  background: var(--SmartThemeQuoteColor, #fff);
  cursor: pointer;
}

.stmp-time {
  display: flex;
  justify-content: space-between;
  font-size: calc(var(--fontSize, 14px) * 0.72);
  opacity: 0.6;
  color: var(--SmartThemeBodyColor, #ccc);
}

/* Controls: 7 buttons */
.stmp-controls {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 4px;
  height: 36px;
}

.stmp-ctrl-btn {
  background: none;
  border: none;
  color: var(--SmartThemeBodyColor, #ccc);
  cursor: pointer;
  padding: 5px;
  border-radius: 8px;
  transition: background 0.15s, opacity 0.15s;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  opacity: 0.7;
}

.stmp-ctrl-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  opacity: 1;
}

.stmp-ctrl-btn.active {
  opacity: 1;
  color: var(--SmartThemeQuoteColor, #fff);
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
  padding: 6px 4px;
  margin-bottom: 4px;
  pointer-events: none;
  background: rgba(0, 0, 0, 0.55);
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.stmp-volume-popup.show {
  transform: translateX(-50%) scaleY(1);
  opacity: 1;
  pointer-events: auto;
}

.stmp-volume-vertical {
  -webkit-appearance: none;
  appearance: none;
  writing-mode: vertical-lr;
  direction: rtl;
  width: 6px;
  height: 80px;
  cursor: pointer;
  background: transparent;
  outline: none;
}

.stmp-volume-vertical::-webkit-slider-runnable-track {
  width: 4px;
  height: 80px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
}

.stmp-volume-vertical::-moz-range-track {
  width: 4px;
  height: 80px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
}

.stmp-volume-vertical::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--SmartThemeQuoteColor, #fff);
  margin-left: -4px;
  cursor: pointer;
}

.stmp-volume-vertical::-moz-range-thumb {
  width: 12px;
  height: 12px;
  border: none;
  border-radius: 50%;
  background: var(--SmartThemeQuoteColor, #fff);
  cursor: pointer;
}

/* Overlay panel */
.stmp-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: color-mix(in srgb, var(--SmartThemeBlurTintColor, #1a1a2e) 92%, transparent);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 8px;
  z-index: 10;
}

.stmp-overlay-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
}

.stmp-overlay-title {
  font-size: calc(var(--fontSize, 14px) * 0.9);
  font-weight: 600;
  color: var(--SmartThemeBodyColor, #fff);
}

.stmp-overlay-close {
  background: none;
  border: none;
  color: var(--SmartThemeBodyColor, #ccc);
  cursor: pointer;
  padding: 4px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.stmp-overlay-close:hover {
  background: rgba(255, 255, 255, 0.1);
}

.stmp-overlay-body {
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

/* Overlay slide-up transition */
.stmp-overlay-enter-active,
.stmp-overlay-leave-active {
  transition: transform 0.25s ease, opacity 0.25s ease;
}

.stmp-overlay-enter-from,
.stmp-overlay-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
</style>
