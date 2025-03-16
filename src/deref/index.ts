import { OpenAPIV3 } from 'openapi-types';

import { getReference } from './helpers';
import { IReference } from './types';

// const hasCicle = (arr: string[]) => {
//     const reversedArr = arr.reverse();

//     const comparisonGroup: string[] = [];

//     while (comparisonGroup.length <= arr.length / 2) {
//         const nextItem = reversedArr[comparisonGroup.length];
//         comparisonGroup.push(nextItem);
//         const repeatedNextItem = comparisonGroup.reduce((acc, item) => (item === nextItem ? acc + 1 : acc), 0);
//         if (repeatedNextItem > 1) {
//             return true;
//         }

//         const isCicle = comparisonGroup.every((item, i) => item === reversedArr[i + comparisonGroup.length]);
//         if (isCicle) return true;
//     }

//     return false;
// };

const hasCycle = (paths: string[]): boolean => {
    const seenPaths = new Set<string>();
    for (const path of paths) {
        if (seenPaths.has(path)) {
            return true;
        }

        seenPaths.add(path);
    }

    return false;
};

// async function loadPLimit() {
//     const pLimit = await import('p-limit');
//     return pLimit.default(10); // Note: ESM exports are accessed via `.default`
// }

export const traverseAndModify = async <T extends Record<string, unknown>>(
    rootObj: OpenAPIV3.Document<T>,
    onLoad: (ref: IReference & { key: string | number }) => Promise<Record<string, unknown>>,
    progress: (progress: { totalRuns: number; completedRuns: number; percent: number }) => void
) => {
    // const limit = await loadPLimit();

    let totalRuns = 0;
    let completedRuns = 0;

    const recursive = async ({
        obj,
        relativeReference,
        iters = 0,
        branchPaths = [],
    }: {
        obj: Record<string, any>;
        relativeReference?: IReference;
        iters?: number;
        branchPaths?: string[];
    }) => {
        totalRuns++;

        // if (iters > 50) {
        //     console.warn(`Max recursion depth reached at path: ${branchPaths.join(' -> ')}`);
        //     return;
        // }

        if (typeof obj !== 'object' || !obj) {
            return;
        }

        const keys = Array.isArray(obj)
            ? Object.keys(obj).map(Number)
            : Object.keys(obj).filter(e => !['$reference'].includes(e));

        await Promise.all(
            keys.map(async key => {
                const value = obj[key];

                if (typeof value !== 'object' || !value) {
                    return undefined;
                }

                if (value.$ref) {
                    const paths = [...branchPaths, value.$ref];

                    if (hasCycle(paths)) return undefined;

                    // Разбиваем $ref на отдельные строки получая путь до файла и конктретную сущность
                    const reference = getReference(value.$ref, relativeReference);

                    const resolvedObj = await onLoad({ key, ...reference });

                    // Если value - объект, значит проходимся дальше
                    if (
                        typeof resolvedObj === 'object' &&
                        resolvedObj &&
                        Object.keys(resolvedObj).some(e => !['$reference'].includes(e))
                    ) {
                        await recursive({
                            obj: resolvedObj,
                            relativeReference: reference,
                            iters: iters + 1,
                            branchPaths: paths,
                        });
                    }

                    if (resolvedObj) {
                        obj[key] = { ...resolvedObj, ref: value.$ref };
                    } else {
                        console.error('resolvedObj is null at', reference.absolutePath, reference.target);
                    }
                }

                if (!value.$ref && Object.keys(value).length > 0) {
                    // Если это объект без ссылки на другой документ, то проходимся дальше по ключам
                    await recursive({ obj: value, relativeReference, iters: iters + 1, branchPaths });
                }

                completedRuns++;
                const percent = (completedRuns / totalRuns) * 100;
                progress({
                    completedRuns,
                    totalRuns,
                    percent,
                });
            })
        );
    };

    await recursive({ obj: rootObj });
};
