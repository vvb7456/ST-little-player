<script setup lang="ts">
import { ref } from 'vue';
import { useSettingsStore, usePlaylistStore } from '@/stores/index';
import type { PlayMode, WidgetMode, DockAlign, AiMode } from '@/types';
import { t } from '@/i18n';
import { logger } from '@/utils/logger';
import { getBgmController } from '@/ai/BgmController';
import { fetchCustomModels } from '@/ai/CustomApiClient';
import { TOGETHER_INTERCEPTOR } from '@/ai/prompts';
import ToggleSwitch from './ToggleSwitch.vue';
import ComboBox from './ComboBox.vue';

const settingsStore = useSettingsStore();
const playlistStore = usePlaylistStore();

type TabId = 'appearance' | 'playback' | 'ai' | 'general';
const activeTab = ref<TabId>('appearance');

const tabs: { id: TabId; label: string; icon: string }[] = [
  { id: 'appearance', label: t('Appearance'), icon: 'fa-solid fa-palette' },
  { id: 'playback', label: t('Playback'), icon: 'fa-solid fa-music' },
  { id: 'ai', label: t('AI'), icon: 'fa-solid fa-wand-magic-sparkles' },
  { id: 'general', label: t('General'), icon: 'fa-solid fa-sliders' },
];

// ===== Appearance =====
const widgetModes: { value: WidgetMode; label: string; icon: string }[] = [
  { value: 'dock', label: t('Dock'), icon: 'fa-solid fa-grip-lines' },
  { value: 'drag', label: t('Drag'), icon: 'fa-solid fa-up-down-left-right' },
  { value: 'inline', label: t('Inline'), icon: 'fa-solid fa-puzzle-piece' },
  { value: 'hidden', label: t('Hidden'), icon: 'fa-solid fa-eye-slash' },
];

const dockAligns: { value: DockAlign; label: string; icon: string }[] = [
  { value: 'top-left', label: t('Top Left'), icon: 'fa-solid fa-arrow-up-from-left' },
  { value: 'top-right', label: t('Top Right'), icon: 'fa-solid fa-arrow-up-from-right' },
  { value: 'bottom-left', label: t('Bottom Left'), icon: 'fa-solid fa-arrow-down-from-left' },
  { value: 'bottom-right', label: t('Bottom Right'), icon: 'fa-solid fa-arrow-down-from-right' },
];

const hasOpacity = () => settingsStore.settings.widgetMode === 'dock' || settingsStore.settings.widgetMode === 'drag';

function onOpacity(e: Event): void {
  const target = e.target as HTMLInputElement;
  settingsStore.setOpacity(Number(target.value));
}

// ===== Playback =====
const playModes: { value: PlayMode; label: string; icon: string }[] = [
  { value: 'list', label: t('List Loop'), icon: 'fa-solid fa-repeat' },
  { value: 'random', label: t('Random'), icon: 'fa-solid fa-shuffle' },
  { value: 'single', label: t('Single Loop'), icon: 'fa-solid fa-repeat' },
];

function onVolume(e: Event): void {
  const target = e.target as HTMLInputElement;
  settingsStore.setVolume(Number(target.value));
}

const providerNames: Record<string, string> = {
  netease: t('Network'),
  local: t('Upload'),
  custom: t('Custom API'),
};

const providerDescs: Record<string, string> = {
  netease: t('Search and play songs from the network'),
  local: t('Upload and play songs from the server'),
  custom: t('Search and play songs from a custom API'),
};

const aiModes: { value: AiMode; label: string; icon: string }[] = [
  { value: 'together', label: t('Together'), icon: 'fa-solid fa-link' },
  { value: 'function_call', label: t('Function Call'), icon: 'fa-solid fa-screwdriver-wrench' },
];

function onAiMode(mode: AiMode): void {
  settingsStore.setAiMode(mode);
  getBgmController()?.setMode(mode);
}

function onUseCustomApi(enabled: boolean): void {
  settingsStore.setAiUseCustomApi(enabled);
  getBgmController()?.resetFunctionCall();
}

function onAiMasterToggle(enabled: boolean): void {
  const mode: AiMode = enabled ? 'function_call' : 'off';
  settingsStore.setAiMode(mode);
  getBgmController()?.setMode(mode);
}

function onAiContextMessages(e: Event): void {
  const target = e.target as HTMLInputElement;
  settingsStore.setAiContextMessages(Number(target.value));
}

const modelList = ref<string[]>([]);
const fetchingModels = ref(false);

