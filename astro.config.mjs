import { defineConfig } from 'astro/config';
import tailwindIntegration from '@astrojs/tailwind';
import sanity from 'astro-sanity';

export default defineConfig({
  integrations: [
    sanity({
      projectId: 'ypaaup99',
      dataset: 'production',
      apiVersion: 'v2021-03-25',
      useCdn: true,
    }),
    tailwindIntegration(),
  ],
});
