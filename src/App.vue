<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, nextTick, watch } from 'vue';
import { useSettingsStore, usePlayerStore } from '@/stores/index';
import CollapsedBar from './components/CollapsedBar.vue';
import PlayerPanel from './components/PlayerPanel.vue';

const settingsStore = useSettingsStore();
const playerStore = usePlayerStore();

const isExpanded = ref(false);
const widgetRef = ref<HTMLElement | null>(null);
let resizeObs: ResizeObserver | null = null;

const isDock = computed(() => settingsStore.settings.widgetMode === 'dock');
const isInline = computed(() => settingsStore.settings.widgetMode === 'inline');
const isHidden = computed(() => settingsStore.settings.widgetMode === 'hidden');
const isMobile = ref(window.innerWidth <= 768);
const sendFormReady = ref(false);

/** Whether dock is aligned to top (below ST toolbar) vs bottom (above input bar). */
const isDockTop = computed(() => settingsStore.settings.dockAlign.startsWith('top-'));

/** Opacity for widget background. When customOpacity is off, default 75%. */
const bgOpacity = computed(() => {
  if (settingsStore.settings.customOpacity) {
    return settingsStore.settings.opacity;
  }
  return 75;
});

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
let dragStartTime = 0;
let suppressClick = false;
const DRAG_THRESHOLD = 3;
const LONG_PRESS_MS = 500;
let boundOnDrag: ((e: PointerEvent) => void) | null = null;
let boundStopDrag: (() => void) | null = null;

// Cached dimensions to avoid layout reflow on every pointermove
let dragWidgetW = 0;
let dragWidgetH = 0;
let dragMaxX = 0;
let dragMaxY = 0;
let rafId = 0;
let pendingX = 0;
let pendingY = 0;

function startDrag(e: PointerEvent): void {
  // Dock mode: no drag, click handler (onWidgetClick) handles toggle
  if (isDock.value) return;

  const target = e.target as HTMLElement;

  // Never drag from these interactive elements
  if (target.closest('input, .stmp-result, .stmp-item, .stmp-upload-btn, .stmp-search-input, .stmp-controls, .stmp-lyrics, .stmp-overlay, .stmp-display, .stmp-overlay-close')) return;

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
  dragStartTime = Date.now();
  suppressClick = false;

  if (widgetRef.value) {
    widgetRef.value.style.left = rect.left + 'px';
    widgetRef.value.style.top = rect.top + 'px';
    widgetRef.value.style.right = 'auto';
    widgetRef.value.style.bottom = 'auto';
  }

  boundOnDrag = onDrag;
  boundStopDrag = stopDrag;

  // Cache dimensions once to avoid reflow on every pointermove
  const el = widgetRef.value;
  if (!el) return;
  dragWidgetW = el.offsetWidth || 60;
  dragWidgetH = el.offsetHeight || 40;
  dragMaxX = window.innerWidth - dragWidgetW;
  dragMaxY = window.innerHeight - dragWidgetH;

  document.addEventListener('pointermove', boundOnDrag);
  document.addEventListener('pointerup', boundStopDrag);
  e.preventDefault();
}

function onDrag(e: PointerEvent): void {
  if (!widgetRef.value || !isDragging) return;
  const dx = e.clientX - dragStartX;
  const dy = e.clientY - dragStartY;
  if (Math.abs(dx) > DRAG_THRESHOLD || Math.abs(dy) > DRAG_THRESHOLD) {
    dragMoved = true;
  }
  let newX = widgetStartX + dx;
  let newY = widgetStartY + dy;
  newX = Math.max(0, Math.min(newX, dragMaxX));
  newY = Math.max(0, Math.min(newY, dragMaxY));
  pendingX = newX;
  pendingY = newY;
  if (!rafId) {
    rafId = requestAnimationFrame(() => {
      rafId = 0;
      if (widgetRef.value) {
        widgetRef.value.style.left = pendingX + 'px';
        widgetRef.value.style.top = pendingY + 'px';
      }
    });
  }
}

