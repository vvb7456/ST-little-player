import type { AiMode } from '@/types';
import { useSettingsStore } from '@/stores/settings';
import { TogetherMode } from './TogetherMode';
import { FunctionCallMode } from './FunctionCallMode';

let _instance: BgmController | null = null;

export class BgmController {
  private together: TogetherMode | null = null;
  private functionCall: FunctionCallMode | null = null;
  private currentMode: AiMode = 'off';

  init(): void {
    this.applyMode(useSettingsStore().settings.aiMode);
    _instance = this;
  }

  setMode(mode: AiMode): void {
    if (mode === this.currentMode) return;
    this.destroyCurrent();
    this.applyMode(mode);
  }

  resetFunctionCall(): void {
    if (this.functionCall) {
      this.functionCall.destroy();
      this.functionCall = new FunctionCallMode();
      this.functionCall.init();
    }
  }

  private applyMode(mode: AiMode): void {
    this.currentMode = mode;
    try {
      switch (mode) {
        case 'function_call':
          this.functionCall = new FunctionCallMode();
          this.functionCall.init();
          break;
        case 'together':
          this.together = new TogetherMode();
          this.together.init();
          break;
        case 'off':
        default:
          break;
      }
    } catch (err) {
      console.error('[晓乐] BGM controller: failed to init mode', mode, err);
    }
  }

  private destroyCurrent(): void {
    if (this.together) {
      this.together.destroy();
      this.together = null;
    }
    if (this.functionCall) {
      this.functionCall.destroy();
      this.functionCall = null;
    }
  }

  async manualTrigger(): Promise<void> {
    if (this.functionCall) {
      await this.functionCall.manualTrigger();
    }
  }

  destroy(): void {
    this.destroyCurrent();
    this.currentMode = 'off';
    _instance = null;
  }
}

export function getBgmController(): BgmController | null {
  return _instance;
}
