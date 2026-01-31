import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

export default defineConfig({
  build: {
    outDir: 'demo',
    emptyOutDir: true,
  },
  plugins: [
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: {
      "@": `${__dirname}/lib`,
    },
  },
})
