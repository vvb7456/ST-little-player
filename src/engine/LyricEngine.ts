import type { LyricLine } from '@/types';

const TAG_RE = /\[(\d{1,2}):(\d{2})(?:\.(\d{1,3}))?\]/g;

export function parseLyric(lrcText: string): LyricLine[] {
  const lines = lrcText.split(/\r?\n/);
  const result: LyricLine[] = [];

  for (const line of lines) {
    const re = new RegExp(TAG_RE.source, 'g');
    const times: number[] = [];
    let m: RegExpExecArray | null;
    while ((m = re.exec(line)) !== null) {
      const min = parseInt(m[1], 10);
      const sec = parseInt(m[2], 10);
      const msStr = m[3] ?? '';
      const ms = msStr ? parseInt(msStr.padEnd(3, '0'), 10) : 0;
      times.push(min * 60 + sec + ms / 1000);
    }

    if (times.length === 0) continue;

    const text = line.replace(new RegExp(TAG_RE.source, 'g'), '').trim();
    if (text === '') continue;

    for (const time of times) {
      result.push({ time, text });
    }
  }

  result.sort((a, b) => a.time - b.time);

  for (let i = 0; i < result.length; i++) {
    if (i < result.length - 1) {
      result[i].next = result[i + 1];
    }
  }

  return result;
}

export function getActiveLine(lyrics: LyricLine[], currentTime: number): LyricLine | null {
  if (lyrics.length === 0) return null;

  let active: LyricLine | null = null;
  for (const line of lyrics) {
    if (line.time <= currentTime) {
      active = line;
    } else {
      break;
    }
  }
  return active;
}
