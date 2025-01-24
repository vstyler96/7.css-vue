import vue from '@vitejs/plugin-vue';
import eslint from 'vite-plugin-eslint';
import { defineConfig } from "vite";

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
