const Alphabetic = require('../../lib/renderers/Alphabetic');
const expect = require('unexpected');

describe('Alphabetic', function() {
  it('should have a name of alphabetic', function() {
    expect(Alphabetic, 'to have property', 'name', 'alphabetic');
  });

  it('should wrap around and interpret the symbols as digits', function() {
    const alphabetic = new Alphabetic({ symbols: 'A B' });

    expect(alphabetic.render(1), 'to equal', 'A');
    expect(alphabetic.render(2), 'to equal', 'B');
    expect(alphabetic.render(3), 'to equal', 'AA');
    expect(alphabetic.render(4), 'to equal', 'AB');
    expect(alphabetic.render(5), 'to equal', 'BA');
  });

  it('should fall back', function() {
    const alphabetic = new Alphabetic({ symbols: 'A B' });

    expect(alphabetic.render(-1), 'to equal', '-1');
    expect(alphabetic.render(0), 'to equal', '0');
  });

  describe('with a range', function() {
    it('should fall back when rendering values outside of the range', function() {
      const alphabetic = new Alphabetic({
        symbols: 'A B C D E F G H I J K L',
        range: '1 2, 4 5, 7 infinite'
      });

      expect(alphabetic.render(1), 'to equal', 'A');
      expect(alphabetic.render(2), 'to equal', 'B');
      expect(alphabetic.render(3), 'to equal', '3');
      expect(alphabetic.render(4), 'to equal', 'D');
      expect(alphabetic.render(5), 'to equal', 'E');
      expect(alphabetic.render(6), 'to equal', '6');
      expect(alphabetic.render(7), 'to equal', 'G');
      expect(alphabetic.render(9999), 'to equal', 'EIEC');
    });
  });
});
