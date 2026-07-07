# 晓乐 AI 驱动 BGM 功能 — 需求分析与实施文档

> 调研日期: 2026-07-07
> 参考项目: ScenePulse, Extension-Spotify, SpicyMarinara-Spotify-Music-Extension, SillyTavern 核心源码

---

## 一、背景与目标

### 当前状态
晓乐目前仅支持**被动文本匹配**：通过 `CueParser` 用正则从聊天消息中提取 `<bgm>歌名 - 歌手</bgm>` 等标记，然后搜索+播放。这要求 AI 被额外提示（通过角色卡/预设）才能产出正确格式的标记，且无法智能选择最合适的歌曲版本。

### 目标
实现**三种 AI 驱动模式**，让播放器能根据聊天场景智能选曲：

| 模式 | 名称 | 原理 | 额外 API 成本 | 精准度 |
|------|------|------|-------------|--------|
| 模式一 | 提示词插入 (Together) | 主 AI 在叙事后追加 BGM 标记，播放器提取并播放 | 零 | 中 |
| 模式二 | 独立 API 两轮 (Separate) | 独立 AI 分析场景→推荐→搜索→AI 二次选曲→播放 | 1-2 次调用 | 高 |
| 模式三 | Function Tools | 主 AI 通过结构化工具调用控制音乐 | 零 (搭便车) | 高 |

三种模式可独立开关，用户按需选择。现有被动文本匹配保留为第四选项（"正则匹配"）。

---

## 二、ST 核心 API 调研结果

### 2.1 LLM 调用 API

| API | 签名 | 用途 |
|-----|------|------|
| `ctx.generateQuietPrompt({quietPrompt, jsonSchema, ...})` | `→ Promise<string>` | 模式二首选：用当前连接发起静默生成，不影响聊天 |
| `ctx.generateRaw({prompt, systemPrompt, api, ...})` | `→ Promise<string>` | 模式二备选：完全自定义 prompt + systemPrompt |
| `ConnectionManagerRequestService.sendRequest(profileId, prompt, maxTokens, custom)` | `→ Promise<ExtractedData>` | 模式二进阶：用独立连接 profile 发起请求 |

**`generateQuietPrompt` 完整参数:**
```typescript
generateQuietPrompt({
  quietPrompt: '',           // 注入的指令文本
  quietToLoud: false,        // 是否前台执行
  skipWIAN: false,           // 跳过世界信息/作者注释
  quietImage: null,          // 图片 URL
  quietName: null,           // 角色名覆盖
  responseLength: null,      // 最大响应 token 数
  forceChId: null,           // 强制角色 ID
  jsonSchema: null,          // JsonSchema 结构化输出
  removeReasoning: true,     // 移除思考过程
  trimToSentence: false,     // 截断到句子
}) → Promise<string>
```

**`generateRaw` 完整参数:**
```typescript
generateRaw({
  prompt: '',                // string | ChatCompletionMessage[]
  api: null,                 // 'openai' | 'kobold' | ... (null=当前)
  instructOverride: false,
  quietToLoud: false,
  systemPrompt: '',          // 独立 system prompt
  responseLength: null,
  trimNames: true,
  prefill: '',               // 预填充文本
  jsonSchema: null,          // 结构化输出
}) → Promise<string>
```

### 2.2 提示词注入

**`setExtensionPrompt(key, value, position, depth, scan, role, filter)`**
- `key`: 唯一标识符，如 `'xiaoyue_bgm'`
- `value`: 注入文本
- `position`: `0`=IN_PROMPT(场景后), `1`=IN_CHAT(按深度), `2`=BEFORE_PROMPT, `-1`=NONE(禁用)
- `depth`: 深度 (0=最后一条消息处, 仅 IN_CHAT)
- `scan`: 是否参与 WI 扫描
- `role`: `0`=SYSTEM, `1`=USER, `2`=ASSISTANT
- `filter`: `async () => boolean` 条件过滤

### 2.3 generate_interceptor (manifest.json)

```json
{ "generate_interceptor": "xiaoyueInterceptor" }
```
ST 在每次生成前调用 `globalThis.xiaoyueInterceptor(chat, contextSize, abort, type)`，可直接修改 `chat` 数组（增删消息）。ScenePulse 用此机制实现 Together 模式。

**⚠️ 关键限制:** interceptor 在全局 `globalThis` 上，我们的代码用 Vite 打包成 ES module，需要显式挂载：`globalThis.xiaoyueInterceptor = function(...) { ... }`。

