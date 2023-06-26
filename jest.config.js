module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  testMatch: ['**/__tests__/**/*.test.(ts|js)'],
  moduleNameMapper: {
    '@libs/utils': '<rootDir>/src/libs/utils'
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};