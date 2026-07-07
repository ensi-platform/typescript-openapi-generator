import { execFileSync } from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { afterEach, describe, expect, it } from 'vitest';
import yaml from 'yaml';

import { resolveSpecFromIndex } from '../../src/commands/generate/resolveSpec';
import { stubExcludedComponentSchemas } from '../../src/common/stubExcludedComponentSchemas';
import { copyFixtureToCache, createRelativeCacheDir, removeCacheDir } from '../helpers/fixtures';

const orvalBin = fileURLToPath(new URL('../../node_modules/orval/dist/bin/orval.mjs', import.meta.url));

const temporaryDirectories: string[] = [];

afterEach(async () => {
    await Promise.all(temporaryDirectories.splice(0).map((dir) => removeCacheDir(dir)));
});

async function runOrval(resolvedPath: string, outputDir: string) {
    const schemasDir = path.join(outputDir, 'models');
    const configPath = path.join(outputDir, 'orval.config.mjs');
    const config = `export default {
  catalog: {
    input: { target: ${JSON.stringify(path.resolve(resolvedPath))} },
    output: {
      target: ${JSON.stringify(path.resolve(outputDir))},
      schemas: ${JSON.stringify(path.resolve(schemasDir))},
      mode: 'tags-split',
      client: 'fetch',
      override: {
        useTypeOverInterfaces: true,
        components: { schemas: { suffix: 'DTO' } },
      },
    },
  },
};`;

    await fs.writeFile(configPath, config);
    try {
        execFileSync(process.execPath, [orvalBin, '--config', configPath], {
            stdio: 'pipe',
            encoding: 'utf8',
            env: { ...process.env, NODE_ENV: 'production' },
        });
    } catch (error) {
        const execError = error as { stdout?: string; stderr?: string; message?: string };
        throw new Error([execError.message, execError.stdout, execError.stderr].filter(Boolean).join('\n'), {
            cause: error,
        });
    }
}

describe('generate integration', () => {
    it('generates ActualCategoryProperty DTOs from catalog cache fixture', async () => {
        const cacheDir = await createRelativeCacheDir('tog-cache-');
        temporaryDirectories.push(cacheDir);
        const outputDir = await createRelativeCacheDir('tog-output-');
        temporaryDirectories.push(outputDir);
        const pathToIndex = await copyFixtureToCache('catalog', cacheDir, 'api-docs/v1');

        const resolvedSchema = await resolveSpecFromIndex(pathToIndex);
        const resolvedPath = path.join(cacheDir, 'resolved-schema.yaml');
        await fs.writeFile(resolvedPath, yaml.stringify(resolvedSchema));

        await runOrval(resolvedPath, outputDir);

        const modelsDir = path.join(outputDir, 'models');
        const modelFiles = await fs.readdir(modelsDir);
        const actualCategoryModels = modelFiles.filter((file) =>
            file.toLowerCase().includes('actualcategoryproperty')
        );

        expect(actualCategoryModels.length).toBeGreaterThan(0);

        const mainModelFile = actualCategoryModels.find((file) =>
            /^actualCategoryProperty\d*DTO\.ts$/.test(file)
        );
        const fillableRequiredFile = actualCategoryModels.find((file) =>
            file.includes('FillableRequiredProperties')
        );

        expect(mainModelFile).toBeDefined();
        expect(fillableRequiredFile).toBeDefined();

        const mainContent = await fs.readFile(path.join(modelsDir, mainModelFile!), 'utf8');
        const fillableRequiredContent = await fs.readFile(
            path.join(modelsDir, fillableRequiredFile!),
            'utf8'
        );

        expect(mainContent).toMatch(/export type ActualCategoryProperty\d*DTO/);
        expect(fillableRequiredContent).toContain(
            'export type ActualCategoryPropertyFillableRequiredPropertiesDTO'
        );
        expect(fillableRequiredContent).toContain('[key: string]: string');
    });

    it('generates output when excluded schema is stubbed', async () => {
        const cacheDir = await createRelativeCacheDir('tog-cache-exclude-');
        temporaryDirectories.push(cacheDir);
        const outputDir = await createRelativeCacheDir('tog-output-exclude-');
        temporaryDirectories.push(outputDir);
        const apiPath = 'api-docs/exclude';
        const pathToIndex = await copyFixtureToCache('exclude', cacheDir, apiPath);

        const resolvedSchema = await resolveSpecFromIndex(pathToIndex);
        stubExcludedComponentSchemas(resolvedSchema as Record<string, unknown>, {
            mode: 'exclude',
            schemas: ['SecretSchema'],
        });

        expect(resolvedSchema.components?.schemas?.SecretSchema).toEqual({
            type: 'object',
            additionalProperties: true,
        });

        const resolvedPath = path.join(cacheDir, 'resolved-schema.yaml');
        await fs.writeFile(resolvedPath, yaml.stringify(resolvedSchema));

        await runOrval(resolvedPath, outputDir);

        const modelPath = path.join(outputDir, 'models', 'itemResponseDTO.ts');
        const content = await fs.readFile(modelPath, 'utf8');
        expect(content).toContain('export type ItemResponseDTO');
    });
});
