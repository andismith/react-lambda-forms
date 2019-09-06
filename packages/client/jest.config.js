module.exports = {
  moduleFileExtensions: ['js', 'json'],
  moduleNameMapper: {
    '\\.scss$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['<rootDir>src/test/setup.js'],
  testRegex: '(\\.|/)(test|spec)\\.jsx?$',
};
