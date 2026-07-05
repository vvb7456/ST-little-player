<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useSettingsStore, usePlayerStore } from '@/stores/index';
import CollapsedBar from './components/CollapsedBar.vue';
import PlayerPanel from './components/PlayerPanel.vue';

const settingsStore = useSettingsStore();
const playerStore = usePlayerStore();

const isExpanded = ref(false);
const widgetRef = ref<HTMLElement | null>(null);

const isMobile = ref(typeof window !== 'undefined' && window.innerWidth < 768);
const updateMobile = (): void => {
  isMobile.value = window.innerWidth < 768;
};

const onKeyDown = (e: KeyboardEvent): void => {
  if (e.key === 'Escape') isExpanded.value = false;
  if (e.key === ' ' && e.target === document.body) {
    e.preventDefault();
    void playerStore.togglePlay();
  }
};

// Drag state
let dragStartX = 0;
let dragStartY = 0;
let widgetStartX = 0;
let widgetStartY = 0;
let dragMoved = false;
let boundOnDrag: ((e: PointerEvent) => void) | null = null;
let boundStopDrag: (() => void) | null = null;

function startDrag(e: PointerEvent): void {
  if (isMobile.value || isExpanded.value) return;
  if ((e.target as HTMLElement).closest('button')) return;
  dragStartX = e.clientX;
  dragStartY = e.clientY;
  const pos = settingsStore.settings.position;
  widgetStartX = pos?.x ?? (widgetRef.value?.offsetLeft ?? 0);
  widgetStartY = pos?.y ?? (widgetRef.value?.offsetTop ?? 0);
  dragMoved = false;

  boundOnDrag = onDrag;
  boundStopDrag = stopDrag;
  document.addEventListener('pointermove', boundOnDrag);
  document.addEventListener('pointerup', boundStopDrag);
}

function onDrag(e: PointerEvent): void {
  if (!widgetRef.value) return;
  const dx = e.clientX - dragStartX;
  const dy = e.clientY - dragStartY;
  if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
    dragMoved = true;
  }
  let newX = widgetStartX + dx;
  let newY = widgetStartY + dy;
  const maxX = window.innerWidth - (widgetRef.value.offsetWidth || 60);
  const maxY = window.innerHeight - (widgetRef.value.offsetHeight || 40);
  newX = Math.max(0, Math.min(newX, maxX));
  newY = Math.max(0, Math.min(newY, maxY));
  widgetRef.value.style.left = newX + 'px';
  widgetRef.value.style.top = newY + 'px';
  widgetRef.value.style.right = 'auto';
  widgetRef.value.style.bottom = 'auto';
}

function stopDrag(): void {
  if (boundOnDrag) document.removeEventListener('pointermove', boundOnDrag);
  if (boundStopDrag) document.removeEventListener('pointerup', boundStopDrag);
  boundOnDrag = null;
  boundStopDrag = null;
  if (!dragMoved) {
    toggleExpand();
    return;
  }
  if (widgetRef.value) {
    settingsStore.setPosition({
      x: widgetRef.value.offsetLeft,
      y: widgetRef.value.offsetTop,
    });
  }
}

function toggleExpand(): void {
  isExpanded.value = !isExpanded.value;
}

onMounted(() => {
  const pos = settingsStore.settings.position;
  if (pos && widgetRef.value && !isMobile.value) {
    widgetRef.value.style.left = pos.x + 'px';
    widgetRef.value.style.top = pos.y + 'px';
    widgetRef.value.style.right = 'auto';
    widgetRef.value.style.bottom = 'auto';
  }
  window.addEventListener('resize', updateMobile);
  window.addEventListener('keydown', onKeyDown);
});

onBeforeUnmount(() => {
  stopDrag();
  window.removeEventListener('resize', updateMobile);
  window.removeEventListener('keydown', onKeyDown);
});
</script>

<template>
  <div
    ref="widgetRef"
    class="stmp-widget"
    :class="{
      'stmp-expanded': isExpanded,
      'stmp-collapsed': !isExpanded,
      'stmp-mobile': isMobile,
    }"
    @pointerdown="startDrag"
  >
    <CollapsedBar v-if="!isExpanded" @expand="toggleExpand" />
    <PlayerPanel v-else @collapse="toggleExpand" />
  </div>
</template>

<style scoped>
.stmp-widget {
  position: fixed;
  top: 16px;
  right: 16px;
  z-index: 999999;
  border-radius: 16px;
  background: color-mix(in srgb, var(--SmartThemeBlurTintColor, #1a1a2e) 75%, transparent);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 4px;
}

.stmp-collapsed:not(.stmp-mobile) {
  cursor: grab;
  touch-action: none;
}

.stmp-collapsed:not(.stmp-mobile):active {
  cursor: grabbing;
}

.stmp-expanded {
  width: 320px;
  padding: 12px;
}

.stmp-mobile {
  left: 0 !important;
  right: 0 !important;
  top: auto !important;
  bottom: 0 !important;
  width: 100% !important;
  border-radius: 16px 16px 0 0;
  max-height: 70vh;
  overflow-y: auto;
}

.stmp-mobile.stmp-expanded {
  max-height: 70vh;
}

.stmp-mobile.stmp-collapsed {
  border-radius: 8px 8px 0 0;
}

.stmp-widget *:focus-visible {
  outline: 2px solid var(--stmp-accent, #7e57c2);
  outline-offset: 2px;
}
</style>
