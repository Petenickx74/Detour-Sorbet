import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        privacyPolicy: resolve(__dirname, 'privacy-policy.html'),
        termsOfUse: resolve(__dirname, 'terms-of-use.html'),
        allergenInfo: resolve(__dirname, 'allergen-info.html'),
      },
    },
  },
});
