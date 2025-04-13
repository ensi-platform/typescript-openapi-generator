import fs from 'node:fs';
import { SchemaObject } from 'openapi-typescript';
import yaml from 'yaml';

export const getFile = (filePath: string) => {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        return yaml.parse(content) as SchemaObject;
    } catch (error) {
        console.error(`Error reading file: ${filePath} - ${error}`);
        return null;
    }
};
