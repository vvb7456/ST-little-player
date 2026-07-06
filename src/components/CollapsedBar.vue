<script setup lang="ts">
import { computed } from 'vue';
import { usePlayerStore } from '@/stores/index';
import Icon from './Icon.vue';
import { t } from '@/i18n';

const playerStore = usePlayerStore();

const songName = computed(() => playerStore.currentTrack?.name || t('No Song'));
</script>

<template>
  <div class="stmp-collapsed-bar">
    <span class="stmp-collapsed-title">{{ songName }}</span>
    <button
      class="stmp-icon-btn"
      :aria-label="playerStore.isPlaying ? t('Pause') : t('Play')"
      @click.stop="playerStore.togglePlay()"
    >
      <Icon :name="playerStore.isPlaying ? 'pause' : 'play'" :size="16" />
    </button>
  </div>
</template>

<style scoped>
.stmp-collapsed-bar {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  user-select: none;
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

.stmp-icon-btn {
  background: none;
  border: none;
  color: var(--SmartThemeBodyColor, #fff);
  cursor: pointer;
  padding: 0 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
</style>
