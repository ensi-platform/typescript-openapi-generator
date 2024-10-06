import { parse } from '@stoplight/yaml';
import { OpenAPIV3 } from 'openapi-types';

export const getOpenApiFromParsedYaml = (value: OpenAPIV3.Document | OpenAPIV3.Document[]) => {
    if (Array.isArray(value)) {
        return value.length > 0 ? value[0] : null;
    }

    return value;
};

export const getOpenApiDocument = (yamlContent: string) => {
    const parsed = parse<OpenAPIV3.Document | OpenAPIV3.Document[]>(yamlContent);

    return getOpenApiFromParsedYaml(parsed);
};
