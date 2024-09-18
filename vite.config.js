import { defineConfig } from 'vite';

export default defineConfig({
  base: "/binary-search-game-fleeber/",
  build: {
    target: "esnext",
    minify: false     // Disables minification
  },
  server: {
    host: '0.0.0.0'
  }
});
