module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  plugins: [
    'stylelint-scss',
    'stylelint-order',
    'stylelint-declaration-strict-value',
  ],
  rules: {
    'string-quotes': 'single',
    'scss/at-import-no-partial-leading-underscore': null,
    'at-rule-no-unknown': null,
    'property-no-unknown': true,
    'order/properties-alphabetical-order': true,
    'selector-class-pattern': '^([_]?)[a-z][a-zA-Z0-9]+$', // lowerCamelCase
  },
  ignoreFiles: ['node_modules/**/*', 'public/**/*'],
}
