<script setup lang="ts">
import { ref, computed, watch, nextTick, onMounted, onBeforeUnmount } from 'vue';
import { usePlayerStore, usePlaylistStore, useSettingsStore } from '@/stores/index';
import { useVerticalLyricScroll } from '@/composables/useVerticalLyricScroll';
import Icon from './Icon.vue';
import { t } from '@/i18n';

const playerStore = usePlayerStore();
const playlistStore = usePlaylistStore();
const settingsStore = useSettingsStore();

const props = defineProps<{
  isDock: boolean;
  isMobile: boolean;
}>();

const coverError = ref(false);

const coverUrl = computed(() => playerStore.currentTrack?.cover || '');

const hasTrack = computed(() => !!playerStore.currentTrack);

/** Drag mini: show cover-only (no title/lyrics) when setting is off. */
const dragShowText = computed(() => settingsStore.settings.showDragMiniText);

const displayText = computed(() => {
  const track = playerStore.currentTrack;
  if (!track) return '';
  const name = track.name;
  const artist = track.artist || '';
  return artist ? `${name} - ${artist}` : name;
});

// ===== Dock mini lyric: shared vertical scroll composable =====
const { scrollY: dockScrollY, windowRef: dockWindowRef, setLineRef: setDockLyricRef } = useVerticalLyricScroll();

// ===== Drag mode lyric: continuous scroll, all lines in one track =====
// All lyric lines are concatenated into a single horizontal track.
// When the current line changes, the track scrolls so the current line
// is left-aligned in the viewport. Transition duration matches the line's
// time span so the scroll speed feels natural.
const lyricContainerRef = ref<HTMLElement | null>(null);
const lyricTrackRef = ref<HTMLElement | null>(null);
const lyricLineEls = ref<HTMLElement[]>([]);
const lyricTranslateX = ref(0);
const lyricTransitionDuration = ref(0);
let lyricPhase2Timer: ReturnType<typeof setTimeout> | null = null;

function setLyricLineEl(el: any, idx: number): void {
  if (el) lyricLineEls.value[idx] = el as HTMLElement;
}

function updateLyricScroll(): void {
  if (lyricPhase2Timer) {
    clearTimeout(lyricPhase2Timer);
    lyricPhase2Timer = null;
  }
  const container = lyricContainerRef.value;
  const idx = playerStore.currentLyricIndex;
  if (!container || idx < 0 || idx >= lyricLineEls.value.length) {
    lyricTransitionDuration.value = 0;
    lyricTranslateX.value = 0;
    return;
  }
  const lineEl = lyricLineEls.value[idx];
  if (!lineEl) return;

  const containerW = container.clientWidth;
  const lineLeft = lineEl.offsetLeft;
  const lineW = lineEl.offsetWidth;

  // If line fits in container: scroll to its start.
  // If line is wider than container: scroll from start to end-revealed
  //   position over the full line duration, so the whole line is visible
  //   by the time the next line starts.
  const line = playerStore.lyrics[idx];
  const dur = line?.next ? Math.max(500, (line.next.time - line.time) * 1000) : 5000;

  if (lineW <= containerW) {
    // Short line: snap to start quickly
    lyricTransitionDuration.value = Math.min(400, dur);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        lyricTranslateX.value = -lineLeft;
      });
    });
  } else {
    // Long line: scroll from start to end-revealed over full duration.
    // End-revealed position: line's right edge aligns with container's right.
    const endX = -(lineLeft + lineW - containerW);
    // Phase 1: quick scroll to line start (20% of duration, max 600ms)
    const phase1Dur = Math.min(600, dur * 0.2);
    lyricTransitionDuration.value = phase1Dur;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        lyricTranslateX.value = -lineLeft;
      });
    });
    // Phase 2: slow scroll to end-revealed (remaining duration)
    setTimeout(() => {
      lyricTransitionDuration.value = dur - phase1Dur;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          lyricTranslateX.value = endX;
        });
      });
    }, phase1Dur);
  }
}

watch(() => playerStore.currentLyricIndex, updateLyricScroll);
watch(() => playerStore.lyrics, () => {
  lyricLineEls.value = [];
  lyricTransitionDuration.value = 0;
  lyricTranslateX.value = 0;
  nextTick(() => updateLyricScroll());
});

// ===== Drag mode title marquee: pure CSS animation, JS only for overflow detection =====
const titleContainerRef = ref<HTMLElement | null>(null);
const titleOverflowing = ref(false);

function checkTitleOverflow(): void {
  const container = titleContainerRef.value;
  if (!container) {
    titleOverflowing.value = false;
    return;
  }
  const firstCopy = container.querySelector('.stmp-mini-title-copy') as HTMLElement | null;
  if (!firstCopy) {
    titleOverflowing.value = false;
    return;
  }
  // Compare pure text width (offsetWidth includes padding-right, subtract it)
  const textWidth = firstCopy.offsetWidth - 30;
  titleOverflowing.value = textWidth > container.clientWidth;
}

watch(displayText, () => {
  nextTick(() => checkTitleOverflow());
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
  nextTick(() => {
    updateLyricScroll();
    checkTitleOverflow();
  });
});

onBeforeUnmount(() => {
  if (lyricPhase2Timer) clearTimeout(lyricPhase2Timer);
});
</script>

