export {};

// Reference SillyTavern global types.
// Resolves to the sibling SillyTavern checkout during development.
import '../SillyTavern/public/global';

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
