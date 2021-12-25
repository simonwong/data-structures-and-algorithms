module.exports = {
  extends: [require.resolve('@yueqing/lint/lib/ts-eslint')],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'no-bitwise': 0,
    'class-methods-use-this': 0,
    'no-restricted-syntax': 0,
    'no-underscore-dangle': 0
  },
}