<template>
  <!-- ===== Dock mini (desktop & mobile unified) =====
       Left & right zones use flex:1 to balance, keeping center text
       truly centered relative to widget width. -->
  <div v-if="props.isDock" class="stmp-mini" :class="props.isMobile ? 'stmp-mini-dock-mobile' : 'stmp-mini-dock-desktop'">
    <div class="stmp-mini-side stmp-mini-side-left">
      <div class="stmp-mini-cover" v-if="coverUrl && !coverError">
        <img :src="coverUrl" alt="" @error="onCoverError" />
      </div>
      <div class="stmp-mini-cover stmp-mini-cover-placeholder" v-else>
        <Icon name="music" :size="14" />
      </div>
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
    <div class="stmp-mini-side stmp-mini-side-right">
      <div class="stmp-mini-controls">
        <button class="stmp-mini-btn" :aria-label="playerStore.isPlaying ? t('Pause') : t('Play')" @click="onPlay">
          <Icon :name="playerStore.isPlaying ? 'pause' : 'play'" :size="props.isMobile ? 16 : 14" />
        </button>
        <button class="stmp-mini-btn" :aria-label="t('Next')" @click="onNext">
          <Icon name="next" :size="props.isMobile ? 16 : 14" />
        </button>
      </div>
    </div>
  </div>

  <!-- ===== Drag mini (desktop & mobile unified) ===== -->
  <!-- Cover-only: no track, or text hidden by setting. Click anywhere to expand. -->
  <div v-else-if="!hasTrack || !dragShowText" class="stmp-mini stmp-mini-drag stmp-mini-drag-idle">
    <div class="stmp-mini-cover stmp-mini-cover-square">
      <img v-if="coverUrl && !coverError" :src="coverUrl" alt="" @error="onCoverError" />
      <Icon v-else name="music" :size="20" />
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
      <div ref="titleContainerRef" class="stmp-mini-title-drag" :class="{ overflowing: titleOverflowing }">
        <div class="stmp-mini-title-track" :key="displayText">
          <span class="stmp-mini-title-copy">{{ displayText }}</span>
          <span class="stmp-mini-title-copy" aria-hidden="true">{{ displayText }}</span>
        </div>
      </div>
      <div ref="lyricContainerRef" class="stmp-mini-lyric">
        <div
          ref="lyricTrackRef"
          class="stmp-mini-lyric-track"
          :style="{
            transform: `translateX(${lyricTranslateX}px)`,
            transition: lyricTransitionDuration > 0 ? `transform ${lyricTransitionDuration}ms linear` : 'none',
          }"
        >
          <span
            v-for="(line, i) in playerStore.lyrics"
            :key="i"
            :ref="(el) => setLyricLineEl(el, i)"
            class="stmp-mini-lyric-segment"
            :class="{ active: i === playerStore.currentLyricIndex }"
          >{{ line.text }}&nbsp;&nbsp;</span>
          <span v-if="playerStore.lyrics.length === 0" class="stmp-mini-lyric-segment">{{ '\u00A0' }}</span>
        </div>
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

/* Left & right balance zones: equal flex-grow so center text stays
   truly centered. Center gets 3x to maximize lyric space (1:3:1). */
.stmp-mini-side {
  flex: 1 1 0;
  display: flex;
  align-items: center;
  min-width: 0;
  overflow: hidden;
}
.stmp-mini-side-left {
  justify-content: flex-start;
}
.stmp-mini-side-right {
  justify-content: flex-end;
}

.stmp-mini-cover {
  flex-shrink: 0;
  overflow: hidden;
  border-radius: 6px;
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
/* Left and right zones get flex:1 with equal force so the center text
   zone stays truly centered relative to the widget. */
.stmp-mini-dock-text {
  flex: 3 1 0;
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
  border-radius: calc(var(--stmp-radius, 16px) - 3px);
  border: none;
  cursor: pointer;
  padding: 0;
  background: color-mix(in srgb, var(--stmp-bg, #1a1a2e) 60%, transparent);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--stmp-text-dim, #999);
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
  border-radius: calc(var(--stmp-radius, 16px) - 3px);
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

.stmp-mini-title-drag {
  font-size: calc(var(--mainFontSize, 14px) * 0.75);
  max-width: 70px;
  overflow: hidden;
  position: relative;
  white-space: nowrap;
}

.stmp-mini-title-track {
  display: inline-flex;
  width: max-content;
}

.stmp-mini-title-copy {
  flex-shrink: 0;
  white-space: nowrap;
  padding-right: 30px;
}

.stmp-mini-title-drag.overflowing .stmp-mini-title-track {
  animation: stmp-title-marquee 8s linear infinite;
}

@keyframes stmp-title-marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

/* Lyric: continuous horizontal scroll, all lines in one track */
.stmp-mini-lyric {
  font-size: calc(var(--mainFontSize, 14px) * 0.65);
  white-space: nowrap;
  color: var(--stmp-text-dim, #999);
  max-width: 70px;
  overflow: hidden;
  position: relative;
}

.stmp-mini-lyric-track {
  display: inline-flex;
  width: max-content;
}

.stmp-mini-lyric-segment {
  flex-shrink: 0;
  white-space: nowrap;
  opacity: 0.35;
  transition: opacity 0.3s ease;
}

.stmp-mini-lyric-segment.active {
  opacity: 1;
}
</style>
