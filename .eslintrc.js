require('dotenv').config()

const testModeEnv = process.env.IGNORE_LINT || '0'
const isTestMode = ['1', 'true'].indexOf(testModeEnv.toLowerCase()) >= 0

// wrap this function when setup, if want to be affected by ENV
function lintLevelByEnv(expect) {
  return isTestMode ? 'off' : expect
}

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  env: {
    node: true,
    es6: true,
    jest: true
  },
  // https://github.com/prettier/eslint-config-prettier
  // https://github.com/vuejs/eslint-plugin-vue
  // https://github.com/standard/eslint-plugin-standard
  // using prettier for code formatter
  extends: ['prettier', 'prettier/standard'],
  // vue required to lint *.vue files
  // https://github.com/prettier/eslint-plugin-prettier
  plugins: ['prettier', 'import'],
  rules: {
    /** prettier rules */
    'prettier/prettier': [
      lintLevelByEnv('error'),
      {},
      {
        usePrettierrc: true
      }
    ],

    /** check import lib's existence, case sensitive */
    'import/no-unresolved': [
      lintLevelByEnv('error'),
      {
        caseSensitive: true
      }
    ],

    /** patch the rules of prettier */
    // do not re-assign param
    'no-param-reassign': [
      lintLevelByEnv('warn'),
      {
        props: false
      }
    ],
    'no-unused-vars': lintLevelByEnv('error'),
    // use '==='
    eqeqeq: lintLevelByEnv('warn'),
    camelcase: lintLevelByEnv('warn'),
    // no new without assign to a variable / const
    'no-new': lintLevelByEnv('warn'),
    // restrict error type
    'no-throw-literal': lintLevelByEnv('error'),
    'no-unreachable': lintLevelByEnv('error'),
    'no-dupe-keys': lintLevelByEnv('error'),
    'no-useless-escape': lintLevelByEnv('warn'),
    'no-unused-expressions': lintLevelByEnv('error'),
    'no-useless-constructor': lintLevelByEnv('error'),
    'no-return-assign': lintLevelByEnv('error'),
    // warning of none handling of error callback
    'handle-callback-err': lintLevelByEnv('warn'),
    // new keyword should follow captial-named variable
    'new-cap': lintLevelByEnv('warn'),
    'space-before-function-paren': lintLevelByEnv('off'),
    // use /*global ...*/ to ignore global check if it is exactly global variable.
    'no-undef': lintLevelByEnv('error')
  }
}
