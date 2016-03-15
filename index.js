// ESLint configuration
'use strict';

module.exports = {
  extends: [
    'eslint:recommended'
  ],
  rules: {
    // Possible Errors Section
    'no-extra-parens': [2, 'all', {conditionalAssign: false}],
    'valid-jsdoc': [1, {
      prefer: {
        return: 'returns'
      },
      requireReturn: false
    }],

    // Best Practices Section
    'array-callback-return': 2,
    'curly': [2, 'multi-line', 'consistent'],
    'default-case': 2,
    'dot-location': [2, 'property'],
    'dot-notation': 2,
    'eqeqeq': [2, 'smart'],
    'guard-for-in': 2,
    'no-alert': 2,
    'no-caller': 2,
    'no-else-return': 2,
    'no-empty-function': 2,
    'no-eval': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-label': 2,
    'no-floating-decimal': 2,
    'no-implicit-coercion': 2,
    'no-implicit-globals': 2,
    'no-implied-eval': 2,
    'no-invalid-this': 2,
    'no-iterator': 2,
    'no-labels': [2, {allowLoop: true}],
    'no-lone-blocks': 2,
    'no-loop-func': 2,
    'no-native-reassign': 2,
    'no-new-func': 2,
    'no-new-wrappers': 2,
    'no-new': 2,
    'no-param-reassign': [2, {props: true}],
    'no-proto': 2,
    'no-return-assign': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-throw-literal': 2,
    'no-unmodified-loop-condition': 2,
    'no-unused-expressions': 2,
    'no-useless-call': 2,
    'no-useless-concat': 2,
    'no-void': 2,
    'no-warning-comments': [1, {terms: ['todo', 'fixme'], location: 'anywhere'}],
    'no-with': 2,
    'radix': [2, 'always'],
    'wrap-iife': [2, 'inside'],

    // Strict Mode Section
    'strict': [2, 'safe'],

    // Variables Section
    'no-label-var': 2,
    'no-shadow-restricted-names': 2,
    'no-undef-init': 2,
    'no-use-before-define': [2, 'nofunc'],

    // Node.js and CommonJS Section
    'callback-return': [2, ['callback', 'cb', 'next', 'done']],
    'global-require': 2,
    'handle-callback-err': [2, '^.*(e|E)rr'],
    'no-new-require': 2,
    'no-path-concat': 2,

    // Stylistic Issues Section
    'array-bracket-spacing': [2, 'never'],
    'block-spacing': [2, 'always'],
    'brace-style': [2, '1tbs'],
    'camelcase': [2, {properties: 'always'}],
    'comma-spacing': [2, {before: false, after: true}],
    'comma-style': [2, 'last'],
    'computed-property-spacing': [2, 'never'],
    'consistent-this': [2, 'self'],
    'indent': [2, 2, {SwitchCase: 1}],
    'key-spacing': [2, {beforeColon: false, afterColon: true}],
    'keyword-spacing': [2, {before: true, after: true, overrides: {}}],
    'lines-around-comment': [2, {beforeBlockComment: true}],
    'new-cap': 2,
    'new-parens': 2,
    'no-array-constructor': 2,
    'no-lonely-if': 2,
    'no-multiple-empty-lines': [2, {max: 2, maxEOF: 0, maxBOF: 0}],
    'no-new-object': 2,
    'no-whitespace-before-property': 2,
    'no-spaced-func': 2,
    'no-unneeded-ternary': 2,
    'object-curly-spacing': [2, 'never'],
    'one-var-declaration-per-line': [2, 'initializations'],
    'operator-linebreak': [2, 'after'],
    'padded-blocks': [2, 'never'],
    'quote-props': [2, 'consistent-as-needed'],
    'quotes': [2, 'single'],
    'require-jsdoc': 1,
    'semi-spacing': [2, {before: false, after: true}],
    'semi': [2, 'always'],
    'space-before-blocks': [2, 'always'],
    'space-before-function-paren': [2, 'never'],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': 2,
    'space-unary-ops': [2, {words: true, nonwords: false}],
    'spaced-comment': [2, 'always', {block: {exceptions: ['*']}}]
  }
};
