const cldr = require('cldr');
const _ = require('lodash');
const fs = require('fs');
const pathModule = require('path');
const prettier = require('prettier');
const prettierConfig = prettier.resolveConfig.sync();
const { CLIEngine, Linter } = require('eslint');

const rbnfNameByCssName = {
  'lower-greek': 'renderGreekNumeralMinuscules',
  'upper-greek': 'renderGreekNumeralMajuscules',
  georgian: 'renderGeorgian',
  'upper-roman': 'renderRomanUpper',
  'lower-roman': 'renderRomanLower',
  armenian: 'renderArmenianLower',
  hebrew: 'renderHebrew',
  ethiopic: 'renderEthiopic',
  tamil: 'renderTamil'
};

for (const [cssName, rbnfName] of Object.entries(rbnfNameByCssName)) {
  const renderers = cldr.extractRbnfFunctionByType('root', rbnfName);

  const className = _.camelCase(cssName).replace(/^[a-z]/, $0 =>
    $0.toUpperCase()
  );

  const methods = Object.entries(renderers).map(([name, fn]) => {
    if (name === 'renderNumber') {
      return `renderNumber(n) { return String(n); }`;
    } else {
      return `${name}${fn.toString().replace(/^function anonymous/, '')}`;
    }
  });

  let code = `// Generated from require('cldr').extractRbnfFunctionByType('root', '${rbnfName}');

module.exports = class ${className} {
  static get cssName() {
    return '${cssName}';
  }

  render(counterValue) {
    return this.${rbnfName}(counterValue);
  }

  ${methods.join('\n\n  ')}
};
`;

  const outputFileName = pathModule.resolve(
    __dirname,
    'lib',
    'renderers',
    `${className}.js`
  );

  const eslintConfig = new CLIEngine().getConfigForFile(outputFileName);
  const linter = new Linter();
  const result = linter.verifyAndFix(code, eslintConfig);
  code = result.output;

  code = prettier.format(code, { ...prettierConfig, parser: 'babel' });

  fs.writeFileSync(outputFileName, code);
}
