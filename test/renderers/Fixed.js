const Fixed = require('../../lib/renderers/Fixed');
const expect = require('unexpected');

describe('Fixed', function() {
  it('should have a cssName of fixed', function() {
    expect(Fixed, 'to have property', 'cssName', 'fixed');
  });

  describe('without an explicit fallback', function() {
    it('should fall back to decimal when rendering a number outside the range', function() {
      const fixed = new Fixed({ symbols: 'A B C D' });

      expect(fixed.render(1), 'to equal', 'A');
      expect(fixed.render(3), 'to equal', 'C');
      expect(fixed.render(5), 'to equal', '5');
    });
  });

  describe('with an explicit @custom-counter fallback', function() {
    it('should fall back to the fallback style when rendering a number outside the range', function() {
      const fixed = new Fixed({
        system: 'fixed',
        symbols: 'A B C D',
        fallback: 'foo',
        renderers: {
          foo: new Fixed({ symbols: 'Ⓐ Ⓑ Ⓒ Ⓓ Ⓔ Ⓕ' })
        }
      });
      expect(fixed.render(1), 'to equal', 'A');
      expect(fixed.render(3), 'to equal', 'C');
      expect(fixed.render(5), 'to equal', 'Ⓔ');
    });
  });

  describe('with an explicit fallback to a built-in counter style', function() {
    it('should fall back to the fallback style when rendering a number outside the range', function() {
      const fixed = new Fixed({
        symbols: 'A B C D',
        fallback: 'upper-roman'
      });
      expect(fixed.render(1), 'to equal', 'A');
      expect(fixed.render(3), 'to equal', 'C');
      expect(fixed.render(5), 'to equal', 'V');
    });
  });
});
