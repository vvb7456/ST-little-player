import type { StorageAdapter } from './StorageAdapter';
import { MODULE_NAME } from './index';

/**
 * SillyTavern-backed implementation of {@link StorageAdapter}.
 *
 * Resolves all storage primitives from `SillyTavern.getContext()` at call time
 * so that chat switches (which replace the `chatMetadata` reference) are
 * always observed.
 *
 * Falls back to a localStorage implementation when the
 * `SillyTavern` global is not present (e.g. unit tests). The fallback is a
 * best-effort shim and not intended for production use.
 */
export class STStorageAdapter implements StorageAdapter {
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

  // ===== playlist data (separate key in extensionSettings) =====

  getPlaylistData<T>(): T | null {
    if (this.hasST()) {
      const ctx = this.ctx();
      const raw = ctx.extensionSettings[`${MODULE_NAME}-playlist`];
      return (raw ?? null) as T | null;
    }
    const raw = localStorage.getItem(this.playlistKey());
    if (raw === null) return null;
    try {
      return JSON.parse(raw) as T;
    } catch {
      return null;
    }
  }

  setPlaylistData<T>(value: T): void {
    if (this.hasST()) {
      const ctx = this.ctx();
      ctx.extensionSettings[`${MODULE_NAME}-playlist`] = value;
      ctx.saveSettingsDebounced();
      return;
    }
    localStorage.setItem(this.playlistKey(), JSON.stringify(value));
  }

  // ===== chatMetadata =====

  getMetadata<T>(key: string): T | null {
    if (this.hasST()) {
      const ctx = this.ctx();
      const meta = ctx.chatMetadata;
      const raw = meta[key];
      return (raw ?? null) as T | null;
    }
    return null;
  }

  setMetadata<T>(key: string, value: T): void {
    if (this.hasST()) {
      const ctx = this.ctx();
      const meta = ctx.chatMetadata;
      meta[key] = value;
      ctx.saveMetadata();
      return;
    }
  }

  // ----- key helpers -----

  private settingsKey(): string {
    return `${MODULE_NAME}__settings`;
  }

  private playlistKey(): string {
    return `${MODULE_NAME}__playlist`;
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
