import { defineStore } from 'pinia';
import type { SearchResult } from '@/types';
import type { ProviderManager } from '@/provider/ProviderManager';
import { logger } from '@/utils/logger';

export const useSearchStore = defineStore('search', {
  state: () => ({
    keyword: '',
    results: [] as SearchResult[],
    isSearching: false,
    error: null as string | null,
  }),

  actions: {
    setKeyword(kw: string): void {
      this.keyword = kw;
    },

    async search(providerManager: ProviderManager): Promise<void> {
      if (!this.keyword.trim()) {
        this.results = [];
        return;
      }
      this.isSearching = true;
      this.error = null;
      try {
        this.results = await providerManager.searchAll(this.keyword);
      } catch (err) {
        logger.warn('Search failed:', err);
        this.error = err instanceof Error ? err.message : String(err);
        this.results = [];
      } finally {
        this.isSearching = false;
      }
    },

    clear(): void {
      this.keyword = '';
      this.results = [];
      this.error = null;
    },
  },
});
