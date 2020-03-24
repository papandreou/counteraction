const Additive = require('../../lib/renderers/Additive');
const expect = require('unexpected');

describe('Additive', function () {
  it('should have a cssName of additive', function () {
    expect(Additive, 'to have property', 'cssName', 'additive');
  });

  it('should fall back', function () {
    const additive = new Additive({ symbols: 'A B' });

    expect(additive.render(-1), 'to equal', '-1');
    expect(additive.render(0), 'to equal', '0');
  });

  it('should render the values correctly', function () {
    const additive = new Additive({
      range: '1 3999',
      'additive-symbols':
        '1000 M, 900 CM, 500 D, 400 CD, 100 C, 90 XC, 50 L, 40 XL, 10 X, 9 IX, 5 V, 4 IV, 1 I',
    });
    expect(additive.render(123), 'to equal', 'CXXIII');
  });

  it('should support quoted strings', function () {
    const additive = new Additive({
      range: '1 3999',
      'additive-symbols':
        "100 'C,foo', 90 XC, 50 L, 40 XL, 10 X, 9 IX, 5 V, 4 IV, 1 I",
    });
    expect(additive.render(123), 'to equal', 'C,fooXXIII');
  });

  it('should not mind if the symbols are not defined in order of decreasing value', function () {
    const additive = new Additive({
      range: '1 3999',
      'additive-symbols':
        '1000 M, 900 CM, 500 D, 400 CD, 90 XC, 50 L, 40 XL, 10 X, 9 IX, 5 V, 4 IV, 1 I, 100 C',
    });

    expect(additive.render(123), 'to equal', 'CXXIII');
  });
});
