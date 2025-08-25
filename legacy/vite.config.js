import { fileURLToPath } from 'url';
import { dirname } from 'path';
import vue from '@vitejs/plugin-vue';
import eslint from 'vite-plugin-eslint';
import { defineConfig } from "vite";
import { resolve } from 'path';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import tailwindcss from '@tailwindcss/vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [
    eslint(),
    tailwindcss(),
    vue(),
    nodeResolve(),
    commonjs()
  ],
  resolve: {
    alias: {
      "@": `${__dirname}/src`,
      "@utils": `${__dirname}/src/utils`
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      formats: ['es']
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        },
        assetFileNames: '7.css-vue.css'
      }
    },
    cssCodeSplit: false
  },
});
