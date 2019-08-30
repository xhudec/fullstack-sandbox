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
    // conflicts with my personal preference or guidelines
    'padding-line-between-statements': 'off',
    'arrow-body-style': 'off',
    'import/order': 'off',
    '@typescript-eslint/member-ordering': 'off',

    // prettier is responsible for all code formatting
    'comma-dangle': 'off',
    'function-paren-newline': 'off',

    // ! FIXME: remove after this rule is supported
    '@typescript-eslint/quotes': 'off',
    // ! FIXME: remove after the Linter Crashing for unknown reason is fixed
    'import/no-unused-modules': 'off',
  },
}
