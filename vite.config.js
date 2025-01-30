import { fileURLToPath } from 'url';
import { dirname } from 'path';
import vue from '@vitejs/plugin-vue';
import eslint from 'vite-plugin-eslint';
import { defineConfig } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  plugins: [
    eslint(),
    vue(),
  ],
  resolve: {
    alias: {
      "@": `${__dirname}/src`,
    },
  },
});
