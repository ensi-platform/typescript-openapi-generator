import * as path from 'node:path';

import { resolvePath } from '../common/helpers';
import { type IReference } from './types';

export const getReference = (ref: string, relativeReference?: IReference): IReference => {
    let absolutePath: string;
    let target: string;

    if (ref.startsWith('#/') && relativeReference) {
        const newTarget = ref.split('#/')[1];

        absolutePath = relativeReference.absolutePath;
        target = newTarget;
    } else {
        // ['./common_parameters', '#/QueryInclude']
        const [filePath, anchor] = ref.split('.yaml');
        // ./common_parameters.yaml
        const file = `${filePath}.yaml`;

        // '/home/username/project/./common_parameters.yaml.yaml'
        absolutePath = path.join('', file).replaceAll('\\', '/');
        // 'QueryInclude'
        target = anchor?.split('#/')[1];

        const relativeFile = relativeReference?.absolutePath || '.';
        const baseName = path.basename(relativeFile);

        // '/home/username/project/common_parameters.yaml'
        absolutePath = resolvePath([relativeFile.replace(`/${baseName}`, '').replace(baseName, ''), absolutePath]);
    }

    return {
        // "./common_parameters.yaml#/QueryInclude"
        refPath: ref,
        // '/home/username/project/common_parameters.yaml'
        absolutePath,
        // 'QueryInclude'
        target,
    };
};
