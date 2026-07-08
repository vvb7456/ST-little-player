import type { MusicProvider, SearchResult, ResolvedTrack } from '../types';
import { logger } from '@/utils/logger';

export interface NetEaseConfig {
  baseURL?: string;
  apiBase?: string;
}

/**
 * NetEase music provider.
 *
 * Architecture:
 * - Search/lyric/detail: proxied through our own nginx → NetEase official API
 *   (100% stable, no rate limiting, no empty results)
 * - URL resolve: gdstudio API (only thing that returns playable audio URLs)
 *
 * The apiBase defaults to our self-hosted proxy. Users can override
 * via provider config if they host their own.
 */
export class NetEaseProvider implements MusicProvider {
  id = 'netease';
  name = '网易云';
  private apiBase: string;
  private urlBase: string;

  constructor(config?: NetEaseConfig) {
    this.apiBase =
      config?.apiBase?.trim() || 'https://jgauby2m0k6n.erocraft.com';
    this.urlBase =
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
    } catch (err) {
      logger.warn('NetEase: fetchJson failed: ' + url, err);
      return null;
    }
  }

  /**
   * Probe whether an audio URL is actually playable.
   * Uses Audio element (not fetch) because media elements work cross-origin
   * without CORS headers. 3s timeout, resolves boolean.
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
    const data = await this.fetchJson(
      `${this.apiBase}/search?s=${encodeURIComponent(keyword)}&type=1&offset=0&limit=20`,
    );
    const songs = data?.result?.songs;
    if (!Array.isArray(songs)) return [];

    return songs.map((item: any) => ({
      id: String(item.id ?? ''),
      name: String(item.name ?? ''),
      artist: Array.isArray(item.artists)
        ? item.artists.map((a: any) => a.name).join(', ')
        : String(item.artists?.[0]?.name ?? ''),
      duration: item.duration ? Math.floor(item.duration / 1000) : undefined,
      provider: this.id,
      picId: item.album?.picId ? String(item.album.picId) : undefined,
    }));
  }

  async resolve(id: string, _picId?: string): Promise<ResolvedTrack | null> {
    // Get playable URL from gdstudio
    const urlData = await this.fetchJson(
      `${this.urlBase}?types=url&id=${encodeURIComponent(id)}`,
    );
    if (!urlData || !urlData.url) return null;

    // Fetch lyric + cover in parallel from official API
    const [lyricData, detailData] = await Promise.all([
      this.fetchJson(
        `${this.apiBase}/lyric?os=pc&id=${encodeURIComponent(id)}&lv=-1&kv=-1&tv=-1`,
      ),
      this.fetchJson(
        `${this.apiBase}/detail?ids=%5B${encodeURIComponent(id)}%5D`,
      ),
    ]);

    const song = detailData?.songs?.[0];

    return {
      url: String(urlData.url),
      lyric: lyricData?.lrc?.lyric ? String(lyricData.lrc.lyric) : undefined,
      cover: song?.album?.picUrl ? String(song.album.picUrl) : undefined,
      name: '',
      artist: '',
      source: this.id,
    };
  }

  /**
   * Search + resolve + probe in one call.
   * Iterates search results until finding one with a playable URL.
   */
  async searchAndResolve(
    keyword: string,
    artist?: string,
  ): Promise<ResolvedTrack | null> {
    const query = artist ? `${keyword} ${artist}` : keyword;
    const results = await this.search(query);
    if (results.length === 0) return null;

    for (const result of results) {
      const track = await this.resolve(result.id, result.picId);
      if (!track) continue;

      const playable = await this.probeAudio(track.url);
      if (!playable) {
        logger.warn('NetEase: audio probe failed for id=' + result.id + ', trying next');
        continue;
      }

      track.name = result.name;
      track.artist = result.artist;
      return track;
    }

    logger.warn('NetEase: no playable result for "' + query + '"');
    return null;
  }
}
