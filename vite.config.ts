import { defineConfig } from "vite";

export default defineConfig({
  root: './src',
  base: './',
  publicDir: '../public',
  build: {
    emptyOutDir: true,
    outDir: '../dist'
  },
  server: {
    host: '0.0.0.0',
    port: 3000
  },
  plugins: [],
});
