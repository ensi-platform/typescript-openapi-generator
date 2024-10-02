import { pascal } from 'case';
import { basename } from 'node:path';

export const getFolderName = (path: string) =>
    `output/${path
        .replaceAll(/^\/|\/$/g, '')
        .replaceAll(/{|}/g, '')
        .replaceAll(':', '/')}`;

export const getTypeName = ({
    ref,
    path,
    method,
    type,
}: {
    ref: string;
    path: string;
    method: string;
    type: 'response' | 'request';
}) => {
    let name = ref.split('#/')[1];

    if (!name) {
        name = basename(path);
        name = pascal(name);
    }

    name += pascal(method) + pascal(type);

    // if (name.startsWith('components/')) {
    //     name = name.split('/').pop()!;
    // }

    return name;
};
