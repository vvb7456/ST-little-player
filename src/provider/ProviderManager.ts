import type { MusicProvider, SearchResult, ResolvedTrack } from '../types';
import { logger } from '@/utils/logger';

export class ProviderManager {
  private providers: MusicProvider[];

  constructor(providers: MusicProvider[]) {
    this.providers = providers;
  }

  async searchAll(keyword: string): Promise<SearchResult[]> {
    const results = await Promise.allSettled(
      this.providers.map((p) => p.search(keyword)),
    );
    const merged: SearchResult[] = [];
    const seen = new Map<string, number>();
    results.forEach((r, i) => {
      if (r.status !== 'fulfilled') {
        logger.warn('Provider search failed: ' + this.providers[i]?.id, r.reason);
        return;
      }
      for (const item of r.value) {
        const key = `${item.name}__${item.artist}`;
        const existingIdx = seen.get(key);
        if (existingIdx === undefined) {
          seen.set(key, merged.length);
          merged.push(item);
        }
      }
    });
    return merged;
  }

  async resolve(id: string, providerId: string, picId?: string): Promise<ResolvedTrack | null> {
    const provider = this.getProvider(providerId);
    if (!provider) return null;
    return new Promise<ResolvedTrack | null>((resolve) => {
      const timer = setTimeout(() => resolve(null), 15000);
      provider
        .resolve(id, picId)
        .then((res) => {
          clearTimeout(timer);
          resolve(res);
        })
        .catch((err) => {
          clearTimeout(timer);
          logger.warn('Resolve failed: ' + providerId + '/' + id, err);
          resolve(null);
        });
    });
  }

  /**
   * Search + resolve + probe across all providers.
   * Tries each provider in priority order, iterating search results
   * until a playable track is found.
   */
  async searchAndResolve(keyword: string, artist?: string): Promise<ResolvedTrack | null> {
    for (const provider of this.providers) {
      if (!provider.searchAndResolve) continue;
      try {
        const track = await provider.searchAndResolve(keyword, artist);
        if (track) return track;
      } catch (err) {
        logger.warn('Provider searchAndResolve failed: ' + provider.id, err);
      }
    }
    return null;
  }

  getProvider(id: string): MusicProvider | undefined {
    return this.providers.find((p) => p.id === id);
  }
}
