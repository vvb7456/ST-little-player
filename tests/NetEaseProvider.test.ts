import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { NetEaseProvider } from '../src/provider/NetEaseProvider';

const mockFetch = vi.fn();
vi.stubGlobal('fetch', mockFetch);

function jsonResp(data: any, ok = true): Response {
  return {
    ok,
    status: 200,
    json: () => Promise.resolve(data),
  } as any;
}

describe('NetEaseProvider', () => {
  beforeEach(() => {
    mockFetch.mockReset();
  });
  afterEach(() => {
    vi.useRealTimers();
  });

  it('has correct id and name', () => {
    const p = new NetEaseProvider({ workerURL: 'https://w.test', cookie: 'c' });
    expect(p.id).toBe('netease');
    expect(p.name).toBe('网易云');
  });

  it('search returns empty when workerURL not configured', async () => {
    const p = new NetEaseProvider();
    const results = await p.search('test');
    expect(results).toEqual([]);
  });

  it('search maps worker results to SearchResult[]', async () => {
    mockFetch.mockImplementation(() =>
      jsonResp({
        success: true,
        data: [
          {
            id: 10,
            name: 'Song',
            artist: 'A, B',
            duration: 120,
            picId: 'pic999',
          },
          {
            id: 11,
            name: 'Song2',
            artist: 'C',
          },
        ],
      }),
    );
    const p = new NetEaseProvider({ workerURL: 'https://w.test', cookie: 'c' });
    const results = await p.search('test');
    expect(results).toHaveLength(2);
    expect(results[0]).toEqual({
      id: '10',
      name: 'Song',
      artist: 'A, B',
      duration: 120,
      provider: 'netease',
      picId: 'pic999',
    });
    expect(results[1].picId).toBeUndefined();
    expect(results[1].duration).toBeUndefined();
  });

  it('search returns empty on fetch failure', async () => {
    mockFetch.mockRejectedValue(new Error('network'));
    const p = new NetEaseProvider({ workerURL: 'https://w.test', cookie: 'c' });
    const results = await p.search('test');
    expect(results).toEqual([]);
  });

  it('search returns empty when data is not array', async () => {
    mockFetch.mockImplementation(() => jsonResp({ success: true, data: null }));
    const p = new NetEaseProvider({ workerURL: 'https://w.test', cookie: 'c' });
    const results = await p.search('test');
    expect(results).toEqual([]);
  });

  it('resolve returns null when cookie not set', async () => {
    const p = new NetEaseProvider({ workerURL: 'https://w.test' });
    const track = await p.resolve('123');
    expect(track).toBeNull();
  });

  it('resolve returns ResolvedTrack with url, lyric, cover, name, artist', async () => {
    mockFetch.mockImplementation((url: string) => {
      if (url.includes('/resolve')) {
        return jsonResp({ success: true, data: { url: 'http://a/x.mp3' } });
      }
      if (url.includes('/lyric')) {
        return jsonResp({ success: true, data: { lyric: '[00:00] lala' } });
      }
      if (url.includes('/detail')) {
        return jsonResp({
          success: true,
          data: { name: 'Song', artist: 'A', cover: 'http://a/cover.jpg' },
        });
      }
      return jsonResp(null);
    });
    const p = new NetEaseProvider({ workerURL: 'https://w.test', cookie: 'c' });
    const track = await p.resolve('123');
    expect(track).toEqual({
      url: 'http://a/x.mp3',
      lyric: '[00:00] lala',
      cover: 'http://a/cover.jpg',
      name: 'Song',
      artist: 'A',
      source: 'netease',
    });
  });

  it('resolve returns null when url is missing in response', async () => {
    mockFetch.mockImplementation((url: string) => {
      if (url.includes('/resolve')) {
        return jsonResp({ success: true, data: { url: null } });
      }
      return jsonResp({ success: true, data: {} });
    });
    const p = new NetEaseProvider({ workerURL: 'https://w.test', cookie: 'c' });
    const track = await p.resolve('123');
    expect(track).toBeNull();
  });

  it('resolve still works without lyric and detail', async () => {
    mockFetch.mockImplementation((url: string) => {
      if (url.includes('/resolve')) {
        return jsonResp({ success: true, data: { url: 'http://a/x.mp3' } });
      }
      return jsonResp({ success: true, data: null });
    });
    const p = new NetEaseProvider({ workerURL: 'https://w.test', cookie: 'c' });
    const track = await p.resolve('123');
    expect(track).not.toBeNull();
    expect(track!.url).toBe('http://a/x.mp3');
    expect(track!.lyric).toBeUndefined();
    expect(track!.cover).toBeUndefined();
  });

  it('resolve sends encrypted params and cookie headers', async () => {
    let capturedHeaders: Record<string, string> | null = null;
    mockFetch.mockImplementation((url: string, opts?: any) => {
      if (url.includes('/resolve')) {
        capturedHeaders = opts?.headers ?? null;
        return jsonResp({ success: true, data: { url: 'http://a/x.mp3' } });
      }
      return jsonResp({ success: true, data: null });
    });
    const p = new NetEaseProvider({ workerURL: 'https://w.test', cookie: 'mycookie' });
    await p.resolve('123');
    expect(capturedHeaders).not.toBeNull();
    expect(capturedHeaders!['X-Netease-Cookie']).toBe('mycookie');
    expect(capturedHeaders!['X-Netease-Params']).toBeTruthy();
  });
});
