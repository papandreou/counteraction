const Fixed = require('../../lib/renderers/Fixed');
const Disc = require('../../lib/renderers/Disc');
const expect = require('unexpected');

describe('CounterStyle', function () {
  describe('with a lazy fallback passed as a function', function () {
    it('should support a list-style-type being returned', function () {
      // Test via subclass
      const fixed = new Fixed({
        symbols: 'A B',
        fallback() {
          return 'disc';
        },
      });

      expect(fixed.render(1), 'to equal', 'A');
      expect(fixed.render(2), 'to equal', 'B');
      expect(fixed.render(3), 'to equal', '•');
    });

    it('should support a renderer being returned', function () {
      // Test via subclass
      const fixed = new Fixed({
        symbols: 'A B',
        fallback() {
          return new Disc();
        },
      });

      expect(fixed.render(1), 'to equal', 'A');
      expect(fixed.render(2), 'to equal', 'B');
      expect(fixed.render(3), 'to equal', '•');
    });
  });
});
