/**
 * Storage adapter abstraction.
 *
 * Decouples the extension from SillyTavern's concrete storage APIs so that
 * tests can inject a mock implementation and runtime can swap backends
 * (e.g. ST context vs. a pure-browser fallback).
 */
export interface StorageAdapter {
  // ===== ST extensionSettings (persisted to settings.json) =====

  /** Reads the object stored under this extension's settings slot. */
  getSettings<T>(): T | null;
  /** Writes the object to this extension's settings slot and persists. */
  setSettings<T>(value: T): void;

  // ===== ST chatMetadata (per-chat metadata, persisted to chat file) =====

  /** Reads a value from the current chat's metadata by key. */
  getMetadata<T>(key: string): T | null;
  /** Writes a value to the current chat's metadata by key and persists. */
  setMetadata<T>(key: string, value: T): void;

  // ===== localforage (IndexedDB) for large blobs =====

  getBlob(key: string): Promise<Blob | null>;
  setBlob(key: string, value: Blob): Promise<void>;
  removeBlob(key: string): Promise<void>;
}