### 2.4 Function Tools

```typescript
ctx.registerFunctionTool({
  name: 'xiaoyue_play_music',
  displayName: '播放音乐',
  description: '搜索并播放一首歌曲',
  parameters: { type: 'object', properties: {...}, required: [...] },
  action: async (params) => { /* 执行并返回结果字符串 */ },
  formatMessage: (params) => `正在播放: ${params.song}`,
  shouldRegister: () => settings.aiMode === 'tools',
  stealth: true,  // 不在聊天中显示结果，不触发后续生成
});
```

**条件:** `ctx.isToolCallingSupported()` 检查当前 API 是否支持 (OpenAI/Claude/Gemini)。

### 2.5 关键事件类型

| 事件 | 用途 |
|------|------|
| `GENERATION_ENDED` | 主 AI 生成完成，模式一提取标记的时机 |
| `CHARACTER_MESSAGE_RENDERED` | 角色消息渲染完成，模式二/三触发时机 |
| `MESSAGE_SWIPED` | 滑动切换，需重新分析 |
| `CHAT_CHANGED` | 切换聊天，重置状态 |
| `GENERATION_STOPPED` | 用户停止生成，取消 AI 任务 |
| `STREAM_TOKEN_RECEIVED` | 流式 token，模式一流式隐藏用 |

### 2.6 连接 Profile

```typescript
// extensionSettings.connectionManager.profiles 存储所有 profile
// 每个 profile: { id, name, api, model, 'api-url', 'secret-id', preset, instruct, ... }

// 用指定 profile 发起请求
const result = await ConnectionManagerRequestService.sendRequest(
  profileId,
  [{ role: 'user', content: '...' }],
  500,  // maxTokens
  { stream: false, extractData: true }
);
```

### 2.7 chatMetadata

```typescript
ctx.chatMetadata.key = value;   // 写
ctx.saveMetadata();              // 持久化
// 或
ctx.updateChatMetadata({ key: value }, false);  // 批量合并
ctx.saveMetadataDebounced();
```

---

## 三、模式一：提示词插入 (Together)

### 3.1 原理
主 AI 在写完叙事正文后，追加一段 BGM 标记。播放器在 `GENERATION_ENDED` 时提取标记，搜索并播放。零额外 API 成本。

### 3.2 实现方案选择

| 方案 | 优点 | 缺点 | 决策 |
|------|------|------|------|
| A. `setExtensionPrompt` | 简单，不修改 manifest | 只能注入固定文本，无法根据聊天状态动态调整 | ❌ |
| B. `generate_interceptor` | 可动态修改 chat 数组，注入完整上下文 | 需在 globalThis 挂载函数，修改 manifest | ✅ |
| C. ST 正则 + 预设提示词 | 零代码 | 依赖用户手动配置预设 | ❌ |

**决策: 方案 B** — `generate_interceptor`。与 ScenePulse 一致，可在生成前动态注入 BGM 指令（包含当前播放状态、最近播放历史），且支持流式隐藏。

### 3.3 标记格式设计

固定格式，不兼容旧标记，不让用户自定义：

```
<!--XY_BGM_START-->
{"song":"歌名","artist":"歌手","action":"play"}
<!--XY_BGM_END-->
```

- 使用 HTML 注释包裹，对 markdown 渲染不可见（但流式时需 JS 隐藏）
- JSON 格式，`action` 仅 `"play"|"keep"`（不设 `"stop"`，避免 AI 偷懒不传歌曲）
- `keep` = 当前氛围不需要换歌（避免频繁切换）
- 不含 `reason` 字段，节省 token

### 3.4 流式隐藏

三重保险（参考 ScenePulse）：

1. **ST 正则过滤器** (`markdownOnly: true`): 注册一个全局正则脚本，在 markdown 渲染时剥离 `<!--XY_BGM_START-->...<!--XY_BGM_END-->`，不影响 `msg.mes` 原文
2. **MutationObserver 流式隐藏**: 监听流式消息 DOM 变化，检测到标记开始时冻结 `max-height`，防止 JSON 闪现
3. **生成后清理**: `GENERATION_ENDED` 后从 `msg.mes` 中剥离标记，更新 DOM

### 3.5 提取与解析

```
GENERATION_ENDED → 提取标记 → jsonrepair 容错 → 解析 JSON → 执行 action
```

