import fs from 'node:fs';
import path from 'node:path';
import { ReferenceObject, SchemaObject } from 'openapi-typescript';
import yaml from 'yaml';

import { NODE_SEPARATOR } from '../../common/constants';
import { getFile } from '../../common/file';
import { resolvePathSegments, serializeNodeName } from '../../common/helpers';
import { SchemaObjectValueType, ValidSchemaObjectType } from '../../common/types';

export class DuplicateResolver {
    private pathToIndex: string;
    private nodes = new Map<string, string[]>();
    private nodesObj = new Map<string, { name: string; newName: string }>();

    constructor(pathToIndex: string) {
        this.pathToIndex = pathToIndex;
    }

    private getValidSchemaObject = (value: SchemaObjectValueType): ValidSchemaObjectType | undefined => {
        if (!value) return;
        if (typeof value !== 'object') return;
        return value;
    };

    private hasDuplicate = (node: string, filePathWithNode: string) => {
        if (this.nodes.has(node)) {
            this.nodes.get(node)?.push(filePathWithNode);
            return true;
        }

        this.nodes.set(node, [filePathWithNode]);
        return false;
    };

    private fileProcessing = (ref: string, relativePath: string) => {
        const filePathWithNode = path.join(resolvePathSegments([relativePath, ref]));
        if (this.nodesObj.has(filePathWithNode)) {
            return;
        }

        const [filePath, node] = filePathWithNode.split(NODE_SEPARATOR);

        const file = getFile(filePath);
        if (!file) return;

        const nodeName =
            (node?.includes('/') ? (node.split('/') || []).at(-1) : node) ||
            (serializeNodeName(filePath) as string | undefined);
        if (!nodeName) {
            return;
        }

        const isDuplicate = this.hasDuplicate(nodeName, filePathWithNode);

        if (isDuplicate) {
            for (const [i, absolueUrl] of this.nodes.get(nodeName)!.entries()) {
                this.nodesObj.set(absolueUrl, { name: nodeName, newName: `${nodeName}${i}` });
            }
        } else {
            this.nodesObj.set(filePathWithNode, { name: nodeName, newName: '' });
        }

        return { file, filePath };
    };

    private findRefs = (obj: ReferenceObject | SchemaObject, relativePath: string) => {
        if ((obj as ReferenceObject).$ref) {
            const fileData = this.fileProcessing((obj as ReferenceObject).$ref, relativePath);
            if (fileData) this.findRefs(fileData.file, fileData.filePath);
            return;
        }

        const keys = Object.keys(obj);
        for (const key of keys) {
            const value = (obj as any)[key] as SchemaObjectValueType;

            const validValue = this.getValidSchemaObject(value);
            if (!validValue) continue;

            if (Array.isArray(validValue)) {
                for (const v of validValue) {
                    const validV = this.getValidSchemaObject(v);
                    if (!validV) continue;
                    if (Array.isArray(validV)) continue;
                    this.findRefs(validV, relativePath);
                }

                continue;
            }

            const ref = (validValue as ReferenceObject).$ref;

            if (ref) {
                const fileData = this.fileProcessing(ref, relativePath);
                if (fileData) this.findRefs(fileData.file, fileData.filePath);
                continue;
            }

            this.findRefs(validValue, relativePath);
        }
    };

    public resolve = () => {
        const indexFileContent = fs.readFileSync(this.pathToIndex, 'utf8');
        const jsonIndexFile: ReferenceObject | SchemaObject = yaml.parse(indexFileContent);
        this.findRefs(jsonIndexFile, this.pathToIndex);
        const resultNodesMap = new Map<string, { name: string; newName: string }>();

        for (const [key, v] of this.nodesObj.entries()) {
            if (v.newName) {
                resultNodesMap.set(key, v);
            }
        }

        this.nodes.clear();
        this.nodesObj.clear();

        return resultNodesMap;
    };
}
