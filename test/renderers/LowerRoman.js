const LowerRoman = require('../../lib/renderers/LowerRoman');
const expect = require('unexpected');

describe('LowerRoman', function() {
  it('should have a name of lower-roman', function() {
    expect(LowerRoman, 'to have property', 'name', 'lower-roman');
  });

  it('should render a small number', function() {
    expect(new LowerRoman().render(12), 'to equal', 'xii');
  });

  it('should render a big number', function() {
    expect(new LowerRoman().render(1234), 'to equal', 'mccxxxiv');
  });

  it('should render a negative number', function() {
    expect(new LowerRoman().render(-12), 'to equal', '−xii');
  });
});
