<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue';
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
let isDragging = false;
let boundOnDrag: ((e: PointerEvent) => void) | null = null;
let boundStopDrag: (() => void) | null = null;

function startDrag(e: PointerEvent): void {
  const target = e.target as HTMLElement;

  // On mobile: no drag, but allow tap to expand/collapse
  if (isMobile.value) {
    // Ignore taps on interactive elements
    if (target.closest('button')) return;
    toggleExpand();
    return;
  }

  // Never drag from these interactive elements
  if (target.closest('input, .stmp-tab, .stmp-result, .stmp-item, .stmp-upload-btn, .stmp-search-input, .stmp-controls, .stmp-lyrics, .stmp-lyrics-toggle, .stmp-tabs, .stmp-tab-content')) return;

  // In expanded mode: only drag from topbar handle, but not from the collapse button
  if (isExpanded.value) {
    if (!target.closest('.stmp-drag-handle')) return;
    if (target.closest('button')) return;
  }

  // In collapsed mode: drag from anywhere except the play button
  if (!isExpanded.value) {
    if (target.closest('button')) return;
  }

  // Use getBoundingClientRect for accurate position (works with right/left/top/bottom)
  const rect = widgetRef.value?.getBoundingClientRect();
  if (!rect) return;

  dragStartX = e.clientX;
  dragStartY = e.clientY;
  widgetStartX = rect.left;
  widgetStartY = rect.top;
  dragMoved = false;
  isDragging = true;

  // Immediately switch to left/top positioning to avoid jump
  if (widgetRef.value) {
    widgetRef.value.style.left = rect.left + 'px';
    widgetRef.value.style.top = rect.top + 'px';
    widgetRef.value.style.right = 'auto';
    widgetRef.value.style.bottom = 'auto';
  }

  boundOnDrag = onDrag;
  boundStopDrag = stopDrag;
  document.addEventListener('pointermove', boundOnDrag);
  document.addEventListener('pointerup', boundStopDrag);
  e.preventDefault();
}

function onDrag(e: PointerEvent): void {
  if (!widgetRef.value || !isDragging) return;
  const dx = e.clientX - dragStartX;
  const dy = e.clientY - dragStartY;
  if (Math.abs(dx) > 3 || Math.abs(dy) > 3) {
    dragMoved = true;
  }
  let newX = widgetStartX + dx;
  let newY = widgetStartY + dy;
  const w = widgetRef.value.offsetWidth || 60;
  const h = widgetRef.value.offsetHeight || 40;
  const maxX = window.innerWidth - w;
  const maxY = window.innerHeight - h;
  newX = Math.max(0, Math.min(newX, maxX));
  newY = Math.max(0, Math.min(newY, maxY));
  widgetRef.value.style.left = newX + 'px';
  widgetRef.value.style.top = newY + 'px';
}

function stopDrag(): void {
  isDragging = false;
  if (boundOnDrag) document.removeEventListener('pointermove', boundOnDrag);
  if (boundStopDrag) document.removeEventListener('pointerup', boundStopDrag);
  boundOnDrag = null;
  boundStopDrag = null;

  if (!dragMoved) {
    // It was a click, not a drag — toggle expand
    toggleExpand();
    return;
  }

  if (widgetRef.value) {
    settingsStore.setPosition({
      x: widgetRef.value.offsetLeft,
      y: widgetRef.value.offsetTop,
    });
    // After expanding, ensure widget stays fully visible
    if (isExpanded.value) {
      nextTick(() => clampToViewport());
    }
  }
}

function clampToViewport(): void {
  if (!widgetRef.value || isMobile.value) return;
  const rect = widgetRef.value.getBoundingClientRect();
  const w = widgetRef.value.offsetWidth;
  const h = widgetRef.value.offsetHeight;
  let x = rect.left;
  let y = rect.top;
  if (x + w > window.innerWidth) x = window.innerWidth - w;
  if (y + h > window.innerHeight) y = window.innerHeight - h;
  if (x < 0) x = 0;
  if (y < 0) y = 0;
  widgetRef.value.style.left = x + 'px';
  widgetRef.value.style.top = y + 'px';
  widgetRef.value.style.right = 'auto';
  widgetRef.value.style.bottom = 'auto';
  settingsStore.setPosition({ x, y });
}

function toggleExpand(): void {
  isExpanded.value = !isExpanded.value;
  if (isExpanded.value) {
    nextTick(() => clampToViewport());
  }
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
    <CollapsedBar v-if="!isExpanded" />
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

.stmp-expanded:not(.stmp-mobile) {
  cursor: default;
  touch-action: auto;
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
  touch-action: auto !important;
  z-index: 999999 !important;
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
