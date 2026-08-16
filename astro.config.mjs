import { defineConfig } from 'astro/config';
import { writeFile } from 'node:fs/promises';

const noJekyll = {
  name: 'mossdream-nojekyll',
  hooks: {
    'astro:build:done': async ({ dir }) => {
      await writeFile(new URL('.nojekyll', dir), '');
    },
  },
};

export default defineConfig({
  site: 'https://mossdream.github.io',
  output: 'static',
  trailingSlash: 'always',
  compressHTML: true,
  build: {
    format: 'directory',
  },
  integrations: [noJekyll],
});
