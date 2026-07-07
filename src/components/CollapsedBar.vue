<script setup lang="ts">
import { ref, computed, watch, nextTick, onMounted } from 'vue';
import { usePlayerStore, usePlaylistStore } from '@/stores/index';
import Icon from './Icon.vue';
import { t } from '@/i18n';

const playerStore = usePlayerStore();
const playlistStore = usePlaylistStore();

const props = defineProps<{
  isDock: boolean;
  isMobile: boolean;
}>();

const coverError = ref(false);

const coverUrl = computed(() => playerStore.currentTrack?.cover || '');

const hasTrack = computed(() => !!playerStore.currentTrack);

const displayText = computed(() => {
  const track = playerStore.currentTrack;
  if (!track) return '';
  const name = track.name;
  const artist = track.artist || '';
  return artist ? `${name} - ${artist}` : name;
});

const currentLyric = computed(() => {
  const idx = playerStore.currentLyricIndex;
  if (idx < 0 || idx >= playerStore.lyrics.length) return '';
  return playerStore.lyrics[idx].text;
});

// Duration (ms) the current lyric line stays on screen
const currentLyricDuration = computed(() => {
  const idx = playerStore.currentLyricIndex;
  if (idx < 0 || idx >= playerStore.lyrics.length) return 0;
  const line = playerStore.lyrics[idx];
  if (line.next) {
    return Math.max(500, (line.next.time - line.time) * 1000);
  }
  return 5000;
});

// ===== Dock mini lyric: render full list, translateY smooth scroll =====
// Same logic as full-size lyrics — render all lines, translateY to center
// current line. Container shows only 1 line height (overflow hidden).
const dockScrollY = ref(0);
const dockLineRefs = ref<HTMLElement[]>([]);
const dockWindowRef = ref<HTMLElement | null>(null);

function setDockLyricRef(el: any, idx: number): void {
  if (el) dockLineRefs.value[idx] = el as HTMLElement;
}

async function updateDockScroll(): Promise<void> {
  await nextTick();
  const idx = playerStore.currentLyricIndex;
  const win = dockWindowRef.value;
  if (!win || idx < 0) {
    dockScrollY.value = 0;
    return;
  }
  const lineEl = dockLineRefs.value[idx];
  if (!lineEl) return;
  const lineTop = lineEl.offsetTop;
  const lineH = lineEl.offsetHeight;
  const winH = win.clientHeight;
  dockScrollY.value = lineTop - winH / 2 + lineH / 2;
}

watch(() => playerStore.currentLyricIndex, updateDockScroll);
watch(() => playerStore.lyrics, () => {
  dockLineRefs.value = [];
  updateDockScroll();
});

// ===== Drag mode marquee: forward-only scroll, speed from lyric duration =====
const lyricScrollRef = ref<HTMLElement | null>(null);
const lyricContainerRef = ref<HTMLElement | null>(null);
const lyricTranslateX = ref(0);
const lyricTransitionDuration = ref(0);

function checkLyricOverflow(): void {
  const span = lyricScrollRef.value;
  const container = lyricContainerRef.value;
  if (!span || !container) {
    lyricTranslateX.value = 0;
    return;
  }
  const overflow = span.scrollWidth - container.clientWidth;
  if (overflow > 3 && currentLyricDuration.value > 0) {
    // Subtract 200ms offset so text finishes scrolling before the line ends
    lyricTransitionDuration.value = Math.max(200, currentLyricDuration.value - 200);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        lyricTranslateX.value = -overflow;
      });
    });
  } else {
    lyricTranslateX.value = 0;
  }
}

watch(currentLyric, () => {
  lyricTransitionDuration.value = 0;
  lyricTranslateX.value = 0;
  nextTick(() => requestAnimationFrame(checkLyricOverflow));
});

function onCoverError(): void {
  coverError.value = true;
}

watch(() => playerStore.currentTrack?.url, () => {
  coverError.value = false;
});

function onPlay(e: Event): void {
  e.stopPropagation();
  void playerStore.togglePlay();
}

function onNext(e: Event): void {
  e.stopPropagation();
  void playlistStore.next();
}

onMounted(() => {
  updateDockScroll();
  requestAnimationFrame(checkLyricOverflow);
});
</script>

