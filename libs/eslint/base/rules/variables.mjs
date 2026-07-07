export default {
    // enforce or disallow variable initializations at definition
    'init-declarations': 'off',

    // disallow the catch clause parameter name being the same as a variable in the outer scope
    'no-catch-shadow': 'off',

    // disallow deletion of variables
    'no-delete-var': 'error',

    // disallow labels that share a name with a variable
    // https://eslint.org/docs/rules/no-label-var
    'no-label-var': 'error',

    // disallow specific globals
    'no-restricted-globals': [
        'error',
        {
            name: 'isFinite',
            message: 'Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite',
        },
        {
            name: 'isNaN',
            message: 'Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan',
        },
    ].concat(
        [
            'addEventListener',
            'blur',
            'close',
            'closed',
            'confirm',
            'defaultStatus',
            'defaultstatus',
            'event',
            'external',
            'find',
            'focus',
            'frameElement',
            'frames',
            'history',
            'innerHeight',
            'innerWidth',
            'length',
            'location',
            'localStorage',
            'name',
            'navigator',
            'onbeforeunload',
            'onblur',
            'onerror',
            'onfocus',
            'onload',
            'onresize',
            'onunload',
            'open',
            'opener',
            'opera',
            'outerHeight',
            'outerWidth',
            'pageXOffset',
            'pageYOffset',
            'parent',
            'print',
            'removeEventListener',
            'resizeBy',
            'resizeTo',
            'screen',
            'screenLeft',
            'screenTop',
            'screenX',
            'screenY',
            'scroll',
            'scrollBy',
            'scrollTo',
            'scrollX',
            'scrollY',
            'self',
            'sessionStorage',
            'status',
            'stop',
            'top',
        ].map(g => ({
            name: g,
            message: `Use window.${g} instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md`,
        }))
    ),

    // disallow declaration of variables already declared in the outer scope
    'no-shadow': 'error',

    // disallow shadowing of names such as arguments
    'no-shadow-restricted-names': 'error',

    // disallow use of undeclared variables unless mentioned in a /*global */ block
    'no-undef': 'error',

    // disallow use of undefined when initializing variables
    'no-undef-init': 'error',

    // disallow use of undefined variable
    // https://eslint.org/docs/rules/no-undefined
    // TODO: enable?
    'no-undefined': 'off',

    // disallow declaration of variables that are not used in the code
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],

    // disallow use of variables before they are defined
    'no-use-before-define': ['error', { functions: true, classes: true, variables: true }],
};
