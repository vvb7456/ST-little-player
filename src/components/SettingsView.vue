<script setup lang="ts">
import { ref } from 'vue';
import { useSettingsStore } from '@/stores/index';
import type { PlayMode } from '@/types';
import { t } from '@/i18n';

const settingsStore = useSettingsStore();

const newRule = ref('');

const playModes: { value: PlayMode; label: string }[] = [
  { value: 'list', label: 'List Loop' },
  { value: 'random', label: 'Random' },
  { value: 'single', label: 'Single Loop' },
];

const providerNames: Record<string, string> = {
  netease: 'NetEase',
  local: 'Local Files',
  custom: 'Custom API',
};

function addRule(): void {
  const rule = newRule.value.trim();
  if (!rule) return;
  settingsStore.addCustomCueRule(rule);
  newRule.value = '';
}

function removeRule(index: number): void {
  settingsStore.removeCustomCueRule(index);
}

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

const clearCache = async (): Promise<void> => {
  const storage = settingsStore.storage;
  if (storage) {
    await storage.clearCache();
    toastr.success('缓存已清理');
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
      // Validate structure before merging
      if (typeof data !== 'object' || data === null) throw new Error('Not an object');
      const validKeys = ['volume', 'playMode', 'position', 'autoPlayOnNewCue', 'providers', 'customCueRules'];
      const filtered: Record<string, unknown> = {};
      for (const key of validKeys) {
        if (key in data) filtered[key] = data[key];
      }
      // Type-check critical fields
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
      // Merge validated data
      const settingsStore = useSettingsStore();
      Object.assign(settingsStore.settings, filtered);
      settingsStore.save();
      toastr.success('设置已导入');
    } catch (err) {
      console.error('Import failed', err);
      toastr.error('导入失败: ' + (err instanceof Error ? err.message : 'JSON 格式错误'));
    }
  };
  input.click();
};

function toggleProvider(id: string): void {
  const cfg = settingsStore.settings.providers.find((p) => p.id === id);
  if (cfg) {
    cfg.enabled = !cfg.enabled;
    settingsStore.save();
  }
}
</script>

<template>
  <div class="stmp-settings">
    <!-- Providers -->
    <div class="stmp-setting-group">
      <div class="stmp-setting-label">Providers</div>
      <div
        v-for="p in settingsStore.settings.providers"
        :key="p.id"
        class="stmp-provider-config"
      >
        <label class="stmp-setting-row">
          <span>{{ providerNames[p.id] || p.id }}</span>
          <input
            type="checkbox"
            :checked="p.enabled"
            @change="toggleProvider(p.id)"
          />
        </label>
        <input
          v-if="p.id === 'netease'"
          class="stmp-provider-input"
          v-model="p.config!.baseURL"
          placeholder="API baseURL"
          @change="settingsStore.save()"
        />
        <template v-if="p.id === 'custom'">
          <input
            class="stmp-provider-input"
            v-model="p.config!.searchURL"
            placeholder="Search URL"
            @change="settingsStore.save()"
          />
          <input
            class="stmp-provider-input"
            v-model="p.config!.resolveURL"
            placeholder="Resolve URL"
            @change="settingsStore.save()"
          />
        </template>
      </div>
    </div>

    <!-- Default Volume -->
    <div class="stmp-setting-group">
      <div class="stmp-setting-label">Default Volume: {{ settingsStore.settings.volume }}</div>
      <input
        type="range"
        min="0"
        max="100"
        :value="settingsStore.settings.volume"
        class="stmp-range"
        @input="onVolume"
      />
    </div>

    <!-- Default Play Mode -->
    <div class="stmp-setting-group">
      <div class="stmp-setting-label">Default Play Mode</div>
      <select class="stmp-select" :value="settingsStore.settings.playMode" @change="onPlayMode">
        <option v-for="m in playModes" :key="m.value" :value="m.value">{{ m.label }}</option>
      </select>
    </div>

    <!-- Widget Mode -->
    <div class="stmp-setting-group">
      <div class="stmp-setting-label">{{ t('Widget Mode') }}</div>
      <div class="stmp-mode-toggle">
        <button
          class="stmp-mode-btn"
          :class="{ active: settingsStore.settings.widgetMode === 'dock' }"
          @click="settingsStore.setWidgetMode('dock')"
        >{{ t('Dock') }}</button>
        <button
          class="stmp-mode-btn"
          :class="{ active: settingsStore.settings.widgetMode === 'drag' }"
          @click="settingsStore.setWidgetMode('drag')"
        >{{ t('Drag') }}</button>
      </div>
    </div>

    <!-- Auto Play -->
    <div class="stmp-setting-group">
      <div class="stmp-setting-row">
        <span>Auto-play on new cue</span>
        <input
          type="checkbox"
          :checked="settingsStore.settings.autoPlayOnNewCue"
          @change="onAutoPlay"
        />
      </div>
    </div>

    <!-- Custom Cue Rules -->
    <div class="stmp-setting-group">
      <div class="stmp-setting-label">Custom Cue Rules (Regex)</div>
      <div class="stmp-rules">
        <div
          v-for="(rule, i) in settingsStore.settings.customCueRules"
          :key="i"
          class="stmp-rule"
        >
          <code>{{ rule }}</code>
          <button class="stmp-rule-del" @click="removeRule(i)">✕</button>
        </div>
      </div>
      <div class="stmp-rule-add">
        <input
          v-model="newRule"
          class="stmp-rule-input"
          placeholder="Add regex rule..."
          @keydown.enter="addRule"
        />
        <button class="stmp-rule-add-btn" @click="addRule">+</button>
      </div>
    </div>

    <!-- Data Management -->
    <div class="stmp-setting-group">
      <div class="stmp-setting-label">Data</div>
      <div class="stmp-data-btns">
        <button class="stmp-data-btn" aria-label="清理缓存" @click="clearCache">清理缓存</button>
        <button class="stmp-data-btn" aria-label="导出数据" @click="exportData">导出数据</button>
        <button class="stmp-data-btn" aria-label="导入数据" @click="importData">导入数据</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.stmp-settings {
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 10px 0;
}

