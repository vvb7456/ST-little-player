import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { AudioEngine } from '@/engine/AudioEngine';

class FakeAudio {
  src = '';
  volume = 1;
  paused = true;
  currentTime = 0;
  duration = NaN;
  private listeners = new Map<string, Set<(ev: { type: string }) => void>>();

  addEventListener(type: string, listener: (ev: { type: string }) => void): void {
    if (!this.listeners.has(type)) this.listeners.set(type, new Set());
    this.listeners.get(type)!.add(listener);
  }
  removeEventListener(type: string, listener: (ev: { type: string }) => void): void {
    this.listeners.get(type)?.delete(listener);
  }
  dispatchEvent(event: { type: string }): boolean {
    this.listeners.get(event.type)?.forEach((l) => l(event));
    return true;
  }
  play(): Promise<void> {
    this.paused = false;
    return Promise.resolve();
  }
  pause(): void {
    this.paused = true;
  }
}

describe('AudioEngine', () => {
  let engine: AudioEngine;
  let audio: FakeAudio;

  beforeEach(() => {
    vi.stubGlobal('Audio', FakeAudio);
    engine = new AudioEngine();
    audio = engine['audio'] as unknown as FakeAudio;
    vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    engine.destroy();
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it('load 设置 audio.src', () => {
    engine.load('http://example.com/a.mp3');
    expect(audio.src).toBe('http://example.com/a.mp3');
  });

  it('seek 设置 currentTime', () => {
    engine.seek(42);
    expect(engine.currentTime).toBe(42);
  });

  it('setVolume 设置 volume (0~1)', () => {
    engine.setVolume(0.5);
    expect(audio.volume).toBe(0.5);
  });

  it('paused 初始为 true', () => {
    expect(engine.paused).toBe(true);
  });

  it('pause 调用 audio.pause', () => {
    const spy = vi.spyOn(audio, 'pause');
    engine.pause();
    expect(spy).toHaveBeenCalledOnce();
  });

  it('play 成功时调用 audio.play', async () => {
    const spy = vi.spyOn(audio, 'play').mockResolvedValue(undefined);
    await engine.play();
    expect(spy).toHaveBeenCalledOnce();
    expect(console.error).not.toHaveBeenCalled();
  });

  it('play 失败时 console.error 且不抛出', async () => {
    vi.spyOn(audio, 'play').mockRejectedValue(new Error('boom'));
    await expect(engine.play()).resolves.toBeUndefined();
    expect(console.error).toHaveBeenCalled();
  });

  it('on 注册监听并在事件触发时回调', () => {
    const cb = vi.fn();
    const off = engine.on('timeupdate', cb);
    audio.dispatchEvent({ type: 'timeupdate' });
    expect(cb).toHaveBeenCalledOnce();
    off();
  });

  it('on 返回的取消函数移除监听', () => {
    const cb = vi.fn();
    const off = engine.on('ended', cb);
    off();
    audio.dispatchEvent({ type: 'ended' });
    expect(cb).not.toHaveBeenCalled();
  });

  it('on 不同事件互不干扰', () => {
    const onPlay = vi.fn();
    const onPause = vi.fn();
    engine.on('play', onPlay);
    engine.on('pause', onPause);
    audio.dispatchEvent({ type: 'play' });
    expect(onPlay).toHaveBeenCalledOnce();
    expect(onPause).not.toHaveBeenCalled();
  });

  it('destroy 移除所有监听并清空 src', () => {
    const cb = vi.fn();
    engine.on('error', cb);
    engine.load('http://example.com/a.mp3');
    engine.destroy();
    expect(audio.src).toBe('');
    audio.dispatchEvent({ type: 'error' });
    expect(cb).not.toHaveBeenCalled();
  });

  it('get duration 返回 audio.duration', () => {
    audio.duration = 123.45;
    expect(engine.duration).toBe(123.45);
  });
});
