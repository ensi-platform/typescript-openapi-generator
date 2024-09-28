module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
        jest: true,
    },
    extends: ['prettier', 'oclif', 'oclif-typescript'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.d.ts'],
            },
        },
    },
    plugins: ['@typescript-eslint'],
    rules: {
        semi: 0,
        indent: 0,
        'linebreak-style': ['error', 'unix'],
        'valid-jsdoc': 0,
        'comma-dangle': 0,
        'object-curly-spacing': 0,
        camelcase: 0,
        'no-unused-vars': 0,
        '@typescript-eslint/no-unused-vars': [2],
        'import/extensions': 0,
        'unicorn/no-array-reduce': 0,
        'no-prototype-builtins': 0,
        'unicorn/no-useless-undefined': 0,
        'operator-linebreak': 0,
        'unicorn/filename-case': [
            'error',
            {
                cases: {
                    camelCase: true,
                    pascalCase: true,
                },
            },
        ],
        'no-param-reassign': [2, { props: false }],
        'no-nested-ternary': 1,
        'consistent-return': 0,
        'no-shadow': 0,
        '@typescript-eslint/no-shadow': [1],
        'no-restricted-exports': 0,
        'import/no-cycle': 0,
        'import/no-named-as-default': 0,
        'import/prefer-default-export': 0,
    },
};