.stmp-setting-group {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.stmp-setting-label {
  font-size: calc(var(--fontSize, 14px) * 0.75);
  opacity: 0.6;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--SmartThemeBodyColor, #ccc);
}

.stmp-setting-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: calc(var(--fontSize, 14px) * 0.85);
  color: var(--SmartThemeBodyColor, #fff);
}

.stmp-range {
  width: 100%;
  cursor: pointer;
}

.stmp-select {
  padding: 4px 8px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.2);
  color: var(--SmartThemeBodyColor, #fff);
  font-size: calc(var(--fontSize, 14px) * 0.85);
  outline: none;
}

.stmp-rules {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.stmp-rule {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 2px 6px;
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.15);
}

.stmp-rule code {
  flex: 1;
  font-size: calc(var(--fontSize, 14px) * 0.78);
  color: var(--SmartThemeBodyColor, #ccc);
  word-break: break-all;
}

.stmp-rule-del {
  background: none;
  border: none;
  color: #ff6b6b;
  cursor: pointer;
  font-size: 12px;
  padding: 0 2px;
}

.stmp-rule-add {
  display: flex;
  gap: 6px;
}

.stmp-rule-input {
  flex: 1;
  padding: 4px 8px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.2);
  color: var(--SmartThemeBodyColor, #fff);
  font-size: calc(var(--fontSize, 14px) * 0.8);
  outline: none;
}

.stmp-rule-add-btn {
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 6px;
  color: var(--SmartThemeBodyColor, #fff);
  cursor: pointer;
  padding: 2px 12px;
  font-size: 16px;
}

.stmp-provider-config {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 4px 0;
}

.stmp-provider-input {
  width: 100%;
  box-sizing: border-box;
  padding: 4px 8px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.2);
  color: var(--SmartThemeBodyColor, #fff);
  font-size: calc(var(--fontSize, 14px) * 0.78);
  outline: none;
}

.stmp-data-btns {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

.stmp-data-btn {
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 6px;
  color: var(--SmartThemeBodyColor, #fff);
  cursor: pointer;
  padding: 4px 10px;
  font-size: calc(var(--fontSize, 14px) * 0.8);
  transition: background 0.15s;
}

.stmp-data-btn:hover {
  background: rgba(255, 255, 255, 0.08);
}

.stmp-mode-toggle {
  display: flex;
  gap: 0;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 6px;
  overflow: hidden;
}

.stmp-mode-btn {
  flex: 1;
  background: none;
  border: none;
  color: var(--SmartThemeBodyColor, #ccc);
  cursor: pointer;
  padding: 6px 12px;
  font-size: calc(var(--fontSize, 14px) * 0.82);
  opacity: 0.5;
  transition: all 0.15s;
}

.stmp-mode-btn.active {
  background: rgba(255, 255, 255, 0.1);
  opacity: 1;
}
</style>
