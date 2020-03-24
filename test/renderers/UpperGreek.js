const UpperGreek = require('../../lib/renderers/UpperGreek');
const expect = require('unexpected');

describe('UpperGreek', function () {
  it('should have a cssName of upper-greek', function () {
    expect(UpperGreek, 'to have property', 'cssName', 'upper-greek');
  });

  it('should render a small number', function () {
    expect(new UpperGreek().render(12), 'to equal', 'ΙΒ');
  });

  it('should render a big number', function () {
    expect(new UpperGreek().render(123456), 'to equal', 'ΙΒΜ ͵ΓΥΝϜ');
  });

  it('should render a negative number', function () {
    expect(new UpperGreek().render(-12), 'to equal', '𐆊');
  });
});
