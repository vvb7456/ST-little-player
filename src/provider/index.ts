import type { ProviderConfig } from '../types';
import { ProviderManager } from './ProviderManager';
import { NetEaseProvider } from './NetEaseProvider';
import { LocalFileProvider } from './LocalFileProvider';
import { CustomAPIProvider } from './CustomAPIProvider';

export { ProviderManager } from './ProviderManager';
export { NetEaseProvider } from './NetEaseProvider';
export { LocalFileProvider } from './LocalFileProvider';
export { CustomAPIProvider } from './CustomAPIProvider';

export function createDefaultProviders(
  configs: ProviderConfig[],
): ProviderManager {
  const enabled = configs
    .filter((c) => c.enabled)
    .sort((a, b) => a.priority - b.priority);
  const providers = enabled.map((c) => {
    const cfg = c.config ?? {};
    switch (c.id) {
      case 'netease':
        return new NetEaseProvider({ baseURL: cfg.baseURL, apiBase: cfg.apiBase });
      case 'local':
        return new LocalFileProvider({
          storage: cfg.storage
            ? (cfg.storage as unknown as import('./LocalFileProvider').StorageLike)
            : undefined,
        });
      case 'custom':
        return new CustomAPIProvider({
          searchURL: cfg.searchURL,
          resolveURL: cfg.resolveURL,
        });
      default:
        return null;
    }
  }).filter((p): p is NonNullable<typeof p> => p !== null);
  return new ProviderManager(providers);
}
