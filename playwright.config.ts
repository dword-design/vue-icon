import { defineConfig } from '@playwright/experimental-ct-vue';
import viteSvgLoader from 'vite-svg-loader';

export default defineConfig({
  fullyParallel: true,

  preserveOutput: 'failures-only',

  snapshotPathTemplate:
    '{snapshotDir}/{testFileDir}/{testFileName}-snapshots/{arg}{-projectName}{ext}',
  use: { ctViteConfig: { plugins: [viteSvgLoader()] } },
});
