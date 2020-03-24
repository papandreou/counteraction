const counteraction = require('../lib/index');
const expect = require('unexpected');

describe('index', function () {
  it('should create a counter renderer by name', function () {
    const renderer = counteraction('lower-roman');
    expect(renderer.render(12), 'to equal', 'xii');
  });

  it('should return undefined if an unknown name is passed', function () {
    const renderer = counteraction('foo');
    expect(renderer, 'to be undefined');
  });

  it('should return undefined if undefined is passed as the name', function () {
    const renderer = counteraction(undefined);
    expect(renderer, 'to be undefined');
  });

  it('should create a @counter-style renderer by an options object', function () {
    const renderer = counteraction({
      system: 'fixed',
      symbols: ['A', 'B'],
    });
    expect(renderer.render(1), 'to equal', 'A');
    expect(renderer.render(2), 'to equal', 'B');
  });

  it('should create a @counter-style renderer by a system string and an options object', function () {
    const renderer = counteraction('fixed', {
      symbols: ['A', 'B'],
    });
    expect(renderer.render(2), 'to equal', 'B');
  });

  it('should create a @counter-style renderer by an object of props and an options object', function () {
    const renderer = counteraction(
      {
        system: 'fixed',
        symbols: ['A', 'B'],
      },
      {
        fallback: 'disc',
      }
    );
    expect(renderer.render(1), 'to equal', 'A');
    expect(renderer.render(2), 'to equal', 'B');
    expect(renderer.render(3), 'to equal', '•');
  });

  describe('supports', function () {
    describe('when given a name', function () {
      it('should return true for a supported list-style-type', function () {
        expect(counteraction.supports('disc'), 'to be true');
      });

      it('should return true for a supported @counter-style system', function () {
        expect(counteraction.supports('fixed'), 'to be true');
      });

      it('should return false for a unsupported type', function () {
        expect(counteraction.supports('foo'), 'to be false');
      });
    });

    describe('when given an object with a system property', function () {
      it('should return true for a supported @counter-style system', function () {
        expect(
          counteraction.supports({ system: 'fixed', symbols: ['A'] }),
          'to be true'
        );
      });

      it('should return false for a supported @counter-style system', function () {
        expect(counteraction.supports({ system: 'foo' }), 'to be false');
      });
    });

    it('should return true for a unsupported type', function () {
      expect(counteraction.supports('foo'), 'to be false');
    });
  });
});
