/**
 * Minimal i18n for ST music player.
 * Uses ST's getCurrentLocale() to detect language.
 * Falls back to English for unknown locales.
 */

const zhCN: Record<string, string> = {
  'No Song': '当前无播放',
  'Search': '搜索',
  'Search Song...': '搜索歌曲...',
  'Searching...': '搜索中...',
  'No results': '未找到匹配歌曲',
  'Type a song name to search': '输入歌名进行搜索',
  'No Songs': '暂无歌曲',
  'Network': '网络',
  'Upload': '上传',
  'Chat': '聊天',
  'Upload audio file': '上传音频文件',
  'Retry': '重试',
  'Previous': '上一首',
  'Next': '下一首',
  'Play': '播放',
  'Pause': '暂停',
  'Toggle play mode': '切换播放模式',
  'Mute / Unmute': '静音/取消静音',
  'Collapse panel': '收起面板',
  'Playlist': '播放列表',
  'Close': '关闭',
  'Added': '已添加',
  'Add to list': '加入列表',
  'Cannot play': '无法播放',
  'Now playing': '正在播放',
  'Paused': '已暂停',
  'Delisted': '可能已下架',
  'Uploaded': '已上传',
  'Upload failed': '上传失败',
  'Settings exported': '设置已导出',
  'Settings imported': '设置已导入',
  'Playlist exported': '播放列表已导出',
  'Playlist imported': '播放列表已导入',
  'Import failed': '导入失败',
  'Invalid JSON': 'JSON 格式错误',
  'AI selected:': 'AI 选曲',
  'AI recommendation failed': 'AI 选曲失败',
  'AI analyzing': 'AI 正在分析场景...',
  'AI not configured': '请先配置 API 地址和模型',
  'AI BGM off': 'AI 选曲未开启',
  'Now playing track': '当前播放',
  'models found': '获取到',
  'No models returned': '该端点未返回模型',
  'Failed to fetch models': '获取模型列表失败',
  'Connect': '连接',
  'Please fill API URL': '请先填写 API 地址',
  'Enter song name': '请输入歌曲名',
  'Volume set to': '音量已设为',
  'Volume must be 0-100': '音量范围 0-100',
  'Added to playlist': '已添加到列表',
  'Play mode': '播放模式',
  'Source enabled': '已启用',
  'Source disabled': '已禁用',
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
  'Default Volume': '默认音量',
  'Default Play Mode': '默认播放模式',
  'Crossfade': '淡入淡出',
  'Smoothly fade in when starting playback and fade out when pausing or switching tracks': '开始播放时淡入，暂停或切换歌曲时淡出',
  'Custom opacity': '自定义透明度',
  'Opacity': '透明度',
  'Adjust the player background opacity': '调整播放器背景透明度',
  'Debug Mode': '调试模式',
  'Enable verbose console logging for troubleshooting': '启用详细控制台日志用于排查问题',
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
  'Upload and play songs from the server': '向服务端上传并播放歌曲',
  'Confirm': '确认',
  'Cancel': '取消',
  'Upload warning text': '上传的音频文件将存储在 SillyTavern 服务端，通过服务端网络传输播放。这可能造成播放卡顿、占用服务器磁盘空间。确认要开启吗？',
  'Use a separate API endpoint for BGM agent loop instead of main API function calling': '使用独立 API 端点运行 BGM agent',
  'Playback': '播放',
  'General': '通用',
  'Appearance': '外观',
  'AI': 'AI',
  'Version': '版本',
  'A scene-aware music player extension for SillyTavern': 'SillyTavern 情景音乐播放器扩展',

  // AI BGM
  'AI BGM': 'AI 选曲',
  'Enable AI-driven background music selection': '启用 AI 驱动的背景音乐选择',
  'AI Mode': 'AI 模式',
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
  'Custom Prompt': '自定义提示词',
  'Edit the BGM instruction prompt. Use macros like ': '编辑 BGM 指令提示词。可使用 ',
  ' for dynamic values.': ' 等变量插入动态值。',
  'Edit Prompt': '编辑提示词',
  'Click to edit the BGM instruction prompt': '点击编辑 BGM 指令提示词',
  'Available macros:': '可用变量：',
  'The prompt must contain the markers': '提示词必须包含标记',
  'for BGM control to work.': '才能生效。',
  'Save': '保存',

  // NetEase
  'Official Worker': '晓乐',
  'Self-hosted': '自部署',
  'Worker URL': 'Worker 地址',
  'Your Cloudflare Worker deployment URL': '你的 Cloudflare Worker 部署地址',
  'Paste MUSIC_U cookie value here': '在此粘贴 MUSIC_U cookie 值',
  'Cookie valid': 'Cookie 有效',
  'Cookie invalid or expired': 'Cookie 无效或已过期',
  'Cannot reach Worker': '无法连接 Worker',
  'Data Sources': '数据源',
  'NetEase Music': '网易云音乐',
  'Select official or self-hosted Worker': '选择官方服务或自部署 Worker',
  'MUSIC_U Cookie': 'MUSIC_U Cookie',
  'Paste cookie from music.163.com': '从 music.163.com 获取的 Cookie',
  'Cookie privacy hint': 'Cookie 仅保存在浏览器本地，不会上传到 SillyTavern 服务端。播放时会通过请求头发送至 Worker 用于鉴权，Worker 不会保存 Cookie。',
  'Playlist Management': '列表管理',
  'Playback Settings': '播放设置',
  'Cookie not configured': 'Cookie 未配置',
  'Cookie expired': 'Cookie 已失效',
  'Cookie invalid': 'Cookie 无效',
  'Configure in settings': '请在设置中配置',
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
