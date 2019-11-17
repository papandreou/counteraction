const LowerLatin = require('../../lib/renderers/LowerLatin');
const expect = require('unexpected');

describe('LowerLatin', function() {
  it('should have a name of lower-latin', function() {
    expect(LowerLatin, 'to have property', 'name', 'lower-latin');
  });

  it('should render a small number', function() {
    expect(new LowerLatin().render(12), 'to equal', 'l');
  });

  it('should render a big number', function() {
    expect(new LowerLatin().render(1234), 'to equal', 'aul');
  });

  it('should render a negative number', function() {
    expect(new LowerLatin().render(-12), 'to equal', '-12');
  });
});
