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
    <Icon name="music" :size="14" class="stmp-collapsed-icon" />
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
  gap: 6px;
  padding: 2px 8px;
  user-select: none;
  overflow: hidden;
  touch-action: none;
}

.stmp-collapsed-icon {
  opacity: 0.4;
  flex-shrink: 0;
  color: var(--SmartThemeBodyColor, #ccc);
}

.stmp-collapsed-title {
  flex: 1;
  font-size: calc(var(--fontSize, 14px) * 0.85);
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

/* In drag mode (widget is narrow pill): constrain width */
.stmp-collapsed-bar:has(.stmp-collapsed-icon) {
  /* default */
}

.stmp-widget:not(.stmp-dock) .stmp-collapsed-bar {
  max-width: min(200px, calc(100vw - 60px));
}
</style>
