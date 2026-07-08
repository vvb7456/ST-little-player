/**
 * Prompt builder for AI BGM modes.
 * Assembles prompt templates from prompts.ts with runtime data.
 */

import { replaceXiaoyueMacros } from './MacroReplacer';
import {
  MARKER_START,
  MARKER_END,
  FC_SYSTEM,
  FC_USER_HEADER,
  FC_USER_FOOTER,
  TOGETHER_INTERCEPTOR,
  FC_AUX,
} from './prompts';

export { MARKER_START, MARKER_END };

// ===== Function Call Mode — Custom API path =====

export function buildFcSystemPrompt(): string {
  return FC_SYSTEM;
}

export function buildFcUserPrompt(chatText: string): string {
  const parts: string[] = [];
  parts.push(FC_USER_HEADER);
  parts.push(chatText);
  parts.push('');
  parts.push(FC_USER_FOOTER);
  return parts.join('\n');
}

// ===== Together Mode — Interceptor =====

export function buildTogetherPrompt(customPromptEnabled: boolean, customPrompt: string): string {
  const template = (customPromptEnabled && customPrompt) ? customPrompt : TOGETHER_INTERCEPTOR;
  return replaceXiaoyueMacros(template);
}

// ===== Function Call Mode — Main API auxiliary prompt =====

export function buildFcAuxPrompt(): string {
  return replaceXiaoyueMacros(FC_AUX);
}
