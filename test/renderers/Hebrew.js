const Hebrew = require('../../lib/renderers/Hebrew');
const expect = require('unexpected');

describe('Hebrew', function() {
  it('should have a cssName of hebrew', function() {
    expect(Hebrew, 'to have property', 'cssName', 'hebrew');
  });

  it('should render a small number', function() {
    expect(new Hebrew().render(12), 'to equal', 'י״ב');
  });

  it('should render a big number', function() {
    expect(new Hebrew().render(123456), 'to equal', 'קכ״ג׳תנ״ו');
  });

  it('should render a negative number', function() {
    expect(new Hebrew().render(-12), 'to equal', '−י״ב');
  });
});
