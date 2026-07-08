// ===== Regex cleaning =====

interface RegexModule {
  getRegexedString: (rawString: string, placement: number, opts?: Record<string, unknown>) => string;
  regex_placement: { USER_INPUT: number; AI_OUTPUT: number };
}

let regexModuleCache: RegexModule | null = null;

async function getRegexModule(): Promise<RegexModule | null> {
  if (regexModuleCache) return regexModuleCache;
  try {
    const mod: any = await (Function('return import')()(/* @vite-ignore */ '/scripts/extensions/regex/engine.js'));
    if (mod?.getRegexedString && mod?.regex_placement) {
      regexModuleCache = mod as RegexModule;
      return regexModuleCache;
    }
  } catch {
    // regex extension not available
  }
  return null;
}

const BGM_MARKER_REGEX = /<!--XY_BGM_START-->[\s\S]*?<!--XY_BGM_END-->/g;

function stripBgmMarkers(text: string): string {
  return text.replace(BGM_MARKER_REGEX, '').trim();
}

/**
 * Build filtered chat context text from ST's chat array.
 *
 * Each message is cleaned via:
 * 1. ST's getRegexedString (applies global + character-scoped + preset regex)
 * 2. BGM marker stripping (<!--XY_BGM_START-->...<!--XY_BGM_END-->)
 *
 * @param messageCount number of recent messages to include
 * @returns formatted text like "Alice: Hello\n\nBob: Hi"
 */
export async function buildChatContext(messageCount: number): Promise<string> {
  try {
    const ctx = SillyTavern.getContext();
    const chat = ctx.chat;
    if (!chat || chat.length === 0) return '';

    const regexMod = await getRegexModule();
    const recent = chat.slice(-messageCount);

    const parts: string[] = [];
    for (const m of recent) {
      const name = m.is_user ? ctx.name1 : (m.name || ctx.name2 || 'Character');
      let text: string = m.mes ?? '';

      if (regexMod) {
        const placement = m.is_user
          ? regexMod.regex_placement.USER_INPUT
          : regexMod.regex_placement.AI_OUTPUT;
        try {
          text = regexMod.getRegexedString(text, placement, { isPrompt: true });
        } catch {
          // regex application failed, use raw text
        }
      }

      text = stripBgmMarkers(text);
      if (text.trim()) {
        parts.push(`${name}: ${text}`);
      }
    }

    return parts.join('\n\n');
  } catch {
    return '';
  }
}