async function onFetchModels(): Promise<void> {
  if (fetchingModels.value) return;
  const settings = settingsStore.settings;
  if (!settings.aiApiUrl) {
    if (typeof toastr !== 'undefined') toastr.warning(t('Please fill API URL'), '晓乐');
    return;
  }
  fetchingModels.value = true;
  try {
    const models = await fetchCustomModels();
    modelList.value = models;
    if (models.length === 0) {
      if (typeof toastr !== 'undefined') toastr.info(t('No models returned'), '晓乐');
    } else {
      if (typeof toastr !== 'undefined') toastr.success(`${t('models found')} ${models.length} 个模型`, '晓乐');
    }
  } catch (err: any) {
    logger.error('Failed to fetch models:', err);
    if (typeof toastr !== 'undefined') toastr.error(t('Failed to fetch models'), '晓乐');
  } finally {
    fetchingModels.value = false;
  }
}

function toggleProvider(id: string): void {
  const cfg = settingsStore.settings.providers.find((p) => p.id === id);
  if (!cfg) return;
  if (!cfg.enabled && id === 'local') {
    const ctx = SillyTavern.getContext();
    if (ctx?.callGenericPopup && ctx?.POPUP_TYPE) {
      void ctx.callGenericPopup(
        t('Upload warning text'),
        ctx.POPUP_TYPE.CONFIRM,
        '',
        { okButton: t('Confirm'), cancelButton: t('Cancel') },
      ).then((result: number) => {
        if (result === 1) {
          cfg.enabled = true;
          settingsStore.save();
          if (typeof toastr !== 'undefined') toastr.info(`${t('Source enabled')}：${providerNames[id] || id}`, '晓乐');
        }
      });
      return;
    }
  }
  cfg.enabled = !cfg.enabled;
  settingsStore.save();
  if (typeof toastr !== 'undefined') {
    toastr.info(`${cfg.enabled ? t('Source enabled') : t('Source disabled')}：${providerNames[id] || id}`, '晓乐');
  }
}

// ===== General =====
const EXPORT_EXCLUDE_KEYS = ['aiApiUrl', 'aiApiKey', 'aiModel'];

const exportData = (): void => {
  const data: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(settingsStore.settings)) {
    if (!EXPORT_EXCLUDE_KEYS.includes(k)) data[k] = v;
  }
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'st-little-player-settings.json';
  a.click();
  URL.revokeObjectURL(url);
  if (typeof toastr !== 'undefined') toastr.success(t('Settings exported'), '晓乐');
};

const importData = (): void => {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.json';
  input.onchange = async (e: Event): Promise<void> => {
    const file = (e.target as HTMLInputElement).files?.[0];
    if (!file) return;
    const text = await file.text();
    try {
      const data = JSON.parse(text);
      if (typeof data !== 'object' || data === null) throw new Error('Not an object');
      const validKeys = ['volume', 'playMode', 'crossfade', 'position', 'widgetMode', 'dockAlign', 'providers', 'customOpacity', 'opacity', 'aiMode', 'aiUseCustomApi', 'aiContextMessages', 'aiAutoTrigger', 'aiTriggerOnGreeting', 'aiCooldownMs', 'togetherPromptRole', 'togetherCustomPromptEnabled', 'togetherCustomPrompt', 'debug'];
      const filtered: Record<string, unknown> = {};
      for (const key of validKeys) {
        if (key in data) filtered[key] = data[key];
      }
      if (typeof filtered.volume !== 'number' || filtered.volume < 0 || filtered.volume > 100) {
        throw new Error('Invalid volume');
      }
      if (typeof filtered.playMode !== 'string' || !['list', 'random', 'single'].includes(filtered.playMode)) {
        throw new Error('Invalid playMode');
      }
      if (filtered.providers && !Array.isArray(filtered.providers)) {
        throw new Error('Invalid providers');
      }
      Object.assign(settingsStore.settings, filtered);
      settingsStore.save();
      if (typeof toastr !== 'undefined') toastr.success(t('Settings imported'), '晓乐');
    } catch (err) {
      logger.error('Settings import failed:', err);
      if (typeof toastr !== 'undefined') toastr.error(`${t('Import failed')}：${err instanceof Error ? err.message : t('Invalid JSON')}`, '晓乐');
    }
  };
  input.click();
};

const EXT_VERSION = __APP_VERSION__;
const REPO_URL = 'https://github.com/vvb7456/ST-little-player';

