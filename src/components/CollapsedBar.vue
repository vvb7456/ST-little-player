<script setup lang="ts">
import { computed } from 'vue';
import { usePlayerStore } from '@/stores/index';

defineEmits<{ expand: [] }>();

const playerStore = usePlayerStore();

const songName = computed(() => playerStore.currentTrack?.name || '未播放');
</script>

<template>
  <div class="stmp-collapsed-bar" @click="$emit('expand')">
    <span class="stmp-collapsed-title">{{ songName }}</span>
    <button
      class="stmp-collapsed-btn"
      :aria-label="playerStore.isPlaying ? '暂停' : '播放'"
      @click.stop="playerStore.togglePlay()"
    >
      {{ playerStore.isPlaying ? '⏸' : '▶' }}
    </button>
  </div>
</template>

<style scoped>
.stmp-collapsed-bar {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  cursor: pointer;
  user-select: none;
  max-width: 220px;
  overflow: hidden;
  touch-action: none;
}

.stmp-collapsed-title {
  font-size: calc(var(--fontSize, 14px) * 0.9);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--SmartThemeBodyColor, #fff);
}

.stmp-collapsed-btn {
  background: none;
  border: none;
  color: var(--SmartThemeBodyColor, #fff);
  font-size: 16px;
  cursor: pointer;
  padding: 0 4px;
  line-height: 1;
  flex-shrink: 0;
}
</style>
