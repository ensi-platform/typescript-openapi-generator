export const cleanPathFromTheFile = (path: string) => path.replace(/\/[^/]+\.yaml$/, '/');

export const resolvePathSegments = (paths: string[]) => {
    if (paths.length === 0) return '';

    const lastPath = paths.at(-1) || '';

    const isLastPathWithFile = /\.[\dA-Za-z]+/.test(lastPath);
    const parsedPath = paths.map((p, i) => {
        if (i === paths.length - 1) return p;
        if (isLastPathWithFile) return p.replace(/\/[^/]+(\.yaml)?(#.*)?$/, '/');
        return p.split('#')[0];
    });

    const segmentsPathArray = parsedPath.join('/').split('/');

    const result = segmentsPathArray
        .reduce<string[]>((acc, segment) => {
            if (!segment) return acc;
            if (segment === '.') {
                const prevSegment = acc.at(-1);
                if (!prevSegment) acc.push(segment);
                return acc;
            }

            if (segment === '..') {
                acc.pop();
                return acc;
            }

            const prevSegment = acc.at(-1);
            if (segment === '#') {
                acc[acc.length - 1] = `${prevSegment}#`;
                return acc;
            }

            acc.push(segment);
            return acc;
        }, [])
        .join('/');

    return result;
};

export const serializeToCamelCase = (str: string) => {
    const words = str.split('_');
    const camelCaseName = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('');

    return camelCaseName;
};

export const getNestedValue = <T extends Record<string, any>>(obj: T, objPath: string[]) => {
    const target = objPath.reduce<T>((acc, key) => acc[key] || {}, obj);

    return target;
};

export const serializeNodeName = (filePath: string) => {
    const file = filePath.split('/').at(-1);
    if (!file) return;
    const fileName = file.replace('.yaml', '');
    return serializeToCamelCase(fileName);
};