- 提取优先级: SP 标记 → ```json 代码块 → 裸 JSON 对象
- 容错: 引入 `jsonrepair` 库（vendor 到 `src/vendor/`），处理 LLM 常见 JSON 畸形

### 3.6 Interceptor 注入的 Prompt

> 以下为提示词草案，实际提示词在实施时另行讨论确定。

```
## BGM 选曲指令

你正在为一个角色扮演场景选择背景音乐。阅读你的叙事内容后，在正文末尾追加一个 BGM 标记。

### 输出格式（必须严格遵守）
在叙事结束后，追加：
<!--XY_BGM_START-->
{"song":"歌名","artist":"歌手","action":"play"}
<!--XY_BGM_END-->

### action 取值
- "play": 播放新歌曲（场景氛围变化时）
- "keep": 保持当前播放（氛围未变时）

### 当前状态
- 正在播放: {当前歌曲名} - {当前歌手}
- 最近播放: {最近5首歌名列表}

### 选曲原则
- 选择与场景氛围、情绪、时间、地点匹配的音乐
- 避免重复播放最近播放过的歌曲
- 歌名和歌手要准确，确保能在音乐平台搜到
- 可以选纯音乐、游戏配乐、影视原声等
- 场景不需要换歌时果断使用 "keep"
```

---

## 四、模式二：独立 API 两轮 (Separate)

### 4.1 原理
主 AI 完全不关心音乐。播放器在角色消息生成后，独立发起 API 请求，让一个专用 AI 分析场景并推荐歌曲。两轮设计确保精准度。

### 4.2 两轮流程

```
角色消息生成完成 (CHARACTER_MESSAGE_RENDERED)
  ↓
[轮次1] 发送筛选后的上下文 + 干净 system prompt → AI 返回 JSON {song, artist, action}
  ↓
如果 action == "play":
  ↓
  搜索音乐 (ProviderManager.search)
  ↓
  [轮次2] 发送搜索结果列表 + 轮次1意图 → AI 返回 {selectedId}
  ↓
  播放选中歌曲
如果 action == "keep": 不操作
```

### 4.3 API 调用方式

**决策: 优先 `generateRaw`，确保上下文干净**

核心原则：模式二的独立 AI **不能被主对话的上下文污染**。不能使用 `generateQuietPrompt`，因为它会将请求注入当前角色卡的完整上下文（角色定义、世界书、预设约定、作者注释等），干扰选曲判断。

- `generateRaw({prompt, systemPrompt, api})`: 可指定独立 `systemPrompt` + 自定义 `prompt`，不带入角色卡/世界书/预设。**最干净，首选**
- `ConnectionManagerRequestService.sendRequest(profileId, messages, maxTokens)`: 可用独立 profile（不同模型/API），最灵活但最复杂。高级用户可选

**分步策略:**
1. **默认**: `generateRaw` + 独立 `systemPrompt` + 筛选后的聊天上下文 + `jsonSchema`
2. **如果配置了独立 profile**: `ConnectionManagerRequestService.sendRequest`

### 4.4 JSON Schema 设计

**轮次1 — 场景分析 & 推荐:**
```json
{
  "type": "object",
  "properties": {
    "action": { "type": "string", "enum": ["play", "keep"] },
    "song": { "type": "string", "description": "歌曲名" },
    "artist": { "type": "string", "description": "歌手名" }
  },
  "required": ["action"]
}
```
当 `action == "play"` 时 `song` 和 `artist` 必填。不含 `reason`/`mood` 字段，节省 token。

**轮次2 — 搜索结果选择:**
```json
{
  "type": "object",
  "properties": {
    "selectedId": { "type": "string", "description": "选中的搜索结果ID" }
  },
  "required": ["selectedId"]
}
```

### 4.5 System Prompt 设计（轮次1）

> 以下为提示词草案，实际提示词在实施时另行讨论确定。

```
你是一个专业的 BGM 选曲师。分析以下角色扮演对话片段，选择最合适的背景音乐。

## 任务
1. 分析当前场景的氛围、情绪、时间、地点
2. 推荐一首与场景匹配的音乐
3. 如果当前正在播放的音乐仍然合适，返回 "keep"

## 当前状态
- 正在播放: {当前歌曲} - {当前歌手}
- 最近播放: {最近5首}

## 输出格式
返回 JSON:
{"action":"play","song":"歌名","artist":"歌手"}

