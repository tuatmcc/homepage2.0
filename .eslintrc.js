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
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
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
