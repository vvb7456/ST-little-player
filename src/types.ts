// ===== Provider Types =====

export interface MusicProvider {
  id: string;
  name: string;
  search(keyword: string): Promise<SearchResult[]>;
  resolve(id: string): Promise<ResolvedTrack | null>;
}

export interface SearchResult {
  id: string;
  name: string;
  artist: string;
  duration?: number;
  provider: string;
}

export interface ResolvedTrack {
  url: string;
  lyric?: string;
  cover?: string;
  name: string;
  artist: string;
  source: string;
}

// ===== Playlist Types =====

export interface PlaylistItem {
  id: string;
  song: string;
  artist?: string;
  source: 'chat' | 'user' | 'local';
  messageId?: number;
  providerId?: string;
  providerTrackId?: string;
  localBlobKey?: string;
  addedAt: number;
}

export type PlayMode = 'list' | 'random' | 'single';

// ===== Cue Parser Types =====

export interface Cue {
  song: string;
  artist?: string;
  raw: string;
}

// ===== Lyric Types =====

export interface LyricLine {
  time: number;
  text: string;
  next?: LyricLine;
}

// ===== Scan Cursor =====

export interface ScanCursor {
  chatId: string;
  lastScannedMessageId: number;
  updatedAt: number;
}

// ===== Settings =====

export interface ExtensionSettings {
  volume: number;
  playMode: PlayMode;
  position: { x: number; y: number } | null;
  autoPlayOnNewCue: boolean;
  providers: ProviderConfig[];
  customCueRules: string[];
}

export interface ProviderConfig {
  id: string;
  enabled: boolean;
  priority: number;
  config?: Record<string, string>;
}

// ===== Internal Events =====

export type InternalEvent =
  | 'chat-changed'
  | 'message-generated'
  | 'message-updated'
  | 'message-deleted'
  | 'message-swiped';

export type InternalEventListener = (payload: { chatId?: string; messageId?: number }) => void;
