const Armenian = require('../../lib/renderers/Armenian');
const expect = require('unexpected');

describe('Armenian', function() {
  it('should have a name of armenian', function() {
    expect(Armenian, 'to have property', 'name', 'armenian');
  });

  it('should render a small number', function() {
    expect(new Armenian().render(12), 'to equal', 'ժբ');
  });

  it('should render a big number', function() {
    expect(new Armenian().render(1234), 'to equal', 'ռմլդ');
  });

  it('should render a negative number', function() {
    expect(new Armenian().render(-12), 'to equal', '−ժբ');
  });
});
