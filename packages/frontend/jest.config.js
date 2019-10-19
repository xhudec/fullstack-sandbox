'use strict'

module.exports = {
  // eslint-disable-next-line global-require,@typescript-eslint/no-require-imports
  ...require('./test/jest.shared'),
  collectCoverageFrom: [
    '**/*.(t|j)s?(x)',
    // https://github.com/facebook/create-react-app/issues/1455#issuecomment-282562178
    '!**/coverage/**',
    '!**/test/**',
    '!**/*.config.js',
    '!**/__tests__/*',
    '!**/__server_tests__/*',
    // ignore type definition types from coverage report
    '!**/**/*.d.ts',
  ],
  projects: ['./test/jest.client.js', './test/jest.server.js'],
}
