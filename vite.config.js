import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { cloudflare } from '@cloudflare/vite-plugin';
import vinext from 'vinext';
import { defineConfig } from 'vite';
import { sites } from './build/sites-vite-plugin.js';

const rootDirectory = dirname(fileURLToPath(import.meta.url));
const hostingConfig = JSON.parse(
  readFileSync(resolve(rootDirectory, '.openai', 'hosting.json'), 'utf8'),
);

const placeholderDatabaseId = '00000000-0000-4000-8000-000000000000';

const localBindingConfig = {
  main: './worker/index.js',
  compatibility_flags: ['nodejs_compat'],
  d1_databases: hostingConfig.d1
    ? [
        {
          binding: hostingConfig.d1,
          database_name: 'gymbrowear-d1',
          database_id: placeholderDatabaseId,
        },
      ]
    : [],
  r2_buckets: hostingConfig.r2
    ? [
        {
          binding: hostingConfig.r2,
          bucket_name: 'gymbrowear-r2',
        },
      ]
    : [],
};

export default defineConfig({
  plugins: [
    vinext(),
    sites(),
    cloudflare({
      viteEnvironment: { name: 'rsc', childEnvironments: ['ssr'] },
      config: localBindingConfig,
    }),
  ],
});
