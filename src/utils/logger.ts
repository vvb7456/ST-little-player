/**
 * Leveled logger for ST-Little-Player.
 *
 * Levels: debug > info > warn > error
 * - debug: verbose flow tracing (agent loop iterations, marker extraction, etc.)
 * - info:  lifecycle events (init, destroy, mode switch, registration)
 * - warn:  recoverable failures (provider timeout, JSON parse fallback, etc.)
 * - error: unrecoverable failures (init crash, agent loop crash, etc.)
 *
 * When debug mode is off, only warn + error are emitted.
 * When debug mode is on, all levels are emitted.
 *
 * All output uses unified prefix `[晓乐]`.
 */

type LogLevel = 'debug' | 'info' | 'warn' | 'error';

let debugEnabled = false;

export function setDebugEnabled(enabled: boolean): void {
  debugEnabled = enabled;
}

function isDebugEnabled(): boolean {
  return debugEnabled;
}

function emit(level: LogLevel, msg: string, args: unknown[]): void {
  if (level === 'debug' && !debugEnabled) return;
  if (level === 'info' && !debugEnabled) return;

  const prefix = '[晓乐]';
  if (args.length > 0) {
    console[level](`${prefix} ${msg}`, ...args);
  } else {
    console[level](`${prefix} ${msg}`);
  }
}

export const logger = {
  debug(msg: string, ...args: unknown[]): void {
    emit('debug', msg, args);
  },

  info(msg: string, ...args: unknown[]): void {
    emit('info', msg, args);
  },

  warn(msg: string, ...args: unknown[]): void {
    emit('warn', msg, args);
  },

  error(msg: string, ...args: unknown[]): void {
    emit('error', msg, args);
  },

  get isDebug(): boolean {
    return isDebugEnabled();
  },
};
