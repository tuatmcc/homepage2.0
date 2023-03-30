// eslint は、主にimport の順番を整理する目的で使用し、lintとformatの基本機能は、romeで行う
module.exports = {
	root: true,
	extends: ['next/core-web-vitals', 'plugin:import/warnings'],
	plugins: ['import'],
	rules: {
		'jsx-quotes': ['warn', 'prefer-double'],
		'linebreak-style': ['error', 'unix'],
		'import/order': [
			'error',
			{
				groups: ['builtin', 'external', 'parent', 'sibling', 'index', 'object', 'type'],
				pathGroups: [
					{
						pattern: 'react, next/*',
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
