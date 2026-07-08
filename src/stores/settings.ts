import { defineStore } from 'pinia';
import type {
  ExtensionSettings,
  PlayMode,
  ProviderConfig,
  AiMode,
} from '@/types';
import type { StorageAdapter } from '@/storage/StorageAdapter';

function defaultProviders(): ProviderConfig[] {
  return [
    { id: 'netease', enabled: true, priority: 0, config: { baseURL: '' } },
    { id: 'local', enabled: false, priority: 1, config: {} },
    { id: 'custom', enabled: false, priority: 2, config: { searchURL: '', resolveURL: '' } },
  ];
}

function defaultSettings(): ExtensionSettings {
  return {
    volume: 65,
    playMode: 'list',
    position: null,
    widgetMode: 'dock',
    dockAlign: 'bottom-left',
    showDragMiniText: true,

    providers: defaultProviders(),
    customOpacity: false,
    opacity: 75,
    aiMode: 'off',
    aiUseCustomApi: false,
    aiContextMessages: 8,
    aiApiUrl: '',
    aiApiKey: '',
    aiModel: '',
    aiAutoTrigger: true,
    aiTriggerOnGreeting: false,
    aiCooldownMs: 3000,
    togetherPromptRole: 'system',
    togetherCustomPromptEnabled: false,
    togetherCustomPrompt: '',
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
        // Use ST's bundled lodash for deep merge
        const lodash = (typeof SillyTavern !== 'undefined' && SillyTavern.getContext()?.libs?.lodash)
          ? SillyTavern.getContext().libs.lodash
          : null;
        if (lodash) {
          this.settings = lodash.merge(structuredClone(defaults), stored);
        } else {
          // Fallback: manual deep merge for providers
          this.settings = {
            ...defaults,
            ...stored,
            providers: defaults.providers.map((d) => {
              const existing = stored.providers?.find((p) => p.id === d.id);
              return existing
                ? { ...existing, config: existing.config ?? d.config ?? {} }
                : d;
            }),
          };
        }
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

    setWidgetMode(mode: import('@/types').WidgetMode): void {
      this.settings.widgetMode = mode;
      this.save();
    },

    setOpacity(opacity: number): void {
      this.settings.opacity = opacity;
      this.save();
    },

    setCustomOpacity(enabled: boolean): void {
      this.settings.customOpacity = enabled;
      this.save();
    },

    setDockAlign(align: import('@/types').DockAlign): void {
      this.settings.dockAlign = align;
      this.save();
    },

    setShowDragMiniText(enabled: boolean): void {
      this.settings.showDragMiniText = enabled;
      this.save();
    },

    setProviderConfig(id: string, enabled: boolean): void {
      const cfg = this.settings.providers.find((p) => p.id === id);
      if (cfg) {
        cfg.enabled = enabled;
        this.save();
      }
    },

    setAiMode(mode: AiMode): void {
      this.settings.aiMode = mode;
      this.save();
    },

    setAiUseCustomApi(enabled: boolean): void {
      this.settings.aiUseCustomApi = enabled;
      this.save();
    },

    setAiContextMessages(n: number): void {
      this.settings.aiContextMessages = n;
      this.save();
    },

    setAiAutoTrigger(enabled: boolean): void {
      this.settings.aiAutoTrigger = enabled;
      this.save();
    },

    setAiTriggerOnGreeting(enabled: boolean): void {
      this.settings.aiTriggerOnGreeting = enabled;
      this.save();
    },

    setAiApiUrl(url: string): void {
      this.settings.aiApiUrl = url;
      this.save();
    },

    setAiApiKey(key: string): void {
      this.settings.aiApiKey = key;
      this.save();
    },

    setAiModel(model: string): void {
      this.settings.aiModel = model;
      this.save();
    },

    setTogetherPromptRole(role: 'system' | 'user'): void {
      this.settings.togetherPromptRole = role;
      this.save();
    },

    setTogetherCustomPromptEnabled(enabled: boolean): void {
      this.settings.togetherCustomPromptEnabled = enabled;
      this.save();
    },

    setTogetherCustomPrompt(prompt: string): void {
      this.settings.togetherCustomPrompt = prompt;
      this.save();
    },

    save(): void {
      if (!this.storage) return;
      void this.storage.setSettings(this.settings);
    },
  },
});
