const DecimalLeadingZero = require('../../lib/renderers/DecimalLeadingZero');
const expect = require('unexpected');

describe('DecimalLeadingZero', function () {
  it('should have a cssName of decimal-leading-zero', function () {
    expect(
      DecimalLeadingZero,
      'to have property',
      'cssName',
      'decimal-leading-zero'
    );
  });

  it('should render a small number', function () {
    expect(new DecimalLeadingZero().render(12), 'to equal', '012');
  });

  it('should render a big number', function () {
    expect(new DecimalLeadingZero().render(123456), 'to equal', '0123456');
  });

  it('should render a negative number', function () {
    expect(new DecimalLeadingZero().render(-12), 'to equal', '-012');
  });
});
