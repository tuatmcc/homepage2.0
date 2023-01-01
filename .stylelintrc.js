module.exports = {
	extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
	plugins: ['stylelint-order', 'stylelint-declaration-strict-value'],
	rules: {
		'string-quotes': 'single',
		indentation: 2,
		'at-rule-no-unknown': null,
		'property-no-unknown': true,
		'order/properties-alphabetical-order': null,
		'declaration-block-trailing-semicolon': null,
		'no-descending-specificity': null,
		'no-empty-source': null,
		'no-eol-whitespace': true,
		'no-extra-semicolons': true,
		'no-invalid-double-slash-comments': null,
		'no-missing-end-of-source-newline': true,
		'no-unknown-animations': true,
		'selector-class-pattern': '^([_]?)[a-z][a-zA-Z0-9]+$', // lowerCamelCase or _lowerCamelCase
	},
	ignoreFiles: ['node_modules/**/*', 'public/**/*', 'out/**/*', '.next/**/*'],
};
