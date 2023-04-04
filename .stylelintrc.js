module.exports = {
	extends: ['stylelint-config-recess-order', 'stylelint-config-standard'],
	plugins: ['stylelint-declaration-strict-value'],
	rules: {
		'string-quotes': 'single',
		indentation: 2,
		'selector-class-pattern': '^([_]?)[a-z][a-zA-Z0-9]+$', // lowerCamelCase or _lowerCamelCase
		// 'max-nesting-depth': 5,
		'font-weight-notation': 'named-where-possible',
		'at-rule-no-unknown': true,
		'property-no-unknown': true,
		'declaration-no-important': true,
		'no-empty-source': true,
		'no-unknown-animations': true,
		'max-line-length': 200,
	},
	reportNeedlessDisables: true,
	reportInvalidScopeDisables: true,
};
