import { OpenAPIV3 } from 'openapi-types';

import { getReference } from './helpers';
import { IReference } from './types';

export const traverseAndModify = async <T extends Record<string, unknown>>(
    rootObj: OpenAPIV3.Document<T>,
    onLoad: (ref: IReference) => Promise<Record<string, unknown>>,
    progress: (progress: { totalRuns: number; completedRuns: number; percent: number }) => void
) => {
    const visited = new WeakSet();
    let totalRuns = 0;
    let completedRuns = 0;

    const resolvedRefs = new Map<string, object>();

    const recursive = async (obj: Record<string, any>, relativeReference?: IReference, iters = 0) => {
        totalRuns++;

        if (typeof obj !== 'object' || !obj) return;
        if (visited.has(obj)) return;

        visited.add(obj);

        const keys = Array.isArray(obj)
            ? Object.keys(obj).map(Number)
            : Object.keys(obj).filter(e => !['$reference'].includes(e));

        await Promise.all(
            keys.map(async key => {
                const value = obj[key];

                if (typeof value !== 'object' || !value) return;

                if (value.$ref) {
                    // Разбиваем $ref на отдельные строки получая путь до файла и конктретную сущность
                    const reference = getReference(value.$ref, relativeReference);

                    const resolvedObj = await onLoad(reference);

                    // Если value - объект, значит проходимся дальше
                    if (typeof resolvedObj === 'object') {
                        await recursive(resolvedObj, reference, iters + 1);
                    }

                    resolvedRefs.set(reference.absolutePath + '#/' + reference.target || '', resolvedObj);

                    if (resolvedObj) {
                        obj[key] = JSON.parse(JSON.stringify({ ...resolvedObj, ref: value.$ref }));
                    } else {
                        console.error('resolvedObj is null at', reference.absolutePath, reference.target);
                    }
                } else {
                    // Если это объект без ссылки на другой документ, то проходимся дальше по ключам
                    await recursive(value, relativeReference, iters + 1);
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

    await recursive(rootObj);
};
