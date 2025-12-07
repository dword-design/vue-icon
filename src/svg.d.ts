// TODO: Remove this, remove defaultImport from Vite svg loader and use .svg?component in files

declare module '*.svg' {
  import type { FunctionalComponent, SVGAttributes } from 'vue';

  const src: FunctionalComponent<SVGAttributes>;

  export default src;
}
