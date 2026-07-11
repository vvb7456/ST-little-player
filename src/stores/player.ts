import { defineStore } from 'pinia';
import type { LyricLine, ResolvedTrack } from '@/types';
import { AudioEngine } from '@/engine/AudioEngine';
import type { AudioEngineEvent } from '@/engine/AudioEngine';
import { parseLyric, getActiveLine } from '@/engine/LyricEngine';
import { usePlaylistStore } from './playlist';
import { useSettingsStore } from './settings';
import { logger } from '@/utils/logger';

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
    preloadedUrl: '' as string,
    preloadedIndex: -1,
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

        if (playerStore.duration > 0) {
          const remaining = playerStore.duration - playerStore.currentTime;
          if (remaining < 15 && remaining > 0 && playerStore.preloadedIndex === -1) {
            const playlistStore = usePlaylistStore();
            const nextIdx = playlistStore.peekNextIndex();
            if (nextIdx >= 0 && nextIdx !== playlistStore.currentIndex) {
              playerStore.preloadedIndex = nextIdx;
              void playlistStore.resolveTrack(playlistStore.currentList, nextIdx).then((resolved) => {
                if (resolved) {
                  playerStore.preloadedUrl = resolved.url;
                  engine.preloadNext(resolved.url);
                }
              });
            }
          }
        }
      });

      engine.on('ended', () => {
        const playlistStore = usePlaylistStore();
        playerStore.preloadedUrl = '';
        playerStore.preloadedIndex = -1;
        void playlistStore.next();
      });

      engine.on('play', () => {
        playerStore.isPlaying = true;
      });

      engine.on('pause', () => {
        playerStore.isPlaying = false;
      });

      engine.on('error', () => {
        logger.warn('Audio error event');
      });

      this.initMediaSession();
    },

    initMediaSession(): void {
      if (!('mediaSession' in navigator)) return;
      const playerStore = usePlayerStore();
      const playlistStore = usePlaylistStore();
      navigator.mediaSession.setActionHandler('play', () => { void playerStore.play(); });
      navigator.mediaSession.setActionHandler('pause', () => { playerStore.pause(); });
      navigator.mediaSession.setActionHandler('previoustrack', () => { playlistStore.prev(); });
      navigator.mediaSession.setActionHandler('nexttrack', () => { playlistStore.next(); });
    },

    async loadAndPlay(track: ResolvedTrack): Promise<void> {
      if (!this.audioEngine) this.init();
      const engine = this.audioEngine!;
      this.preloadedUrl = '';
      this.preloadedIndex = -1;
      const fade = useSettingsStore().settings.crossfade;
      engine.load(track.url);
      this.currentTrack = track;
      if (track.lyric) {
        this.updateLyrics(track.lyric);
      } else {
        this.lyrics = [];
        this.currentLyricIndex = -1;
      }
      await engine.play(fade);
      if (track.cover) {
        // preload cover
      }
      if ('mediaSession' in navigator) {
        navigator.mediaSession.metadata = new MediaMetadata({
          title: track.name,
          artist: track.artist,
          album: '',
          artwork: track.cover ? [{ src: track.cover, sizes: '512x512' }] : [],
        });
        if ('setPositionState' in navigator.mediaSession) {
          try {
            navigator.mediaSession.setPositionState({
              duration: engine.duration || 0,
              position: engine.currentTime,
              playbackRate: 1,
            });
          } catch { /* ignore */ }
        }
      }
    },

    async play(): Promise<void> {
      const fade = useSettingsStore().settings.crossfade;
      await this.audioEngine?.play(fade);
    },

    pause(): void {
      const fade = useSettingsStore().settings.crossfade;
      this.audioEngine?.pause(fade);
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
    },

    updateLyrics(lrc: string): void {
      this.lyrics = parseLyric(lrc);
      this.currentLyricIndex = -1;
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
      this.preloadedUrl = '';
      this.preloadedIndex = -1;
    },
  },
});

export type { AudioEngineEvent };
