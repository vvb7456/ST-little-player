/**
 * Minimal i18n for ST music player.
 * Uses ST's getCurrentLocale() to detect language.
 * Falls back to English for unknown locales.
 */

const zhCN: Record<string, string> = {
  'No Song': '未播放',
  'show lyrics': '显示歌词',
  'List': '列表',
  'Search': '搜索',
  'Search Song...': '搜索歌曲...',
  'Searching...': '搜索中...',
  'No results': '无结果',
  'No Songs': '暂无歌曲',
  'From Chat': '来自聊天',
  'My List': '我的列表',
  'Local Files': '本地文件',
  'Add local file': '添加本地文件',
  'Retry': '重试',
  'Previous': '上一首',
  'Next': '下一首',
  'Play': '播放',
  'Pause': '暂停',
  'Toggle play mode': '切换播放模式',
  'Mute / Unmute': '静音/取消静音',
  'Collapse panel': '收起面板',
  'Expand panel': '展开面板',
  'Added': '已添加',
  'Add to list': '加入列表',
  'Cannot play': '无法播放',
};

let currentLang: string | null = null;

function detectLang(): string {
  if (currentLang) return currentLang;
  try {
    if (typeof SillyTavern !== 'undefined') {
      const ctx = SillyTavern.getContext();
      if (ctx?.getCurrentLocale) {
        currentLang = ctx.getCurrentLocale();
      }
    }
  } catch {
    // ignore
  }
  if (!currentLang) {
    currentLang = ((typeof navigator !== 'undefined'
      ? navigator.language || (navigator as any).userLanguage
      : 'en'
    )?.toLowerCase() || 'en') as string;
  }
  return currentLang;
}

export function t(key: string): string {
  const lang = detectLang();
  if (lang.startsWith('zh')) {
    return zhCN[key] ?? key;
  }
  return key;
}
