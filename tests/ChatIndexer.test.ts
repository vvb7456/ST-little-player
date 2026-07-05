import { describe, it, expect } from 'vitest';
import { ChatIndexer } from '@/tavern/ChatIndexer';

describe('ChatIndexer', () => {
  it('增量扫描只返回有 cue 的消息', () => {
    const messages: (string | undefined)[] = [
      '今天天气真好',
      '<bgm>晴天 - 周杰伦</bgm>',
      '没有音乐',
    ];
    const indexer = new ChatIndexer((i) => messages[i]);
    const hits = indexer.scanIncremental('chat-1', 0, 2);
    expect(hits).toHaveLength(1);
    expect(hits[0].messageId).toBe(1);
    expect(hits[0].cues).toHaveLength(1);
    expect(hits[0].cues[0].song).toBe('晴天');
    expect(hits[0].cues[0].artist).toBe('周杰伦');
  });

  it('取每条消息的最后一个 cue', () => {
    const messages = ['<bgm>第一首</bgm> <bgm>第二首</bgm>'];
    const indexer = new ChatIndexer((i) => messages[i]);
    const hits = indexer.scanIncremental('chat-1', 0, 0);
    expect(hits).toHaveLength(1);
    expect(hits[0].cues).toHaveLength(1);
    expect(hits[0].cues[0].song).toBe('第二首');
  });

  it('游标推进到 toId', () => {
    const indexer = new ChatIndexer(() => undefined);
    expect(indexer.getCursor('chat-1')).toBe(-1);
    indexer.scanIncremental('chat-1', 0, 5);
    expect(indexer.getCursor('chat-1')).toBe(5);
    indexer.scanIncremental('chat-1', 6, 8);
    expect(indexer.getCursor('chat-1')).toBe(8);
  });

  it('游标在无匹配时也推进', () => {
    const indexer = new ChatIndexer(() => '无音乐文本');
    indexer.scanIncremental('chat-1', 0, 3);
    expect(indexer.getCursor('chat-1')).toBe(3);
  });

  it('scanMessage 不推进游标', () => {
    const indexer = new ChatIndexer((i) => (i === 1 ? '<bgm>晴天</bgm>' : undefined));
    indexer.scanIncremental('chat-1', 0, 2);
    expect(indexer.getCursor('chat-1')).toBe(2);
    const result = indexer.scanMessage('chat-1', 5, []);
    expect(result.cue).toBeNull();
    expect(indexer.getCursor('chat-1')).toBe(2);
  });

  it('scanMessage 返回最后一个 cue', () => {
    const indexer = new ChatIndexer(() => '<bgm>第一首</bgm> <bgm>第二首</bgm>');
    const result = indexer.scanMessage('chat-1', 0);
    expect(result.cue).not.toBeNull();
    expect(result.cue!.song).toBe('第二首');
  });

  it('scanMessage 消息不存在返回 null', () => {
    const indexer = new ChatIndexer(() => undefined);
    const result = indexer.scanMessage('chat-1', 99);
    expect(result.cue).toBeNull();
  });

  it('reset 清除游标', () => {
    const indexer = new ChatIndexer(() => undefined);
    indexer.scanIncremental('chat-1', 0, 3);
    expect(indexer.getCursor('chat-1')).toBe(3);
    indexer.reset('chat-1');
    expect(indexer.getCursor('chat-1')).toBe(-1);
  });

  it('多 chatId 游标独立', () => {
    const indexer = new ChatIndexer(() => undefined);
    indexer.scanIncremental('chat-1', 0, 2);
    indexer.scanIncremental('chat-2', 0, 5);
    expect(indexer.getCursor('chat-1')).toBe(2);
    expect(indexer.getCursor('chat-2')).toBe(5);
    indexer.reset('chat-1');
    expect(indexer.getCursor('chat-1')).toBe(-1);
    expect(indexer.getCursor('chat-2')).toBe(5);
  });

  it('setCursor 手动设置游标', () => {
    const indexer = new ChatIndexer(() => undefined);
    indexer.setCursor('chat-1', 10);
    expect(indexer.getCursor('chat-1')).toBe(10);
  });

  it('customRules 透传到 parseCue', () => {
    const indexer = new ChatIndexer((i) => (i === 0 ? '♪晴天♪' : undefined));
    const hits = indexer.scanIncremental('chat-1', 0, 0, ['♪(.+?)♪']);
    expect(hits).toHaveLength(1);
    expect(hits[0].cues[0].song).toBe('晴天');
  });
});
