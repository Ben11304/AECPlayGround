import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// base is env-driven so the SAME source builds for both targets:
//   - Zenodo / local preview (root-host): leave SITE_BASE unset  -> base '/'  -> root-relative links
//   - GitHub Pages (project Pages): SITE_BASE=/AECPlayGround      -> base '/AECPlayGround'
// Links/imgs use `import.meta.env.BASE_URL` (via `const base` in each page) so nothing is hardcoded.
const siteBase = process.env.SITE_BASE ?? '/';
const base = siteBase === '/' ? undefined : siteBase.replace(/\/+$/, '');

export default defineConfig({
  site: 'https://ben11304.github.io',
  base,
  integrations: [tailwind()],
});
