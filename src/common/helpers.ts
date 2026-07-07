export const cleanPathFromTheFile = (path: string) => path.replace(/\/[^/]+\.yaml$/, '/');

export const resolvePathSegments = (paths: string[]) => {
    if (paths.length === 0) return '';

    const lastPath = paths.at(-1) || '';

    const isLastPathWithFile = /\.[\dA-Za-z]+/.test(lastPath);
    const parsedPath = paths.map((p, index) => {
        if (index === paths.length - 1) return p;
        if (isLastPathWithFile) return p.replace(/\/[^/]+(\.yaml)?(#.*)?$/, '/');
        return p.split('#', 1)[0];
    });

    const segmentsPathArray = parsedPath.join('/').split('/');

    const result = segmentsPathArray
        .reduce<string[]>((accumulator, segment) => {
            if (!segment) return accumulator;
            if (segment === '.') {
                const previousSegment = accumulator.at(-1);
                if (!previousSegment) accumulator.push(segment);
                return accumulator;
            }

            if (segment === '..') {
                accumulator.pop();
                return accumulator;
            }

            const previousSegmentForHash = accumulator.at(-1);
            if (segment === '#') {
                accumulator[accumulator.length - 1] = `${previousSegmentForHash}#`;
                return accumulator;
            }

            accumulator.push(segment);
            return accumulator;
        }, [])
        .join('/');

    return result;
};

export const serializeToCamelCase = (string_: string) => {
    const words = string_.split('_');
    const camelCaseName = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('');

    return camelCaseName;
};

export const getNestedValue = <T extends Record<string, unknown>>(object: T, objectPath: string[]) => {
    const target = objectPath.reduce<T>((accumulator, key) => (accumulator[key] as T) || ({} as T), object);

    return target;
};

export const serializeNodeName = (filePath: string) => {
    const file = filePath.split('/').at(-1);
    if (!file) return;
    const fileName = file.replace('.yaml', '');
    return serializeToCamelCase(fileName);
};
