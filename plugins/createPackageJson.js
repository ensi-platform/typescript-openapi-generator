import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

export const createDistPackageJson = () => {
    const packageJsonPath = resolve(__dirname, '../package.json');
    const distPackageJsonPath = resolve(__dirname, '../dist/package.json');

    const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));

    const distPackageJson = {
        name: packageJson.name,
        version: packageJson.version,
        description: packageJson.description,
        keywords: packageJson.keywords,
        private: packageJson.private,
        type: packageJson.type,
        engines: packageJson.engines,
        repository: packageJson.repository,
        bugs: packageJson.bugs,
        homepage: packageJson.homepage,
        license: packageJson.license,
        peerDependencies: packageJson.peerDependencies,
        types: './index.d.ts',
        module: './index.js',
        main: './index.js',
        bin: {
            'typescript-openapi-generator-init': './bin/init.js',
            'typescript-openapi-generator-generate': './bin/generate.js',
        },
    };

    // // Записываем новый package.json в dist
    writeFileSync(distPackageJsonPath, JSON.stringify(distPackageJson, null, 2));
};
