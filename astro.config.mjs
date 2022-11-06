import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  integrations: [svelte()],

  /*  GitHub Pages configuration
   *  As per the official docs
   *  https://docs.astro.build/en/guides/deploy/github/
   */
  site: 'https://mark-p0.github.io',
});
