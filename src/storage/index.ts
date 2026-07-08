export type { StorageAdapter } from './StorageAdapter';
export { STStorageAdapter, createSTStorageAdapter } from './STStorageAdapter';

/** Name under which this extension stores its data in ST contexts. */
export const MODULE_NAME = 'st-little-player';

/** chatMetadata key for the incremental scan cursor. */
export const CURSOR_KEY = 'stmp_cursor';

/** chatMetadata key for BGM play history. */
export const BGM_HISTORY_KEY = 'stmp_bgm_history';
