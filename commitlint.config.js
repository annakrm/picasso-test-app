module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [2, 'always', 140],
    'body-max-line-length': [2, 'always', 500],
    'subject-case': [1, 'always', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
  },
};
