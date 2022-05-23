import { defineConfig } from 'vite';
import { resolve } from 'path';

import react from '@vitejs/plugin-react';

function _resolve(dir: string) {
  return resolve(__dirname, dir);
}

export default defineConfig({
  resolve: {
    alias: {
      '@': _resolve('src'),
      '@a': _resolve('src/assets'),
    },
  },
  plugins: [react()],
});
