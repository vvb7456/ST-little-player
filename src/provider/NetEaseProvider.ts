import type { MusicProvider, SearchResult, ResolvedTrack } from '../types';

export interface NetEaseConfig {
  baseURL?: string;
}

/**
 * NetEase music provider via gdstudio public API.
 *
 * Key resilience patterns (learned from reference script analysis):
 * - 5s AbortController timeout on all fetches
 * - Search retry: up to 6 attempts (API returns [] ~60% of the time)
 * - Audio playability probe: validate URL with Audio element before returning
 * - No br parameter: accept server default bitrate
 * - Lyric + pic fetched in parallel after URL is validated
 */
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

  /**
   * Probe whether an audio URL is actually playable.
   * Uses Audio element (not fetch) because media elements work cross-origin
   * without CORS headers — fetch would be blocked.
   * 3s timeout, resolves boolean.
   */
  probeAudio(url: string, timeoutMs = 3000): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      const audio = new Audio();
      let settled = false;
      const cleanup = (): void => {
        audio.removeEventListener('loadedmetadata', onMeta);
        audio.removeEventListener('error', onError);
        clearTimeout(timer);
        audio.src = '';
      };
      const onMeta = (): void => {
        if (settled) return;
        settled = true;
        cleanup();
        resolve(true);
      };
      const onError = (): void => {
        if (settled) return;
        settled = true;
        cleanup();
        resolve(false);
      };
      const timer = setTimeout(() => {
        if (settled) return;
        settled = true;
        cleanup();
        resolve(false);
      }, timeoutMs);
      audio.preload = 'metadata';
      audio.addEventListener('loadedmetadata', onMeta);
      audio.addEventListener('error', onError);
      audio.src = url;
    });
  }

  async search(keyword: string): Promise<SearchResult[]> {
    // API returns [] ~60% of the time under rapid requests.
    // Retry up to 6 times with short backoff.
    for (let attempt = 0; attempt < 6; attempt++) {
      const data = await this.fetchJson(
        `${this.baseURL}?types=search&name=${encodeURIComponent(keyword)}&count=20&pages=1`,
      );
      if (Array.isArray(data) && data.length > 0) {
        return data.map((item: any) => ({
          id: String(item.id ?? ''),
          name: String(item.name ?? ''),
          artist: Array.isArray(item.artist)
            ? item.artist.join(', ')
            : String(item.artist ?? ''),
          duration: item.duration ? Number(item.duration) : undefined,
          provider: this.id,
          picId: item.pic_id ? String(item.pic_id) : undefined,
        }));
      }
      // Backoff: 300, 600, 900, 1200, 1500ms
      if (attempt < 5) await new Promise(r => setTimeout(r, 300 * (attempt + 1)));
    }
    return [];
  }

  async resolve(id: string, picId?: string): Promise<ResolvedTrack | null> {
    // Fetch URL (no br param — accept server default)
    const urlData = await this.fetchJson(
      `${this.baseURL}?types=url&id=${encodeURIComponent(id)}`,
    );
    if (!urlData || !urlData.url) {
      return null;
    }

    // Fetch lyric + pic in parallel (only after URL is confirmed present)
    const [lyricData, picData] = await Promise.all([
      this.fetchJson(`${this.baseURL}?types=lyric&id=${encodeURIComponent(id)}`),
      picId
        ? this.fetchJson(`${this.baseURL}?types=pic&id=${encodeURIComponent(picId)}`)
        : Promise.resolve(null),
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

  /**
   * Search + resolve + probe in one call.
   * Iterates search results until finding one with a playable URL.
   * This is the primary resilience mechanism against API flakiness.
   */
  async searchAndResolve(
    keyword: string,
    artist?: string,
  ): Promise<ResolvedTrack | null> {
    const query = artist ? `${keyword} ${artist}` : keyword;
    const results = await this.search(query);
    if (results.length === 0) return null;

    // Try each result until we find one with a playable URL
    for (const result of results) {
      const track = await this.resolve(result.id, result.picId);
      if (!track) continue;

      // Probe audio playability (3s timeout)
      const playable = await this.probeAudio(track.url);
      if (!playable) {
        console.warn(`[NetEase] audio probe failed for id=${result.id}, trying next`);
        continue;
      }

      track.name = result.name;
      track.artist = result.artist;
      return track;
    }

    console.warn(`[NetEase] searchAndResolve: no playable result for "${query}"`);
    return null;
  }
}
