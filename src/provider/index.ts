import type { ExtensionSettings } from '../types';
import { ProviderManager } from './ProviderManager';
import { NetEaseProvider } from './NetEaseProvider';
import { LocalFileProvider } from './LocalFileProvider';

export { ProviderManager } from './ProviderManager';
export { NetEaseProvider } from './NetEaseProvider';
export { LocalFileProvider } from './LocalFileProvider';

export const OFFICIAL_WORKER_URL = 'https://xiaoyue.erocraft.org';

export function getNeteaseWorkerURL(settings: ExtensionSettings): string {
  return settings.neteaseMode === 'worker'
    ? OFFICIAL_WORKER_URL
    : settings.neteaseWorkerURL;
}

export function createDefaultProviders(
  settings: ExtensionSettings,
): ProviderManager {
  const enabled = settings.providers
    .filter((c) => c.enabled)
    .sort((a, b) => a.priority - b.priority);
  const providers = enabled.map((c) => {
    const cfg = c.config ?? {};
    switch (c.id) {
      case 'netease':
        return new NetEaseProvider({
          workerURL: getNeteaseWorkerURL(settings),
          cookie: settings.neteaseCookie,
        });
      case 'local':
        return new LocalFileProvider({
          storage: cfg.storage
            ? (cfg.storage as unknown as import('./LocalFileProvider').StorageLike)
            : undefined,
        });
      default:
        return null;
    }
  }).filter((p): p is NonNullable<typeof p> => p !== null);
  return new ProviderManager(providers);
}
