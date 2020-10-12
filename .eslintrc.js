module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
  parserOptions: {
    ecmaVersion: 8,
  },
  overrides: [
    {
      files: ['app/lang/*.js'],
      rules: {
        'require-jsdoc': 'off',
      },
    },
  ],
}
