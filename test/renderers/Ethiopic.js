const Ethiopic = require('../../lib/renderers/Ethiopic');
const expect = require('unexpected');

describe('Ethiopic', function () {
  it('should have a cssName of ethiopic', function () {
    expect(Ethiopic, 'to have property', 'cssName', 'ethiopic');
  });

  it('should render a small number', function () {
    expect(new Ethiopic().render(12), 'to equal', '፲፪');
  });

  it('should render a big number', function () {
    expect(new Ethiopic().render(1234), 'to equal', '፲፪፻፴፬');
  });

  it('should render a negative number', function () {
    expect(new Ethiopic().render(-12), 'to equal', '−፲፪');
  });
});
