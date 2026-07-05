import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { NetEaseProvider } from '../src/provider/NetEaseProvider';

const mockFetch = vi.fn();
vi.stubGlobal('fetch', mockFetch);

function jsonResp(data: any) {
  return Promise.resolve({
    ok: true,
    json: () => Promise.resolve(data),
  });
}

describe('NetEaseProvider', () => {
  beforeEach(() => {
    mockFetch.mockReset();
  });
  afterEach(() => {
    vi.useRealTimers();
  });

  it('has correct id and name', () => {
    const p = new NetEaseProvider();
    expect(p.id).toBe('netease');
    expect(p.name).toBe('网易云');
  });

  it('uses default baseURL', () => {
    const p = new NetEaseProvider();
    expect((p as any).baseURL).toBe(
      'https://music-api.gdstudio.xyz/api.php',
    );
  });

  it('search maps results to SearchResult[]', async () => {
    mockFetch.mockImplementation((url: string) => {
      expect(url).toContain('types=search');
      expect(url).toContain('name=test');
      return jsonResp([
        { id: 10, name: 'Song', artist: ['A', 'B'], duration: 120 },
        { id: 11, name: 'Song2', artist: 'C' },
      ]);
    });
    const p = new NetEaseProvider();
    const results = await p.search('test');
    expect(results).toHaveLength(2);
    expect(results[0]).toEqual({
      id: '10',
      name: 'Song',
      artist: 'A, B',
      duration: 120,
      provider: 'netease',
    });
    expect(results[1].artist).toBe('C');
    expect(results[1].duration).toBeUndefined();
  });

  it('search returns empty array on fetch failure', async () => {
    mockFetch.mockRejectedValue(new Error('network'));
    const p = new NetEaseProvider();
    const results = await p.search('test');
    expect(results).toEqual([]);
  });

  it('search returns empty array on non-array response', async () => {
    mockFetch.mockImplementation(() => jsonResp({ error: 'no' }));
    const p = new NetEaseProvider();
    const results = await p.search('test');
    expect(results).toEqual([]);
  });

  it('resolve returns ResolvedTrack with url, lyric, cover', async () => {
    mockFetch.mockImplementation((url: string) => {
      if (url.includes('types=url')) {
        return jsonResp({ url: 'http://a/x.mp3' });
      }
      if (url.includes('types=lyric')) {
        return jsonResp({ lyric: '[00:00] lala' });
      }
      if (url.includes('types=pic')) {
        return jsonResp({ url: 'http://a/cover.jpg' });
      }
      return jsonResp(null);
    });
    const p = new NetEaseProvider();
    const track = await p.resolve('123', '456');
    expect(track).toEqual({
      url: 'http://a/x.mp3',
      lyric: '[00:00] lala',
      cover: 'http://a/cover.jpg',
      name: '',
      artist: '',
      source: 'netease',
    });
  });

  it('resolve returns null when url endpoint fails', async () => {
    mockFetch.mockRejectedValue(new Error('network'));
    const p = new NetEaseProvider();
    const track = await p.resolve('123');
    expect(track).toBeNull();
  });

  it('resolve returns null when url is missing in response', async () => {
    mockFetch.mockImplementation((url: string) => {
      if (url.includes('types=url')) return jsonResp({ other: 'x' });
      return jsonResp({});
    });
    const p = new NetEaseProvider();
    const track = await p.resolve('123');
    expect(track).toBeNull();
  });

  it('resolve still works without lyric and pic', async () => {
    mockFetch.mockImplementation((url: string) => {
      if (url.includes('types=url')) {
        return jsonResp({ url: 'http://a/x.mp3' });
      }
      return jsonResp(null);
    });
    const p = new NetEaseProvider();
    const track = await p.resolve('123');
    expect(track).not.toBeNull();
    expect(track!.url).toBe('http://a/x.mp3');
    expect(track!.lyric).toBeUndefined();
    expect(track!.cover).toBeUndefined();
  });
});
