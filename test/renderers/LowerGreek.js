const LowerGreek = require('../../lib/renderers/LowerGreek');
const expect = require('unexpected');

describe('LowerGreek', function() {
  it('should have a name of lower-greek', function() {
    expect(LowerGreek, 'to have property', 'name', 'lower-greek');
  });

  it('should render a small number', function() {
    expect(new LowerGreek().render(12), 'to equal', 'ιβ´');
  });

  it('should render a big number', function() {
    expect(new LowerGreek().render(123456), 'to equal', 'ιβμ ͵γυνϝ´');
  });

  it('should render a negative number', function() {
    expect(new LowerGreek().render(-12), 'to equal', '−ιβ´');
  });
});
