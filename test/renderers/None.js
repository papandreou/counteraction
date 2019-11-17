const None = require('../../lib/renderers/None');
const expect = require('unexpected');

describe('None', function() {
  it('should have a name of none', function() {
    expect(None, 'to have property', 'name', 'none');
  });

  it('should render a small number', function() {
    expect(new None().render(12), 'to equal', '');
  });
});
