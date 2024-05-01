import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => ['node', 'view', 'text'].includes(tag),
        },
      },
    }),
    vueJsx(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',

        // ...demoPages,
      },
    },
    outDir: 'dist',
    emptyOutDir: true,
  },
});
