const headers = '#!/usr/bin/env node\nglobal.navigator={};\n';

const path = './dist/index.js';

// eslint-disable-next-line unicorn/prefer-module
const { readFileSync, writeFileSync } = require('node:fs');

const content = readFileSync(path, 'utf8');

const newContent = `${headers}${content}`;

writeFileSync(path, newContent);
