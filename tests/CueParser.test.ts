import { describe, it, expect } from 'vitest';
import { parseCue } from '@/parser/CueParser';

describe('parseCue', () => {
  it('matches <bgm>当前bgm:歌名 - 歌手</bgm>', () => {
    const cues = parseCue('<bgm>当前bgm:晴天 - 周杰伦</bgm>');
    expect(cues).toHaveLength(1);
    expect(cues[0]).toEqual({ song: '晴天', artist: '周杰伦', raw: '<bgm>当前bgm:晴天 - 周杰伦</bgm>' });
  });

  it('matches 中文冒号 <bgm>当前bgm：歌名 - 歌手</bgm>', () => {
    const cues = parseCue('<bgm>当前bgm：晴天 - 周杰伦</bgm>');
    expect(cues).toHaveLength(1);
    expect(cues[0].song).toBe('晴天');
    expect(cues[0].artist).toBe('周杰伦');
  });

  it('matches 仅歌名 <bgm>歌名</bgm>', () => {
    const cues = parseCue('前置文本 <bgm>晴天</bgm> 后置文本');
    expect(cues).toHaveLength(1);
    expect(cues[0]).toEqual({ song: '晴天', artist: undefined, raw: '<bgm>晴天</bgm>' });
  });

  it('matches <bgm>歌名 - 歌手</bgm> (无当前bgm前缀)', () => {
    const cues = parseCue('<bgm>晴天 - 周杰伦</bgm>');
    expect(cues).toHaveLength(1);
    expect(cues[0].song).toBe('晴天');
    expect(cues[0].artist).toBe('周杰伦');
  });

  it('matches 【BGM】歌名 - 歌手【/BGM】', () => {
    const cues = parseCue('【BGM】晴天 - 周杰伦【/BGM】');
    expect(cues).toHaveLength(1);
    expect(cues[0].song).toBe('晴天');
    expect(cues[0].artist).toBe('周杰伦');
    expect(cues[0].raw).toBe('【BGM】晴天 - 周杰伦【/BGM】');
  });

  it('matches 【BGM】仅歌名【/BGM】', () => {
    const cues = parseCue('【BGM】晴天【/BGM】');
    expect(cues).toHaveLength(1);
    expect(cues[0].song).toBe('晴天');
    expect(cues[0].artist).toBeUndefined();
  });

  it('matches [music]歌名 - 歌手[/music]', () => {
    const cues = parseCue('[music]晴天 - 周杰伦[/music]');
    expect(cues).toHaveLength(1);
    expect(cues[0].song).toBe('晴天');
    expect(cues[0].artist).toBe('周杰伦');
  });

  it('matches [music]仅歌名[/music]', () => {
    const cues = parseCue('[music]晴天[/music]');
    expect(cues).toHaveLength(1);
    expect(cues[0].song).toBe('晴天');
    expect(cues[0].artist).toBeUndefined();
  });

  it('无匹配返回空数组', () => {
    expect(parseCue('今天天气真好')).toEqual([]);
    expect(parseCue('')).toEqual([]);
  });

  it('多个匹配按位置顺序返回', () => {
    const text = '[music]第一首[/music] 中间文字 <bgm>第二首 - 歌手B</bgm> 结尾';
    const cues = parseCue(text);
    expect(cues).toHaveLength(2);
    expect(cues[0].song).toBe('第一首');
    expect(cues[1].song).toBe('第二首');
    expect(cues[1].artist).toBe('歌手B');
    // 确认按 index 排序
    expect(text.indexOf(cues[0].raw)).toBeLessThan(text.indexOf(cues[1].raw));
  });

  it('自定义正则匹配歌名和歌手', () => {
    const cues = parseCue('播放：{晴天|周杰伦}', ['播放：\\{(.+?)\\|(.+?)\\}']);
    expect(cues).toHaveLength(1);
    expect(cues[0].song).toBe('晴天');
    expect(cues[0].artist).toBe('周杰伦');
    expect(cues[0].raw).toBe('播放：{晴天|周杰伦}');
  });

  it('自定义正则仅歌名', () => {
    const cues = parseCue('♪晴天♪', ['♪(.+?)♪']);
    expect(cues).toHaveLength(1);
    expect(cues[0].song).toBe('晴天');
    expect(cues[0].artist).toBeUndefined();
  });

  it('无效自定义正则被忽略', () => {
    const cues = parseCue('文本', ['(']);
    expect(cues).toEqual([]);
  });

  it('取最后一项由调用方处理', () => {
    const text = '<bgm>第一首</bgm> <bgm>第二首</bgm>';
    const cues = parseCue(text);
    expect(cues).toHaveLength(2);
    expect(cues.at(-1)!.song).toBe('第二首');
  });
});
