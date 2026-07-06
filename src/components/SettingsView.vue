<script setup lang="ts">
import { ref } from 'vue';
import { useSettingsStore } from '@/stores/index';
import type { PlayMode } from '@/types';
import { t } from '@/i18n';

const settingsStore = useSettingsStore();

type TabId = 'playback' | 'providers' | 'cue' | 'data';
const activeTab = ref<TabId>('playback');

const tabs: { id: TabId; label: string; icon: string }[] = [
  { id: 'playback', label: t('Playback'), icon: 'fa-solid fa-music' },
  { id: 'providers', label: t('Providers'), icon: 'fa-solid fa-cloud' },
  { id: 'cue', label: t('AI Cue'), icon: 'fa-solid fa-wand-magic-sparkles' },
  { id: 'data', label: t('Data'), icon: 'fa-solid fa-database' },
];

// ===== Playback tab =====
const playModes: { value: PlayMode; label: string }[] = [
  { value: 'list', label: t('List Loop') },
  { value: 'random', label: t('Random') },
  { value: 'single', label: t('Single Loop') },
];

function onVolume(e: Event): void {
  const target = e.target as HTMLInputElement;
  settingsStore.setVolume(Number(target.value));
}

function onPlayMode(e: Event): void {
  const target = e.target as HTMLSelectElement;
  settingsStore.setPlayMode(target.value as PlayMode);
}

function onAutoPlay(e: Event): void {
  const target = e.target as HTMLInputElement;
  settingsStore.settings.autoPlayOnNewCue = target.checked;
  settingsStore.save();
}

// ===== Providers tab =====
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

// ===== Cue tab =====
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

// ===== Data tab =====
const clearCache = async (): Promise<void> => {
  const storage = settingsStore.storage;
  if (storage) {
    await storage.clearCache();
    toastr.success(t('Cache cleared'));
  }
};

