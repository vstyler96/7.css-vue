module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
  ],
  root: true,
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/max-attributes-per-line': ['error', {
      'singleline': {
        'max': 2,
      },
    }],
  },
};
