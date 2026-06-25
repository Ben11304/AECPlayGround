import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://ben11304.github.io',
  base: '/AECPlayGround',
  integrations: [tailwind()],
});
