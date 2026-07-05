import { describe, it, expect } from 'vitest';
import { parseLyric, getActiveLine } from '@/engine/LyricEngine';

describe('parseLyric', () => {
  it('解析正常 LRC(多时间标签、毫秒)', () => {
    const lrc = [
      '[00:01.00]第一句',
      '[00:03.50]第二句',
      '[01:02.5]第三句',
      '[02:00]第四句',
    ].join('\n');
    const result = parseLyric(lrc);
    expect(result).toHaveLength(4);
    expect(result[0]).toEqual({ time: 1, text: '第一句', next: result[1] });
    expect(result[1].time).toBe(3.5);
    expect(result[1].text).toBe('第二句');
    expect(result[2].time).toBe(62.5);
    expect(result[2].text).toBe('第三句');
    expect(result[3].time).toBe(120);
    expect(result[3].text).toBe('第四句');
    expect(result[3].next).toBeUndefined();
    expect(result[1].next).toBe(result[2]);
  });

  it('同行多个时间标签各自生成 LyricLine', () => {
    const lrc = '[00:01.00][00:03.00]重复句';
    const result = parseLyric(lrc);
    expect(result).toHaveLength(2);
    expect(result[0]).toEqual({ time: 1, text: '重复句', next: result[1] });
    expect(result[1]).toEqual({ time: 3, text: '重复句' });
  });

  it('毫秒不足 3 位 padEnd 到 3 位(2 -> 200)', () => {
    const lrc = '[00:01.2]测试';
    const result = parseLyric(lrc);
    expect(result[0].time).toBe(1.2);
  });

  it('毫秒 1 位(5 -> 500)', () => {
    const lrc = '[00:01.5]测试';
    const result = parseLyric(lrc);
    expect(result[0].time).toBe(1.5);
  });

  it('空字符串返回空数组', () => {
    expect(parseLyric('')).toEqual([]);
  });

  it('无时间标签的行被跳过', () => {
    const lrc = '这是没有时间标签的行\n[ti: 晴天]\n[ar: 周杰伦]\n无标签';
    expect(parseLyric(lrc)).toEqual([]);
  });

  it('时间标签后文本为空则跳过该行', () => {
    const lrc = '[00:01.00]\n[00:02.00]   \n[00:03.00]有效';
    const result = parseLyric(lrc);
    expect(result).toHaveLength(1);
    expect(result[0].time).toBe(3);
    expect(result[0].text).toBe('有效');
  });

  it('按 time 升序排序(乱序输入)', () => {
    const lrc = '[00:10.00]后\n[00:01.00]前\n[00:05.00]中';
    const result = parseLyric(lrc);
    expect(result.map((l) => l.time)).toEqual([1, 5, 10]);
    expect(result.map((l) => l.text)).toEqual(['前', '中', '后']);
  });

  it('文本前后空格被 trim', () => {
    const lrc = '[00:01.00]   有空格   ';
    const result = parseLyric(lrc);
    expect(result[0].text).toBe('有空格');
  });
});

describe('getActiveLine', () => {
  const lyrics = parseLyric('[00:01.00]第一句\n[00:03.00]第二句\n[00:05.00]第三句');

  it('currentTime=0 时返回 null', () => {
    expect(getActiveLine(lyrics, 0)).toBeNull();
  });

  it('currentTime 小于第一句返回 null', () => {
    expect(getActiveLine(lyrics, 0.5)).toBeNull();
  });

  it('currentTime 等于某句返回该句', () => {
    expect(getActiveLine(lyrics, 3)).toBe(lyrics[1]);
  });

  it('currentTime 在两句之间返回上一句', () => {
    expect(getActiveLine(lyrics, 4)).toBe(lyrics[1]);
  });

  it('currentTime 超出最后一句返回最后一句', () => {
    expect(getActiveLine(lyrics, 100)).toBe(lyrics[2]);
  });

  it('空数组返回 null', () => {
    expect(getActiveLine([], 10)).toBeNull();
  });

  it('刚好等于第一句返回第一句', () => {
    expect(getActiveLine(lyrics, 1)).toBe(lyrics[0]);
  });
});
