module.exports = ({
  extends: configs = [],
  processors = [],
  rules = {},
} = {}) => ({
  extends: [
    'stylelint-config-standard',
    ...configs,
    'stylelint-config-prettier',
  ],
  processors: [...processors],
  rules: {
    ...rules,
  },
});
