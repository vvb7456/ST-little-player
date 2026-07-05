export {};

// Import for user-scoped extensions (data/<user>/extensions/ST-little-player)
// Import for server-scoped extensions (public/scripts/extensions/third-party/ST-little-player)
// TypeScript will try both paths; at least one resolves when installed inside ST.
// During standalone development neither resolves, so we provide a fallback below.
// @ts-expect-error - path only resolves inside an ST install tree
import '../../../../public/global';
// @ts-expect-error - path only resolves inside an ST install tree
import '../../../../global';

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

// ===== Ambient globals available at runtime inside SillyTavern =====
// These declarations are used when ST's own global.d.ts types are not
// reachable (e.g. during standalone development or CI). When the
// extension is installed inside an ST install tree, ST's own type
// declarations take precedence.
declare global {
  interface JQueryLike {
    length: number;
    [index: number]: HTMLElement;
    append(content: string): JQueryLike;
    children(selector?: string): JQueryLike;
    last(): JQueryLike;
    on(events: string, handler: (e: Event) => void): JQueryLike;
    [key: string]: any;
  }

  const $: (selector: string, context?: Node) => JQueryLike;

  const toastr: {
    success(message: string, title?: string): void;
    error(message: string, title?: string): void;
    warning(message: string, title?: string): void;
    info(message: string, title?: string): void;
  };

  const SillyTavern: {
    getContext(): any;
    libs: Record<string, any>;
  };
}
