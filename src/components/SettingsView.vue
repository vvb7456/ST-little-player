<script setup lang="ts">
import { ref } from 'vue';
import { useSettingsStore } from '@/stores/index';
import type { PlayMode, WidgetMode, DockAlign } from '@/types';
import { t } from '@/i18n';
import ToggleSwitch from './ToggleSwitch.vue';

const settingsStore = useSettingsStore();

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
  { value: 'left', label: t('Left'), icon: 'fa-solid fa-align-left' },
  { value: 'right', label: t('Right'), icon: 'fa-solid fa-align-right' },
];

const isInline = () => settingsStore.settings.widgetMode === 'inline';

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

// ===== AI =====
const providerNames: Record<string, string> = {
  netease: t('NetEase'),
  local: t('Local Files'),
  custom: t('Custom API'),
};

function toggleProvider(id: string): void {
  const cfg = settingsStore.settings.providers.find((p) => p.id === id);
  if (cfg) {
    cfg.enabled = !cfg.enabled;
    settingsStore.save();
  }
}

const newRule = ref('');

function addRule(): void {
  const rule = newRule.value.trim();
  if (!rule) return;
  settingsStore.addCustomCueRule(rule);
  newRule.value = '';
}

function removeRule(index: number): void {
  settingsStore.removeCustomCueRule(index);
}

// ===== General =====
const exportData = (): void => {
  const data = JSON.stringify(settingsStore.settings, null, 2);
  const blob = new Blob([data], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'st-little-player-settings.json';
  a.click();
  URL.revokeObjectURL(url);
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
      const validKeys = ['volume', 'playMode', 'position', 'widgetMode', 'autoPlayOnNewCue', 'providers', 'customCueRules', 'customOpacity', 'opacity'];
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
      if (filtered.customCueRules && !Array.isArray(filtered.customCueRules)) {
        throw new Error('Invalid customCueRules');
      }
      Object.assign(settingsStore.settings, filtered);
      settingsStore.save();
      toastr.success(t('Data imported'));
    } catch (err) {
      console.error('Import failed', err);
      toastr.error(t('Import failed') + ': ' + (err instanceof Error ? err.message : t('Invalid JSON')));
    }
  };
  input.click();
};

const EXT_VERSION = '1.0.0';
const REPO_URL = 'https://github.com/vvb7456/ST-little-player';
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
            <div class="stmp-row-desc">{{ t('Align the docked player to the left or right of the input bar') }}</div>
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

        <!-- Custom Opacity toggle -->
        <div class="stmp-row">
          <div class="stmp-row-info">
            <div class="stmp-row-title">{{ t('Custom opacity') }}</div>
            <div v-if="isInline()" class="stmp-row-desc">{{ t('Not available in inline mode') }}</div>
            <div v-else class="stmp-row-desc">{{ t('Adjust the player background opacity') }}</div>
          </div>
          <ToggleSwitch
            :model-value="settingsStore.settings.customOpacity && !isInline()"
            :disabled="isInline()"
            @update:model-value="settingsStore.setCustomOpacity"
          />
        </div>

        <!-- Opacity slider -->
        <div v-if="settingsStore.settings.customOpacity && !isInline()" class="stmp-row">
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

        <div
          v-for="p in settingsStore.settings.providers"
          :key="p.id"
        >
          <div class="stmp-row">
            <div class="stmp-row-info">
              <div class="stmp-row-title">{{ providerNames[p.id] || p.id }}</div>
              <div class="stmp-row-desc">{{ t('Enable or disable music sources') }}</div>
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
      </div>

      <!-- ===== AI ===== -->
      <div v-show="activeTab === 'ai'" class="stmp-tab-panel">
        <div class="stmp-row">
          <div class="stmp-row-info">
            <div class="stmp-row-title">{{ t('Auto-play on new cue') }}</div>
            <div class="stmp-row-desc">{{ t('Automatically play when a new song cue is detected') }}</div>
          </div>
          <ToggleSwitch
            :model-value="settingsStore.settings.autoPlayOnNewCue"
            @update:model-value="settingsStore.settings.autoPlayOnNewCue = $event; settingsStore.save()"
          />
        </div>

        <div class="stmp-row">
          <div class="stmp-row-info">
            <div class="stmp-row-title">{{ t('Custom Cue Rules (Regex)') }}</div>
            <div class="stmp-row-desc">{{ t('Additional regex patterns to detect song cues in chat') }}</div>
          </div>
        </div>
        <div class="stmp-rules">
          <div
            v-for="(rule, i) in settingsStore.settings.customCueRules"
            :key="i"
            class="stmp-rule"
          >
            <code>{{ rule }}</code>
            <div class="menu_button menu_button_icon stmp-rule-del" @click="removeRule(i)">
              <i class="fa-solid fa-xmark" />
            </div>
          </div>
        </div>
        <div class="stmp-rule-add">
          <input
            v-model="newRule"
            class="text_pole"
            :placeholder="t('Add regex rule...')"
            @keydown.enter="addRule"
          />
          <div class="menu_button menu_button_icon stmp-rule-add-btn" @click="addRule">
            <i class="fa-solid fa-plus" />
          </div>
        </div>
      </div>

      <!-- ===== 通用 ===== -->
      <div v-show="activeTab === 'general'" class="stmp-tab-panel">
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
          <div class="stmp-about-name">半月</div>
          <div class="stmp-about-version">{{ t('Version') }} {{ EXT_VERSION }}</div>
          <div class="stmp-about-desc">{{ t('A scene-aware music player extension for SillyTavern') }}</div>
          <a :href="REPO_URL" target="_blank" rel="noopener" class="stmp-about-link">
            <i class="fa-brands fa-github" />
            <span>GitHub</span>
          </a>
          <div class="stmp-about-copyright">© 2024-2026 半月 (ST-Little-Player)</div>
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
/* Not used as a standalone element — section titles get border-top instead */

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

/* ===== Cue rules ===== */
.stmp-rules {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.stmp-rule {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 2px 5px;
  border-radius: 5px;
  background-color: var(--black30a, rgba(0,0,0,0.3));
}

.stmp-rule code {
  flex: 1;
  font-size: calc(var(--mainFontSize, 14px) * 0.9);
  color: var(--SmartThemeEmColor, rgb(145,145,145));
  word-break: break-all;
}

.stmp-rule-del {
  margin: 0;
  padding: 2px 5px;
  color: var(--fullred, rgb(255,0,0));
}

.stmp-rule-add {
  display: flex;
  gap: 5px;
  align-items: center;
}

.stmp-rule-add-btn {
  margin: 0;
  padding: 3px 8px;
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
</style>
