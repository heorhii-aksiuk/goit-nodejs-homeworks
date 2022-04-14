module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['standard', 'prettier'],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'eslint no-useless-escape': false,
    'no-unused-vars': [
      'error',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: true },
    ],
  },
}

// module.exports = {
//   env: {
//     commonjs: true,
//     es2021: true,
//     node: true,
//   },
//   extends: 'eslint:recommended',
//   parserOptions: {
//     ecmaVersion: 12,
//   },
//   rules: {
//     'no-unused-vars': [
//       'error',
//       { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
//     ],
//   },
// }
