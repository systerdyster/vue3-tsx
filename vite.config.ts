import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx';
import tsconfigPaths from 'vite-tsconfig-paths';
import eslint from 'vite-plugin-eslint';
import stylelint from 'vite-plugin-stylelint';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(), 
        vueJsx({
            // options are passed on to @vue/babel-plugin-jsx
        }),
        tsconfigPaths(),
        eslint(),
        stylelint()
    ],
})
