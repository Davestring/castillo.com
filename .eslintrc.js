module.exports = {
  env: {
    jest: true,
    browser: true,
    amd: true,
    node: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'jsx-a11y',
    'prettier',
    'react',
    'react-hooks',
    'simple-import-sort',
    'import',
  ],
  root: true,
  rules: {
    'arrow-body-style': [2, 'as-needed'],
    'class-methods-use-this': 0,

    'import/imports-first': 'error',
    'import/newline-after-import': 'error',
    'import/no-dynamic-require': 'error',
    'import/no-named-as-default': 'error',
    'import/prefer-default-export': 'error',
    'import/first': 'error',
    'import/no-duplicates': 'error',

    indent: [2, 2, { SwitchCase: 1 }],

    'jsx-a11y/aria-props': 2,
    'jsx-a11y/heading-has-content': 0,
    'jsx-a11y/label-has-associated-control': [
      2,
      { controlComponents: ['Input'] },
    ],
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/mouse-events-have-key-events': 2,
    'jsx-a11y/role-has-required-aria-props': 2,
    'jsx-a11y/role-supports-aria-props': 2,
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],

    'no-console': 2,
    'no-unused-vars': 2,
    'no-use-before-define': 2,
    'prefer-template': 2,
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],

    'react/react-in-jsx-scope': 'off',
    'react/destructuring-assignment': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-closing-tag-location': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-filename-extension': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-no-target-blank': 0,
    'react/jsx-uses-vars': 2,
    'react/require-default-props': 0,
    'react/require-extension': 0,
    'react/self-closing-comp': 0,
    'react/sort-comp': 0,

    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: 'server/**/*.js',
      env: { node: true },
      rules: {
        'simple-import-sort/imports': 'off',
        'import/order': ['error', { 'newlines-between': 'always' }],
      },
    },
  ],
};