## 原则
- 歌名和歌手要准确，确保能在音乐平台搜到
- 可选纯音乐、游戏配乐、影视原声
- 避免重复最近播放过的
- 氛围未变时果断 "keep"
```

### 4.6 System Prompt 设计（轮次2）

> 以下为提示词草案，实际提示词在实施时另行讨论确定。

```
你之前推荐了歌曲"{song}" by "{artist}"。

以下是搜索结果:
1. [ID: xxx] {name} - {artist} ({duration})
2. [ID: yyy] {name} - {artist} ({duration})
...

请选择最匹配你推荐意图的结果。优先选择:
- 原版而非翻唱
- 热门版本而非冷门版本
- 时长合理的版本

返回 JSON: {"selectedId":"选中的ID"}
```

### 4.7 上下文构建与筛选

模式二的上下文必须**干净**——不含角色卡定义、世界书条目、预设约定、作者注释等。只传递我们筛选过的聊天消息。

```typescript
// 取最近 N 条消息（默认 8，可配置）
const recent = ctx.chat.slice(-settings.aiContextMessages);
const contextText = recent
  .map(m => `${m.is_user ? ctx.name1 : (m.name || ctx.name2)}: ${m.mes}`)
  .join('\n\n');
```

通过 `generateRaw({ systemPrompt: 我们的BGM prompt, prompt: contextText })` 发送，
确保不携带任何主对话的上下文污染。

**筛选策略（实施时实际测试调整）:**
- 基本策略：取最近 N 条消息纯文本，格式为 `角色名: 消息内容`
- 不传入角色卡、世界书、预设、作者注释
- 可选：过滤过长消息（如超过 500 字只取末尾）
- 可选：标注消息角色（用户/角色）帮助 AI 理解对话结构

### 4.8 连接配置

设置中提供两个选项：

| 选项 | 说明 | 实现 |
|------|------|------|
| 复用当前连接 | 用用户当前 API + 模型，但用独立 systemPrompt | `generateRaw({api: null, systemPrompt, prompt})` |
| 独立 Profile | 用连接管理器的独立 profile（可不同模型/API） | `ConnectionManagerRequestService.sendRequest` |

**推荐默认: "复用当前连接"**，高级用户可配置独立 profile。

---

## 五、模式三：Function Tools

### 5.1 原理
给主 AI 注册 function tools，主 AI 通过结构化工具调用控制音乐播放。比模式一更可靠（JSON Schema 约束输出），但依赖模型支持。

### 5.2 工具列表

| 工具名 | 参数 | action 返回 |
|--------|------|-------------|
| `xiaoyue_play_music` | `{song: string, artist?: string}` | 搜索→播放→返回 "正在播放: xxx" |
| `xiaoyue_search_music` | `{keyword: string}` | 搜索→返回结果列表 JSON |
| `xiaoyue_stop_music` | `{}` | 停止播放→返回 "已停止" |
| `xiaoyue_get_current` | `{}` | 返回当前播放信息 JSON |

### 5.3 注册方式

```typescript
ctx.registerFunctionTool({
  name: 'xiaoyue_play_music',
  displayName: '播放音乐',
  description: '搜索并播放一首歌曲。当场景需要背景音乐时调用此工具。',
  parameters: {
    type: 'object',
    properties: {
      song: { type: 'string', description: '歌曲名' },
      artist: { type: 'string', description: '歌手名（可选）' },
      reason: { type: 'string', description: '选曲理由' },
    },
    required: ['song'],
  },
  action: async ({ song, artist }) => {
    // 调用 ProviderManager.searchAndResolve
    // 播放
    return `正在播放: ${song} - ${artist}`;
  },
  formatMessage: ({ song, artist }) => `🎵 播放音乐: ${song} - ${artist ?? ''}`,
  shouldRegister: () => settings.aiMode === 'tools' && ctx.isToolCallingSupported(),
  stealth: true,
});
```

### 5.4 辅助 Prompt 注入

用 `setExtensionPrompt` 告知主 AI 有音乐工具可用：

```
你可以使用以下工具控制背景音乐:
- xiaoyue_play_music: 搜索并播放歌曲
- xiaoyue_stop_music: 停止播放
- xiaoyue_get_current: 查看当前播放

