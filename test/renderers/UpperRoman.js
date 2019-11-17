const UpperRoman = require('../../lib/renderers/UpperRoman');
const expect = require('unexpected');

describe('UpperRoman', function() {
  it('should have a cssName of upper-roman', function() {
    expect(UpperRoman, 'to have property', 'cssName', 'upper-roman');
  });

  it('should render a small number', function() {
    expect(new UpperRoman().render(12), 'to equal', 'XII');
  });

  it('should render a big number', function() {
    expect(new UpperRoman().render(1234), 'to equal', 'MCCXXXIV');
  });

  it('should render a negative number', function() {
    expect(new UpperRoman().render(-12), 'to equal', '−XII');
  });
});
