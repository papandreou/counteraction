const Decimal = require('../../lib/renderers/Decimal');
const expect = require('unexpected');

describe('Decimal', function () {
  it('should have a cssName of decimal', function () {
    expect(Decimal, 'to have property', 'cssName', 'decimal');
  });

  it('should render a small number', function () {
    expect(new Decimal().render(12), 'to equal', '12');
  });

  it('should render a big number', function () {
    expect(new Decimal().render(123456), 'to equal', '123456');
  });

  it('should render a negative number', function () {
    expect(new Decimal().render(-12), 'to equal', '-12');
  });
});
