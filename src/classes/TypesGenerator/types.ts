export type ITypeObject = {
    type: 'literal' | 'enum' | 'combination' | 'array' | 'object' | 'objectOfRequired';
    method: string;
    name: string;
    extraData?: unknown;
    definition: { description: string; code: string };
};
