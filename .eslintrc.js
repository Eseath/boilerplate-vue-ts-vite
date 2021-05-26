module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        // "eslint:recommended",
        'plugin:vue/vue3-essential',
        // "plugin:@typescript-eslint/recommended",
    ],
    parserOptions: {
        ecmaVersion: 12,
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
    },
    plugins: [
        'vue',
        '@typescript-eslint',
    ],
    rules: {
        'indent': ['error', 4],
        'object-curly-spacing': ['error', 'always'],
        'semi': ['error', 'always'],
        'quotes': ['error', 'single'],
    },
};
