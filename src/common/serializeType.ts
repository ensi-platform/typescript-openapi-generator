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
    description: string;
    type: string;
}) => {
    const result = '';
    if (description) result + `/**\n* ${description}\n **/\n`;
    if ((typeof example === 'string' && example) || typeof example === 'number') result + getExample(example, type);
    return result + content;
};

export const getInterfaceValue = ({
    name,
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
    description: string;
    required: boolean;
}) => {
    const nameWithRequired = required ? name : `${name}?`;
    return serializeTypeString({ content: `${nameWithRequired}: ${value}`, example, type, description });
};
