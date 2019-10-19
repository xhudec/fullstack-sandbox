'use strict'

module.exports = {
  // eslint-disable-next-line global-require,@typescript-eslint/no-require-imports
  ...require('./jest.shared'),
  displayName: 'dom',
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['<rootDir>/**/__tests__/**spec.(ts|js)?(x)'],
  setupFilesAfterEnv: [require.resolve('./jest.setup.js')],
}
