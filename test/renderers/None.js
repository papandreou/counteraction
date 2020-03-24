const None = require('../../lib/renderers/None');
const expect = require('unexpected');

describe('None', function () {
  it('should have a cssName of none', function () {
    expect(None, 'to have property', 'cssName', 'none');
  });

  it('should render a small number', function () {
    expect(new None().render(12), 'to equal', '');
  });
});
