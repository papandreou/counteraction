const Disc = require('../../lib/renderers/Disc');
const expect = require('unexpected');

describe('Disc', function() {
  it('should have a cssName of disc', function() {
    expect(Disc, 'to have property', 'cssName', 'disc');
  });

  it('should render a small number', function() {
    expect(new Disc().render(12), 'to equal', '•');
  });
});
