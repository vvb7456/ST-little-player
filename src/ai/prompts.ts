/**
 * All AI prompt templates extracted into one place.
 * Prompt text is kept here; PromptBuilder.ts assembles them with runtime data.
 */

export const MARKER_START = '<!--XY_BGM_START-->';
export const MARKER_END = '<!--XY_BGM_END-->';

// ===== Shared fragments =====

// ===== Function Call Mode — System prompt (shared by both paths) =====

export const FC_SYSTEM = `You need to manage background music for a roleplay chat session. You have access to tools for searching and playing music.

## Tools

- search_music: Search a music platform for songs by keyword. Returns up to 5 matches with IDs, names, artists, and durations.
- play_music: Play a song by its search result ID. The ID must come from a prior search_music call result.
- stop_music: Stop the currently playing track. Use only when the scene calls for silence.
- get_current_track: Get the currently playing track info. Use if you need to verify playback state.

## Workflow

1. Analyze the scene's atmosphere, mood, location, time, and emotion from the conversation.
2. If the current track fits, do nothing — return without calling any tool.
3. If a change is needed, call search_music with a specific song name you have in mind.
4. Review the search results. Call play_music with the best match — do not overthink it.
5. If the first search yields no usable result, try ONE more search with a different song name.
6. After the second search, you MUST either call play_music or return without action. Do not search a third time.

## Search Rules

- ALWAYS search with a specific song name (e.g. "River Flows in You", "Darkest Dungeon Theme", "Lemon"). NEVER use vague genre descriptions like "dark dungeon ambient orchestral" or "epic villain theme".
- Prefer songs with vocals over instrumental tracks. If the scene fits a vocal song, choose one.
- If the scene is from a game or anime, search for the actual soundtrack name.
- Chinese song names work for Chinese songs. English song names work for international tracks.

## When to Act

- No music is currently playing and a scene is underway. Select an opening track that fits the setting.
- The scene transitions to a new location, time, or emotional state and the current track no longer fits.
- The narrative introduces a significant mood shift (tension, romance, combat, calm, etc.).

## When NOT to Act

- The current track still fits the scene. Unnecessary changes break immersion.
- The mood has not meaningfully changed. Do not call tools on every message.
- You are uncertain whether a change is warranted — keep the current track.

## Guidelines

- You MUST use real, existing song titles that can be found on music streaming platforms. Never invent or guess song names.
- Prefer songs with vocals (songs with singing/lyrics) over pure instrumentals. Vocal tracks create stronger emotional immersion.
- Instrumental tracks, game OSTs, and film scores are acceptable only when no fitting vocal song exists.
- Song and artist names must be exact — a misspelled title cannot be found and will not play.
- Prefer songs in the language of the user's current conversation.
- Avoid repeating recently played songs.
- When uncertain whether to change, keep the current track.`;

export const FC_USER_HEADER = '## Conversation';
export const FC_USER_FOOTER = 'Analyze the above conversation and manage background music using the available tools.';

// ===== Together Mode — Interceptor injection =====

export const TOGETHER_INTERCEPTOR = `Background music control is needed for this roleplay session. After writing your narrative, append a BGM marker at the end of your response.

## Output Format (must follow strictly)

After your narrative, append exactly:
${MARKER_START}
{"song":"song name","artist":"artist name","action":"play"}
${MARKER_END}

For "keep" (no change needed), omit song and artist:
${MARKER_START}
{"action":"keep"}
${MARKER_END}

The marker will be automatically removed from the visible message. Users will not see it.

## When to Output "play"

- No music is currently playing and a scene is underway. Select an opening track that fits the setting.
- The scene transitions to a new location, time, or emotional state and the current track no longer fits.
- The narrative introduces a significant mood shift (tension, romance, combat, calm, etc.).

## When to Output "keep"

- The current track still fits the scene. Unnecessary changes break immersion.
- The mood has not meaningfully changed. Do not output a marker on every response.
- You are uncertain whether a change is warranted — keep the current track.

## Guidelines

- You MUST use real, existing song titles that can be found on music streaming platforms. Never invent or guess song names.
- Prefer songs with vocals (songs with singing/lyrics) over pure instrumentals. Vocal tracks create stronger emotional immersion.
- Instrumental tracks, game OSTs, and film scores are acceptable only when no fitting vocal song exists.
- Song and artist names must be exact — a misspelled title cannot be found and will not play.
- Prefer songs in the language of the user's current conversation.
- Avoid repeating recently played songs.

## Current State
- Now playing: {{xiaoyueCurrentSong}}{{xiaoyueCurrentArtist}}
- Is playing: {{xiaoyueIsPlaying}}
- Recently played: {{xiaoyueRecentPlayed}}`;

