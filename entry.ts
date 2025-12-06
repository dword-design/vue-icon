import type { App } from 'vue';

import component from './src/index.vue';

component.install = (app: App) => app.component('VueIcon', component);

if (typeof globalThis !== 'undefined') {
  (globalThis as Record<string, unknown>).VueIcon = component;
}

export default component;