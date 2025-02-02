module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    mocha: true,
    jest: true,
  },
  globals: {
    expect: true,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: [__dirname],
      },
    },
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    'operator-linebreak': ['error', 'after'],
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    'jsx-a11y/anchor-has-content': ['off'],
    'no-unused-vars': [
      'warn',
      {
        vars: 'all',
        args: 'all',
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_',
      },
    ],
    'linebreak-style': ['off'],
    'no-underscore-dangle': ['off'],
    'comma-dangle': ['error', 'always-multiline'],
    'no-plusplus': ['off'],
    'no-use-before-define': ['off'],
    'no-new': ['off'],
    'react/jsx-uses-vars': ['error'],
    'react/prefer-es6-class': ['off'],
    'import/extensions': ['off'],
    quotes: ['error', 'single'],
    'import/no-unresolved': ['error', { caseSensitive: false }],
    'no-confusing-arrow': ['off'],
    'padded-blocks': ['off'],
    'react/require-default-props': ['off'],
    'react/jsx-max-props-per-line': ['off'],
    'react/no-array-index-key': ['off'],
    'react/jsx-filename-extension': ['off'],
    'jsx-a11y/href-no-hash': ['off'],
    'react/no-did-mount-set-state': ['off'],
    'no-param-reassign': ['off'],
    'consistent-return': ['off'],
    'react/sort-comp': ['off'],
    'no-console': ['off'],
    'no-debugger': ['off'],
    'no-throw-literal': ['off'],
    'react/prefer-stateless-function': ['off'],
    'jsx-a11y/label-has-for': ['off'],
    'react/no-string-refs': ['off'],
    'prefer-destructuring': ['warn'],
    'no-undef': ['warn'],
    'class-methods-use-this': ['warn'],
    'no-unreachable': ['warn'],
    'object-curly-newline': ['off'],
    'import/first': ['warn'],
    'jsx-a11y/anchor-is-valid': ['off'],
    'jsx-a11y/alt-text': ['warn'],
    'import/prefer-default-export': ['off'],
    'import/no-named-as-default': ['off'],
    'react/jsx-no-bind': ['warn'],
    'react/jsx-one-expression-per-line': ['off'],
    'max-len': ['warn', { code: 150, ignoreStrings: true }],
    'implicit-arrow-linebreak': ['off'],
    'react/forbid-prop-types': ['off'],
    'react/jsx-props-no-spreading': ['off'],
    'arrow-parens': ['off'],
    'react/jsx-curly-newline': ['off'],
    'jsx-a11y/control-has-associated-label': ['off'],
    'react/jsx-fragments': ['off'],
  },
};
