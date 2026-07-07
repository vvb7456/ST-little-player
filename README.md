# 晓乐 (ST-Little-Player)

A SillyTavern native extension that adds a scene-aware music player. Parses song cues from chat messages, resolves and plays tracks from multiple sources, and displays time-synced lyrics — all inside a compact, theme-integrated widget.

## Installation

Via ST Extension Manager, enter URL:

```
https://github.com/vvb7456/ST-little-player
```

## Features

### Player Widget
- **4 display modes**: Dock (flush with input bar), Drag (free-floating), Inline (inside `#send_form`), Hidden
- **Dock alignment**: Left or right of the input bar (desktop)
- **Collapsible**: Mini bar when collapsed, full panel with cover + lyrics when expanded
- **Custom opacity**: Optional background opacity slider (dock/drag modes)
- **Glass effect**: Uses ST `--SmartThemeBlurStrength` + `--SmartThemeBlurTintColor`
- **Theme integration**: All colors via `--SmartTheme*` CSS variables, font via `--mainFontSize`
- **Mobile support**: Mounts on `<html>` to escape ST mobile `position:fixed` quirks
- **Drag/click distinction**: Long-press (>500ms) suppresses expand after drag

### Music Sources (Providers)
- **NetEase Cloud Music**: Search, lyrics, cover via official API; playable URL via gdstudio proxy
- **Local File**: Upload audio files (stored as blobs in browser IndexedDB), per-device
- **Custom API**: Point to your own search/resolve endpoints

Enable/disable providers independently in Settings → Playback.

### AI Cue Parsing
- Detects song cues in chat messages via built-in patterns + **custom regex rules**
- **Incremental chat indexer**: Scans only new messages, persists cursor per chat in `chatMetadata`
- **Auto-play on new cue**: Optionally auto-play when a new song is detected
- Playlist grouped by source: **From Chat** / **My List** / **Local Files**

### Lyrics
- LRC lyric engine with time-synced display
- Full-list render + `translateY` smooth scroll
- Mini bar: single-line lyric (dock) or marquee scroll (drag)

### i18n
- Chinese (`zh*`) and English, auto-detected via `getCurrentLocale()`

## Settings

4-tab settings page (Appearance / Playback / AI / General):

- **Appearance**: Widget mode, dock alignment, custom opacity
- **Playback**: Default volume, default play mode (list/random/single), providers
- **AI**: Auto-play on new cue, custom cue regex rules
- **General**: Export/import settings (JSON), about

## Tech Stack

- Vue 3 + Pinia + TypeScript
- Vite (build) + Vitest (unit tests, 78 passing)
- Zero external CDN dependencies
- Self-hosted nginx proxy for NetEase official API

## State Persistence

| Data | Storage | Scope |
|------|---------|-------|
| Extension settings | ST server (`extensionSettings`) | Per-user |
| Scan cursor, playlist (chat + local items) | ST server (`chatMetadata`) | Per-chat |
| Local audio blobs | Browser IndexedDB (localforage) | Per-device |
| Player runtime (current track, playing state, time) | Not persisted | Lost on refresh |

## License

AGPLv3

## Repository

[github.com/vvb7456/ST-little-player](https://github.com/vvb7456/ST-little-player)
