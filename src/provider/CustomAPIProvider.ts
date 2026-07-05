import type { MusicProvider, SearchResult, ResolvedTrack } from '../types';

export interface CustomAPIConfig {
  searchURL?: string;
  resolveURL?: string;
}

export class CustomAPIProvider implements MusicProvider {
  id = 'custom';
  name = '自定义 API';
  private searchURL?: string;
  private resolveURL?: string;

  constructor(config?: CustomAPIConfig) {
    this.searchURL = config?.searchURL;
    this.resolveURL = config?.resolveURL;
  }

  private async fetchJson(
    url: string,
    timeoutMs = 10000,
  ): Promise<any | null> {
    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), timeoutMs);
      const res = await fetch(url, { signal: controller.signal });
      clearTimeout(timer);
      if (!res.ok) return null;
      return await res.json();
    } catch {
      return null;
    }
  }

  async search(keyword: string): Promise<SearchResult[]> {
    if (!this.searchURL) return [];
    const url = this.searchURL.replace('{keyword}', encodeURIComponent(keyword));
    const data = await this.fetchJson(url);
    if (!Array.isArray(data)) return [];
    return data.map((item: any) => ({
      id: String(item.id ?? ''),
      name: String(item.name ?? ''),
      artist: String(item.artist ?? ''),
      duration: item.duration ? Number(item.duration) : undefined,
      provider: this.id,
    }));
  }

  async resolve(id: string, _picId?: string): Promise<ResolvedTrack | null> {
    if (!this.resolveURL) return null;
    const url = this.resolveURL.replace('{id}', encodeURIComponent(id));
    const data = await this.fetchJson(url);
    if (!data || !data.url) return null;
    return {
      url: String(data.url),
      lyric: data.lyric ? String(data.lyric) : undefined,
      cover: data.cover ? String(data.cover) : undefined,
      name: String(data.name ?? ''),
      artist: String(data.artist ?? ''),
      source: this.id,
    };
  }
}
