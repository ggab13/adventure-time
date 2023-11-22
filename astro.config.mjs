import { defineConfig } from 'astro/config';
import tailwindIntegration from '@astrojs/tailwind';
import sanity from 'astro-sanity';

export default defineConfig({
  // ...
  integrations: [tailwindIntegration()],
  //             ^^^^^^^^^^
});