// ===== Playlist import/export (network list only) =====
const exportPlaylist = (): void => {
  const data = playlistStore.networkList.map(item => ({
    song: item.song,
    artist: item.artist,
    providerId: item.providerId,
    providerTrackId: item.providerTrackId,
    providerPicId: item.providerPicId,
  }));
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'st-little-player-playlist.json';
  a.click();
  URL.revokeObjectURL(url);
  if (typeof toastr !== 'undefined') toastr.success(t('Playlist exported'), '晓乐');
};

const importPlaylist = (): void => {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.json';
  input.onchange = async (e: Event): Promise<void> => {
    const file = (e.target as HTMLInputElement).files?.[0];
    if (!file) return;
    const text = await file.text();
    try {
      const data = JSON.parse(text);
      if (!Array.isArray(data)) throw new Error('Not an array');
      const items = data
        .filter((item: any) => item && typeof item.song === 'string')
        .map((item: any) => ({
          id: `stmp-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
          song: item.song,
          artist: item.artist,
          source: 'network' as const,
          providerId: item.providerId,
          providerTrackId: item.providerTrackId,
          providerPicId: item.providerPicId,
          addedAt: Date.now(),
        }));
      playlistStore.networkList = items;
      playlistStore.savePlaylistData();
      if (typeof toastr !== 'undefined') toastr.success(t('Playlist imported'), '晓乐');
    } catch (err) {
      logger.error('Playlist import failed:', err);
      if (typeof toastr !== 'undefined') toastr.error(`${t('Import failed')}：${err instanceof Error ? err.message : t('Invalid JSON')}`, '晓乐');
    }
  };
  input.click();
};

// ===== Prompt Editor (uses ST native callPopup) =====
async function openPromptEditor(): Promise<void> {
  const ctx = SillyTavern.getContext();
  const current = settingsStore.settings.togetherCustomPrompt || TOGETHER_INTERCEPTOR;
  const macroList = ['{{xiaoyueCurrentSong}}', '{{xiaoyueCurrentArtist}}', '{{xiaoyueIsPlaying}}', '{{xiaoyueHasTrack}}', '{{xiaoyueRecentPlayed}}'];
  const markerHint = `<div style="margin-bottom:6px;font-size:0.85em;opacity:0.8">${t('The prompt must contain the markers')} <code class="stmp-macro-hint">&lt;!--XY_BGM_START--&gt;</code> / <code class="stmp-macro-hint">&lt;!--XY_BGM_END--&gt;</code> ${t('for BGM control to work.')}</div>`;
  const macroHtml = macroList.map(m => `<code class="stmp-macro-hint">${m}</code>`).join(' ');
  const macroHint = `<div style="margin-bottom:8px;font-size:0.85em;opacity:0.7">${t('Available macros:')} ${macroHtml}</div>`;
  const desc = markerHint + macroHint;

  // Fix ST bug: Cancel button gets display:inline-block which causes vertical stacking
  $('#dialogue_popup_cancel').css('display', 'flex');
  $('#dialogue_popup_controls .menu_button').css('width', 'unset');

  const result = await ctx.callPopup(desc, 'input', current, { wide: true, rows: 20, okButton: t('Save') });
  if (result !== false) {
    settingsStore.setTogetherCustomPrompt(String(result).trim());
  }
}
</script>

<template>
  <div class="stmp-settings">
    <!-- Tab bar -->
    <div class="stmp-tab-bar">
      <div
        v-for="tab in tabs"
        :key="tab.id"
        class="stmp-tab"
        :class="{ active: activeTab === tab.id }"
        @click="activeTab = tab.id"
      >
        <i :class="tab.icon" />
        <span>{{ tab.label }}</span>
      </div>
    </div>

    <!-- Tab content -->
    <div class="stmp-tab-content">
      <!-- ===== 外观 ===== -->
      <div v-show="activeTab === 'appearance'" class="stmp-tab-panel">
        <!-- Widget Mode: title + chips on same row -->
        <div class="stmp-row">
          <div class="stmp-row-info">
            <div class="stmp-row-title">{{ t('Widget Mode') }}</div>
            <div class="stmp-row-desc">{{ t('Choose how the player widget is displayed') }}</div>
          </div>
          <div class="stmp-chips">
            <div
              v-for="mode in widgetModes"
              :key="mode.value"
              class="stmp-chip"
              :class="{ active: settingsStore.settings.widgetMode === mode.value }"
              @click="settingsStore.setWidgetMode(mode.value)"
            >
              <i :class="mode.icon" />
              <span>{{ mode.label }}</span>
            </div>
          </div>
        </div>

        <!-- Dock Alignment -->
        <div v-if="settingsStore.settings.widgetMode === 'dock'" class="stmp-row">
          <div class="stmp-row-info">
            <div class="stmp-row-title">{{ t('Dock Alignment') }}</div>
            <div class="stmp-row-desc">{{ t('Align the docked player to a corner of the screen') }}</div>
          </div>
          <div class="stmp-chips">
            <div
              v-for="align in dockAligns"
              :key="align.value"
              class="stmp-chip"
              :class="{ active: settingsStore.settings.dockAlign === align.value }"
              @click="settingsStore.setDockAlign(align.value)"
            >
              <i :class="align.icon" />
              <span>{{ align.label }}</span>
            </div>
          </div>
        </div>

        <!-- Drag mini text toggle -->
        <div v-if="settingsStore.settings.widgetMode === 'drag'" class="stmp-row">
          <div class="stmp-row-info">
            <div class="stmp-row-title">{{ t('Show track info in drag mini') }}</div>
            <div class="stmp-row-desc">{{ t('Show song title and lyrics in the compact drag widget') }}</div>
          </div>
          <ToggleSwitch
            :model-value="settingsStore.settings.showDragMiniText"
            @update:model-value="settingsStore.setShowDragMiniText"
          />
        </div>

        <!-- Custom Opacity toggle (only for dock/drag modes) -->
        <div v-if="hasOpacity()" class="stmp-row">
          <div class="stmp-row-info">
            <div class="stmp-row-title">{{ t('Custom opacity') }}</div>
            <div class="stmp-row-desc">{{ t('Adjust the player background opacity') }}</div>
          </div>
          <ToggleSwitch
            :model-value="settingsStore.settings.customOpacity"
            @update:model-value="settingsStore.setCustomOpacity"
          />
        </div>

        <!-- Opacity slider -->
        <div v-if="settingsStore.settings.customOpacity" class="stmp-row">
          <div class="stmp-row-info">
            <div class="stmp-row-title">{{ t('Opacity') }}</div>
          </div>
          <div class="stmp-slider-wrap">
            <input type="range" class="stmp-slider" min="0" max="100" :value="settingsStore.settings.opacity" @input="onOpacity" />
            <span class="stmp-slider-val">{{ settingsStore.settings.opacity }}%</span>
          </div>
        </div>
      </div>

      <!-- ===== 播放 ===== -->
      <div v-show="activeTab === 'playback'" class="stmp-tab-panel">
        <div class="stmp-row">
          <div class="stmp-row-info">
            <div class="stmp-row-title">{{ t('Default Volume') }}</div>
          </div>
          <div class="stmp-slider-wrap">
            <input type="range" class="stmp-slider" min="0" max="100" :value="settingsStore.settings.volume" @input="onVolume" />
            <span class="stmp-slider-val">{{ settingsStore.settings.volume }}</span>
          </div>
        </div>

        <div class="stmp-row">
          <div class="stmp-row-info">
            <div class="stmp-row-title">{{ t('Default Play Mode') }}</div>
          </div>
          <div class="stmp-chips">
            <div
              v-for="m in playModes"
              :key="m.value"
              class="stmp-chip"
              :class="{ active: settingsStore.settings.playMode === m.value }"
              @click="settingsStore.setPlayMode(m.value)"
            >
              <i :class="m.icon" />
              <span>{{ m.label }}</span>
            </div>
          </div>
        </div>

        <div class="stmp-row">
          <div class="stmp-row-info">
            <div class="stmp-row-title">{{ t('Crossfade') }}</div>
            <div class="stmp-row-desc">{{ t('Smoothly fade in when starting playback and fade out when pausing or switching tracks') }}</div>
          </div>
          <ToggleSwitch
            :model-value="settingsStore.settings.crossfade"
            @update:model-value="settingsStore.setCrossfade"
          />
        </div>

        <div
          v-for="p in settingsStore.settings.providers"
          :key="p.id"
        >
          <div class="stmp-row">
            <div class="stmp-row-info">
              <div class="stmp-row-title">{{ providerNames[p.id] || p.id }}</div>
              <div class="stmp-row-desc">{{ providerDescs[p.id] }}</div>
            </div>
            <ToggleSwitch
              :model-value="p.enabled"
              @update:model-value="() => toggleProvider(p.id)"
            />
          </div>
          <div v-if="p.id === 'custom' && p.enabled" class="stmp-provider-fields">
            <input
              class="text_pole"
              v-model="p.config!.searchURL"
              :placeholder="t('Search URL')"
              @change="settingsStore.save()"
            />
            <input
              class="text_pole"
              v-model="p.config!.resolveURL"
              :placeholder="t('Resolve URL')"
              @change="settingsStore.save()"
            />
          </div>
        </div>

        <div class="stmp-separator" />
        <div class="stmp-row">
          <div class="stmp-row-info">
            <div class="stmp-row-title">{{ t('Export playlist') }}</div>
            <div class="stmp-row-desc">{{ t('Save network playlist to a JSON file') }}</div>
          </div>
          <div class="menu_button menu_button_icon stmp-action-btn" @click="exportPlaylist">
            <i class="fa-solid fa-file-export" />
          </div>
        </div>
        <div class="stmp-row">
          <div class="stmp-row-info">
            <div class="stmp-row-title">{{ t('Import playlist') }}</div>
            <div class="stmp-row-desc">{{ t('Load network playlist from a JSON file') }}</div>
          </div>
          <div class="menu_button menu_button_icon stmp-action-btn" @click="importPlaylist">
            <i class="fa-solid fa-file-import" />
          </div>
        </div>
      </div>

      <!-- ===== AI ===== -->
      <div v-show="activeTab === 'ai'" class="stmp-tab-panel">
        <!-- Master switch -->
        <div class="stmp-row">
          <div class="stmp-row-info">
            <div class="stmp-row-title">{{ t('AI BGM') }}</div>
            <div class="stmp-row-desc">{{ t('Enable AI-driven background music selection') }}</div>
          </div>
          <ToggleSwitch
            :model-value="settingsStore.settings.aiMode !== 'off'"
            @update:model-value="onAiMasterToggle($event)"
          />
        </div>

        <template v-if="settingsStore.settings.aiMode !== 'off'">
          <!-- Mode selection -->
          <div class="stmp-row">
            <div class="stmp-row-info">
              <div class="stmp-row-title">{{ t('AI Mode') }}</div>
              <div class="stmp-row-desc">{{ t('Choose how AI selects background music') }}</div>
            </div>
            <div class="stmp-chips">
              <div
                v-for="m in aiModes"
                :key="m.value"
                class="stmp-chip"
                :class="{ active: settingsStore.settings.aiMode === m.value }"
                @click="onAiMode(m.value)"
              >
                <i :class="m.icon" />
                <span>{{ m.label }}</span>
              </div>
            </div>
          </div>

          <!-- Function Call mode settings -->
          <template v-if="settingsStore.settings.aiMode === 'function_call'">
            <!-- Custom API toggle -->
            <div class="stmp-row">
              <div class="stmp-row-info">
                <div class="stmp-row-title">{{ t('Custom API') }}</div>
                <div class="stmp-row-desc">{{ t('Use a separate API endpoint for BGM agent loop instead of main API function calling') }}</div>
              </div>
              <ToggleSwitch
                :model-value="settingsStore.settings.aiUseCustomApi"
                @update:model-value="onUseCustomApi"
              />
            </div>

            <!-- Custom API settings (only when useCustomApi is on) -->
            <template v-if="settingsStore.settings.aiUseCustomApi">
              <div class="stmp-row">
                <div class="stmp-row-info">
                  <div class="stmp-row-title">{{ t('API URL') }}</div>
                  <div class="stmp-row-desc">{{ t('OpenAI-compatible endpoint that supports tool calling') }}</div>
                </div>
                <input
                  class="text_pole stmp-text-input"
                  :value="settingsStore.settings.aiApiUrl"
                  placeholder=""
                  @change="settingsStore.setAiApiUrl(($event.target as HTMLInputElement).value.trim())"
                />
              </div>
              <div class="stmp-row">
                <div class="stmp-row-info">
                  <div class="stmp-row-title">{{ t('API Key') }}</div>
                  <div class="stmp-row-desc">{{ t('Bearer token for the custom endpoint') }}</div>
                </div>
                <input
                  type="password"
                  class="text_pole stmp-text-input"
                  :value="settingsStore.settings.aiApiKey"
                  placeholder=""
                  @change="settingsStore.setAiApiKey(($event.target as HTMLInputElement).value.trim())"
                />
              </div>
              <div class="stmp-row">
                <div class="stmp-row-info">
                  <div class="stmp-row-title">{{ t('Model') }}</div>
                  <div class="stmp-row-desc">{{ t('Model that supports tool calling') }}</div>
                </div>
                <div class="stmp-model-wrap">
                  <ComboBox
                    :model-value="settingsStore.settings.aiModel"
                    :options="modelList"
                    placeholder=""
                    @update:model-value="settingsStore.setAiModel($event)"
                  />
                  <div
                    class="menu_button menu_button_icon stmp-model-fetch"
                    :class="{ 'stmp-spin': fetchingModels }"
                    :title="t('Connect')"
                    @click="onFetchModels"
                  >
                    <i class="fa-solid fa-plug" />
                  </div>
                </div>
              </div>

              <div class="stmp-row">
                <div class="stmp-row-info">
                  <div class="stmp-row-title">{{ t('Context Messages') }}</div>
                  <div class="stmp-row-desc">{{ t('Number of recent chat messages to send to AI') }}</div>
                </div>
                <div class="stmp-slider-wrap">
                  <input type="range" class="stmp-slider" min="2" max="20" :value="settingsStore.settings.aiContextMessages" @input="onAiContextMessages" />
                  <span class="stmp-slider-val">{{ settingsStore.settings.aiContextMessages }}</span>
                </div>
              </div>

              <div class="stmp-row">
                <div class="stmp-row-info">
                  <div class="stmp-row-title">{{ t('Auto Trigger') }}</div>
                  <div class="stmp-row-desc">{{ t('Automatically analyze new messages and select music') }}</div>
                </div>
                <ToggleSwitch
                  :model-value="settingsStore.settings.aiAutoTrigger"
                  @update:model-value="settingsStore.setAiAutoTrigger($event)"
                />
              </div>

              <div v-if="settingsStore.settings.aiAutoTrigger" class="stmp-row">
                <div class="stmp-row-info">
                  <div class="stmp-row-title">{{ t('Trigger on Greeting') }}</div>
                  <div class="stmp-row-desc">{{ t('Analyze BGM when loading a character card (first message)') }}</div>
                </div>
                <ToggleSwitch
                  :model-value="settingsStore.settings.aiTriggerOnGreeting"
                  @update:model-value="settingsStore.setAiTriggerOnGreeting($event)"
                />
              </div>
            </template>
          </template>

          <!-- Together mode settings -->
          <template v-if="settingsStore.settings.aiMode === 'together'">
            <div class="stmp-row">
              <div class="stmp-row-info">
                <div class="stmp-row-title">{{ t('Prompt Role') }}</div>
                <div class="stmp-row-desc">{{ t('Role used when injecting BGM instructions into the main AI') }}</div>
              </div>
              <div class="stmp-chips">
                <div
                  v-for="r in [{v:'system',l:t('System')},{v:'user',l:t('User')}]"
                  :key="r.v"
                  class="stmp-chip"
                  :class="{ active: settingsStore.settings.togetherPromptRole === r.v }"
                  @click="settingsStore.setTogetherPromptRole(r.v as 'system' | 'user')"
                >
                  <span>{{ r.l }}</span>
                </div>
              </div>
            </div>

            <div class="stmp-row">
              <div class="stmp-row-info">
                <div class="stmp-row-title">{{ t('Custom Prompt') }}</div>
                <div class="stmp-row-desc">
                  {{ t('Edit the BGM instruction prompt. Use macros like ') }}
                  <code v-pre>{{xiaoyueCurrentSong}}</code>
                  {{ t(' for dynamic values.') }}
                </div>
              </div>
              <ToggleSwitch
                :model-value="settingsStore.settings.togetherCustomPromptEnabled"
                @update:model-value="settingsStore.setTogetherCustomPromptEnabled"
              />
            </div>

            <div v-if="settingsStore.settings.togetherCustomPromptEnabled" class="stmp-row">
              <div class="stmp-row-info">
                <div class="stmp-row-title">{{ t('Edit Prompt') }}</div>
                <div class="stmp-row-desc">{{ t('Click to edit the BGM instruction prompt') }}</div>
              </div>
              <div
                class="menu_button menu_button_icon stmp-action-btn"
                :title="t('Edit Prompt')"
                @click="openPromptEditor"
              >
                <i class="fa-solid fa-pen-to-square" />
              </div>
            </div>
          </template>
        </template>
      </div>

      <!-- ===== 通用 ===== -->
      <div v-show="activeTab === 'general'" class="stmp-tab-panel">
        <div class="stmp-row">
          <div class="stmp-row-info">
            <div class="stmp-row-title">{{ t('Debug Mode') }}</div>
            <div class="stmp-row-desc">{{ t('Enable verbose console logging for troubleshooting') }}</div>
          </div>
          <ToggleSwitch
            :model-value="settingsStore.settings.debug"
            @update:model-value="settingsStore.setDebug"
          />
        </div>

        <div class="stmp-separator" />

        <div class="stmp-row">
          <div class="stmp-row-info">
            <div class="stmp-row-title">{{ t('Export data') }}</div>
            <div class="stmp-row-desc">{{ t('Save your settings to a JSON file') }}</div>
          </div>
          <div class="menu_button menu_button_icon stmp-action-btn" @click="exportData">
            <i class="fa-solid fa-file-export" />
          </div>
        </div>
        <div class="stmp-row">
          <div class="stmp-row-info">
            <div class="stmp-row-title">{{ t('Import data') }}</div>
            <div class="stmp-row-desc">{{ t('Load settings from a JSON file') }}</div>
          </div>
          <div class="menu_button menu_button_icon stmp-action-btn" @click="importData">
            <i class="fa-solid fa-file-import" />
          </div>
        </div>

        <div class="stmp-about">
          <div class="stmp-about-icon"><i class="fa-solid fa-music" /></div>
          <div class="stmp-about-name">晓乐</div>
          <div class="stmp-about-version">{{ t('Version') }} {{ EXT_VERSION }}</div>
          <div class="stmp-about-desc">{{ t('A scene-aware music player extension for SillyTavern') }}</div>
          <a :href="REPO_URL" target="_blank" rel="noopener" class="stmp-about-link">
            <i class="fa-brands fa-github" />
            <span>GitHub</span>
          </a>
          <div class="stmp-about-copyright"><a href="https://www.erocraft.com" target="_blank" rel="noopener">艾萝工坊</a> © 2015 - 2026</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.stmp-settings {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 5px 0;
}

/* ===== Tab bar ===== */
.stmp-tab-bar {
  display: flex;
  gap: 2px;
  border: 1px solid var(--SmartThemeBorderColor, rgba(0,0,0,0.5));
  border-radius: 7px;
  padding: 2px;
  overflow-x: auto;
}

.stmp-tab {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 4px 6px;
  cursor: pointer;
  border-radius: 5px;
  font-size: var(--mainFontSize, 14px);
  color: var(--SmartThemeEmColor, rgb(145,145,145));
  white-space: nowrap;
  transition: all var(--animation-duration, 0.2s);
}

.stmp-tab:hover {
  filter: brightness(150%);
}

.stmp-tab.active {
  color: var(--SmartThemeBodyColor, #ccc);
  background: color-mix(in srgb, var(--SmartThemeQuoteColor, rgb(225,138,36)) 20%, transparent);
}

.stmp-tab i {
  font-size: calc(var(--mainFontSize, 14px) * 0.9);
}

/* ===== Tab content ===== */
.stmp-tab-content {
  min-height: 60px;
}

.stmp-tab-panel {
  display: flex;
  flex-direction: column;
  padding: 4px 2px;
}

/* ===== Setting row (uniform structure: title+desc left, control right) ===== */
.stmp-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 8px 0;
  border-bottom: 1px solid color-mix(in srgb, var(--SmartThemeBorderColor, rgba(0,0,0,0.3)) 50%, transparent);
}

.stmp-row:last-child {
  border-bottom: none;
}

.stmp-row-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  flex: 1;
}

.stmp-row-title {
  font-size: var(--mainFontSize, 14px);
  font-weight: bold;
  color: var(--SmartThemeBodyColor, #ccc);
}

.stmp-row-desc {
  font-size: calc(var(--mainFontSize, 14px) * 0.85);
  color: var(--SmartThemeEmColor, rgb(145,145,145));
  line-height: 1.3;
}

/* ===== Chip group (segmented control, never wraps) ===== */
.stmp-chips {
  display: inline-flex;
  flex-shrink: 0;
  flex-wrap: nowrap;
  gap: 0;
}

.stmp-chip {
  padding: 3px 7px;
  border: 1px solid var(--SmartThemeBorderColor, rgba(0,0,0,0.5));
  border-radius: 0;
  margin-left: -1px;
  cursor: pointer;
  font-size: calc(var(--mainFontSize, 14px) * 0.85);
  color: var(--SmartThemeEmColor, rgb(145,145,145));
  display: flex;
  align-items: center;
  gap: 3px;
  white-space: nowrap;
  transition: all var(--animation-duration, 0.2s);
}

.stmp-chip:first-child {
  border-radius: 5px 0 0 5px;
  margin-left: 0;
}

.stmp-chip:last-child {
  border-radius: 0 5px 5px 0;
}

.stmp-chip:only-child {
  border-radius: 5px;
}

.stmp-chip:hover {
  filter: brightness(130%);
}

.stmp-chip.active {
  background: color-mix(in srgb, var(--SmartThemeQuoteColor, rgb(225,138,36)) 80%, transparent);
  color: var(--SmartThemeBodyColor, #ccc);
  border-color: var(--SmartThemeQuoteColor, rgb(225,138,36));
  z-index: 1;
}

.stmp-chip i {
  font-size: calc(var(--mainFontSize, 14px) * 0.8);
}

/* ===== Compact slider ===== */
.stmp-slider-wrap {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
}

.stmp-slider {
  -webkit-appearance: none;
  appearance: none;
  width: 90px;
  height: 4px;
  border-radius: 7px;
  background: color-mix(in srgb, var(--SmartThemeBodyColor, #ccc) 30%, transparent);
  outline: none;
  margin: 0;
}

.stmp-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--SmartThemeQuoteColor, rgb(225,138,36));
  border: 2px solid var(--SmartThemeBodyColor, #ccc);
  cursor: pointer;
}

.stmp-slider::-moz-range-thumb {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--SmartThemeQuoteColor, rgb(225,138,36));
  border: none;
  cursor: pointer;
}

.stmp-slider-val {
  font-size: calc(var(--mainFontSize, 14px) * 0.9);
  color: var(--SmartThemeBodyColor, #ccc);
  min-width: 28px;
  text-align: right;
}

/* ===== Divider (between sections) ===== */
.stmp-separator {
  height: 1px;
  background: var(--stmp-border);
  margin: 8px 0;
}

/* ===== Action button ===== */
.stmp-action-btn {
  margin: 0 !important;
  padding: 4px 8px !important;
  flex-shrink: 0;
}

/* ===== Provider fields ===== */
.stmp-provider-fields {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 0 0 8px 4px;
}

.stmp-text-input {
  flex: 0 0 240px;
  max-width: 240px;
  font-size: var(--mainFontSize, 14px);
}

.stmp-model-wrap {
  display: flex;
  align-items: center;
  gap: 5px;
  flex: 0 0 240px;
  max-width: 240px;
}

.stmp-model-fetch {
  margin: 0;
  padding: 5px 8px;
  flex-shrink: 0;
  cursor: pointer;
}

.stmp-spin {
  pointer-events: none;
  opacity: 0.6;
}

.stmp-spin i {
  animation: stmp-spin 0.8s linear infinite;
}

@keyframes stmp-spin {
  to { transform: rotate(360deg); }
}

/* ===== About ===== */
.stmp-about {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  padding: 20px 0 4px;
  text-align: center;
}

.stmp-about-icon {
  font-size: calc(var(--mainFontSize, 14px) * 2);
  color: var(--SmartThemeQuoteColor, rgb(225,138,36));
  margin-bottom: 4px;
}

.stmp-about-name {
  font-size: calc(var(--mainFontSize, 14px) * 1.1);
  font-weight: bold;
  color: var(--SmartThemeBodyColor, #ccc);
}

.stmp-about-version {
  font-size: calc(var(--mainFontSize, 14px) * 0.9);
  color: var(--SmartThemeEmColor, rgb(145,145,145));
}

.stmp-about-desc {
  font-size: calc(var(--mainFontSize, 14px) * 0.9);
  color: var(--SmartThemeEmColor, rgb(145,145,145));
  margin-top: 4px;
  max-width: 240px;
  line-height: 1.4;
}

.stmp-about-link {
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 8px;
  padding: 4px 10px;
  border: 1px solid var(--SmartThemeBorderColor, rgba(0,0,0,0.5));
  border-radius: 5px;
  font-size: var(--mainFontSize, 14px);
  color: var(--SmartThemeBodyColor, #ccc);
  text-decoration: none;
  transition: all var(--animation-duration, 0.2s);
}

.stmp-about-link:hover {
  filter: brightness(150%);
  border-color: var(--SmartThemeQuoteColor, rgb(225,138,36));
}

.stmp-about-copyright {
  font-size: calc(var(--mainFontSize, 14px) * 0.8);
  color: var(--SmartThemeEmColor, rgb(145,145,145));
  margin-top: 6px;
}

/* ===== Macro hint in callPopup ===== */
.stmp-macro-hint {
  display: inline-block;
  padding: 1px 4px;
  margin: 1px;
  border-radius: 3px;
  background: rgba(0,0,0,0.3);
  color: var(--SmartThemeQuoteColor, rgb(225,138,36));
  font-size: 0.9em;
}
</style>
