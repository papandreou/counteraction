const Symbolic = require('../../lib/renderers/Symbolic');
const expect = require('unexpected');

describe('Symbolic', function() {
  it('should have a name of symbolic', function() {
    expect(Symbolic, 'to have property', 'name', 'symbolic');
  });

  it('should wrap around and duplicate the symbols one more time after each wrap', function() {
    const symbolic = new Symbolic({ symbols: 'A B' });

    expect(symbolic.render(1), 'to equal', 'A');
    expect(symbolic.render(2), 'to equal', 'B');
    expect(symbolic.render(3), 'to equal', 'AA');
    expect(symbolic.render(4), 'to equal', 'BB');
    expect(symbolic.render(5), 'to equal', 'AAA');
  });

  it('should fall back', function() {
    const symbolic = new Symbolic({ symbols: 'A B' });

    expect(symbolic.render(-1), 'to equal', '-1');
    expect(symbolic.render(0), 'to equal', '0');
  });
});
