import { defineStore } from 'pinia';
import type {
  ExtensionSettings,
  PlayMode,
  ProviderConfig,
} from '@/types';
import type { StorageAdapter } from '@/storage/StorageAdapter';

function defaultProviders(): ProviderConfig[] {
  return [
    { id: 'netease', enabled: true, priority: 0, config: { baseURL: '' } },
    { id: 'local', enabled: true, priority: 1, config: {} },
    { id: 'custom', enabled: false, priority: 2, config: { searchURL: '', resolveURL: '' } },
  ];
}

function defaultSettings(): ExtensionSettings {
  return {
    volume: 65,
    playMode: 'list',
    position: null,
    autoPlayOnNewCue: true,
    providers: defaultProviders(),
    customCueRules: [],
  };
}

export const useSettingsStore = defineStore('settings', {
  state: () => ({
    settings: defaultSettings() as ExtensionSettings,
    storage: null as StorageAdapter | null,
  }),

  getters: {
    defaults: (): ExtensionSettings => defaultSettings(),
  },

  actions: {
    init(storage: StorageAdapter): void {
      this.storage = storage;
      const stored = storage.getSettings<ExtensionSettings>();
      const defaults = defaultSettings();
      if (stored) {
        // Backfill config objects for providers that lack one (legacy data).
        const merged: ExtensionSettings = {
          ...defaults,
          ...stored,
          providers: defaults.providers.map((d) => {
            const existing = stored.providers?.find((p) => p.id === d.id);
            return existing
              ? { ...existing, config: existing.config ?? d.config ?? {} }
              : d;
          }),
        };
        this.settings = merged;
      } else {
        this.settings = defaults;
      }
    },

    setVolume(vol: number): void {
      this.settings.volume = vol;
      this.save();
    },

    setPlayMode(mode: PlayMode): void {
      this.settings.playMode = mode;
      this.save();
    },

    setPosition(pos: { x: number; y: number } | null): void {
      this.settings.position = pos;
      this.save();
    },

    addCustomCueRule(rule: string): void {
      this.settings.customCueRules.push(rule);
      this.save();
    },

    removeCustomCueRule(index: number): void {
      this.settings.customCueRules.splice(index, 1);
      this.save();
    },

    setProviderConfig(id: string, enabled: boolean): void {
      const cfg = this.settings.providers.find((p) => p.id === id);
      if (cfg) {
        cfg.enabled = enabled;
        this.save();
      }
    },    save(): void {
      if (!this.storage) return;
      void this.storage.setSettings(this.settings);
    },
  },
});
