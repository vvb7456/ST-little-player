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

- **NetEase Cloud Music**: Search and play from NetEase Cloud Music (music.163.com). Uses a Cloudflare Worker as the backend proxy. You can use the official Worker or self-host your own. Requires a `MUSIC_U` cookie from music.163.com for playback. See [NetEase Setup](#netease-setup) below.
- **Server Upload**: Upload audio files to the ST server for playback

Enable or disable sources independently in Settings -> Playback -> Data Sources.

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

1. Configure NetEase Cloud Music: go to Settings -> Playback -> Data Sources, paste your MUSIC_U cookie and verify it. See [NetEase Setup](#netease-setup) for details.
2. Click the player widget to expand it
3. Click the **search** icon (left side of controls)
4. Type a song name and press Enter
5. Click a result to play it immediately, or click `+` to add to playlist
6. Click the **playlist** icon to view your queue - songs are organized into tabs:
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
- **Playback**: Default volume, play mode (list loop / random / single loop), crossfade, data sources (NetEase Cloud Music mode, cookie, Worker URL, upload), playlist import/export
- **AI**: AI BGM toggle, mode selection, custom API configuration, context messages, auto trigger, trigger on greeting, prompt role (system/user), custom prompt editor
- **General**: Debug mode, settings import/export, about

## NetEase Setup

The extension uses NetEase Cloud Music as its music source. A Cloudflare Worker acts as a proxy between your browser and NetEase's API. You need to configure two things: the Worker endpoint and your NetEase cookie.

### Step 1: Choose Worker Mode

In **Settings -> Playback -> Data Sources**, choose one of:

- **Official Worker**: Uses `https://xiaoyue.erocraft.org` (hosted by the extension author). No setup needed, but may be rate-limited or unavailable.
- **Self-hosted**: Deploy your own Cloudflare Worker (free tier is sufficient). See [Self-Hosting the Worker](#self-hosting-the-worker) below.

### Step 2: Get Your MUSIC_U Cookie

The `MUSIC_U` cookie is your NetEase Cloud Music login credential. The extension uses it to resolve playable audio URLs.

1. Open [music.163.com](https://music.163.com) in your browser and log in
2. Open browser DevTools (F12) -> Application tab (in Firefox: Storage tab)
3. Under **Cookies** -> `https://music.163.com`, find the cookie named `MUSIC_U`
4. Copy its **value** (a long hex string)
5. Paste it into the **MUSIC_U Cookie** field in Settings -> Playback -> Data Sources
6. Click the verify button (link icon) to check if the cookie is valid

**Cookie notes:**

- The cookie is stored only in your browser's local storage. It is never sent to the SillyTavern server.
- During playback, the cookie is sent via the `X-Netease-Cookie` header to the Worker for authentication. The Worker does not store the cookie.
- The cookie may expire periodically (typically every 14 days). If playback stops working, re-obtain the cookie and update it.

### Self-Hosting the Worker

Deploying your own Worker gives you full control and avoids depending on the official instance.

#### Prerequisites

- A Cloudflare account (free tier is sufficient)
- [Node.js](https://nodejs.org/) 18+ and npm

#### Deploy

1. Clone this repository:
   ```bash
   git clone https://github.com/vvb7456/ST-little-player.git
   cd ST-little-player/worker
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Authenticate with Cloudflare (interactive login):
   ```bash
   npx wrangler login
   ```
   Or set environment variables for CI/headless:
   ```bash
   export CLOUDFLARE_API_TOKEN="your-api-token"
   export CLOUDFLARE_ACCOUNT_ID="your-account-id"
   ```

4. Deploy:
   ```bash
   npx wrangler deploy
   ```
   You'll get a URL like `https://netease-proxy.<your-subdomain>.workers.dev`.

5. (Optional) Bind a custom domain in the Cloudflare dashboard -> Workers & Pages -> your Worker -> Settings -> Domains & Routes. This is recommended for better availability and CORS reliability.

6. In **Settings -> Playback -> Data Sources**, select **Self-hosted** and enter your Worker URL.

#### Worker Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/search?keyword=...&limit=...` | GET | Search songs |
| `/resolve?id=...` | GET | Resolve a playable audio URL (requires `X-Netease-Params` + `X-Netease-Cookie` headers) |
| `/detail?id=...` | GET | Get song metadata (name, artist, cover) |
| `/lyric?id=...` | GET | Get LRC lyrics |
| `/auth` | GET | Verify cookie validity (requires `X-Netease-Cookie` header) |

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
