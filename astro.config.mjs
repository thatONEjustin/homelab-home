import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  outDir: '/var/www/html',
  integrations: [
    svelte(),
    tailwind({
      applyBaseStyles: false
    })]
});