// ===== Function Call Mode — Auxiliary prompt (for ST main API path) =====

export const FC_AUX = `Background music control is available for this roleplay session.

## Tools

- search_music: Search a music platform for songs by keyword. Returns up to 5 matches with IDs, names, artists, and durations.
- play_music: Play a song by its search result ID. The ID must come from a prior search_music result.
- stop_music: Stop the currently playing music. Use only when the scene calls for silence.
- get_current_track: Get the currently playing track info.

## When to Act

- No music is currently playing and a scene is underway. Select an opening track that fits the setting.
- The scene transitions to a new location, time, or emotional state and the current track no longer fits.
- The narrative introduces a significant mood shift (tension, romance, combat, calm, etc.).

## When NOT to Act

- The current track still fits the scene. Unnecessary changes break immersion.
- The mood has not meaningfully changed. Do not call tools on every message.
- You are uncertain whether a change is warranted — keep the current track.

## Guidelines

- You MUST use real, existing song titles that can be found on music streaming platforms. Never invent or guess song names.
- Prefer songs with vocals (songs with singing/lyrics) over pure instrumentals. Vocal tracks create stronger emotional immersion.
- Instrumental tracks, game OSTs, and film scores are acceptable only when no fitting vocal song exists.
- Song and artist names must be exact — a misspelled title cannot be found and will not play.
- Prefer songs in the language of the user's current conversation.
- Avoid repeating recently played songs.

## Current State
- Now playing: {{xiaoyueCurrentSong}}{{xiaoyueCurrentArtist}}
- Is playing: {{xiaoyueIsPlaying}}
- Recently played: {{xiaoyueRecentPlayed}}`;

// ===== Function Call Mode — Unified tool definitions (used by both paths) =====

export const FC_TOOL_SEARCH_NAME = 'search_music';
export const FC_TOOL_SEARCH_DESC = 'Search a music platform for songs by keyword. Returns up to 5 matches with IDs, names, artists, and durations.';
export const FC_TOOL_SEARCH_PARAM_KEYWORD = 'Search keyword — song name, artist name, or both.';

export const FC_TOOL_PLAY_NAME = 'play_music';
export const FC_TOOL_PLAY_DESC = 'Play a song by its search result ID. The ID must come from a prior search_music result. Returns playback status.';
export const FC_TOOL_PLAY_PARAM_ID = 'The ID from a search_music result entry.';

export const FC_TOOL_STOP_NAME = 'stop_music';
export const FC_TOOL_STOP_DESC = 'Stop the currently playing music. Use only when the scene explicitly calls for silence.';

export const FC_TOOL_GET_CURRENT_NAME = 'get_current_track';
export const FC_TOOL_GET_CURRENT_DESC = 'Get information about the currently playing track, including song name, artist, and playback status.';

// ===== ST function tool display strings =====

export const FC_TOOL_PLAY_DISPLAY = '播放音乐';
export const FC_TOOL_PLAY_FORMAT = '播放音乐: {song}{artist}';
export const FC_TOOL_STOP_DISPLAY = '停止音乐';
export const FC_TOOL_STOP_FORMAT = '停止音乐';

// ===== Function Call Mode — Tool return messages (AI-visible, English) =====

export const FC_TOOL_SEARCH_RESULT = (results: { id: string; name: string; artist: string; duration?: number }[]) => {
  if (results.length === 0) return 'No results found. Try different keywords.';
  return JSON.stringify(results.map(r => ({
    id: r.id,
    name: r.name,
    artist: r.artist,
    ...(r.duration ? { duration: r.duration } : {}),
  })));
};

export const FC_TOOL_SEARCH_NO_KEYWORD = 'Missing required parameter: keyword';
export const FC_TOOL_SEARCH_NO_RESULTS = 'No results found for: "{keyword}". Try different keywords.';

export const FC_TOOL_PLAY_MISSING_ID = 'Missing required parameter: result_id';
export const FC_TOOL_PLAY_INVALID_ID = 'Invalid result_id: "{id}". This ID does not match any prior search result. Call search_music first.';
export const FC_TOOL_PLAY_RESOLVE_FAILED = 'Failed to resolve track: {name}{artist}. The track may be unavailable.';
export const FC_TOOL_PLAY_SUCCESS = 'Now playing: {name}{artist}';

export const FC_TOOL_STOP_SUCCESS = 'Music stopped.';
export const FC_TOOL_STOP_NOTHING = 'No music is currently playing.';

export const FC_TOOL_GET_CURRENT_RESULT = (song: string, artist: string | null, isPlaying: boolean) =>
  JSON.stringify({ song, artist, is_playing: isPlaying });
export const FC_TOOL_GET_CURRENT_NONE = 'No track is currently loaded.';

// (legacy schema names removed)
