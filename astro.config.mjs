// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import sanity from '@sanity/astro';
import react from '@astrojs/react';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://example.com',
    integrations: [mdx(), sitemap(), sanity({
      projectId: 'ufao1yzo',
      dataset: 'production',
      // Set useCdn to false if you're building statically.
      useCdn: false,
			studioBasePath: '/admin',
    }), react()],
});