当场景氛围变化时，主动调用工具播放合适的 BGM。当前正在播放: {歌曲名}。
```

---

## 六、共享基础设施

### 6.1 智能触发逻辑

**触发条件（模式二）:**

| 触发源 | 条件 | 冷却 |
|--------|------|------|
| `CHARACTER_MESSAGE_RENDERED` | 新角色消息 | 3秒冷却 + 去重 |
| `MESSAGE_SWIPED` | 滑动切换 | 1秒冷却 |
| 歌曲播放结束 | `AudioEngine.ended` | 检查是否需要换歌 |
| 手动触发 | `/bgm` 斜杠命令 | 无冷却 |

**防抖与并发控制:**
- `isAnalyzing` 原子锁，同一时间只允许一个 AI 分析任务
- `requestNonce` 递增，过期响应丢弃
- 检查 `ctx.generationInProgress`，主 AI 生成中不触发

### 6.2 当前播放上下文

所有模式共享的上下文构建器：

```typescript
interface BgmContext {
  currentSong: string | null;      // 当前播放歌曲名
  currentArtist: string | null;    // 当前播放歌手
  recentPlayed: string[];          // 最近播放的 N 首 (歌名 - 歌手)
  isPlaying: boolean;              // 是否正在播放
}

function buildBgmContext(): BgmContext {
  const player = usePlayerStore();
  const playlist = usePlaylistStore();
  const recent = playlist.list
    .slice(Math.max(0, playlist.currentIndex - 5), playlist.currentIndex)
    .map(i => `${i.song} - ${i.artist ?? ''}`);
  return {
    currentSong: player.currentTrack?.name ?? null,
    currentArtist: player.currentTrack?.artist ?? null,
    recentPlayed: recent,
    isPlaying: player.isPlaying,
  };
}
```

### 6.3 播放历史去重

在 `chatMetadata` 中维护播放历史：

```typescript
// chatMetadata key: 'stmp_bgm_history'
interface BgmHistory {
  entries: Array<{ song: string; artist?: string; messageId?: number; playedAt: number }>;
}
```

- 每次播放记录一条
- 最多保留 50 条
- AI prompt 中注入最近 5 首
- 搜索后如果结果与最近播放高度匹配，降权或跳过

### 6.4 JSON 容错

引入 `jsonrepair` 库（参考 ScenePulse vendor 方案）：

```
src/vendor/jsonrepair.mjs   — 库文件
src/vendor/jsonrepair.LICENSE — 许可证
```

解析流程:
1. 剥离 markdown 代码块标记
2. `JSON.parse()` 尝试
3. 失败 → `jsonrepair()` 修复 → 再次 `JSON.parse()`
4. 失败 → 尝试提取第一个 `{...}` 平衡括号块 → 重试
5. 全部失败 → 记录日志，静默跳过

### 6.5 搜索结果选择策略（模式一降级 / 模式二单轮降级）

当无法执行两轮（如降级模式、超时、API 错误）时，启发式选最佳：

1. 精确歌名匹配 + 精确歌手匹配 → 最高优先
2. 精确歌名匹配 → 按热度/时长合理性排序
3. 模糊歌名匹配 → 取第一个
4. 全部不匹配 → 取第一个搜索结果

### 6.6 Slash 命令

斜杠命令**仅在模式二（独立 API）下有意义**——它手动触发独立 AI 分析当前场景并选曲。在其他模式下不注册：

- **模式一 (Together)**: BGM 标记由主 AI 在叙事中产出，斜杠命令无法干预主 AI 的生成内容
- **模式三 (Tools)**: 音乐由主 AI 通过 function tool 调用控制，斜杠命令无法触发 tool call
- **模式二 (Separate)**: 斜杠命令手动触发独立 AI 分析，等同于自动触发的手动版本

**命令设计（仅模式二注册）:**

| 命令 | 功能 | 说明 |
|------|------|------|
| `/bgm` | 手动触发 AI 选曲 | 取最近 N 条消息 → 独立 AI 分析 → 两轮选曲 → 播放 |

命令注册时检查 `settings.aiMode === 'separate'`，切换离开模式二时自动注销。

### 6.7 宏注册

注册自定义宏供角色卡/预设使用：

| 宏 | 值 |
|------|------|
| `{{xy_song}}` | 当前播放歌曲名 |
| `{{xy_artist}}` | 当前播放歌手 |
| `{{xy_is_playing}}` | 是否正在播放 |

---

## 七、数据模型变更

### 7.1 ExtensionSettings 新增字段

```typescript
interface ExtensionSettings {
  // ... 现有字段 ...

