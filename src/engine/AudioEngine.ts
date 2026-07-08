import { logger } from '@/utils/logger';

export type AudioEngineEvent = 'timeupdate' | 'ended' | 'error' | 'play' | 'pause';

const FADE_DURATION_MS = 800;

export class AudioEngine {
  private audio: HTMLAudioElement;
  private listeners: Map<AudioEngineEvent, Set<EventListenerOrEventListenerObject>> = new Map();
  private targetVolume = 1;
  private fadeRaf = 0;
  private fadeAbort: ((skip: boolean) => void) | null = null;

  constructor() {
    this.audio = new Audio();
    this.audio.crossOrigin = 'anonymous';
    this.audio.preload = 'auto';
  }

  load(url: string): void {
    this.cancelFade();
    this.audio.src = url;
    this.audio.load();
  }

  async play(fade = false): Promise<void> {
    try {
      this.cancelFade();
      if (fade) {
        this.audio.volume = 0;
        await this.audio.play();
        this.runFade(this.targetVolume);
      } else {
        this.audio.volume = this.targetVolume;
        await this.audio.play();
      }
    } catch (err) {
      logger.error('AudioEngine: play() failed:', err);
    }
  }

  pause(fade = false): void {
    this.cancelFade();
    if (fade && !this.audio.paused) {
      this.runFade(0, () => this.audio.pause());
    } else {
      this.audio.pause();
    }
  }

  seek(seconds: number): void {
    this.audio.currentTime = seconds;
  }

  setVolume(vol: number): void {
    this.targetVolume = vol;
    if (!this.fadeRaf) {
      this.audio.volume = vol;
    }
  }

  get currentTime(): number {
    return this.audio.currentTime;
  }

  get duration(): number {
    return this.audio.duration;
  }

  get paused(): boolean {
    return this.audio.paused;
  }

  on(event: AudioEngineEvent, cb: () => void): () => void {
    let set = this.listeners.get(event);
    if (!set) {
      set = new Set();
      this.listeners.set(event, set);
    }
    const listener: EventListenerOrEventListenerObject = cb as EventListener;
    set.add(listener);
    this.audio.addEventListener(event, listener);
    return () => {
      this.audio.removeEventListener(event, listener);
      set!.delete(listener);
    };
  }

  private runFade(target: number, onDone?: () => void): void {
    const start = this.audio.volume;
    const delta = target - start;
    const startTime = performance.now();

    this.fadeAbort = (skip: boolean) => {
      if (skip) this.audio.volume = target;
      this.fadeRaf = 0;
      this.fadeAbort = null;
      onDone?.();
    };

    const step = (now: number): void => {
      if (!this.fadeAbort) return;
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / FADE_DURATION_MS, 1);
      this.audio.volume = Math.max(0, Math.min(1, start + delta * progress));
      if (progress >= 1) {
        this.fadeAbort(true);
      } else {
        this.fadeRaf = requestAnimationFrame(step);
      }
    };
    this.fadeRaf = requestAnimationFrame(step);
  }

  private cancelFade(): void {
    if (this.fadeAbort) this.fadeAbort(true);
    if (this.fadeRaf) cancelAnimationFrame(this.fadeRaf);
    this.fadeRaf = 0;
    this.fadeAbort = null;
  }

  destroy(): void {
    this.cancelFade();
    for (const [event, set] of this.listeners) {
      for (const listener of set) {
        this.audio.removeEventListener(event, listener);
      }
      set.clear();
    }
    this.listeners.clear();
    this.audio.src = '';
  }
}
