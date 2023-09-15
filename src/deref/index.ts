import * as path from 'node:path';

import { resolvePath } from '../common/helpers';

type Target = string; // #ModelName -> ModelName
type AbsolutePath = string;

export interface Reference {
    // Название целевой структуры в yaml файле
    target: Target;
    // Оригинальное $ref значение
    refPath: string;
    // Абсолютный путь до .yaml файла
    absolutePath: AbsolutePath;

    // Загруженный объект target
    targetObject: Record<string, any> | null;

    /**
     * Дополнительный ключ, для генераторов:
     * {
        "SearchSimilarProductGroupsRequest": {
            "type": "object",
            "properties": {
                // В reference для этого свойства extraKey = "sort"
                "sort": {
                    "description": "Сортировка. Доступные для сортировки поля см. в :meta",
                    "$ref": "../../../common_schemas.yaml#/RequestBodySort"
                },
                // В reference для этого свойства extraKey = "filter"
                "filter": {
                    "type": "object",
                    "description": "Фильтр. Доступные для фильтрации поля см. в :meta"
                },
            }
        }
    }
     */
    extraKey?: string;
    inObjectNamed?: string;
}

export type DerefedObject<T> = (T extends Record<string, any>
    ? {
          [key in keyof T]: DerefedObject<T> | Record<string, any> | number | string | boolean;
      }
    : {
          [key: string]: DerefedObject<T> | Record<string, any> | number | string | boolean;
      }) & {
    $reference?: Reference;
};

function parseReference(value: any, relativeReference?: Reference): Reference {
    const ref = value.$ref;
    delete value.$ref;

    let absolutePath: string;
    let target: string;

    if (ref.startsWith('#/') && relativeReference) {
        const newTarget = ref.split('#/')[1];

        absolutePath = relativeReference.absolutePath;
        target = newTarget;
    } else {
        const [filePath, anchor] = ref.split('.yaml');
        const file = `${filePath}.yaml`;

        absolutePath = path.join('', file).replaceAll('\\', '/');
        target = anchor.split('#/')[1];

        const relativeFile = relativeReference?.absolutePath || '.';
        const baseName = path.basename(relativeFile);

        absolutePath = resolvePath([relativeFile.replace(`/${baseName}`, '').replace(baseName, ''), absolutePath]);
    }

    return {
        refPath: ref,
        targetObject: null,
        absolutePath,
        target,
    };
}

function assignToObject(obj: Record<string, any>, key: string | number, value: any, reference: Reference) {
    obj[key] = value;
    obj[key].$reference = { ...reference };
}

export const traverseAndModify = async <T extends Record<string, any> = Record<string, any>>(
    rootObj: T,
    onDeref: (ref: Reference) => Promise<Record<string, any>>,
    progressHandler: (progress: { totalRuns: number; completedRuns: number; percent: number }) => void
) => {
    const visited = new WeakSet();
    let totalRuns = 0;
    let completedRuns = 0;

    const resolvedRefs = new Map<string, object>();

    const recursive = async (obj: any, relativeReference?: Reference, iters = 0) => {
        totalRuns++;

        if (typeof obj !== 'object' || !obj) return;
        if (visited.has(obj)) return;

        visited.add(obj);

        const keys = Array.isArray(obj)
            ? Object.keys(obj).map(Number)
            : Object.keys(obj).filter(e => !['$reference'].includes(e));

        await Promise.all(
            keys.map(async key => {
                const value = obj[key] as Record<string, any>;

                if (typeof value !== 'object' || !value) return;

                if (value.$ref) {
                    const reference = parseReference(value, relativeReference);
                    const resolvedObj = await onDeref(reference);

                    if (typeof resolvedObj === 'object') {
                        await recursive(resolvedObj, reference, iters + 1);
                    }

                    resolvedRefs.set(reference.absolutePath + '#/' + reference.target || '', resolvedObj);

                    assignToObject(obj, key, resolvedObj, reference);

                    if (!resolvedObj) {
                        console.log('resolvedObj is null at', reference.absolutePath, reference.target);
                    }
                } else {
                    await recursive(value, relativeReference, iters + 1);
                }

                completedRuns++;
                const percent = (completedRuns / totalRuns) * 100;
                progressHandler({
                    completedRuns,
                    totalRuns,
                    percent,
                });
            })
        );
    };

    await recursive(rootObj);
};
