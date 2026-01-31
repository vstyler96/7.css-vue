const ENV = process.env.APP_ENV || 'local';

module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
  ],
  ignorePatterns: [
    'node_modules/',
    'public/',
    'env.d.ts',
  ],
  rules: {
    'no-console': 'off',
    'no-unused-vars': 'warn',
    'vue/html-self-closing': 'off',
    'vue/max-attributes-per-line': ['error', {
      'singleline': {
        'max': 2,
      },
    }],
    quotes: ['error', 'single'],
    'no-extra-semi': 'error',
    'no-debugger': 'error',
    'max-len': 'off',
    'import/no-unresolved': 'off',
    'arrow-body-style': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'linebreak-style': 'off',
    'func-names': 'off',
    'vue/component-name-in-template-casing': ['error', 'PascalCase', { registeredComponentsOnly: true }],
    'vue/multi-word-component-names': 'off',
    'no-plusplus': 'off',
  },
  parser: 'vue-eslint-parser',
  globals: {
    Echo: true,
    Pusher: true,
  },
};
