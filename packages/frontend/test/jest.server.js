'use strict'

module.exports = {
  // eslint-disable-next-line global-require,@typescript-eslint/no-require-imports
  ...require('./jest.shared'),
  displayName: 'server',
  testEnvironment: 'jest-environment-node',
  testMatch: ['**/__server_tests__/**/*.spec.(t|j)s?(x)'],
}
