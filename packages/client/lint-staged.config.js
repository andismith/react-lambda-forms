module.exports = {
  '*': ['pretty-quick --staged', 'jest --bail --passWithNoTests', 'git add'],
};
