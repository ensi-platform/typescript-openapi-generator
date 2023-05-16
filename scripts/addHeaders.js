const headers = '#!/usr/bin/env node\nglobal.navigator={};\n';

const path = './dist/index.js';

const { readFileSync, writeFileSync } = require('fs');

const content = readFileSync(path, 'utf8');

const newContent = `${headers}${content}`;

writeFileSync(path, newContent);
