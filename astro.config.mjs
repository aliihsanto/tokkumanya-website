import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
export default defineConfig({
  site: 'https://tokshipsupply.com',
  integrations: [tailwind()],
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
  vite: {
    build: {
      cssMinify: true,
    },
  },
});
