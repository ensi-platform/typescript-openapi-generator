import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { describe, expect, it } from 'vitest';

import { normalizeInputToUrl } from '../../src/common/normalizeInputUrl';

describe('normalizeInputToUrl', () => {
    it('leaves http URL unchanged', () => {
        expect(normalizeInputToUrl('https://example.com/api/index.yaml')).toBe(
            'https://example.com/api/index.yaml'
        );
    });

    it('normalizes file:// URL', () => {
        const filePath = fileURLToPath(import.meta.url);
        const url = pathToFileURL(filePath).href;
        expect(normalizeInputToUrl(url)).toBe(url);
    });

    it('resolves relative path to absolute file:// URL', () => {
        const relativePath = './tests/fixtures/simple/index.yaml';
        const result = normalizeInputToUrl(relativePath);
        expect(result.startsWith('file://')).toBe(true);
        expect(fileURLToPath(result)).toBe(path.resolve(process.cwd(), relativePath));
    });
});