  // AI BGM 模式
  aiMode: 'off' | 'regex' | 'together' | 'separate' | 'tools';
  // off: 禁用 AI 功能
  // regex: 现有正则匹配（默认）
  // together: 模式一
  // separate: 模式二
  // tools: 模式三

  // 模式二设置
  aiContextMessages: number;        // 上下文消息数，默认 8
  aiConnectionMode: 'current' | 'model' | 'profile';
  aiModelOverride: string;          // 当 aiConnectionMode='model'
  aiProfileId: string;              // 当 aiConnectionMode='profile'
  aiTwoRound: boolean;              // 是否启用两轮，默认 true
  aiAutoTrigger: boolean;           // 是否自动触发，默认 true
  aiCooldownMs: number;             // 触发冷却毫秒，默认 3000

  // 模式一设置
  togetherPromptRole: 'system' | 'user';      // 注入角色
  // 标记格式固定为 <!--XY_BGM_START-->JSON<!--XY_BGM_END-->，不开放配置
}
```

### 7.2 chatMetadata 新增字段

```typescript
// key: 'stmp_bgm_history'
interface BgmHistoryEntry {
  song: string;
  artist?: string;
  messageId?: number;
  playedAt: number;
}
// 存为 BgmHistoryEntry[]
```

### 7.3 类型新增

```typescript
// AI 推荐结果
interface BgmRecommendation {
  action: 'play' | 'keep';
  song?: string;
  artist?: string;
}

// 搜索结果选择
interface BgmSelection {
  selectedId: string;
}

// AI 模式
type AiMode = 'off' | 'regex' | 'together' | 'separate' | 'tools';
```

---

## 八、架构设计

### 8.1 新增模块

```
src/
├── ai/
│   ├── BgmController.ts        — 统一入口，根据 aiMode 分发
│   ├── TogetherMode.ts         — 模式一：interceptor + 提取 + 流式隐藏
│   ├── SeparateMode.ts         — 模式二：两轮 API 调用
│   ├── ToolsMode.ts            — 模式三：function tool 注册
│   ├── PromptBuilder.ts        — 构建各模式的 system prompt
│   ├── ContextBuilder.ts       — 构建聊天上下文 + 播放状态
│   ├── JsonRepair.ts           — JSON 容错解析（封装 jsonrepair）
│   └── BgmHistory.ts           — 播放历史管理（chatMetadata）
├── vendor/
│   ├── jsonrepair.mjs          — jsonrepair 库
│   └── jsonrepair.LICENSE
```

### 8.2 BgmController — 统一调度

```typescript
class BgmController {
  private mode: AiMode;
  private together: TogetherMode;
  private separate: SeparateMode;
  private tools: ToolsMode;

  init(): void {
    // 根据 settings.aiMode 初始化对应模式
    // 注册事件监听
    // 注册 slash 命令
    // 注册宏
  }

  setMode(mode: AiMode): void {
    // 切换模式：卸载旧的，加载新的
  }

  onMessageGenerated(messageId: number): void {
    // 模式一：提取标记
    // 模式二/三：检查触发条件 → 分析
  }

  manualTrigger(): void {
    // /bgm 命令 → 仅模式二有效，手动触发独立 AI 分析
    // 其他模式下不注册此命令
  }

