import type { MusicProvider, SearchResult, ResolvedTrack } from '../types';

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
    results.forEach((r) => {
      if (r.status !== 'fulfilled') return;
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

  async resolve(id: string, providerId: string): Promise<ResolvedTrack | null> {
    const provider = this.getProvider(providerId);
    if (!provider) return null;
    return new Promise<ResolvedTrack | null>((resolve) => {
      const timer = setTimeout(() => resolve(null), 15000);
      provider
        .resolve(id)
        .then((res) => {
          clearTimeout(timer);
          resolve(res);
        })
        .catch(() => {
          clearTimeout(timer);
          resolve(null);
        });
    });
  }

  getProvider(id: string): MusicProvider | undefined {
    return this.providers.find((p) => p.id === id);
  }
}