const exportData = (): void => {
  const data = JSON.stringify(settingsStore.settings, null, 2);
  const blob = new Blob([data], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'st-music-player-settings.json';
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
      const validKeys = ['volume', 'playMode', 'position', 'widgetMode', 'autoPlayOnNewCue', 'providers', 'customCueRules'];
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
      <!-- ===== Playback ===== -->
      <div v-show="activeTab === 'playback'" class="stmp-tab-panel">
        <!-- Widget Mode -->
        <div class="stmp-setting-group">
          <label class="stmp-setting-label">{{ t('Widget Mode') }}</label>
          <div class="stmp-mode-toggle">
            <div
              class="menu_button menu_button_icon stmp-mode-btn"
              :class="{ toggled: settingsStore.settings.widgetMode === 'dock' }"
              @click="settingsStore.setWidgetMode('dock')"
            >
              <i class="fa-solid fa-grip-lines" />
              <span>{{ t('Dock') }}</span>
            </div>
            <div
              class="menu_button menu_button_icon stmp-mode-btn"
              :class="{ toggled: settingsStore.settings.widgetMode === 'drag' }"
              @click="settingsStore.setWidgetMode('drag')"
            >
              <i class="fa-solid fa-up-down-left-right" />
              <span>{{ t('Drag') }}</span>
            </div>
          </div>
        </div>

        <!-- Default Volume -->
        <div class="stmp-setting-group">
          <label class="stmp-setting-label">{{ t('Default Volume') }}: {{ settingsStore.settings.volume }}</label>
          <input
            type="range"
            min="0"
            max="100"
            :value="settingsStore.settings.volume"
            @input="onVolume"
          />
        </div>

        <!-- Default Play Mode -->
        <div class="stmp-setting-group">
          <label class="stmp-setting-label" for="stmp-playmode">{{ t('Default Play Mode') }}</label>
          <select id="stmp-playmode" class="text_pole" :value="settingsStore.settings.playMode" @change="onPlayMode">
            <option v-for="m in playModes" :key="m.value" :value="m.value">{{ m.label }}</option>
          </select>
        </div>

        <!-- Auto Play -->
        <label class="checkbox_label stmp-setting-row">
          <input
            type="checkbox"
            :checked="settingsStore.settings.autoPlayOnNewCue"
            @change="onAutoPlay"
          />
          <span>{{ t('Auto-play on new cue') }}</span>
        </label>
      </div>

      <!-- ===== Providers ===== -->
      <div v-show="activeTab === 'providers'" class="stmp-tab-panel">
        <div
          v-for="p in settingsStore.settings.providers"
          :key="p.id"
          class="stmp-provider-card"
        >
          <label class="checkbox_label">
            <input
              type="checkbox"
              :checked="p.enabled"
              @change="toggleProvider(p.id)"
            />
            <span>{{ providerNames[p.id] || p.id }}</span>
          </label>
          <div v-if="p.id === 'netease'" class="stmp-provider-fields">
            <input
              class="text_pole"
              v-model="p.config!.baseURL"
              :placeholder="t('API baseURL')"
              @change="settingsStore.save()"
            />
          </div>
          <div v-if="p.id === 'custom'" class="stmp-provider-fields">
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

      <!-- ===== AI Cue ===== -->
      <div v-show="activeTab === 'cue'" class="stmp-tab-panel">
        <div class="stmp-setting-group">
          <label class="stmp-setting-label">{{ t('Custom Cue Rules (Regex)') }}</label>
          <div class="stmp-rules">
            <div
              v-for="(rule, i) in settingsStore.settings.customCueRules"
              :key="i"
              class="stmp-rule"
            >
              <code>{{ rule }}</code>
              <div
                class="menu_button menu_button_icon stmp-rule-del"
                @click="removeRule(i)"
              >
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
            <div
              class="menu_button menu_button_icon stmp-rule-add-btn"
              @click="addRule"
            >
              <i class="fa-solid fa-plus" />
            </div>
          </div>
        </div>
      </div>

      <!-- ===== Data ===== -->
      <div v-show="activeTab === 'data'" class="stmp-tab-panel">
        <div class="stmp-data-btns">
          <div
            class="menu_button menu_button_icon stmp-data-btn"
            @click="clearCache"
          >
            <i class="fa-solid fa-trash-can" />
            <span>{{ t('Clear cache') }}</span>
          </div>
          <div
            class="menu_button menu_button_icon stmp-data-btn"
            @click="exportData"
          >
            <i class="fa-solid fa-file-export" />
            <span>{{ t('Export data') }}</span>
          </div>
          <div
            class="menu_button menu_button_icon stmp-data-btn"
            @click="importData"
          >
            <i class="fa-solid fa-file-import" />
            <span>{{ t('Import data') }}</span>
          </div>
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
  border-bottom: 1px solid var(--SmartThemeBorderColor, rgba(0,0,0,0.5));
  padding-bottom: 2px;
  overflow-x: auto;
}

.stmp-tab {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 4px 10px;
  cursor: pointer;
  border-radius: 5px 5px 0 0;
  font-size: calc(var(--mainFontSize, 14px) * 0.8);
  color: var(--SmartThemeEmColor, rgb(145,145,145));
  white-space: nowrap;
  transition: all var(--animation-duration, 0.2s);
}

.stmp-tab:hover {
  filter: brightness(150%);
}

.stmp-tab.active {
  color: var(--SmartThemeQuoteColor, rgb(225,138,36));
  border-bottom: 2px solid var(--SmartThemeQuoteColor, rgb(225,138,36));
  margin-bottom: -2px;
}

.stmp-tab i {
  font-size: calc(var(--mainFontSize, 14px) * 0.75);
}

/* ===== Tab content ===== */
.stmp-tab-content {
  min-height: 60px;
}

.stmp-tab-panel {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 5px 2px;
}

/* ===== Setting groups ===== */
.stmp-setting-group {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.stmp-setting-label {
  font-size: calc(var(--mainFontSize, 14px) * 0.8);
  color: var(--SmartThemeEmColor, rgb(145,145,145));
  margin: 0;
}

.stmp-setting-row {
  display: flex;
  align-items: center;
  gap: 5px;
}

/* ===== Mode toggle (dock/drag) ===== */
.stmp-mode-toggle {
  display: flex;
  gap: 5px;
}

.stmp-mode-btn {
  flex: 1;
  justify-content: center;
  margin: 0;
  opacity: 0.5;
  transition: all var(--animation-duration, 0.2s);
}

.stmp-mode-btn.toggled {
  opacity: 1;
  border-color: var(--SmartThemeQuoteColor, rgb(225,138,36));
}

/* ===== Providers ===== */
.stmp-provider-card {
  border: 1px solid var(--SmartThemeBorderColor, rgba(0,0,0,0.5));
  border-radius: 5px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.stmp-provider-fields {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-left: calc(var(--mainFontSize, 14px) + 5px);
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
  font-size: calc(var(--mainFontSize, 14px) * 0.78);
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

/* ===== Data buttons ===== */
.stmp-data-btns {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.stmp-data-btn {
  margin: 0;
  justify-content: flex-start;
  gap: 8px;
}
</style>
