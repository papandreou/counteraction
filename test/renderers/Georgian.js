const Georgian = require('../../lib/renderers/Georgian');
const expect = require('unexpected');

describe('Georgian', function() {
  it('should have a name of georgian', function() {
    expect(Georgian, 'to have property', 'name', 'georgian');
  });

  it('should render a small number', function() {
    expect(new Georgian().render(12), 'to equal', 'იბ');
  });

  it('should render a big number', function() {
    expect(new Georgian().render(1234), 'to equal', 'შსლდ');
  });

  it('should render a negative number', function() {
    expect(new Georgian().render(-12), 'to equal', '−იბ');
  });
});
