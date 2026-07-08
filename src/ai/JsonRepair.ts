import { jsonrepair } from '@/vendor/jsonrepair.mjs';

/**
 * Fault-tolerant JSON parser.
 *
 * Tries native JSON.parse first, then falls back to jsonrepair for
 * common LLM JSON malformations (trailing commas, unquoted keys,
 * single quotes, etc.), then tries balanced-brace extraction.
 *
 * @returns parsed object or null if all attempts fail
 */
export function parseJsonSafe(raw: string): any | null {
  if (!raw) return null;

  let text = raw.trim();

  // Strip markdown code fences
  text = text.replace(/^```(?:json)?\s*\n?/i, '').replace(/\n?```\s*$/i, '');

  // Attempt 1: native parse
  try {
    return JSON.parse(text);
  } catch {
    // continue
  }

  // Attempt 2: jsonrepair
  try {
    const repaired = jsonrepair(text);
    return JSON.parse(repaired);
  } catch {
    // continue
  }

  // Attempt 3: extract first balanced { ... } block
  const extracted = extractFirstJsonObject(text);
  if (extracted) {
    try {
      return JSON.parse(extracted);
    } catch {
      try {
        return JSON.parse(jsonrepair(extracted));
      } catch {
        // give up
      }
    }
  }

  return null;
}

/**
 * Walk the string tracking brace depth (string-aware) to find
 * the first balanced JSON object.
 */
function extractFirstJsonObject(text: string): string | null {
  let depth = 0;
  let start = -1;
  let inString = false;
  let escape = false;

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];

    if (escape) {
      escape = false;
      continue;
    }

    if (ch === '\\' && inString) {
      escape = true;
      continue;
    }

    if (ch === '"') {
      inString = !inString;
      continue;
    }

    if (inString) continue;

    if (ch === '{') {
      if (depth === 0) start = i;
      depth++;
    } else if (ch === '}') {
      depth--;
      if (depth === 0 && start >= 0) {
        return text.slice(start, i + 1);
      }
    }
  }

  return null;
}
