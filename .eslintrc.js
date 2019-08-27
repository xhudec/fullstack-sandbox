'use strict'

module.exports = {
  extends: [
    '@strv/eslint-config-typescript',
    '@strv/eslint-config-typescript/optional',
    '@strv/eslint-config-typescript/style',

    '@strv/eslint-config-react',
    '@strv/eslint-config-react/optional',
    '@strv/eslint-config-react/style',

    '@strv/eslint-config-node/v10',
    '@strv/eslint-config-node/optional',
    '@strv/eslint-config-node/style',
  ],
  plugins: ['@typescript-eslint', 'import'],
  parser: '@typescript-eslint/parser',
  rules: {
    // ! FIXME: remove after this rule is supported
    '@typescript-eslint/quotes': 'off',
    // ! FIXME: remove after the Linter Crashing for unknown reason is fixed
    'import/no-unused-modules': 'off',
  },
}
