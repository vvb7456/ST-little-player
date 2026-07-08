// ===== Provider Types =====

export interface MusicProvider {
  id: string;
  name: string;
  search(keyword: string): Promise<SearchResult[]>;
  resolve(id: string, picId?: string): Promise<ResolvedTrack | null>;
  searchAndResolve?(keyword: string, artist?: string): Promise<ResolvedTrack | null>;
}

export interface SearchResult {
  id: string;
  name: string;
  artist: string;
  duration?: number;
  provider: string;
  picId?: string;
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
  source: 'network' | 'server' | 'chat';
  providerId?: string;
  providerTrackId?: string;
  providerPicId?: string;
  serverPath?: string;
  addedAt: number;
}

export type PlayMode = 'list' | 'random' | 'single';

// ===== Lyric Types =====

export interface LyricLine {
  time: number;
  text: string;
  next?: LyricLine;
}

// ===== Settings =====

export type WidgetMode = 'dock' | 'drag' | 'hidden' | 'inline';
export type DockAlign = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

export interface ExtensionSettings {
  volume: number;
  playMode: PlayMode;
  position: { x: number; y: number } | null;
  widgetMode: WidgetMode;
  dockAlign: DockAlign;
  showDragMiniText: boolean;
  providers: ProviderConfig[];
  customOpacity: boolean;
  opacity: number;
  // AI BGM
  aiMode: AiMode;
  aiUseCustomApi: boolean;
  aiContextMessages: number;
  aiApiUrl: string;
  aiApiKey: string;
  aiModel: string;
  aiAutoTrigger: boolean;
  aiTriggerOnGreeting: boolean;
  aiCooldownMs: number;
  togetherPromptRole: 'system' | 'user';
  togetherCustomPromptEnabled: boolean;
  togetherCustomPrompt: string;
}

export interface ProviderConfig {
  id: string;
  enabled: boolean;
  priority: number;
  config?: Record<string, string>;
}

// ===== AI BGM =====

export type AiMode = 'off' | 'together' | 'function_call';

export interface BgmRecommendation {
  action: 'play' | 'keep';
  song?: string;
  artist?: string;
}

export interface BgmHistoryEntry {
  song: string;
  artist?: string;
  messageId?: number;
  playedAt: number;
}
