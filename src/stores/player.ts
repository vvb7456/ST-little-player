import { defineStore } from 'pinia';
import type { LyricLine, ResolvedTrack } from '@/types';
import { AudioEngine } from '@/engine/AudioEngine';
import type { AudioEngineEvent } from '@/engine/AudioEngine';
import { parseLyric, getActiveLine } from '@/engine/LyricEngine';
import { useSettingsStore } from './settings';
import { usePlaylistStore } from './playlist';

export const usePlayerStore = defineStore('player', {
  state: () => ({
    audioEngine: null as AudioEngine | null,
    isPlaying: false,
    currentTime: 0,
    duration: 0,
    volume: 65,
    lyrics: [] as LyricLine[],
    currentLyricIndex: -1,
    currentTrack: null as ResolvedTrack | null,
  }),

  actions: {
    init(): void {
      if (this.audioEngine) return;
      const engine = new AudioEngine();
      this.audioEngine = engine;

      const playerStore = usePlayerStore();

      engine.on('timeupdate', () => {
        if (!engine) return;
        playerStore.currentTime = engine.currentTime;
        playerStore.duration = engine.duration;
        const active = getActiveLine(playerStore.lyrics, engine.currentTime);
        const idx = active ? playerStore.lyrics.indexOf(active) : -1;
        playerStore.currentLyricIndex = idx;
      });

      engine.on('ended', () => {
        const playlistStore = usePlaylistStore();
        void playlistStore.next();
      });

      engine.on('play', () => {
        playerStore.isPlaying = true;
      });

      engine.on('pause', () => {
        playerStore.isPlaying = false;
      });
    },

    async loadAndPlay(track: ResolvedTrack): Promise<void> {
      if (!this.audioEngine) this.init();
      const engine = this.audioEngine!;
      engine.load(track.url);
      this.currentTrack = track;
      if (track.lyric) {
        this.updateLyrics(track.lyric);
      } else {
        this.lyrics = [];
        this.currentLyricIndex = -1;
      }
      await engine.play();
      if (track.cover) {
        // preload cover
      }
    },

    async play(): Promise<void> {
      await this.audioEngine?.play();
    },

    pause(): void {
      this.audioEngine?.pause();
    },

    async togglePlay(): Promise<void> {
      if (this.isPlaying) {
        this.pause();
      } else {
        await this.play();
      }
    },

    seek(seconds: number): void {
      this.audioEngine?.seek(seconds);
    },

    setVolume(vol: number): void {
      this.volume = vol;
      this.audioEngine?.setVolume(vol / 100);
      const settingsStore = useSettingsStore();
      settingsStore.setVolume(vol);
    },

    updateLyrics(lrc: string): void {
      this.lyrics = parseLyric(lrc);
      this.currentLyricIndex = -1;
    },

    getActiveLyric(): LyricLine | null {
      return getActiveLine(this.lyrics, this.currentTime);
    },

    destroy(): void {
      this.audioEngine?.destroy();
      this.audioEngine = null;
      this.isPlaying = false;
      this.currentTime = 0;
      this.duration = 0;
      this.lyrics = [];
      this.currentLyricIndex = -1;
      this.currentTrack = null;
    },
  },
});

export type { AudioEngineEvent };
