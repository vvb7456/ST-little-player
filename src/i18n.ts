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
  'Type a song name to search': '输入歌名进行搜索',
  'No Songs': '暂无歌曲',
  'From Chat': '来自聊天',
  'My List': '我的列表',
  'Local Files': '本地文件',
  'Network': '网络',
  'Upload': '上传',
  'Chat': '聊天',
  'Upload audio file': '上传音频文件',
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
  'Playlist': '播放列表',
  'Close': '关闭',
  'Added': '已添加',
  'Add to list': '加入列表',
  'Cannot play': '无法播放',
  'Widget Mode': '播放器模式',
  'Dock': '吸附',
  'Drag': '拖动',
  'Hidden': '隐藏',
  'Inline': '集成',
  'Dock Alignment': '吸附对齐',
  'Top Left': '左上',
  'Top Right': '右上',
  'Bottom Left': '左下',
  'Bottom Right': '右下',
  'Choose how the player widget is displayed': '选择播放器小部件的显示方式',
  'Align the docked player to a corner of the screen': '将吸附的播放器对齐到屏幕角落',
  'Show track info in drag mini': '收起时显示曲名',
  'Show song title and lyrics in the compact drag widget': '收起时显示曲名和歌词',
  'Providers': '数据源',
  'Default Volume': '默认音量',
  'Default Play Mode': '默认播放模式',
  'Custom opacity': '自定义透明度',
  'Opacity': '透明度',
  'Adjust the player background opacity': '调整播放器背景透明度',
  'Not available in inline mode': '集成模式下不可用',
  'Enable or disable music sources': '启用或禁用音乐来源',
  'Data': '数据管理',
  'Export data': '导出设置',
  'Import data': '导入设置',
  'Save your settings to a JSON file': '将设置保存为 JSON 文件',
  'Load settings from a JSON file': '从 JSON 文件加载设置',
  'Export playlist': '导出播放列表',
  'Import playlist': '导入播放列表',
  'Save network playlist to a JSON file': '将网络播放列表保存为 JSON 文件',
  'Load network playlist from a JSON file': '从 JSON 文件加载网络播放列表',
  'List Loop': '列表循环',
  'Random': '随机',
  'Single Loop': '单曲循环',
  'NetEase': '网易云',
  'Custom API': '自定义 API',
  'Enable': '启用',
  'Disable': '禁用',
  'Search and play songs from the network': '使用网络搜索并播放歌曲',
  'Upload and play songs from the server': '向服务端上传并播放歌曲',
  'Search and play songs from a custom API': '使用自定义 API 搜索并播放歌曲',
  'Confirm': '确认',
  'Cancel': '取消',
  'Upload warning text': '上传的音频文件将存储在 SillyTavern 服务端，通过服务端网络传输播放。这可能造成播放卡顿、占用服务器磁盘空间。确认要开启吗？',
  'Use a separate API endpoint for BGM agent loop instead of main API function calling': '使用独立 API 端点运行 BGM agent',
  'API baseURL': 'API 地址',
  'Search URL': '搜索接口',
  'Resolve URL': '解析接口',
  'Data exported': '数据已导出',
  'Data imported': '数据已导入',
  'Import failed': '导入失败',
  'Invalid JSON': 'JSON 格式错误',
  'Playback': '播放',
  'General': '通用',
  'Appearance': '外观',
  'AI': 'AI',
  'About': '关于',
  'Version': '版本',
  'A scene-aware music player extension for SillyTavern': 'SillyTavern 情景音乐播放器扩展',
  'GitHub': 'GitHub',
  'Repository': '仓库',
  'AGPLv3 License': 'AGPLv3 许可证',
  'Copyright': '版权',

  // AI BGM
  'AI BGM': 'AI 选曲',
  'Enable AI-driven background music selection': '启用 AI 驱动的背景音乐选择',
  'AI Mode': 'AI 模式',
  'Off': '关闭',
  'Regex Match': '正则匹配',
  'Together': '提示词注入',
  'Function Call': 'Function Call',
  'Choose how AI selects background music': '选择 AI 选曲的方式',
  'Context Messages': '上下文消息数',
  'Number of recent chat messages to send to AI': '发送给 AI 的最近聊天消息数量',
  'Auto Trigger': '自动触发',
  'Automatically analyze new messages and select music': '自动分析新消息并选择音乐',
  'Trigger on Greeting': 'Greeting 触发',
  'Analyze BGM when loading a character card (first message)': '加载角色卡（首条消息）时分析 BGM',
  'API URL': 'API 地址',
  'OpenAI-compatible endpoint that supports tool calling': '需支持工具调用的 OpenAI 兼容端点',
  'API Key': 'API 密钥',
  'Bearer token for the custom endpoint': '自定义端点的 Bearer 令牌',
  'Model': '模型',
  'Model that supports tool calling': '需支持工具调用的模型',
  'Prompt Role': '注入角色',
  'Role used when injecting BGM instructions into the main AI': '向主 AI 注入 BGM 指令时使用的角色',
  'System': '系统',
  'User': '用户',
  'AI is analyzing the scene...': 'AI 正在分析场景...',
  'AI selected:': 'AI 已选择:',
  'AI recommendation failed': 'AI 推荐失败',
  'No song selected by AI': 'AI 未选择歌曲',
  'Fetch models': '获取模型列表',
  'Please fill API URL': '请先填写 API 地址',
  'Connect': '连接',
  'No models returned by endpoint': '端点未返回任何模型',
  'models found': '个模型',
  'Failed to fetch models': '获取模型列表失败',
  'Custom Prompt': '自定义提示词',
  'Edit the BGM instruction prompt. Use macros like ': '编辑 BGM 指令提示词。可使用 ',
  ' for dynamic values.': ' 等变量插入动态值。',
  'Edit Prompt': '编辑提示词',
  'Click to edit the BGM instruction prompt': '点击编辑 BGM 指令提示词',
  'Available macros:': '可用变量：',
  'The prompt must contain the markers': '提示词必须包含标记',
  'for BGM control to work.': '才能生效。',
  'Save': '保存',
  'Volume': '音量',
  'Volume must be 0-100': '音量范围 0-100',
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
