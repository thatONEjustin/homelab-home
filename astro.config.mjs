import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";

// NOTE: this stuff is done! its just really fun that I got a TODO done and did some really cool componentizing very very fast
// TODO: Incorporate middleware for SSR since this is literally just running on your home machine

import node from "@astrojs/node";

import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  output: "server",
  prefetch: true,
  // outDir: "/var/www/html",
  integrations: [svelte(), tailwind({
    applyBaseStyles: false
  }), alpinejs()],
  adapter: node({
    mode: "standalone"
  })
});
