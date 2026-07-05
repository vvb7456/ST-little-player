export type AudioEngineEvent = 'timeupdate' | 'ended' | 'error' | 'play' | 'pause';

export class AudioEngine {
  private audio: HTMLAudioElement;
  private listeners: Map<AudioEngineEvent, Set<EventListenerOrEventListenerObject>> = new Map();

  constructor() {
    this.audio = new Audio();
    this.audio.crossOrigin = 'anonymous';
    this.audio.preload = 'auto';
  }

  load(url: string): void {
    this.audio.src = url;
    this.audio.load();
  }

  async play(): Promise<void> {
    try {
      await this.audio.play();
    } catch (err) {
      console.error('[AudioEngine] play() failed:', err);
    }
  }

  pause(): void {
    this.audio.pause();
  }

  seek(seconds: number): void {
    this.audio.currentTime = seconds;
  }

  setVolume(vol: number): void {
    this.audio.volume = vol;
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

  destroy(): void {
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
