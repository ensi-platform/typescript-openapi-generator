import commonjsPlugin from '@rollup/plugin-commonjs';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { viteStaticCopy } from 'vite-plugin-static-copy';

import package_ from './package.json' with { type: 'json' };
import { createDistPackageJson as createDistributionPackageJson } from './plugins/createPackageJson';

export default defineConfig({
    build: {
        lib: {
            entry: './src/index.ts',
            fileName: format => `index.${format}.js`,
            formats: ['es'],
        },
        rollupOptions: {
            external: [...Object.keys(package_.dependencies), /^node:/],
            plugins: [commonjsPlugin()],
            output: {
                entryFileNames: '[name].js',
                chunkFileNames: 'chunks/[name]-[hash].js',
                assetFileNames: 'assets/[name].[ext]',
            },
        },
    },
    plugins: [
        dts(),
        viteStaticCopy({
            targets: [
                { src: 'bin/*', dest: 'bin', rename: { stripBase: true } },
                { src: 'README.md', dest: '.' },
                { src: 'LICENSE.md', dest: '.' },
            ],
        }),
        {
            name: 'create-dist-package-json',
            closeBundle: () => {
                createDistributionPackageJson();
            },
        },
    ],
});
