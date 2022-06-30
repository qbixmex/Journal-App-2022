module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  transformIgnorePatterns: [],
  setupFiles: ['./jest.setup.js'],
  // If we need to import CSS in our components for testing
  moduleNameMapper: {
    '\\.(css|sass)$': '<rootDir>/tests/mocks/styleMock.js',
  },
};