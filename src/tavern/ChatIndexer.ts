import type { Cue, ScanCursor } from '@/types';
import { parseCue } from '@/parser/CueParser';

export type GetChatMessage = (index: number) => string | undefined;

interface ScanHit {
  messageId: number;
  cues: Cue[];
}

export interface SingleScanResult {
  messageId: number;
  cue: Cue | null;
}

export class ChatIndexer {
  private getChatMessage: GetChatMessage;
  private cursors: Map<string, ScanCursor> = new Map();

  constructor(getChatMessage: GetChatMessage) {
    this.getChatMessage = getChatMessage;
  }

  scanIncremental(
    chatId: string,
    fromId: number,
    toId: number,
  ): ScanHit[] {
    const hits: ScanHit[] = [];
    for (let id = fromId; id <= toId; id++) {
      const text = this.getChatMessage(id);
      if (text === undefined) continue;
      const cues = parseCue(text);
      if (cues.length === 0) continue;
      const last = cues.at(-1)!;
      hits.push({ messageId: id, cues: [last] });
    }
    this.cursors.set(chatId, {
      chatId,
      lastScannedMessageId: toId,
      updatedAt: Date.now(),
    });
    return hits;
  }

  scanMessage(
    chatId: string,
    messageId: number,
  ): SingleScanResult {
    void chatId;
    const text = this.getChatMessage(messageId);
    if (text === undefined) {
      return { messageId, cue: null };
    }
    const cues = parseCue(text);
    const last = cues.length > 0 ? cues.at(-1)! : null;
    return { messageId, cue: last };
  }

  getCursor(chatId: string): number {
    const cursor = this.cursors.get(chatId);
    return cursor ? cursor.lastScannedMessageId : -1;
  }

  setCursor(chatId: string, messageId: number): void {
    this.cursors.set(chatId, {
      chatId,
      lastScannedMessageId: messageId,
      updatedAt: Date.now(),
    });
  }

  reset(chatId: string): void {
    this.cursors.delete(chatId);
  }
}
