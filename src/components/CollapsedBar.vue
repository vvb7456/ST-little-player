<script setup lang="ts">
import { ref, computed, watch, nextTick } from 'vue';
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

const displayText = computed(() => {
  const track = playerStore.currentTrack;
  if (!track) return t('No Song');
  const name = track.name;
  const artist = track.artist || '';
  return artist ? `${name} - ${artist}` : name;
});

const currentLyric = computed(() => {
  const idx = playerStore.currentLyricIndex;
  if (idx < 0 || idx >= playerStore.lyrics.length) return '';
  return playerStore.lyrics[idx].text;
});

const lyricScrollRef = ref<HTMLElement | null>(null);
const lyricIsScrolling = ref(false);

watch(currentLyric, async () => {
  await nextTick();
  const el = lyricScrollRef.value;
  if (!el) {
    lyricIsScrolling.value = false;
    return;
  }
  lyricIsScrolling.value = el.scrollWidth > el.clientWidth;
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
</script>

<template>
  <!-- ===== Desktop Dock mini: single row, cover + text + controls ===== -->
  <div v-if="props.isDock && !props.isMobile" class="stmp-mini stmp-mini-dock-desktop">
    <div class="stmp-mini-cover" v-if="coverUrl && !coverError">
      <img :src="coverUrl" alt="" @error="onCoverError" />
    </div>
    <div class="stmp-mini-cover stmp-mini-cover-placeholder" v-else>
      <Icon name="music" :size="14" />
    </div>
    <span class="stmp-mini-text">{{ displayText }}</span>
    <div class="stmp-mini-controls">
      <button class="stmp-mini-btn" :aria-label="playerStore.isPlaying ? t('Pause') : t('Play')" @click="onPlay">
        <Icon :name="playerStore.isPlaying ? 'pause' : 'play'" :size="14" />
      </button>
      <button class="stmp-mini-btn" :aria-label="t('Next')" @click="onNext">
        <Icon name="next" :size="14" />
      </button>
    </div>
  </div>

  <!-- ===== Mobile Dock mini: full width, cover + text + controls ===== -->
  <div v-else-if="props.isDock && props.isMobile" class="stmp-mini stmp-mini-dock-mobile">
    <div class="stmp-mini-cover" v-if="coverUrl && !coverError">
      <img :src="coverUrl" alt="" @error="onCoverError" />
    </div>
    <div class="stmp-mini-cover stmp-mini-cover-placeholder" v-else>
      <Icon name="music" :size="14" />
    </div>
    <span class="stmp-mini-text">{{ displayText }}</span>
    <div class="stmp-mini-controls">
      <button class="stmp-mini-btn" :aria-label="playerStore.isPlaying ? t('Pause') : t('Play')" @click="onPlay">
        <Icon :name="playerStore.isPlaying ? 'pause' : 'play'" :size="16" />
      </button>
      <button class="stmp-mini-btn" :aria-label="t('Next')" @click="onNext">
        <Icon name="next" :size="16" />
      </button>
    </div>
  </div>

  <!-- ===== Drag mini (desktop & mobile unified): cover + 2 rows ===== -->
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
      <div class="stmp-mini-lyric">
        <span
          ref="lyricScrollRef"
          class="stmp-mini-lyric-scroll"
          :class="{ scrolling: lyricIsScrolling }"
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
  flex: 1;
  font-size: calc(var(--mainFontSize, 14px) * 0.82);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--stmp-text, #ccc);
  min-width: 0;
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

.stmp-mini-dock-mobile .stmp-mini-text {
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
}

/* Lyric: horizontal scroll instead of ellipsis */
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

.stmp-mini-lyric-scroll.scrolling {
  animation: stmp-marquee 8s linear infinite;
}

@keyframes stmp-marquee {
  0%, 10% { transform: translateX(0); }
  90%, 100% { transform: translateX(calc(-100% + 70px)); }
}
</style>
