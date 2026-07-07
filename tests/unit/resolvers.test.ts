import { afterEach, describe, expect, it } from 'vitest';

import { DuplicateResolver } from '../../src/classes/DuplicateResolver';
import { resolveSpecFromIndex } from '../../src/commands/generate/resolveSpec';
import { copyFixtureToCache, createRelativeCacheDir, removeCacheDir } from '../helpers/fixtures';

const temporaryDirectories: string[] = [];

afterEach(async () => {
    await Promise.all(temporaryDirectories.splice(0).map((dir) => removeCacheDir(dir)));
});

async function prepareFixture(fixtureName: string, apiPath: string) {
    const cacheDir = await createRelativeCacheDir('tog-cache-');
    temporaryDirectories.push(cacheDir);
    const pathToIndex = await copyFixtureToCache(fixtureName, cacheDir, apiPath);
    return { cacheDir, pathToIndex };
}

describe('DuplicateResolver', () => {
    it('assigns suffixed names to duplicate schema nodes from catalog cache', async () => {
        const { pathToIndex } = await prepareFixture('catalog-duplicates', 'api-docs/v1');
        const duplicateMap = new DuplicateResolver(pathToIndex).resolve();

        const newNames = [...duplicateMap.values()].map((v) => v.newName).sort();
        expect(newNames).toContain('ActualCategoryPropertyReadonlyProperties0');
        expect(newNames).toContain('ActualCategoryPropertyReadonlyProperties1');
        expect(newNames).toContain('ActualCategoryProperty0');
        expect(newNames).toContain('ActualCategoryProperty1');
    });
});

describe('RefResolver', () => {
    it('resolves catalog ActualCategoryProperty allOf with external refs', async () => {
        const { pathToIndex } = await prepareFixture('catalog', 'api-docs/v1');
        const result = await resolveSpecFromIndex(pathToIndex);

        expect(result.paths?.['/catalog/actual-category-properties:search']).toMatchObject({
            post: { operationId: 'searchActualCategoryProperties' },
        });
        expect(result.components?.schemas?.ActualCategoryPropertyFillableRequiredProperties).toMatchObject({
            required: ['is_required', 'is_gluing', 'is_inherited', 'is_common'],
            additionalProperties: { type: 'string' },
        });
        expect(result.components?.schemas?.ActualCategoryProperty).toMatchObject({
            allOf: expect.arrayContaining([
                { $ref: '#/components/schemas/ActualCategoryPropertyReadonlyProperties' },
                { $ref: '#/components/schemas/ActualCategoryPropertyFillableRequiredProperties' },
            ]),
        });
        expect(result.components?.schemas?.Category).toBeDefined();
        expect(result.components?.schemas?.Property).toBeDefined();
    });
});
