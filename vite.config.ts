import commonjsPlugin from '@rollup/plugin-commonjs';
import { resolve } from 'node:path';
import { externalizeDeps } from 'vite-plugin-externalize-deps';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { viteStaticCopy } from 'vite-plugin-static-copy';

import { createDistPackageJson } from './plugins/createPackageJson';

export default defineConfig({
    build: {
        lib: {
            entry: './src/index.ts',
            fileName: format => `index.${format}.js`,
            formats: ['es'],
        },
        rollupOptions: {
            plugins: [commonjsPlugin()],
            output: {
                entryFileNames: '[name].js',
                chunkFileNames: 'chunks/[name]-[hash].js',
                assetFileNames: 'assets/[name].[ext]',
            },
        },
    },
    plugins: [
        externalizeDeps({
            deps: true,
        }),
        dts(),
        viteStaticCopy({
            targets: [
                { src: resolve(__dirname, 'bin/*'), dest: resolve(__dirname, 'dist/bin') },
                { src: resolve(__dirname, 'README.md'), dest: resolve(__dirname, 'dist') },
                { src: resolve(__dirname, 'LICENSE.md'), dest: resolve(__dirname, 'dist') },
            ],
        }),
        {
            name: 'create-dist-package-json',
            closeBundle: () => {
                createDistPackageJson();
            },
        },
    ],
});
