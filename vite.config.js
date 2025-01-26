import { fileURLToPath } from 'url';
import { dirname } from 'path';
import vue from '@vitejs/plugin-vue';
import eslint from 'vite-plugin-eslint';
import { defineConfig } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: "./src/index.js",
      name: "7.csss-vue",
      fileName: "index",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        dir: "lib",
      },
    },
  },
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
