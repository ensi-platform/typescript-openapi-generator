import { camel } from 'case';
import { basename, dirname } from 'node:path';

import { Reference } from '../deref';

const cache = new Map<string, string>();

const uncachedRefToTypesFile = (ref: Reference) => {
    let dir = dirname(ref.absolutePath)
        .replaceAll('/schemas/', '')
        .replaceAll('/schemas', '')
        .replaceAll('schemas/', '');

    if (dir.endsWith('/')) dir = dir.slice(0, -1);

    const originalFile = camel(basename(ref.absolutePath).replace('.yaml', ''));


    const file = originalFile === 'enums' ? 'enums/index' : originalFile;

    const isEnum = dir.endsWith('enum') || dir.endsWith('enums') || file.toLowerCase().includes('enum');
    const suffix = isEnum ? '' : 'types/';

    const result = `${dir}/${suffix}${file}.ts`;
    if (result.startsWith('/')) return result.slice(1);

    return result;
};

const refToTypesFile = (ref: Reference) => {
    if (cache.get(ref.absolutePath)) return cache.get(ref.absolutePath)!;

    const result = uncachedRefToTypesFile(ref);
    cache.set(ref.absolutePath, result);

    return result;
};

export default refToTypesFile;
