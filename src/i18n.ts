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
  'Widget Mode': '播放器模式',
  'Dock': '吸附',
  'Drag': '拖动',
  'Providers': '数据源',
  'Default Volume': '默认音量',
  'Default Play Mode': '默认播放模式',
  'Auto-play on new cue': '新提示自动播放',
  'Custom Cue Rules (Regex)': '自定义提示规则 (正则)',
  'Add regex rule...': '添加正则规则...',
  'Data': '数据管理',
  'Clear cache': '清理缓存',
  'Export data': '导出数据',
  'Import data': '导入数据',
  'List Loop': '列表循环',
  'Random': '随机',
  'Single Loop': '单曲循环',
  'NetEase': '网易云',
  'Custom API': '自定义API',
  'API baseURL': 'API 地址',
  'Search URL': '搜索接口',
  'Resolve URL': '解析接口',
  'Cache cleared': '缓存已清理',
  'Data exported': '数据已导出',
  'Data imported': '数据已导入',
  'Import failed': '导入失败',
  'Invalid JSON': 'JSON 格式错误',
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
