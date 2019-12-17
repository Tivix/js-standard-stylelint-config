const generateConfig = require('./generateConfig');

module.exports = generateConfig({
  extends: ['stylelint-config-styled-components'],
  processors: ['stylelint-processor-styled-components'],
});
