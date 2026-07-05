import type { MusicProvider, SearchResult, ResolvedTrack } from '../types';

export interface NetEaseConfig {
  baseURL?: string;
}

export class NetEaseProvider implements MusicProvider {
  id = 'netease';
  name = '网易云';
  private baseURL: string;

  constructor(config?: NetEaseConfig) {
    this.baseURL =
      config?.baseURL?.trim() || 'https://music-api.gdstudio.xyz/api.php';
  }

  private async fetchJson(url: string, timeoutMs = 5000): Promise<any | null> {
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
    const data = await this.fetchJson(
      `${this.baseURL}?types=search&name=${encodeURIComponent(keyword)}&count=20&pages=1`,
    );
    if (!Array.isArray(data)) return [];
    return data.map((item: any) => ({
      id: String(item.id ?? ''),
      name: String(item.name ?? ''),
      artist: Array.isArray(item.artist)
        ? item.artist.join(', ')
        : String(item.artist ?? ''),
      duration: item.duration ? Number(item.duration) : undefined,
      provider: this.id,
    }));
  }

  async resolve(id: string): Promise<ResolvedTrack | null> {
    const urlData = await this.fetchJson(
      `${this.baseURL}?types=url&id=${encodeURIComponent(id)}&br=320`,
    );
    if (!urlData || !urlData.url) return null;
    const [lyricData, picData] = await Promise.all([
      this.fetchJson(`${this.baseURL}?types=lyric&id=${encodeURIComponent(id)}`),
      this.fetchJson(`${this.baseURL}?types=pic&id=${encodeURIComponent(id)}`),
    ]);
    return {
      url: String(urlData.url),
      lyric: lyricData?.lyric ? String(lyricData.lyric) : undefined,
      cover: picData?.url ? String(picData.url) : undefined,
      name: '',
      artist: '',
      source: this.id,
    };
  }
}
