import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { STEventBridge } from '@/tavern/STEventBridge';
import type { InternalEventListener } from '@/types';

type Handler = (...args: any[]) => void;

interface FakeEventSource {
  on: (event: string, handler: Handler) => void;
  removeListener: (event: string, handler: Handler) => void;
  emit: (event: string, ...args: any[]) => void;
}

function makeFakeEventSource(): FakeEventSource & { handlers: Map<string, Handler[]> } {
  const handlers = new Map<string, Handler[]>();
  return {
    handlers,
    on(event, handler) {
      const arr = handlers.get(event) ?? [];
      arr.push(handler);
      handlers.set(event, arr);
    },
    removeListener(event, handler) {
      const arr = handlers.get(event) ?? [];
      const idx = arr.indexOf(handler);
      if (idx >= 0) arr.splice(idx, 1);
    },
    emit(event, ...args) {
      const arr = handlers.get(event) ?? [];
      for (const h of arr.slice()) h(...args);
    },
  };
}

const EVENT_TYPES = {
  CHAT_CHANGED: 'chat_id_changed',
  GENERATION_ENDED: 'generation_ended',
  MESSAGE_UPDATED: 'message_updated',
  MESSAGE_DELETED: 'message_deleted',
  MESSAGE_SWIPED: 'message_swiped',
} as const;

describe('STEventBridge', () => {
  let fakeSource: FakeEventSource;
  let originalST: typeof globalThis.SillyTavern | undefined;

  beforeEach(() => {
    fakeSource = makeFakeEventSource();
    originalST = (globalThis as any).SillyTavern;
    (globalThis as any).SillyTavern = {
      getContext: () => ({
        eventSource: fakeSource,
        event_types: EVENT_TYPES,
      }),
    };
  });

  afterEach(() => {
    if (originalST === undefined) {
      delete (globalThis as any).SillyTavern;
    } else {
      (globalThis as any).SillyTavern = originalST;
    }
  });

  it('start() bridges ST events to internal listeners', () => {
    const bridge = new STEventBridge();
    const onGenerated = vi.fn<InternalEventListener>();
    bridge.on('message-generated', onGenerated);
    bridge.start();

    fakeSource.emit(EVENT_TYPES.GENERATION_ENDED, 42);

    expect(onGenerated).toHaveBeenCalledTimes(1);
    expect(onGenerated).toHaveBeenCalledWith({ messageId: 42 });
    expect(onGenerated.mock.calls[0][0].chatId).toBeUndefined();
  });

  it('CHAT_CHANGED emits chat-changed with chatId', () => {
    const bridge = new STEventBridge();
    const onChat = vi.fn<InternalEventListener>();
    bridge.on('chat-changed', onChat);
    bridge.start();

    fakeSource.emit(EVENT_TYPES.CHAT_CHANGED, 'chat-abc');

    expect(onChat).toHaveBeenCalledWith({ chatId: 'chat-abc' });
    expect(onChat.mock.calls[0][0].messageId).toBeUndefined();
  });

  it('parses numeric messageId from string arg', () => {
    const bridge = new STEventBridge();
    const onSwiped = vi.fn<InternalEventListener>();
    bridge.on('message-swiped', onSwiped);
    bridge.start();

    fakeSource.emit(EVENT_TYPES.MESSAGE_SWIPED, '7');

    expect(onSwiped).toHaveBeenCalledWith({ messageId: 7 });
  });

  it('multiple listeners on same event are all called', () => {
    const bridge = new STEventBridge();
    const a = vi.fn<InternalEventListener>();
    const b = vi.fn<InternalEventListener>();
    bridge.on('message-updated', a);
    bridge.on('message-updated', b);
    bridge.start();

    fakeSource.emit(EVENT_TYPES.MESSAGE_UPDATED, 3);

    expect(a).toHaveBeenCalledWith({ messageId: 3 });
    expect(b).toHaveBeenCalledWith({ messageId: 3 });
  });

  it('unsubscribe function removes only that listener', () => {
    const bridge = new STEventBridge();
    const a = vi.fn<InternalEventListener>();
    const b = vi.fn<InternalEventListener>();
    const offA = bridge.on('message-deleted', a);
    bridge.on('message-deleted', b);
    bridge.start();

    offA();
    fakeSource.emit(EVENT_TYPES.MESSAGE_DELETED, 9);

    expect(a).not.toHaveBeenCalled();
    expect(b).toHaveBeenCalledWith({ messageId: 9 });
  });

  it('stop() removes all ST listeners', () => {
    const bridge = new STEventBridge();
    const onGenerated = vi.fn<InternalEventListener>();
    bridge.on('message-generated', onGenerated);
    bridge.start();

    const registeredCount = fakeSource.handlers.get(EVENT_TYPES.GENERATION_ENDED)?.length ?? 0;
    expect(registeredCount).toBe(1);

    bridge.stop();

    expect(fakeSource.handlers.get(EVENT_TYPES.GENERATION_ENDED)?.length ?? 0).toBe(0);

    fakeSource.emit(EVENT_TYPES.GENERATION_ENDED, 5);
    expect(onGenerated).not.toHaveBeenCalled();
  });

  it('start() is idempotent (no duplicate handlers)', () => {
    const bridge = new STEventBridge();
    bridge.on('message-generated', vi.fn());
    bridge.start();
    bridge.start();

    expect(fakeSource.handlers.get(EVENT_TYPES.GENERATION_ENDED)?.length).toBe(1);
  });

  it('listener throwing does not block subsequent listeners', () => {
    const bridge = new STEventBridge();
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    const a: InternalEventListener = () => {
      throw new Error('boom');
    };
    const b = vi.fn<InternalEventListener>();
    bridge.on('message-generated', a);
    bridge.on('message-generated', b);
    bridge.start();

    fakeSource.emit(EVENT_TYPES.GENERATION_ENDED, 1);

    expect(b).toHaveBeenCalled();
    errorSpy.mockRestore();
  });
});
