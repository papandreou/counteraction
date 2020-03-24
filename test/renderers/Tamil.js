const Tamil = require('../../lib/renderers/Tamil');
const expect = require('unexpected');

describe('Tamil', function () {
  it('should have a cssName of tamil', function () {
    expect(Tamil, 'to have property', 'cssName', 'tamil');
  });

  it('should render a small number', function () {
    expect(new Tamil().render(12), 'to equal', '௰௨');
  });

  it('should render a big number', function () {
    expect(new Tamil().render(1234), 'to equal', '௲௨௱௩௰௪');
  });

  it('should render a negative number', function () {
    expect(new Tamil().render(-12), 'to equal', '−௰௨');
  });
});
