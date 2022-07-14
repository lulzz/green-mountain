module.exports = {
  transform: {
    '^.+\\.ts$': ['@swc/jest'],
  },
  verbose: true,
  modulePathIgnorePatterns: ['./dist'],
};