function stopDrag(): void {
  isDragging = false;
  if (rafId) {
    cancelAnimationFrame(rafId);
    rafId = 0;
    // Flush final position
    if (widgetRef.value) {
      widgetRef.value.style.left = pendingX + 'px';
      widgetRef.value.style.top = pendingY + 'px';
    }
  }
  if (boundOnDrag) document.removeEventListener('pointermove', boundOnDrag);
  if (boundStopDrag) document.removeEventListener('pointerup', boundStopDrag);
  boundOnDrag = null;
  boundStopDrag = null;

  const heldMs = Date.now() - dragStartTime;

  if (dragMoved) {
    // Suppress the click event that follows pointerup after a drag
    suppressClick = true;
    if (widgetRef.value) {
      const rect = widgetRef.value.getBoundingClientRect();
      settingsStore.setPosition({ x: rect.left, y: rect.top });
      if (isExpanded.value) {
        nextTick(() => clampToViewport());
      }
    }
    return;
  }

  // No movement — distinguish tap vs long-press
  if (heldMs > LONG_PRESS_MS) {
    // Long-press without movement: suppress expand (user was reading/resting)
    suppressClick = true;
    return;
  }

  // Quick tap: let onWidgetClick handle the expand
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
 * Dock mode: position widget relative to ST's #send_form (bottom) or
 * #top-settings-holder (top), aligned left or right.
 * Reads getBoundingClientRect() live for responsive accuracy.
 */
function dockToInput(): void {
  if (!widgetRef.value || !isDock.value) return;

  const align = settingsStore.settings.dockAlign;
  const topMode = align.startsWith('top-');
  const rightSide = align.endsWith('-right');

  // Anchor element: #send_form for bottom, #top-settings-holder for top
  const anchor = topMode
    ? document.querySelector('#top-settings-holder')
    : document.querySelector('#send_form');
  if (!anchor) return;

  const anchorRect = anchor.getBoundingClientRect();
  const widgetH = widgetRef.value.offsetHeight || 38;

  if (topMode) {
    // Position below the top toolbar, flush against it
    const maxH = Math.max(80, window.innerHeight - anchorRect.bottom - 8);
    widgetRef.value.style.maxHeight = maxH + 'px';
    widgetRef.value.style.top = anchorRect.bottom + 'px';
  } else {
    // Position above the input bar, flush against it
    const maxH = Math.max(80, anchorRect.top - 8);
    widgetRef.value.style.maxHeight = maxH + 'px';
    let top = anchorRect.top - Math.min(widgetH, maxH);
    if (top < 4) top = 4;
    widgetRef.value.style.top = top + 'px';
  }

  // Mobile: match anchor full width
  // Desktop: compact, aligned left or right
  if (window.innerWidth <= 768) {
    widgetRef.value.style.left = anchorRect.left + 'px';
    widgetRef.value.style.width = anchorRect.width + 'px';
  } else {
    const widgetW = widgetRef.value.offsetWidth;
    if (rightSide) {
      widgetRef.value.style.left = (anchorRect.right - widgetW) + 'px';
    } else {
      widgetRef.value.style.left = anchorRect.left + 'px';
    }
    widgetRef.value.style.width = '';
  }

  widgetRef.value.style.right = 'auto';
  widgetRef.value.style.bottom = 'auto';
}

/**
 * Drag mode: restore saved position or default to top-right.
 * On mobile, always clamp to viewport since saved positions may be
 * from a larger desktop screen.
 */
function restoreDragPosition(): void {
  if (!widgetRef.value || isDock.value) return;
  const pos = settingsStore.settings.position;
  if (pos) {
    widgetRef.value.style.left = pos.x + 'px';
    widgetRef.value.style.top = pos.y + 'px';
    widgetRef.value.style.right = 'auto';
    widgetRef.value.style.bottom = 'auto';
    // On mobile, saved desktop coords may be off-screen — clamp
    if (window.innerWidth <= 768) {
      nextTick(() => clampToViewport());
    }
  } else {
    // Default: top-right (use JS coords since body{position:fixed} on mobile
    // would make CSS right/top relative to body, not viewport)
    widgetRef.value.style.left = (window.innerWidth - widgetRef.value.offsetWidth - 16) + 'px';
    widgetRef.value.style.top = '16px';
    widgetRef.value.style.right = 'auto';
    widgetRef.value.style.bottom = 'auto';
  }
}

function onWidgetClick(e: MouseEvent): void {
  // Suppress click after drag or long-press
  if (suppressClick) {
    suppressClick = false;
    return;
  }
  // Dock mode: only toggle expand when collapsed (clicking to open).
  // When expanded, only the collapse button (in PlayerPanel) closes it.
  if (isDock.value && !isExpanded.value) {
    const target = e.target as HTMLElement;
    if (target.closest('button, input')) return;
    toggleExpand();
    return;
  }
  // Drag mode: tap to expand when collapsed
  if (!isDock.value && !isExpanded.value) {
    const target = e.target as HTMLElement;
    if (target.closest('button, input')) return;
    toggleExpand();
  }
}

/** Inline mode collapsed bar click: expand */
function onInlineClick(e: MouseEvent): void {
  if (isExpanded.value) return;
  const target = e.target as HTMLElement;
  if (target.closest('button, input')) return;
  toggleExpand();
}

function toggleExpand(): void {
  isExpanded.value = !isExpanded.value;
  nextTick(() => {
    if (isDock.value) {
      dockToInput();
    } else if (!isInline.value) {
      if (settingsStore.settings.position) {
        clampToViewport();
      }
    }
    // inline mode: CSS handles layout, no JS positioning needed
  });
}

// Reposition when mode switches
watch(() => settingsStore.settings.widgetMode, (mode) => {
  // Reset isExpanded and clear inline styles from previous mode
  isExpanded.value = false;
  if (widgetRef.value) {
    widgetRef.value.style.width = '';
    widgetRef.value.style.left = '';
    widgetRef.value.style.top = '';
    widgetRef.value.style.right = '';
    widgetRef.value.style.bottom = '';
    widgetRef.value.style.maxHeight = '';
  }
  if (mode === 'inline') {
    sendFormReady.value = !!document.querySelector('#send_form');
  }
  nextTick(() => {
    if (mode === 'dock') {
      dockToInput();
    } else if (mode === 'drag') {
      restoreDragPosition();
    }
  });
});

// Reposition when dock alignment changes
watch(() => settingsStore.settings.dockAlign, () => {
  if (isDock.value) {
    nextTick(() => dockToInput());
  }
});

onMounted(() => {
  sendFormReady.value = !!document.querySelector('#send_form');
  nextTick(() => {
    if (isDock.value) {
      dockToInput();
    } else if (!isInline.value) {
      restoreDragPosition();
    }
  });

  // Re-position dock when widget size changes (e.g. search results load)
  if (widgetRef.value && typeof ResizeObserver !== 'undefined') {
    resizeObs = new ResizeObserver(() => {
      if (isDock.value) dockToInput();
    });
    resizeObs.observe(widgetRef.value);
  }

  // Reposition on resize (both modes need it)
  window.addEventListener('resize', onResize);
  window.addEventListener('keydown', onKeyDown);
});

function onResize(): void {
  isMobile.value = window.innerWidth <= 768;
  if (isDock.value) {
    nextTick(() => dockToInput());
  } else if (!isInline.value) {
    // Drag mode: always clamp on resize (e.g. orientation change, mobile)
    nextTick(() => clampToViewport());
  }
}

onBeforeUnmount(() => {
  stopDrag();
  if (resizeObs) {
    resizeObs.disconnect();
    resizeObs = null;
  }
  window.removeEventListener('resize', onResize);
  window.removeEventListener('keydown', onKeyDown);
});
</script>

<template>
  <!-- ===== Inline mode: both collapsed and expanded inside #send_form ===== -->
  <template v-if="isInline">
    <Teleport v-if="sendFormReady" to="#send_form">
      <!-- Collapsed: compact bar -->
      <div v-if="!isExpanded" class="stmp-inline-bar" @click="onInlineClick">
        <CollapsedBar :is-dock="true" :is-mobile="true" />
      </div>
      <!-- Expanded: full player panel inline -->
      <div v-else class="stmp-inline-expanded">
        <PlayerPanel @collapse="toggleExpand" />
      </div>
    </Teleport>
  </template>

  <!-- ===== Dock / Drag / Hidden modes ===== -->
  <div
    v-else-if="!isHidden"
    ref="widgetRef"
    class="stmp-widget"
    :class="{
      'stmp-expanded': isExpanded,
      'stmp-collapsed': !isExpanded,
      'stmp-dock': isDock,
      'stmp-dock-top': isDock && isDockTop,
      'stmp-dock-bottom': isDock && !isDockTop,
    }"
    :style="{ '--stmp-opacity': bgOpacity + '%' }"
    @pointerdown="startDrag"
    @click="onWidgetClick"
  >
    <CollapsedBar v-if="!isExpanded" :is-dock="isDock" :is-mobile="isMobile" />
    <PlayerPanel v-else @collapse="toggleExpand" />
  </div>
