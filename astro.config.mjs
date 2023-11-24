import { defineConfig } from 'astro/config';
import tailwindIntegration from '@astrojs/tailwind';

export default defineConfig({
  // ...
  integrations: [tailwindIntegration()],
  //             ^^^^^^^^^^
});
