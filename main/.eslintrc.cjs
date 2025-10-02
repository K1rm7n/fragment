module.exports = {
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:prettier/recommended',
    // 'plugin:perfectionist/recommended-line-length',
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
    'import/order': 'off',
    'no-console': 'off', // default warn
  },
  plugins: ['only-warn'],
}
