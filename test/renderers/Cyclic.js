const Cyclic = require('../../lib/renderers/Cyclic');
const expect = require('unexpected');

describe('Cyclic', function() {
  it('should have a cssName of cyclic', function() {
    expect(Cyclic, 'to have property', 'cssName', 'cyclic');
  });

  it('should wrap around', function() {
    const cyclic = new Cyclic({ symbols: 'A B C D' });

    expect(cyclic.render(1), 'to equal', 'A');
    expect(cyclic.render(3), 'to equal', 'C');
    expect(cyclic.render(5), 'to equal', 'A');
  });

  it('should fall back', function() {
    const cyclic = new Cyclic({ symbols: 'A B' });

    expect(cyclic.render(-1), 'to equal', '-1');
    expect(cyclic.render(0), 'to equal', '0');
  });
});
