import type { MusicProvider, SearchResult, ResolvedTrack } from '../types';

export interface StorageLike {
  getItem: (k: string) => Promise<any>;
  setItem: (k: string, v: any) => Promise<void>;
}

export interface LocalFileConfig {
  storage?: StorageLike;
}

export class LocalFileProvider implements MusicProvider {
  id = 'local';
  name = '本地文件';
  private storage: StorageLike | null;

  constructor(config?: LocalFileConfig) {
    this.storage = config?.storage ?? null;
  }

  async search(_keyword: string): Promise<SearchResult[]> {
    return [];
  }

  async resolve(id: string, _picId?: string): Promise<ResolvedTrack | null> {
    if (!this.storage) return null;
    const blob = await this.storage.getItem('stmp:audio:' + id);
    if (!blob) return null;
    const url = URL.createObjectURL(blob as Blob);
    return {
      url,
      name: '',
      artist: '',
      source: this.id,
    };
  }
}
