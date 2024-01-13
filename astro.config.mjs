import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";

// TODO: Incorporate middleware for SSR since this is literally just running on your home machine

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  // outDir: "/var/www/html",
  integrations: [svelte(), tailwind({
    applyBaseStyles: false
  })],
  output: "hybrid",
  adapter: node({
    mode: "standalone"
  })
});