  destroy(): void {
    // 卸载所有监听、工具、正则
  }
}
```

### 8.3 与现有代码的集成点

| 现有模块 | 集成方式 |
|----------|----------|
| `STEventBridge` | 新增事件监听：`GENERATION_ENDED`, `CHARACTER_MESSAGE_RENDERED` |
| `CueParser` | 模式一 `togetherMarkerFormat: 'bgm_tag'` 时复用 |
| `ChatIndexer` | 模式一 `regex` 模式时复用（现有行为） |
| `ProviderManager` | 所有模式搜索歌曲时复用 `searchAndResolve` |
| `playlistStore` | AI 推荐的歌曲加入 `source: 'chat'` 列表 |
| `playerStore` | 播放控制 + `ended` 事件触发模式二分析 |
| `STStorageAdapter` | `chatMetadata` 存储 BGM 历史 |
| `manifest.json` | 新增 `generate_interceptor` 字段 |
| `SettingsView.vue` | AI tab 新增模式选择 + 配置项 |

---

## 九、实施计划

### 阶段一：基础设施（先做，所有模式依赖）
1. `vendor/jsonrepair` 引入
2. `ai/JsonRepair.ts` — JSON 容错解析封装
3. `ai/ContextBuilder.ts` — 上下文构建（聊天+播放状态+历史）
4. `ai/BgmHistory.ts` — chatMetadata 播放历史管理
5. `ai/PromptBuilder.ts` — system prompt 模板
6. ExtensionSettings 类型扩展 + 设置 store 扩展
7. 宏 `{{xy_song}}` 等注册
（Slash 命令 `/bgm` 在阶段二模式二实现时注册）

### 阶段二：模式二（核心差异化能力）
1. `ai/SeparateMode.ts` — 两轮 API 调用
2. 轮次1: `generateRaw` + 独立 systemPrompt + 筛选上下文 + jsonSchema
3. 搜索: 复用 `ProviderManager.search`
4. 轮次2: 发送搜索结果 + AI 选择
5. 触发逻辑: `CHARACTER_MESSAGE_RENDERED` + 冷却 + 并发锁
6. 单轮降级: 跳过轮次2，启发式选最佳
7. 设置页: 模式选择 + 上下文消息数 + 连接配置 + 两轮开关

### 阶段三：模式一（低成本备选）
1. `manifest.json` 新增 `generate_interceptor`
2. `ai/TogetherMode.ts` — interceptor 注入 + 标记提取
3. 流式隐藏: ST 正则注册 + MutationObserver
4. 生成后清理: 从 `msg.mes` 剥离标记
5. 设置页: 标记格式选择 + 注入角色选择

### 阶段四：模式三（锦上添花）
1. `ai/ToolsMode.ts` — function tool 注册/注销
2. 4 个工具实现
3. `setExtensionPrompt` 辅助提示
4. `shouldRegister` 条件控制

### 阶段五：集成与优化
1. `ai/BgmController.ts` — 统一调度
2. 设置页 AI tab 完整 UI
3. i18n 新增字符串
4. 单元测试
5. 集成测试

---

## 十、技术决策记录

| 决策 | 选择 | 理由 |
|------|------|------|
| 模式一注入方式 | `generate_interceptor` | 可动态注入，ScenePulse 验证可行 |
| 模式二 API 调用 | `generateRaw` + 独立 systemPrompt | 避免 `generateQuietPrompt` 的角色卡/世界书/预设污染 |
| 模式二上下文 | 手动筛选最近 N 条消息纯文本 | 不传入角色卡、世界书、预设、作者注释 |
| JSON 容错 | vendor `jsonrepair` | ScenePulse 验证可行，处理 20+ 种畸形 |
| 标记格式 | HTML 注释 `<!--XY_BGM_START-->` 固定 | 不兼容旧标记，不开放用户自定义 |
| action 取值 | 仅 `play`\|`keep`，不含 `stop` | 避免 AI 偷懒用 stop 逃避选曲 |
| reason 字段 | 不含 | 无实际用途，浪费 token |
| 两轮 vs 单轮 | 默认两轮，可降级单轮 | 两轮解决翻唱/版本问题 |
| 播放历史存储 | `chatMetadata` | 按聊天隔离，跨设备同步 |
| 宏注册 | `macros.register()` (新 API) | 旧 API 已 deprecated |
| 流式隐藏 | ST 正则 + MutationObserver | 三重保险，ScenePulse 验证 |
| 工具结果 | `stealth: true` | 不污染聊天记录 |
| 触发冷却 | 3秒 (正常) / 1秒 (滑动) | 参考 SpicyMarinara |
| 斜杠命令 | 仅模式二注册 `/bgm` | 模式一/三无法通过命令干预主 AI |

---

## 十一、风险与缓解

| 风险 | 缓解 |
|------|------|
| 模式一 AI 不按格式输出 | jsonrepair 容错 + 降级到模式二 |
| 模式二 API 成本高 | 可配置冷却时间 + 单轮降级 + 手动触发 |
| 模式三模型不支持 | `isToolCallingSupported()` 检查 + 降级提示 |
| 流式标记闪现 | 三重隐藏（正则 + Observer + 后清理） |
| 搜索结果全是翻唱 | 两轮设计让 AI 从真实结果中选择 |
| API 超时 | 15秒超时 + 单轮降级 + 启发式选择 |
| 频繁切歌 | `action: "keep"` + 冷却时间 + 最近播放去重 |
| interceptor 在 globalThis | init 时显式挂载，destroy 时移除 |
