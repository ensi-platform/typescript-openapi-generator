import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

/**
 * Приводит вход генерации к абсолютному URL (`http(s):` или `file:`).
 * HTTP(S) оставляем как есть; `file://` нормализуем; иначе трактуем как путь ФС относительно `process.cwd()`.
 */
export function normalizeInputToUrl(input: string): string {
    if (/^https?:\/\//i.test(input)) {
        return input;
    }
    if (input.startsWith('file://')) {
        return pathToFileURL(fileURLToPath(input)).href;
    }
    const absolutePath = path.resolve(process.cwd(), input);
    return pathToFileURL(absolutePath).href;
}
