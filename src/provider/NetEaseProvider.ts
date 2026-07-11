import type { MusicProvider, SearchResult, ResolvedTrack } from '../types';
import { logger } from '@/utils/logger';
import { eapiEncrypt, buildCoverUrl } from '@/utils/netease-crypto';

export interface NetEaseConfig {
  workerURL?: string;
  cookie?: string;
}

export class NetEaseProvider implements MusicProvider {
  id = 'netease';
  name = '网易云';
  private workerURL: string;
  private cookie: string;

  constructor(config?: NetEaseConfig) {
    this.workerURL = config?.workerURL?.trim() || '';
    this.cookie = config?.cookie?.trim() || '';
  }

  private async fetchJson(
    url: string,
    options?: RequestInit,
    timeoutMs = 5000,
    retries = 2,
  ): Promise<any | null> {
    let lastErr: unknown;
    for (let attempt = 0; attempt <= retries; attempt++) {
      try {
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), timeoutMs);
        const res = await fetch(url, { ...options, signal: controller.signal });
        clearTimeout(timer);
        if (!res.ok) {
          logger.warn(`NetEase: HTTP ${res.status} from ${url}`);
          if (res.status >= 500 && attempt < retries) continue;
          return null;
        }
        const json = await res.json();
        if (json && json.success === false) {
          logger.warn('NetEase: API error: ' + (json.error ?? 'unknown'));
          return null;
        }
        return json;
      } catch (err) {
        lastErr = err;
        if (attempt < retries) continue;
      }
    }
    logger.warn('NetEase: fetchJson failed after ' + (retries + 1) + ' attempts: ' + url, lastErr);
    return null;
  }

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
    if (!this.workerURL) {
      logger.warn('NetEase: worker URL not configured');
      return [];
    }

    const data = await this.fetchJson(
      `${this.workerURL}/search?keyword=${encodeURIComponent(keyword)}&limit=20`,
    );
    const songs = data?.data;
    if (!Array.isArray(songs)) return [];

    return songs.map((item: any) => ({
      id: String(item.id ?? ''),
      name: String(item.name ?? ''),
      artist: String(item.artist ?? ''),
      duration: item.duration ?? undefined,
      provider: this.id,
      picId: item.picId ? String(item.picId) : undefined,
    }));
  }

  async resolve(id: string, _picId?: string): Promise<ResolvedTrack | null> {
    if (!this.workerURL) {
      logger.warn('NetEase: worker URL not configured');
      return null;
    }
    if (!this.cookie) {
      logger.warn('NetEase: cookie not set, cannot resolve URL');
      return null;
    }

    const urlPath = '/api/song/enhance/player/url/v1';
    const payload = {
      ids: [Number(id)],
      level: 'exhigh',
      encodeType: 'flac',
      header: JSON.stringify({
        os: 'pc',
        appver: '',
        osver: '',
        deviceId: 'pyncm!',
        requestId: String(
          Math.floor(Math.random() * 10000000) + 20000000,
        ),
      }),
    };
    const encryptedParams = eapiEncrypt(urlPath, payload);

    const headers: Record<string, string> = {
      'X-Netease-Params': encryptedParams,
      'X-Netease-Cookie': this.cookie,
    };

    const [urlData, lyricData, detailData] = await Promise.all([
      this.fetchJson(`${this.workerURL}/resolve?id=${encodeURIComponent(id)}`, { headers }),
      this.fetchJson(`${this.workerURL}/lyric?id=${encodeURIComponent(id)}`),
      this.fetchJson(`${this.workerURL}/detail?id=${encodeURIComponent(id)}`, { headers }),
    ]);

    const url = urlData?.data?.url;
    if (!url) {
      logger.warn('NetEase: no URL returned for id=' + id);
      return null;
    }

    const detail = detailData?.data;
    const cover = detail?.cover || (_picId ? buildCoverUrl(_picId) : undefined);

    return {
      url: String(url),
      lyric: lyricData?.data?.lyric ? String(lyricData.data.lyric) : undefined,
      cover: cover || undefined,
      name: detail?.name ? String(detail.name) : '',
      artist: detail?.artist ? String(detail.artist) : '',
      source: this.id,
    };
  }

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