<template>
  <!-- ===== Desktop Dock mini: single row, cover + lyric/song + controls ===== -->
  <div v-if="props.isDock && !props.isMobile" class="stmp-mini stmp-mini-dock-desktop">
    <div class="stmp-mini-cover" v-if="coverUrl && !coverError">
      <img :src="coverUrl" alt="" @error="onCoverError" />
    </div>
    <div class="stmp-mini-cover stmp-mini-cover-placeholder" v-else>
      <Icon name="music" :size="14" />
    </div>
    <!-- Lyric window: render full list, translateY scroll, show 1 line -->
    <div ref="dockWindowRef" class="stmp-mini-dock-text">
      <div v-if="playerStore.lyrics.length > 0" class="stmp-mini-dock-scroll"
        :style="{ transform: `translateY(-${dockScrollY}px)` }"
      >
        <span
          v-for="(line, i) in playerStore.lyrics"
          :key="i"
          :ref="(el) => setDockLyricRef(el, i)"
          class="stmp-mini-dock-line"
          :class="{ 'stmp-mini-dock-line-active': i === playerStore.currentLyricIndex }"
        >{{ line.text }}</span>
      </div>
      <span v-else class="stmp-mini-text stmp-mini-dock-fallback">{{ displayText }}</span>
    </div>
    <div class="stmp-mini-controls">
      <button class="stmp-mini-btn" :aria-label="playerStore.isPlaying ? t('Pause') : t('Play')" @click="onPlay">
        <Icon :name="playerStore.isPlaying ? 'pause' : 'play'" :size="14" />
      </button>
      <button class="stmp-mini-btn" :aria-label="t('Next')" @click="onNext">
        <Icon name="next" :size="14" />
      </button>
    </div>
  </div>

  <!-- ===== Mobile Dock mini: full width, cover + lyric/song + controls ===== -->
  <div v-else-if="props.isDock && props.isMobile" class="stmp-mini stmp-mini-dock-mobile">
    <div class="stmp-mini-cover" v-if="coverUrl && !coverError">
      <img :src="coverUrl" alt="" @error="onCoverError" />
    </div>
    <div class="stmp-mini-cover stmp-mini-cover-placeholder" v-else>
      <Icon name="music" :size="14" />
    </div>
    <div ref="dockWindowRef" class="stmp-mini-dock-text">
      <div v-if="playerStore.lyrics.length > 0" class="stmp-mini-dock-scroll"
        :style="{ transform: `translateY(-${dockScrollY}px)` }"
      >
        <span
          v-for="(line, i) in playerStore.lyrics"
          :key="i"
          :ref="(el) => setDockLyricRef(el, i)"
          class="stmp-mini-dock-line"
          :class="{ 'stmp-mini-dock-line-active': i === playerStore.currentLyricIndex }"
        >{{ line.text }}</span>
      </div>
      <span v-else class="stmp-mini-text stmp-mini-dock-fallback">{{ displayText }}</span>
    </div>
    <div class="stmp-mini-controls">
      <button class="stmp-mini-btn" :aria-label="playerStore.isPlaying ? t('Pause') : t('Play')" @click="onPlay">
        <Icon :name="playerStore.isPlaying ? 'pause' : 'play'" :size="16" />
      </button>
      <button class="stmp-mini-btn" :aria-label="t('Next')" @click="onNext">
        <Icon name="next" :size="16" />
      </button>
    </div>
  </div>

  <!-- ===== Drag mini (desktop & mobile unified) ===== -->
  <!-- Idle (no track): cover-only square, click anywhere to expand -->
  <div v-else-if="!hasTrack" class="stmp-mini stmp-mini-drag stmp-mini-drag-idle">
    <div class="stmp-mini-cover stmp-mini-cover-square">
      <Icon name="music" :size="20" />
    </div>
  </div>
  <!-- Playing: cover + 2 rows (title + lyric) -->
  <div v-else class="stmp-mini stmp-mini-drag">
    <button
      class="stmp-mini-cover stmp-mini-cover-square"
      :aria-label="playerStore.isPlaying ? t('Pause') : t('Play')"
      @click="onPlay"
    >
      <img v-if="coverUrl && !coverError" :src="coverUrl" alt="" @error="onCoverError" />
      <Icon v-else name="music" :size="20" />
      <div class="stmp-mini-cover-overlay">
        <Icon :name="playerStore.isPlaying ? 'pause' : 'play'" :size="18" />
      </div>
    </button>
    <div class="stmp-mini-drag-right">
      <span class="stmp-mini-text stmp-mini-text-drag">{{ displayText }}</span>
      <div ref="lyricContainerRef" class="stmp-mini-lyric">
        <span
          ref="lyricScrollRef"
          class="stmp-mini-lyric-scroll"
          :style="{
            transform: `translateX(${lyricTranslateX}px)`,
            transition: lyricTransitionDuration > 0 ? `transform ${lyricTransitionDuration}ms linear` : 'none',
          }"
        >{{ currentLyric || '\u00A0' }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* ===== Common ===== */
.stmp-mini {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 2px 6px;
  user-select: none;
  overflow: hidden;
}

.stmp-mini-cover {
  flex-shrink: 0;
  overflow: hidden;
  border-radius: 4px;
  position: relative;
}

.stmp-mini-cover img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.stmp-mini-cover-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  background: color-mix(in srgb, var(--stmp-bg, #1a1a2e) 60%, transparent);
  color: var(--stmp-text-dim, #999);
}

.stmp-mini-text {
  font-size: calc(var(--mainFontSize, 14px) * 0.82);
  white-space: nowrap;
  color: var(--stmp-text, #ccc);
}

.stmp-mini-controls {
  display: flex;
  align-items: center;
  gap: 2px;
  flex-shrink: 0;
}

.stmp-mini-btn {
  background: none;
  border: none;
  color: var(--stmp-text, #ccc);
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: background 0.15s;
}

.stmp-mini-btn:hover {
  background: var(--stmp-hover, rgba(255,255,255,0.08));
}

/* ===== Dock mini lyric: full list, translateY smooth scroll ===== */
.stmp-mini-dock-text {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  position: relative;
  height: calc(var(--mainFontSize, 14px) * 1.3);
}

.stmp-mini-dock-scroll {
  display: flex;
  flex-direction: column;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  transition: transform 0.4s ease;
}

.stmp-mini-dock-line {
  font-size: calc(var(--mainFontSize, 14px) * 0.82);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--stmp-text, #ccc);
  opacity: 0.4;
  text-align: center;
  height: calc(var(--mainFontSize, 14px) * 1.3);
  line-height: calc(var(--mainFontSize, 14px) * 1.3);
  transition: opacity 0.3s ease;
}

.stmp-mini-dock-line-active {
  opacity: 1;
}

.stmp-mini-dock-fallback {
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  width: 100%;
}

/* ===== Desktop Dock mini ===== */
.stmp-mini-dock-desktop .stmp-mini-cover {
  width: 28px;
  height: 28px;
}

/* ===== Mobile Dock mini ===== */
.stmp-mini-dock-mobile {
  width: 100%;
  padding: 4px 8px;
}

.stmp-mini-dock-mobile .stmp-mini-cover {
  width: 28px;
  height: 28px;
}

.stmp-mini-dock-mobile .stmp-mini-dock-line {
  font-size: calc(var(--mainFontSize, 14px) * 0.88);
}

.stmp-mini-dock-mobile .stmp-mini-btn {
  padding: 6px;
}

/* ===== Drag mini: cover + 2 rows (title + lyric), very compact ===== */
.stmp-mini-drag {
  padding: 3px;
  gap: 6px;
}

/* Idle: cover-only square, no right content */
.stmp-mini-drag-idle {
  padding: 3px;
  gap: 0;
}

.stmp-mini-cover-square {
  width: 40px;
  height: 40px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  padding: 0;
  background: color-mix(in srgb, var(--stmp-bg, #1a1a2e) 60%, transparent);
}

.stmp-mini-cover-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  color: #fff;
  opacity: 0;
  transition: opacity 0.2s;
  border-radius: 5px;
}

.stmp-mini-cover-square:hover .stmp-mini-cover-overlay {
  opacity: 1;
}

.stmp-mini-drag-right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 0;
  gap: 1px;
  align-self: stretch;
  overflow: hidden;
}

.stmp-mini-text-drag {
  font-size: calc(var(--mainFontSize, 14px) * 0.75);
  max-width: 70px;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Lyric: forward-only horizontal scroll */
.stmp-mini-lyric {
  font-size: calc(var(--mainFontSize, 14px) * 0.65);
  white-space: nowrap;
  color: var(--stmp-text-dim, #999);
  max-width: 70px;
  overflow: hidden;
  position: relative;
}

.stmp-mini-lyric-scroll {
  display: inline-block;
  white-space: nowrap;
}
</style>
