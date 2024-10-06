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
    postFix,
    type,
}: {
    ref: string;
    path: string;
    postFix: string;
    type: 'response' | 'request';
}) => {
    let name = ref.split('#/')[1];

    if (!name) {
        name = basename(path);
        name = pascal(name);
    }

    name += pascal(postFix) + pascal(type);

    // if (name.startsWith('components/')) {
    //     name = name.split('/').pop()!;
    // }

    return name;
};
