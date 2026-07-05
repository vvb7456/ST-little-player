import type { StorageAdapter } from './StorageAdapter';
import { MODULE_NAME } from './index';

interface CacheEntry<T> {
  value: T;
  expiresAt: number;
}

/**
 * Minimal structural type for the localforage methods we use.
 *
 * Avoids a hard dependency on `@types/localforage`; ST exposes the runtime
 * object via `SillyTavern.libs.localforage` (typed as `any` upstream).
 */
interface ForageLike {
  getItem<T>(key: string): Promise<T | null>;
  setItem<T>(key: string, value: T): Promise<T>;
  removeItem(key: string): Promise<void>;
  keys(): Promise<string[]>;
}

/**
 * SillyTavern-backed implementation of {@link StorageAdapter}.
 *
 * Resolves all storage primitives from `SillyTavern.getContext()` at call time
 * so that chat switches (which replace the `chatMetadata` reference) are
 * always observed.
 *
 * Falls back to a localStorage / in-memory implementation when the
 * `SillyTavern` global is not present (e.g. unit tests). The fallback is a
 * best-effort shim and not intended for production use.
 */
export class STStorageAdapter implements StorageAdapter {
  // --- Fallback state (only used when SillyTavern is unavailable) ---
  private readonly fallbackMeta: Map<string, unknown> = new Map();

  private hasST(): boolean {
    return typeof SillyTavern !== 'undefined' && typeof SillyTavern.getContext === 'function';
  }

  private ctx(): ReturnType<typeof SillyTavern.getContext> {
    return SillyTavern.getContext();
  }

  // ===== extensionSettings =====

  getSettings<T>(): T | null {
    if (this.hasST()) {
      const ctx = this.ctx();
      const raw = ctx.extensionSettings[MODULE_NAME];
      return (raw ?? null) as T | null;
    }
    const raw = localStorage.getItem(this.settingsKey());
    if (raw === null) return null;
    try {
      return JSON.parse(raw) as T;
    } catch {
      return null;
    }
  }

  setSettings<T>(value: T): void {
    if (this.hasST()) {
      const ctx = this.ctx();
      ctx.extensionSettings[MODULE_NAME] = value;
      ctx.saveSettingsDebounced();
      return;
    }
    localStorage.setItem(this.settingsKey(), JSON.stringify(value));
  }

  // ===== chatMetadata =====

  getMetadata<T>(key: string): T | null {
    if (this.hasST()) {
      const ctx = this.ctx();
      const meta = ctx.chatMetadata;
      const raw = meta[key];
      return (raw ?? null) as T | null;
    }
    const raw = this.fallbackMeta.get(key);
    return (raw ?? null) as T | null;
  }

  setMetadata<T>(key: string, value: T): void {
    if (this.hasST()) {
      const ctx = this.ctx();
      const meta = ctx.chatMetadata;
      meta[key] = value;
      ctx.saveMetadata();
      return;
    }
    this.fallbackMeta.set(key, value);
  }

  // ===== localforage blobs =====

  private get forage(): ForageLike {
    if (this.hasST()) {
      return (SillyTavern as any).libs.localforage as ForageLike;
    }
    return (window as any).localforage as ForageLike;
  }

  async getBlob(key: string): Promise<Blob | null> {
    const v = (await this.forage.getItem<Blob>(key)) ?? null;
    return v;
  }

  async setBlob(key: string, value: Blob): Promise<void> {
    await this.forage.setItem(key, value);
  }

  async removeBlob(key: string): Promise<void> {
    await this.forage.removeItem(key);
  }

  // ===== resolve cache (with TTL) =====

  async getCache<T>(key: string): Promise<T | null> {
    const entry = (await this.forage.getItem<CacheEntry<T>>(this.cacheKey(key))) ?? null;
    if (entry === null) return null;
    if (Date.now() >= entry.expiresAt) {
      await this.forage.removeItem(this.cacheKey(key));
      return null;
    }
    return entry.value;
  }

  async setCache<T>(key: string, value: T, ttlMs: number): Promise<void> {
    const entry: CacheEntry<T> = { value, expiresAt: Date.now() + ttlMs };
    await this.forage.setItem(this.cacheKey(key), entry);
  }

  async clearCache(): Promise<void> {
    const forage = this.forage;
    const prefix = this.cachePrefix();
    const keys = await forage.keys();
    await Promise.all(
      keys
        .filter((k: string) => k.startsWith(prefix))
        .map((k: string) => forage.removeItem(k)),
    );
  }

  // ----- key helpers -----

  private settingsKey(): string {
    return `${MODULE_NAME}__settings`;
  }

  private cachePrefix(): string {
    return `${MODULE_NAME}:cache:`;
  }

  private cacheKey(key: string): string {
    return `${this.cachePrefix()}${key}`;
  }
}

/**
 * Factory: creates a fresh {@link STStorageAdapter}.
 *
 * Kept as a function (rather than exporting the class directly) so that the
 * runtime wiring module can swap implementations without touching call sites.
 */
export function createSTStorageAdapter(): StorageAdapter {
  return new STStorageAdapter();
}
