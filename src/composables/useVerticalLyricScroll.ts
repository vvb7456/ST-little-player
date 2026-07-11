import { ref, watch, nextTick } from 'vue';
import { usePlayerStore } from '@/stores/player';

/**
 * Vertical lyric scroll logic shared by PlayerPanel (full-size lyrics)
 * and CollapsedBar (dock mini lyrics).
 *
 * Renders the full lyric list, then translateY to center the active line.
 */
export function useVerticalLyricScroll() {
  const scrollY = ref(0);
  const lineRefs = ref<HTMLElement[]>([]);
  const windowRef = ref<HTMLElement | null>(null);

  function setLineRef(el: any, idx: number): void {
    if (el) lineRefs.value[idx] = el as HTMLElement;
  }

  async function updateScroll(): Promise<void> {
    await nextTick();
    await new Promise<void>((r) => requestAnimationFrame(() => r()));
    const playerStore = usePlayerStore();
    const idx = playerStore.currentLyricIndex;
    const win = windowRef.value;
    if (!win || idx < 0) {
      scrollY.value = 0;
      return;
    }
    const lineEl = lineRefs.value[idx];
    if (!lineEl) return;
    const lineTop = lineEl.offsetTop;
    const lineH = lineEl.offsetHeight;
    const winH = win.clientHeight;
    if (!lineTop && !lineH && !winH) return;
    scrollY.value = lineTop - winH / 2 + lineH / 2;
  }

  const playerStore = usePlayerStore();
  watch(() => playerStore.currentLyricIndex, updateScroll);
  watch(() => playerStore.lyrics, () => {
    lineRefs.value = [];
    updateScroll();
  });

  return { scrollY, windowRef, setLineRef, updateScroll };
}
