import util from 'node:util';

function removeReferenceKeys(obj: any, set = new WeakSet()): any {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    if (set.has(obj)) return;
    set.add(obj);

    if (Array.isArray(obj)) {
        return obj.map(e => removeReferenceKeys(e, set));
    }

    const cleanedObj: any = {};
    for (const key in obj) {
        if (key !== '$reference') {
            cleanedObj[key] = removeReferenceKeys(obj[key], set);
        }
    }

    return cleanedObj;
}

function prettyPrint(obj: any, hideReferences = true, maxStringLength: number | undefined = undefined): void {
    const cleanedObj = hideReferences ? removeReferenceKeys({ ...obj }) : obj;
    const options = { depth: null, colors: true, maxStringLength };
    console.log(util.inspect(cleanedObj, options));
}

export function prettyPrint_s(
    obj: any,
    hideReferences = true,
    maxStringLength: number | undefined = undefined
): string {
    const cleanedObj = hideReferences ? removeReferenceKeys({ ...obj }) : obj;
    const options = { depth: null, colors: true, maxStringLength };
    return util.inspect(cleanedObj, options);
}

export default prettyPrint;
