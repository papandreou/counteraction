const UpperLatin = require('../../lib/renderers/UpperLatin');
const expect = require('unexpected');

describe('UpperLatin', function() {
  it('should have a cssName of upper-latin', function() {
    expect(UpperLatin, 'to have property', 'cssName', 'upper-latin');
  });

  it('should render a small number', function() {
    expect(new UpperLatin().render(12), 'to equal', 'L');
  });

  it('should render a big number', function() {
    expect(new UpperLatin().render(1234), 'to equal', 'AUL');
  });

  it('should render a negative number', function() {
    expect(new UpperLatin().render(-12), 'to equal', '-12');
  });
});
