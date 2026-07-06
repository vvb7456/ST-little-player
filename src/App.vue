<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue';
import { useSettingsStore, usePlayerStore } from '@/stores/index';
import CollapsedBar from './components/CollapsedBar.vue';
import PlayerPanel from './components/PlayerPanel.vue';

const settingsStore = useSettingsStore();
const playerStore = usePlayerStore();

const isExpanded = ref(false);
const widgetRef = ref<HTMLElement | null>(null);

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

// Whether the widget is user-dragged (free position) or docked above input
let isUserPositioned = false;

function startDrag(e: PointerEvent): void {
  const target = e.target as HTMLElement;

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

  isUserPositioned = true;
  if (widgetRef.value) {
    const rect = widgetRef.value.getBoundingClientRect();
    settingsStore.setPosition({ x: rect.left, y: rect.top });
    if (isExpanded.value) {
      nextTick(() => clampToViewport());
    }
  }
}

function clampToViewport(): void {
  if (!widgetRef.value) return;
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

/**
 * Dock the widget above ST's input bar (#send_form), left-aligned.
 * Used for both mini and expanded modes when the user hasn't dragged it elsewhere.
 */
function dockAboveInput(): void {
  if (!widgetRef.value || isUserPositioned) return;

  const sendForm = document.querySelector('#send_form');
  let bottomAnchor = window.innerHeight;
  if (sendForm) {
    const rect = sendForm.getBoundingClientRect();
    bottomAnchor = rect.top;
  }

  const h = widgetRef.value.offsetHeight || 38;
  let top = bottomAnchor - h - 4;
  // Clamp: never go above viewport top
  if (top < 4) top = 4;
  widgetRef.value.style.left = '8px';
  widgetRef.value.style.top = top + 'px';
  widgetRef.value.style.right = 'auto';
  widgetRef.value.style.bottom = 'auto';
}

function toggleExpand(): void {
  isExpanded.value = !isExpanded.value;
  nextTick(() => {
    if (isUserPositioned) {
      clampToViewport();
    } else {
      dockAboveInput();
    }
  });
}

onMounted(() => {
  const pos = settingsStore.settings.position;
  if (pos && pos.x !== undefined && widgetRef.value) {
    isUserPositioned = true;
    widgetRef.value.style.left = pos.x + 'px';
    widgetRef.value.style.top = pos.y + 'px';
    widgetRef.value.style.right = 'auto';
    widgetRef.value.style.bottom = 'auto';
  }
  // Always dock on mount (unless user already has a saved position)
  nextTick(() => dockAboveInput());

  window.addEventListener('resize', () => {
    if (!isUserPositioned) nextTick(() => dockAboveInput());
  });
  window.addEventListener('keydown', onKeyDown);
});

onBeforeUnmount(() => {
  stopDrag();
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
  touch-action: auto;
}

.stmp-collapsed {
  cursor: grab;
  touch-action: none;
}

.stmp-collapsed:active {
  cursor: grabbing;
}

.stmp-expanded {
  width: min(360px, calc(100vw - 16px));
  padding: 12px;
  cursor: default;
}

.stmp-expanded .stmp-drag-handle {
  cursor: grab;
  touch-action: none;
}

.stmp-expanded .stmp-drag-handle:active {
  cursor: grabbing;
}

.stmp-widget *:focus-visible {
  outline: 2px solid var(--stmp-accent, #7e57c2);
  outline-offset: 2px;
}
</style>
