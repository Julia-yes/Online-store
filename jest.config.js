module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    "\\.[jt]sx?$": "babel-jest",
  },
  // transformIgnorePatterns: ["node_modules/(?!@ngrx|(?!deck.gl)|ng-dynamic)"],
  transformIgnorePatterns: ['<rootDir>/node_modules/', "node_modules/(?!@ngrx|(?!deck.gl)|ng-dynamic)"],
};