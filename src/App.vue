<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, nextTick, watch } from 'vue';
import { useSettingsStore, usePlayerStore } from '@/stores/index';
import CollapsedBar from './components/CollapsedBar.vue';
import PlayerPanel from './components/PlayerPanel.vue';

const settingsStore = useSettingsStore();
const playerStore = usePlayerStore();

const isExpanded = ref(false);
const widgetRef = ref<HTMLElement | null>(null);

const isDock = computed(() => settingsStore.settings.widgetMode === 'dock');

const onKeyDown = (e: KeyboardEvent): void => {
  if (e.key === 'Escape') isExpanded.value = false;
  if (e.key === ' ' && e.target === document.body) {
    e.preventDefault();
    void playerStore.togglePlay();
  }
};

// ===== Drag state (drag mode only) =====
let dragStartX = 0;
let dragStartY = 0;
let widgetStartX = 0;
let widgetStartY = 0;
let dragMoved = false;
let isDragging = false;
let boundOnDrag: ((e: PointerEvent) => void) | null = null;
let boundStopDrag: (() => void) | null = null;

function startDrag(e: PointerEvent): void {
  // Dock mode: no drag, click handler (onWidgetClick) handles toggle
  if (isDock.value) return;

  const target = e.target as HTMLElement;

  // Never drag from these interactive elements
  if (target.closest('input, .stmp-tab, .stmp-result, .stmp-item, .stmp-upload-btn, .stmp-search-input, .stmp-controls, .stmp-lyrics, .stmp-lyrics-toggle, .stmp-tabs, .stmp-tab-content')) return;

  // In expanded mode: only drag from topbar handle
  if (isExpanded.value) {
    if (!target.closest('.stmp-drag-handle')) return;
    if (target.closest('button')) return;
  }

  // In collapsed mode: drag from anywhere except buttons
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
    toggleExpand();
    return;
  }

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
 * Dock mode: position widget above ST's #send_form, aligned to its left edge.
 * Reads #send_form.getBoundingClientRect() live for responsive accuracy.
 */
function dockToInput(): void {
  if (!widgetRef.value || !isDock.value) return;

  const sendForm = document.querySelector('#send_form');
  if (!sendForm) return;

  const formRect = sendForm.getBoundingClientRect();
  const widgetH = widgetRef.value.offsetHeight || 38;

  // No gap — dock sits flush against the input bar
  let top = formRect.top - widgetH;
  // Clamp: never go above viewport
  if (top < 4) top = 4;

  // Mobile: match #send_form full width
  // Desktop: compact (collapsed) or fixed width (expanded), aligned to send_form left
  if (window.innerWidth <= 768) {
    widgetRef.value.style.left = formRect.left + 'px';
    widgetRef.value.style.width = formRect.width + 'px';
  } else {
    widgetRef.value.style.left = formRect.left + 'px';
    widgetRef.value.style.width = '';
  }

  widgetRef.value.style.top = top + 'px';
  widgetRef.value.style.right = 'auto';
  widgetRef.value.style.bottom = 'auto';
}

/**
 * Drag mode: restore saved position or default to top-right.
 */
function restoreDragPosition(): void {
  if (!widgetRef.value || isDock.value) return;
  const pos = settingsStore.settings.position;
  if (pos) {
    widgetRef.value.style.left = pos.x + 'px';
    widgetRef.value.style.top = pos.y + 'px';
  } else {
    // Default: top-right
    widgetRef.value.style.right = '16px';
    widgetRef.value.style.top = '16px';
    widgetRef.value.style.left = 'auto';
    widgetRef.value.style.bottom = 'auto';
  }
}

function onWidgetClick(e: MouseEvent): void {
  // Dock mode: only toggle expand when collapsed (clicking to open).
  // When expanded, only the collapse button (in PlayerPanel) closes it.
  if (isDock.value && !isExpanded.value) {
    const target = e.target as HTMLElement;
    if (target.closest('button, input')) return;
    toggleExpand();
  }
}

function toggleExpand(): void {
  isExpanded.value = !isExpanded.value;
  nextTick(() => {
    if (isDock.value) {
      dockToInput();
    } else {
      if (settingsStore.settings.position) {
        clampToViewport();
      }
    }
  });
}

// Reposition when mode switches
watch(() => settingsStore.settings.widgetMode, (mode) => {
  nextTick(() => {
    if (mode === 'dock') {
      dockToInput();
    } else {
      restoreDragPosition();
    }
  });
});

onMounted(() => {
  nextTick(() => {
    if (isDock.value) {
      dockToInput();
    } else {
      restoreDragPosition();
    }
  });

  // Reposition on resize (both modes need it)
  window.addEventListener('resize', onResize);
  window.addEventListener('keydown', onKeyDown);
});

function onResize(): void {
  if (isDock.value) {
    nextTick(() => dockToInput());
  } else {
    if (settingsStore.settings.position) {
      nextTick(() => clampToViewport());
    }
  }
}

onBeforeUnmount(() => {
  stopDrag();
  window.removeEventListener('resize', onResize);
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
      'stmp-dock': isDock,
    }"
    @pointerdown="startDrag"
    @click="onWidgetClick"
  >
    <CollapsedBar v-if="!isExpanded" />
    <PlayerPanel v-else @collapse="toggleExpand" />
  </div>
</template>

<style scoped>
.stmp-widget {
  position: fixed;
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

/* ===== Dock mode: flush with input bar, no floating look ===== */
.stmp-dock {
  border-radius: 10px 10px 0 0;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-bottom: none;
  box-shadow: none;
  background: var(--SmartThemeBlurTintColor, #1a1a2e);
  padding: 2px 8px;
}

/* Desktop dock collapsed: compact pill, not full width */
@media (min-width: 769px) {
  .stmp-dock.stmp-collapsed {
    width: auto;
  }
}

/* Dock expanded: responsive width */
.stmp-dock.stmp-expanded {
  padding: 10px;
}

@media (min-width: 769px) {
  .stmp-dock.stmp-expanded {
    width: min(360px, calc(100vw - 16px));
  }
}

/* ===== Drag mode: floating glass widget ===== */

/* Drag mode collapsed: draggable */
.stmp-collapsed:not(.stmp-dock) {
  cursor: grab;
  touch-action: none;
}

.stmp-collapsed:not(.stmp-dock):active {
  cursor: grabbing;
}

/* Dock mode collapsed: clickable */
.stmp-collapsed.stmp-dock {
  cursor: pointer;
}

/* Expanded: default cursor, only drag handle grabs (drag mode only) */
.stmp-expanded {
  cursor: default;
}

.stmp-expanded:not(.stmp-dock) {
  width: min(360px, calc(100vw - 16px));
  padding: 12px;
}

.stmp-expanded:not(.stmp-dock) :deep(.stmp-drag-handle) {
  cursor: grab;
  touch-action: none;
}

.stmp-expanded:not(.stmp-dock) :deep(.stmp-drag-handle):active {
  cursor: grabbing;
}

.stmp-widget *:focus {
  outline: none;
  box-shadow: none;
}

.stmp-widget *:focus-visible {
  outline: 2px solid var(--stmp-accent, #7e57c2);
  outline-offset: 2px;
}
</style>
