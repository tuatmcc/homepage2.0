module.exports = {
  extends: ['stylelint-config-standard'],
  rules: {
    'declaration-property-value-no-unknown': true,
    'selector-class-pattern': '^([_]?)[a-z][a-zA-Z0-9]+$', // lowerCamelCase or _lowerCamelCase
    // 'max-nesting-depth': 5,
    'font-weight-notation': 'named-where-possible',
    'at-rule-no-unknown': true,
    'property-no-unknown': true,
    'declaration-no-important': true,
    'no-empty-source': true,
    'no-unknown-animations': true,
  },
  reportNeedlessDisables: true,
  reportInvalidScopeDisables: true,
};