</template>

<style scoped>
/* ===== Shared CSS variables (inherited by all mode variants) ===== */
.stmp-widget,
.stmp-inline-bar,
.stmp-inline-expanded {
  --stmp-accent: var(--SmartThemeQuoteColor, #7e57c2);
  --stmp-text: var(--SmartThemeBodyColor, #ccc);
  --stmp-text-dim: var(--SmartThemeEmColor, #999);
  --stmp-bg: var(--SmartThemeBlurTintColor, #1a1a2e);
  --stmp-border: var(--SmartThemeBorderColor, rgba(255, 255, 255, 0.08));
  --stmp-blur: blur(var(--SmartThemeBlurStrength, 10px));
  --stmp-hover: color-mix(in srgb, var(--SmartThemeBodyColor, #ccc) 8%, transparent);
  --stmp-track: color-mix(in srgb, var(--SmartThemeBodyColor, #ccc) 15%, transparent);
  --stmp-shadow: 0 4px 24px var(--SmartThemeShadowColor, rgba(0, 0, 0, 0.4));
}

/* ===== ST theme variable aliases (inherited by all child components) ===== */
.stmp-widget {
  --stmp-radius: 16px;

  --stmp-pad-x: 4px;
  --stmp-pad-y: 4px;

  position: fixed;
  z-index: 100;
  border-radius: 16px;
  overflow: hidden;
  background: color-mix(in srgb, var(--SmartThemeBlurTintColor, #1a1a2e) var(--stmp-opacity, 75%), transparent);
  backdrop-filter: var(--stmp-blur);
  -webkit-backdrop-filter: var(--stmp-blur);
  box-shadow: var(--stmp-shadow);
  border: 1px solid var(--stmp-border);
  padding: 4px;
  touch-action: auto;
}

/* Drag mode: prevent browser scroll/pinch from interfering with pointer drag */
.stmp-widget:not(.stmp-dock) {
  touch-action: none;
}

/* ===== Dock mode: bottom (above input bar) ===== */
.stmp-dock-bottom {
  --stmp-radius: 10px 10px 0 0;
  --stmp-pad-x: 8px;
  --stmp-pad-y: 2px;
  border-radius: 10px 10px 0 0;
  border: 1px solid var(--stmp-border);
  border-bottom: none;
  box-shadow: none;
  padding: 2px 8px;
}

/* ===== Dock mode: top (below ST toolbar) ===== */
.stmp-dock-top {
  --stmp-radius: 0 0 10px 10px;
  --stmp-pad-x: 8px;
  --stmp-pad-y: 2px;
  border-radius: 0 0 10px 10px;
  border: 1px solid var(--stmp-border);
  border-top: none;
  box-shadow: none;
  padding: 2px 8px;
}

/* ===== Inline mode: bar embedded in #send_form ===== */
.stmp-inline-bar {
  --stmp-radius: 0;

  order: -1;
  width: 100%;
  cursor: pointer;
  border-bottom: 1px solid var(--SmartThemeBorderColor, rgba(255, 255, 255, 0.08));
}

/* Inline expanded: full player panel inside #send_form */
.stmp-inline-expanded {
  --stmp-radius: 0;
  --stmp-pad-x: 12px;
  --stmp-pad-y: 8px;

  order: -1;
  width: 100%;
  max-height: min(50vh, 400px);
  overflow: hidden;
  position: relative;
  padding: 8px 12px;
  border-bottom: 1px solid var(--SmartThemeBorderColor, rgba(255, 255, 255, 0.08));
}

/* Desktop dock collapsed: match expanded width, single row */
@media (min-width: 769px) {
  .stmp-dock.stmp-collapsed {
    width: min(360px, calc(100vw - 16px));
  }
}

/* Dock expanded: responsive width */
.stmp-dock.stmp-expanded {
  --stmp-pad-x: 10px;
  --stmp-pad-y: 10px;
  padding: 10px;
}

@media (min-width: 769px) {
  .stmp-dock.stmp-expanded {
    width: min(360px, calc(100vw - 16px));
  }
}

/* ===== Drag mode: floating glass widget ===== */

/* Drag mode collapsed: draggable, auto-size compact card */
.stmp-collapsed:not(.stmp-dock) {
  cursor: grab;
  touch-action: none;
  width: auto;
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
  --stmp-pad-x: 12px;
  --stmp-pad-y: 12px;
  width: min(360px, calc(100vw - 16px));
  padding: 12px;
}

/* Mobile drag mode: same compact card as desktop */
@media (max-width: 768px) {
  .stmp-expanded:not(.stmp-dock) {
    width: min(300px, calc(100vw - 32px));
  }
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
  outline: 2px solid var(--stmp-accent);
  outline-offset: 2px;
}
</style>
