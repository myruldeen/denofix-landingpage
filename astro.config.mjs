import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://myruldeen.github.io',
  base: '/denofix-landingpage',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  },
  compressHTML: true
});
