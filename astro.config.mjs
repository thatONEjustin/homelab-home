import { defineConfig } from 'astro/config';
// import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";

import node from "@astrojs/node";

import alpinejs from "@astrojs/alpinejs";

export default defineConfig({
  output: "server",
  adapter: node({
    mode: "standalone"
  }),
  prefetch: true,
  integrations: [
    tailwind({
      applyBaseStyles: false,
      nesting: true
    }),
    alpinejs()
  ],
});
