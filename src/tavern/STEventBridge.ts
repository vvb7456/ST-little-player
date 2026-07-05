import type { InternalEvent, InternalEventListener } from '@/types';

/**
 * SillyTavern event name type. ST exposes event types as string keys on
 * the `event_types` object from `getContext()`. We type loosely as string
 * to remain compatible across ST versions without a hard type dependency.
 */
type STEventName = string;

interface EventSource {
  on(event: string, listener: (...args: any[]) => void): void;
  removeListener(event: string, listener: (...args: any[]) => void): void;
}

/**
 * Bridges SillyTavern's concrete {@link event_types} into the extension's
 * internal {@link InternalEvent} vocabulary. This keeps the rest of the
 * codebase decoupled from ST's exact event names and payload shapes.
 *
 * Usage:
 *   const bridge = new STEventBridge();
 *   bridge.on('message-generated', ({ messageId }) => { ... });
 *   bridge.start();
 *   // ... later
 *   bridge.stop();
 */
export class STEventBridge {
  private listeners: Map<InternalEvent, Set<InternalEventListener>> = new Map();

  /** Handlers registered with ST's eventSource; captured so stop() can remove them. */
  private registered: Array<{ event: STEventName; handler: (...args: any[]) => void }> = [];

  /**
   * Subscribe to an internal event.
   * @returns an unsubscribe function.
   */
  on(event: InternalEvent, listener: InternalEventListener): () => void {
    let set = this.listeners.get(event);
    if (!set) {
      set = new Set();
      this.listeners.set(event, set);
    }
    set.add(listener);
    return () => {
      const s = this.listeners.get(event);
      if (s) {
        s.delete(listener);
        if (s.size === 0) this.listeners.delete(event);
      }
    };
  }

  /** Start bridging: register ST event listeners. Safe to call once. */
  start(): void {
    if (this.registered.length > 0) return;

    const ctx = SillyTavern.getContext();
    const source = ctx.eventSource as EventSource;
    const types = ctx.event_types;

    const register = (
      stEvent: STEventName,
      internal: InternalEvent,
      extract: (id: unknown) => { chatId?: string; messageId?: number },
    ): void => {
      const handler = (...args: any[]): void => {
        const payload = extract(args[0]);
        this.emit(internal, payload);
      };
      source.on(stEvent, handler);
      this.registered.push({ event: stEvent, handler });
    };

    register(types.CHAT_CHANGED, 'chat-changed', (arg) => ({
      chatId: typeof arg === 'string' ? arg : undefined,
    }));

    register(types.GENERATION_ENDED, 'message-generated', (arg) => ({
      messageId: toMessageId(arg),
    }));

    register(types.MESSAGE_UPDATED, 'message-updated', (arg) => ({
      messageId: toMessageId(arg),
    }));

    register(types.MESSAGE_DELETED, 'message-deleted', (arg) => ({
      messageId: toMessageId(arg),
    }));

    register(types.MESSAGE_SWIPED, 'message-swiped', (arg) => ({
      messageId: toMessageId(arg),
    }));
  }

  /** Stop bridging: remove all ST event listeners. */
  stop(): void {
    if (this.registered.length === 0) return;
    const ctx = SillyTavern.getContext();
    const source = ctx.eventSource as EventSource;
    for (const { event, handler } of this.registered) {
      source.removeListener(event, handler);
    }
    this.registered = [];
  }

  /** Invoke all listeners for an internal event. */
  private emit(event: InternalEvent, payload: { chatId?: string; messageId?: number }): void {
    const set = this.listeners.get(event);
    if (!set) return;
    for (const fn of set) {
      try {
        fn(payload);
      } catch (err) {
        console.error('[STEventBridge] listener error:', err);
      }
    }
  }
}

/** Coerce ST event arg into a numeric messageId. */
function toMessageId(arg: unknown): number | undefined {
  if (arg === undefined || arg === null) return undefined;
  const n = typeof arg === 'number' ? arg : parseInt(String(arg), 10);
  return Number.isFinite(n) ? n : undefined;
}

/** Factory: create a fresh {@link STEventBridge}. */
export function createSTEventBridge(): STEventBridge {
  return new STEventBridge();
}
