const Numeric = require('../../lib/renderers/Numeric');
const expect = require('unexpected');

describe('Numeric', function () {
  it('should have a cssName of numeric', function () {
    expect(Numeric, 'to have property', 'cssName', 'numeric');
  });

  it('should wrap around and interpret the symbols as digits', function () {
    const numeric = new Numeric({ symbols: 'A B' });

    expect(numeric.render(0), 'to equal', 'A');
    expect(numeric.render(1), 'to equal', 'B');
    expect(numeric.render(2), 'to equal', 'AA');
    expect(numeric.render(3), 'to equal', 'AB');
    expect(numeric.render(4), 'to equal', 'BA');
  });

  it('should fall back', function () {
    const numeric = new Numeric({ symbols: 'A B' });

    expect(numeric.render(-1), 'to equal', '-1');
  });
});
