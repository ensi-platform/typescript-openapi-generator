export const getRequired = (required: string[], name: string) => required.includes(name);

export const getValue = (value: string, nullableParam?: boolean) => {
    const nullable = nullableParam ? ' | null' : '';
    return value + nullable;
};

export const getExample = (example: string | number, type: string) => {
    let prefix = '';
    let suffix = '';

    switch (type) {
        case 'integer':
        case 'null':
        case 'boolean':
        case 'number': {
            break;
        }

        case 'string': {
            prefix = '"';
            suffix = '"';
            break;
        }
    }

    return `${prefix}${example}${suffix}`;
};

export const serializeTypeString = ({
    content,
    example,
    description,
    type,
}: {
    content: string;
    example: string | number;
    description?: string;
    type: string;
}) => {
    let result = '';
    if (description || (typeof example === 'string' && example) || typeof example === 'number') {
        result += '/**\n';
        if (description) result += `* ${description}${description.endsWith('\n') ? '' : '\n'}`;
        if ((typeof example === 'string' && example) || typeof example === 'number')
            result += `* @example ${getExample(example, type)}\n`;
        result += '**/\n';
    }

    return result + content;
};

export const getInterfaceValue = ({
    name: nameParam,
    value,
    example,
    type,
    description,
    required,
}: {
    name: string;
    value: string;
    example: string;
    type: string;
    description?: string;
    required: boolean;
}) => {
    let name = '';
    if (nameParam) name = nameParam;
    if (name && !/^[$A-Z_a-z][\w$]*$/.test(name)) name = `['${name}']`;
    if (name) name = required ? `${name}: ` : `${name}?: `;
    return serializeTypeString({ content: `${name}${value}`, example, type, description });
};
