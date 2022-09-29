// * https://jestjs.io/docs/configuration
module.exports = {
  rootDir: '.',
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageReporters: ['clover', 'json', 'lcov', 'html'],
  collectCoverageFrom: ['<rootDir>/packages/**/src/**/*.ts'],
  setupFiles: ['<rootDir>/setup-tests.ts'],
  testMatch: ['<rootDir>/packages/**/*.test.ts'],
  modulePathIgnorePatterns: ['<rootDir>/tmp/'],
};