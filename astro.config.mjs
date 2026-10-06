import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://denofix.my',
  integrations: [sitemap()],
  compressHTML: true
});
