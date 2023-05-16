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
        'comma-dangle': 0,
        'object-curly-spacing': 0,
        camelcase: 0,
        'no-unused-vars': 0,
        '@typescript-eslint/no-unused-vars': [2],
        'import/extensions': 0,

        'no-param-reassign': [2, { props: false }],
        'no-nested-ternary': 1,
        'no-console': [1, { allow: ['warn', 'error', 'info'] }],
        'consistent-return': 0,
        'no-shadow': 0,
        '@typescript-eslint/no-shadow': [1],
        'no-restricted-exports': 0,
        'import/no-cycle': 0,
        'import/no-named-as-default': 0,
        'import/prefer-default-export': 0,
    },
};
