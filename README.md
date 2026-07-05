# ST-little-player (悬浮音乐播放器)

A SillyTavern native third-party extension that provides a floating, draggable music player widget. Supports multi-source music providers (NetEase, LocalFile, CustomAPI), AI-cue-triggered playlist from chat messages, LRC lyrics display, and more.

## Installation

Via ST Extension Manager, enter URL:

```
https://github.com/vvb7456/ST-little-player
```

## Features

- Floating draggable player widget, collapsible
- Multi-source music providers (NetEase Cloud Music, Local File, Custom API)
- AI cue parsing from chat messages with configurable regex rules
- Incremental chat indexer with cursor persistence
- LRC lyric engine with time-synced display
- Responsive (768px breakpoint, mobile bottom bar)
- Accessibility: aria-label, keyboard shortcuts, focus ring
- ST theme integration (uses SmartTheme CSS variables)

## Usage

After installation, a floating bar appears in the top-right corner. Click to expand. Contains List/Search/Settings tabs.

## Configuration

In Settings tab, configure providers, volume, play mode, auto-play, custom cue rules, data export/import, cache clear.

## Tech Stack

- Vue 3
- Pinia
- Vite
- TypeScript
- Vitest

## License

AGPLv3
