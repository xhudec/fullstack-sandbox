'use strict'

// To inject Environment Variables into Jest
// eslint-disable-next-line @typescript-eslint/no-require-imports
require('dotenv').config()

// eslint-disable-next-line @typescript-eslint/no-var-requires,@typescript-eslint/no-require-imports
const path = require('path')

module.exports = {
  rootDir: path.join(__dirname, '..'),
  moduleDirectories: ['node_modules'],
  moduleNameMapper: {
    '^@components[/](.+)': '<rootDir>/components/$1',
    '^@hooks[/](.+)': '<rootDir>/hooks/$1',
    '^@modules[/](.+)': '<rootDir>/modules/$1',
    '^@utils[/](.+)': '<rootDir>/utils/$1',
    '\\.module\\.(css|less|svg|jpg|jpeg|png)': 'identity-obj-proxy',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  transform: {
    '\\.(ts|tsx)$': '<rootDir>/../../node_modules/ts-jest',
    '\\.(css|less|svg|jpg|jpeg|png)$': '<rootDir>/test/helpers/transformAsset.js',
  },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
    'jest-watch-select-projects',
  ],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.jest.json',
    },
  },
}
