module.exports = {
    root: true,
    env: {
        browser: true,
        es6: true,
    },
    parser: '@babel/eslint-parser',
    parserOptions: {
        sourceType: 'module',
        allowImportExportEverywhere: true,
    },
    extends: ['airbnb', 'plugin:prettier/recommended'],
    rules: {
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'react/react-in-jsx-scope': [0],
        'react/self-closing-comp': [0],
        'react/jsx-curly-brace-presence': [0],
        'import/extensions': [0, { ignorePackages: true }],
        'import/prefer-default-export': [0],
        'no-undef': [0],
        'import/no-unresolved': [0],
        'jsx-a11y/anchor-is-valid': [0],
        'global-require': [0],
        'prefer-destructuring': [0],
        'spaced-comment': [0],
        'no-use-before-define': [0],
    },
};
