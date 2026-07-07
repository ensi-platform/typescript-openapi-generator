import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import unicorn from 'eslint-plugin-unicorn';
import globals from 'globals';
import tseslint from 'typescript-eslint';

import base from './libs/eslint/base/index.mjs';
import { createNodePreset } from './libs/eslint/presets/node.mjs';

export default createNodePreset({
    js,
    eslintConfigPrettier,
    unicorn,
    globals,
    tseslint,
    base,
});
