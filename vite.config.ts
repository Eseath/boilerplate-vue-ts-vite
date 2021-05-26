import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        vue(),
    ],

    resolve: {
        extensions: ['.ts', '.js', '.vue'],
    },

    server: {
        port: 3300,
        host: 'localhost',
    },
});
