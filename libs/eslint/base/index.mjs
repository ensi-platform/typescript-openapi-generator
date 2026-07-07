import importPlugin from 'eslint-plugin-import-x';

import bestPractices from './rules/bast-practices.mjs';
import errors from './rules/errors.mjs';
import es6 from './rules/es6.mjs';
import imports from './rules/imports.mjs';
import node from './rules/node.mjs';
import strict from './rules/strict.mjs';
import style from './rules/style.mjs';
import variables from './rules/variables.mjs';

export default {
    plugins: { import: importPlugin },
    rules: {
        ...errors,
        ...bestPractices,
        ...style,
        ...es6,
        ...imports,
        ...variables,
        ...node,
        ...strict,
    },
    settings: {
        'import/resolver': {
            node: { extensions: ['.js', '.mjs', '.ts', '.tsx', '.json', '.d.ts'] },
        },
    },
};
