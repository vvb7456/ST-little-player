import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { ProviderManager } from '../src/provider/ProviderManager';
import type { MusicProvider, SearchResult, ResolvedTrack } from '../src/types';

function makeProvider(
  id: string,
  searchResults: SearchResult[] = [],
  resolved: ResolvedTrack | null = null,
  opts: { failSearch?: boolean; failResolve?: boolean; delay?: number } = {},
): MusicProvider {
  const delay = opts.delay ?? 0;
  return {
    id,
    name: id,
    async search(_keyword: string): Promise<SearchResult[]> {
      if (opts.failSearch) throw new Error('search failed');
      if (delay) await new Promise((r) => setTimeout(r, delay));
      return searchResults;
    },
    async resolve(_id: string): Promise<ResolvedTrack | null> {
      if (opts.failResolve) throw new Error('resolve failed');
      if (delay) await new Promise((r) => setTimeout(r, delay));
      return resolved;
    },
  };
}

describe('ProviderManager', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.useRealTimers();
  });

  it('searchAll merges results from all providers', async () => {
    const p1 = makeProvider('p1', [
      { id: '1', name: 'Song A', artist: 'X', provider: 'p1' },
    ]);
    const p2 = makeProvider('p2', [
      { id: '2', name: 'Song B', artist: 'Y', provider: 'p2' },
    ]);
    const mgr = new ProviderManager([p1, p2]);
    const results = await mgr.searchAll('song');
    expect(results).toHaveLength(2);
    expect(results.map((r) => r.id).sort()).toEqual(['1', '2']);
  });

  it('searchAll dedupes by name+artist, keeping first (priority high)', async () => {
    const p1 = makeProvider('p1', [
      { id: 'a1', name: 'Same', artist: 'Artist', provider: 'p1' },
    ]);
    const p2 = makeProvider('p2', [
      { id: 'a2', name: 'Same', artist: 'Artist', provider: 'p2' },
    ]);
    const mgr = new ProviderManager([p1, p2]);
    const results = await mgr.searchAll('same');
    expect(results).toHaveLength(1);
    expect(results[0].id).toBe('a1');
    expect(results[0].provider).toBe('p1');
  });

  it('searchAll tolerates a failing provider', async () => {
    const p1 = makeProvider('p1', [
      { id: '1', name: 'Song A', artist: 'X', provider: 'p1' },
    ]);
    const p2 = makeProvider('p2', [], null, { failSearch: true });
    const mgr = new ProviderManager([p1, p2]);
    const results = await mgr.searchAll('song');
    expect(results).toHaveLength(1);
    expect(results[0].id).toBe('1');
  });

  it('resolve returns track from the matching provider', async () => {
    const track: ResolvedTrack = {
      url: 'http://x/a.mp3',
      name: 'A',
      artist: 'X',
      source: 'p1',
    };
    const p1 = makeProvider('p1', [], track);
    const mgr = new ProviderManager([p1]);
    const res = await mgr.resolve('1', 'p1');
    expect(res).toEqual(track);
  });

  it('resolve returns null for unknown provider', async () => {
    const mgr = new ProviderManager([]);
    const res = await mgr.resolve('1', 'nope');
    expect(res).toBeNull();
  });

  it('resolve times out after 5s and returns null', async () => {
    const p1 = makeProvider('p1', [], null, { delay: 6000 });
    const mgr = new ProviderManager([p1]);
    const promise = mgr.resolve('1', 'p1');
    vi.advanceTimersByTime(5000);
    const res = await promise;
    expect(res).toBeNull();
  });

  it('getProvider returns the provider by id', () => {
    const p1 = makeProvider('p1');
    const mgr = new ProviderManager([p1]);
    expect(mgr.getProvider('p1')).toBe(p1);
    expect(mgr.getProvider('missing')).toBeUndefined();
  });
});
