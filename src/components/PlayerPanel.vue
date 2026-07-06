<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { usePlayerStore, usePlaylistStore, useSettingsStore } from '@/stores/index';
import type { PlayMode, LyricLine } from '@/types';
import Icon from './Icon.vue';
import PlaylistView from './PlaylistView.vue';
import SearchView from './SearchView.vue';
import { t } from '@/i18n';

defineEmits<{ collapse: [] }>();

const playerStore = usePlayerStore();
const playlistStore = usePlaylistStore();
const settingsStore = useSettingsStore();

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

// Build 6-line lyric window centered on current line
const lyricWindow = computed<{ line: LyricLine | null; isActive: boolean }[]>(() => {
  const lyrics = playerStore.lyrics;
  const idx = playerStore.currentLyricIndex;
  const window: { line: LyricLine | null; isActive: boolean }[] = [];
  const half = 3; // 3 above + current + 2 below = 6 lines
  for (let i = -half; i <= half - 1; i++) {
    const lineIdx = idx + i;
    if (lineIdx >= 0 && lineIdx < lyrics.length) {
      window.push({ line: lyrics[lineIdx], isActive: lineIdx === idx });
    } else {
      window.push({ line: null, isActive: false });
    }
  }
  return window;
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
    <!-- Top bar: drag handle + collapse only -->
    <div class="stmp-topbar stmp-drag-handle">
      <div class="stmp-topbar-spacer" />
      <button
        class="stmp-icon-btn"
        :aria-label="t('Collapse panel')"
        @click.stop="$emit('collapse')"
      >
        <Icon name="chevron-down" :size="18" />
      </button>
    </div>

    <!-- Display area: cover mode and lyric mode stacked in grid -->
    <div class="stmp-display" @click="viewMode = viewMode === 'cover' ? 'lyric' : 'cover'">
      <!-- Cover mode: large cover + track name + artist -->
      <div class="stmp-cover-mode" :class="{ hidden: viewMode !== 'cover' }">
        <div class="stmp-cover-large">
          <img
            v-if="coverUrl && !coverError"
            :src="coverUrl"
            alt="cover"
            @error="onCoverError"
          />
          <div v-else class="stmp-cover-placeholder">
            <Icon name="music" :size="48" />
          </div>
        </div>
        <div class="stmp-track-name">{{ playerStore.currentTrack?.name || t('No Song') }}</div>
        <div v-if="playerStore.currentTrack?.artist" class="stmp-track-artist">
          {{ playerStore.currentTrack.artist }}
        </div>
      </div>
      <!-- Lyric mode: track name + artist fixed, 6-line scrolling lyrics -->
      <div class="stmp-lyric-mode" :class="{ hidden: viewMode !== 'lyric' }">
        <div class="stmp-lyric-header">
          <div class="stmp-track-name">{{ playerStore.currentTrack?.name || t('No Song') }}</div>
          <div v-if="playerStore.currentTrack?.artist" class="stmp-track-artist">
            {{ playerStore.currentTrack.artist }}
          </div>
        </div>
        <div class="stmp-lyric-window">
          <div
            v-for="(entry, i) in lyricWindow"
            :key="i"
            class="stmp-lyric-line"
            :class="{
              'stmp-lyric-active': entry.isActive,
              'stmp-lyric-edge': i === 0 || i === lyricWindow.length - 1,
            }"
          >
            {{ entry.line?.text || '' }}
          </div>
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

    <!-- Controls: search | playMode prev play next playlist | volume -->
    <div class="stmp-controls">
      <!-- Search (leftmost) -->
      <div class="stmp-ctrl-side stmp-search-side">
        <button
          class="stmp-ctrl-btn"
          :class="{ active: activeOverlay === 'search' }"
          :aria-label="t('Search')"
          @click.stop="toggleOverlay('search')"
        >
          <Icon name="search" :size="18" />
        </button>
      </div>

      <!-- Left cluster -->
      <button class="stmp-ctrl-btn" :aria-label="t('Toggle play mode')" @click="cyclePlayMode">
        <Icon :name="playModeIcon[settingsStore.settings.playMode]" :size="18" />
      </button>
      <button class="stmp-ctrl-btn" :aria-label="t('Previous')" @click="playlistStore.prev()">
        <Icon name="prev" :size="18" />
      </button>

      <!-- Center: play/pause -->
      <button
        class="stmp-ctrl-btn stmp-play-btn"
        :aria-label="playerStore.isPlaying ? t('Pause') : t('Play')"
        @click="playerStore.togglePlay()"
      >
        <Icon :name="playerStore.isPlaying ? 'pause' : 'play'" :size="24" />
      </button>

      <!-- Right cluster -->
      <button class="stmp-ctrl-btn" :aria-label="t('Next')" @click="playlistStore.next()">
        <Icon name="next" :size="18" />
      </button>
      <button
        class="stmp-ctrl-btn"
        :class="{ active: activeOverlay === 'list' }"
        :aria-label="t('Playlist')"
        @click.stop="toggleOverlay('list')"
      >
        <Icon name="list-music" :size="18" />
      </button>

      <!-- Volume (rightmost) -->
      <div class="stmp-ctrl-side stmp-volume-side">
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
      </div>
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

/* Top bar: just a drag handle strip with collapse button */
.stmp-topbar {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  min-height: 24px;
}

.stmp-topbar-spacer {
  flex: 1;
}

.stmp-icon-btn {
  background: none;
  border: none;
  color: var(--stmp-text);
  cursor: pointer;
  padding: 2px 4px;
  border-radius: 8px;
  transition: background 0.15s;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.stmp-icon-btn:hover {
  background: var(--stmp-hover);
}

/* Display area: grid stack so both modes share the same cell,
   container height = max(cover, lyric) which is always cover */
.stmp-display {
  cursor: pointer;
  display: grid;
}

.stmp-display > * {
  grid-area: 1 / 1;
}

.stmp-display > .hidden {
  visibility: hidden;
  pointer-events: none;
}

/* ===== Cover mode ===== */
.stmp-cover-mode {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 4px 0;
}

.stmp-cover-large img {
  width: 180px;
  height: 180px;
  border-radius: 16px;
  object-fit: cover;
  box-shadow: 0 4px 16px var(--SmartThemeShadowColor, rgba(0, 0, 0, 0.35));
}

.stmp-cover-placeholder {
  width: 180px;
  height: 180px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: color-mix(in srgb, var(--stmp-bg) 70%, transparent);
  color: var(--stmp-text);
  opacity: 0.3;
}

.stmp-track-name {
  font-size: calc(var(--fontSize, 14px) * 1.0);
  font-weight: 600;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  color: var(--stmp-text);
}

.stmp-track-artist {
  font-size: calc(var(--fontSize, 14px) * 0.8);
  opacity: 0.55;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  color: var(--stmp-text-dim);
}

/* ===== Lyric mode: fills same height as cover mode ===== */
.stmp-lyric-mode {
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 100%;
  min-height: 0;
}

.stmp-lyric-header {
  text-align: center;
  flex-shrink: 0;
}

.stmp-lyric-window {
  position: relative;
  flex: 1;
  min-height: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  -webkit-mask-image: linear-gradient(
    to bottom,
    transparent 0%,
    #000 15%,
    #000 85%,
    transparent 100%
  );
  mask-image: linear-gradient(
    to bottom,
    transparent 0%,
    #000 15%,
    #000 85%,
    transparent 100%
  );
}

.stmp-lyric-line {
  font-size: calc(var(--fontSize, 14px) * 0.82);
  text-align: center;
  opacity: 0.35;
  color: var(--stmp-text);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: opacity 0.3s ease;
}

.stmp-lyric-active {
  opacity: 1;
  font-weight: 600;
  color: var(--stmp-accent);
}

/* Progress */
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
  background: var(--stmp-track);
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
  background: var(--stmp-accent);
  cursor: pointer;
}

.stmp-range::-moz-range-thumb {
  width: 12px;
  height: 12px;
  border: none;
  border-radius: 50%;
  background: var(--stmp-accent);
  cursor: pointer;
}

.stmp-time {
  display: flex;
  justify-content: space-between;
  font-size: calc(var(--fontSize, 14px) * 0.72);
  opacity: 0.6;
  color: var(--stmp-text-dim);
}

/* Controls: 3 groups — left side, center cluster, right side */
.stmp-controls {
  display: flex;
  align-items: center;
  padding: 0 4px;
  height: 36px;
  gap: 0;
}

.stmp-ctrl-side {
  flex: 1;
  display: flex;
  align-items: center;
}

.stmp-search-side {
  justify-content: flex-start;
}

.stmp-volume-side {
  justify-content: flex-end;
}

.stmp-volume-container {
  position: relative;
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

/* Center cluster: prev, playMode, play, next, playlist */
.stmp-controls > .stmp-ctrl-btn:not(.stmp-ctrl-side) {
  flex: 0 0 auto;
}

.stmp-controls .stmp-play-btn {
  margin: 0 6px;
}

.stmp-ctrl-btn {
  background: none;
  border: none;
  color: var(--stmp-text);
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
  background: var(--stmp-hover);
  opacity: 1;
}

.stmp-ctrl-btn.active {
  opacity: 1;
  color: var(--stmp-accent);
}

.stmp-play-btn {
  opacity: 1;
}

/* Volume container */
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
  background: color-mix(in srgb, var(--stmp-bg) 88%, transparent);
  border-radius: 6px;
  border: 1px solid color-mix(in srgb, var(--stmp-border) 50%, transparent);
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
  background: var(--stmp-track);
  border-radius: 2px;
}

.stmp-volume-vertical::-moz-range-track {
  width: 4px;
  height: 80px;
  background: var(--stmp-track);
  border-radius: 2px;
}

.stmp-volume-vertical::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--stmp-accent);
  margin-left: -4px;
  cursor: pointer;
}

.stmp-volume-vertical::-moz-range-thumb {
  width: 12px;
  height: 12px;
  border: none;
  border-radius: 50%;
  background: var(--stmp-accent);
  cursor: pointer;
}

/* Overlay panel */
.stmp-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: color-mix(in srgb, var(--stmp-bg) 90%, transparent);
  backdrop-filter: var(--stmp-blur);
  -webkit-backdrop-filter: var(--stmp-blur);
  border-radius: var(--stmp-radius, 16px);
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
  color: var(--stmp-text);
}

.stmp-overlay-close {
  background: none;
  border: none;
  color: var(--stmp-text-dim);
  cursor: pointer;
  padding: 4px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.stmp-overlay-close:hover {
  background: var(--stmp-hover);
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
