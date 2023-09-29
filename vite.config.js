import { defineConfig } from 'vite';
import { glob } from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import eslint from 'vite-plugin-eslint';
import stylelint from 'vite-plugin-stylelint';

export default defineConfig({
  root: 'src',
  build: {
    rollupOptions: {
      input: glob.sync('./src/*.html'),
    },
    outDir: '../dist',
  },
  plugins: [injectHTML(), stylelint(), eslint(), FullReload(['./src/**/**.html'])],
});
