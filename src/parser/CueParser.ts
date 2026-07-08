import type { Cue } from '@/types';

const BUILTIN_RULES: RegExp[] = [
  /<bgm>当前bgm[:：](.+?) - (.+?)<\/bgm>/g,
  /<bgm>当前bgm[:：](.+?)<\/bgm>/g,
  /<bgm>(.+?) - (.+?)<\/bgm>/g,
  /<bgm>(.+?)<\/bgm>/g,
  /【BGM】(.+?)(?: - (.+?))?【\/BGM】/g,
  /\[music\](.+?)(?: - (.+?))?\[\/music\]/g,
];

interface RawHit {
  index: number;
  cue: Cue;
}

function runRule(regex: RegExp, text: string): RawHit[] {
  const hits: RawHit[] = [];
  const re = new RegExp(regex.source, 'g');
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    if (m.index === re.lastIndex) re.lastIndex++;
    const song = m[1];
    if (song === undefined || song === '') continue;
    const artist = m[2];
    const cue: Cue = {
      song: song.trim(),
      artist: artist !== undefined && artist !== '' ? artist.trim() : undefined,
      raw: m[0],
    };
    hits.push({ index: m.index, cue });
  }
  return hits;
}

export function parseCue(messageText: string): Cue[] {
  const byIndex = new Map<number, RawHit>();

  const addUnique = (hit: RawHit): void => {
    if (!byIndex.has(hit.index)) byIndex.set(hit.index, hit);
  };

  for (const regex of BUILTIN_RULES) {
    for (const hit of runRule(regex, messageText)) addUnique(hit);
  }

  return [...byIndex.values()]
    .sort((a, b) => a.index - b.index)
    .map((h) => h.cue);
}
