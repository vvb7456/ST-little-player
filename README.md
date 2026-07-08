# 晓乐 (ST-Little-Player)

English | [简体中文](./README.zh-CN.md)

A scene-aware music player extension for SillyTavern. Adds a compact, theme-integrated music widget with AI-driven background music selection, time-synced lyrics, and slash command control.

## Features

### Player Widget

- **4 display modes**: Dock (flush with input bar), Drag (free-floating), Inline (embedded in input area), Hidden
- **Dock alignment**: Top or bottom, left or right
- **Collapsible**: Mini bar when collapsed (cover + controls), full panel when expanded (cover + lyrics + playlist + search)
- **Custom opacity**: Optional background opacity slider (dock/drag modes)
- **Glass effect & theme integration**: Automatically matches your ST theme
- **Mobile support**: Responsive layout with touch-friendly controls
- **Keyboard shortcuts**: Space to toggle play/pause, Esc to collapse
- **Crossfade**: Optional smooth volume fade in/out when starting, pausing, or switching tracks

### Music Sources

- **Network**: Search and play from online music platforms
- **Server Upload**: Upload audio files to the ST server for playback
- **Custom API**: Point to your own search and resolve endpoints. See [Custom API Format](#custom-api-format) below.

Enable or disable sources independently in Settings -> Playback.

### AI BGM

AI analyzes the conversation and automatically selects fitting background music.

**Two modes:**

- **Together**: Injects BGM instructions into the main AI's prompt. The AI includes a hidden song recommendation in its reply, which is automatically parsed and played. No extra API needed — works with your existing ST connection. You'll see a toast notification when a song is selected, and the track appears in the Chat playlist.
- **Function Call**: Registers invisible tools that the AI can call to search, play, and stop music during generation. Requires an official API endpoint that supports Function Calling (e.g. OpenAI, Claude, Gemini, DeepSeek). Third-party relay/proxy endpoints may not support Function Calling. Alternatively, configure a separate custom endpoint that supports Function Calling.

**Trigger options:**

- **Auto Trigger**: Automatically analyze new messages and select music when the scene changes
- **Trigger on Greeting**: Analyze BGM when loading a character card's first message (requires Auto Trigger)
- **Manual trigger**: Use `/xybgm` to trigger analysis on demand (Function Call mode only). The AI will analyze the recent conversation and select a fitting track.

**Other:**

- **BGM history**: Recently played songs are tracked per-chat for AI context
- **Custom prompts**: Editable BGM instruction prompt for Together mode with macro support
- **Chat playlist**: AI-selected songs are automatically added to the Chat playlist tab, where you can replay them anytime. The chat playlist is cleared on page reload.

### Slash Commands

All commands use the `xy` prefix:

| Command | Alias | Arguments | Description |
|---------|-------|-----------|-------------|
| `/xyplay` | `/xyp` | `[song name]` | No args: toggle play/pause. With song name: search and play immediately |
| `/xynext` | `/xyn` | - | Skip to next track |
| `/xyprev` | `/xypp` | - | Go to previous track |
| `/xyvol` | - | `[0-100]` | No args: show current volume. With number: set volume |
| `/xyadd` | - | `<song> [artist]` | Search and add to playlist without playing |
| `/xybgm` | - | - | Manually trigger AI BGM analysis (Function Call mode) |
| `/xynow` | - | - | Show current track info |

**Examples:**

```
/xyplay River Flows in You     # Search and play a specific song
/xyplay                         # Toggle play/pause
/xynext                         # Skip to next track
/xyvol 50                       # Set volume to 50%
/xyadd Lemon                    # Add a song to playlist without playing
/xynow                          # Show what's currently playing
```

### ST Macros

Available in prompts, character cards, and STscript:

| Macro | Description |
|-------|-------------|
| `{{xiaoyueCurrentSong}}` | Name of the currently playing track |
| `{{xiaoyueCurrentArtist}}` | Artist of the currently playing track |
| `{{xiaoyueIsPlaying}}` | `true` if audio is playing, `false` otherwise |
| `{{xiaoyueHasTrack}}` | `true` if a track is loaded, `false` otherwise |
| `{{xiaoyueRecentPlayed}}` | Comma-separated list of recently played songs (up to 5) |

**Example:**

```
Current BGM: {{xiaoyueCurrentSong}} - {{xiaoyueCurrentArtist}}
Playback status: {{xiaoyueIsPlaying}}
Recently played: {{xiaoyueRecentPlayed}}
```

### Lyrics

- LRC format with time-synced display
- Full panel: scrolling view with gradient mask
- Mini bar: vertical scroll (dock mode) or horizontal marquee (drag mode)

### Internationalization

- Chinese and English, auto-detected from your ST locale

## Installation

### Via ST Extension Manager (recommended)

1. Open SillyTavern -> Extensions -> Install Extension
2. Enter the repository URL:
   ```
   https://github.com/vvb7456/ST-little-player
   ```
3. Click Install
4. Reload the page when prompted

### Manual

1. Clone the repository into your ST extensions directory:
   ```
   cd SillyTavern/data/default-user/extensions
   git clone https://github.com/vvb7456/ST-little-player.git
   ```
2. Reload SillyTavern

## Usage

### Basic Playback

1. Click the player widget to expand it
2. Click the **search** icon (left side of controls)
3. Type a song name and press Enter
4. Click a result to play it immediately, or click `+` to add to playlist
5. Click the **playlist** icon to view your queue — songs are organized into tabs:
   - **Network**: Songs added from search
   - **Upload**: Files uploaded to the server (shown when upload source is enabled)
   - **Chat**: Songs selected by AI (shown when AI BGM is active)

### AI BGM

1. Go to Settings -> AI
2. Enable **AI BGM** toggle
3. Choose a mode:
   - **Together**: The main AI writes BGM recommendations into its responses. No extra API needed.
   - **Function Call**: The AI calls tools to search and play music. Requires an API that supports Function Calling, or configure a custom endpoint.
4. Enable **Auto Trigger** to analyze new messages automatically
5. (Optional) Enable **Trigger on Greeting** to analyze when opening a character card
6. Use `/xybgm` to manually trigger analysis at any time (Function Call mode only)

**Function Call custom endpoint settings:**

- **API URL**: OpenAI-compatible endpoint that supports Function Calling
- **API Key**: Bearer token for the endpoint
- **Model**: Click the connect button to fetch available models, or type a model name manually
- **Context Messages**: Number of recent chat messages to send to the AI (2-20, default 8)

**What happens when a song is not found:**

If the AI recommends a song that can't be found on any enabled music source, a warning toast is shown and playback continues unchanged.

## Settings

Four-tab settings panel (Appearance / Playback / AI / General):

- **Appearance**: Widget mode, dock alignment, custom opacity, drag mini text toggle
- **Playback**: Default volume, play mode (list loop / random / single loop), crossfade, music sources, playlist import/export
- **AI**: AI BGM toggle, mode selection, custom API configuration, context messages, auto trigger, trigger on greeting, prompt role (system/user), custom prompt editor
- **General**: Debug mode, settings import/export, about

## Custom API Format

The Custom API music source lets you point to your own endpoints for searching and resolving songs.

### Search Endpoint

The search URL should contain `{keyword}` as a placeholder. The extension will replace it with the URL-encoded search keyword.

**Expected response** (JSON array):

```json
[
  { "id": "123", "name": "Song Name", "artist": "Artist", "duration": 240 },
  ...
]
```

### Resolve Endpoint

The resolve URL should contain `{id}` as a placeholder. The extension will replace it with the URL-encoded song ID from search results.

**Expected response** (JSON object):

```json
{
  "url": "https://example.com/audio.mp3",
  "name": "Song Name",
  "artist": "Artist",
  "lyric": "[00:00.00] Lyric line...",
  "cover": "https://example.com/cover.jpg"
}
```

Only `url` is required. `lyric` should be in LRC format.

## Data & Storage

| Data | Scope | Persisted? |
|------|-------|------------|
| Extension settings | Per-user | Yes |
| Playlist (network + upload) | Per-user | Yes |
| AI-selected songs (chat playlist) | Per-chat | No (cleared on reload) |
| BGM play history | Per-chat | Yes |
| Uploaded audio files | Per-user | Yes |
| Player state (current track, playing) | - | No (lost on reload) |

Uninstalling via ST's "Clean extension data" will delete all settings, playlists, and uploaded server files.

## License

[AGPLv3](./LICENSE)

## Repository

[github.com/vvb7456/ST-little-player](https://github.com/vvb7456/ST-little-player)
