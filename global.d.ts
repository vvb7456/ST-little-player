export {};

// Import for user-scoped extensions (data/<user>/extensions/ST-little-player)
import '../../../../public/global';
// Import for server-scoped extensions (public/scripts/extensions/third-party/ST-little-player)
import '../../../../global';

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

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
}

// SillyTavern global toastr (available at runtime in ST)
declare const toastr: any;
