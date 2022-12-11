module.exports = {
  root: true,
  extends: ['next/core-web-vitals', 'plugin:import/warnings', 'plugin:prettier/recommended'],
  plugins: ['prettier', 'import'],
  rules: {
    'quote-props': ['error', 'as-needed'],
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'all',
        endOfLine: 'auto',
        semi: true,
        singleQuote: true,
        jsxSingleQuote: false,
        printWidth: 120,
        tabWidth: 2,
      },
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'parent', 'sibling', 'index', 'object', 'type'],
        pathGroups: [
          {
            pattern: 'react, next/router',
            group: 'builtin',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
        },
      },
    ],
    'block-scoped-var': 'error',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
      typescript: {
        config: 'tsconfig.json',
        alwaysTryTypes: true,
      },
    },
  },
};
