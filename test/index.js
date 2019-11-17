const cssCounter = require('../lib/index');
const expect = require('unexpected');

describe('index', function() {
  it('should create a counter renderer', function() {
    const renderer = cssCounter('lower-roman');
    expect(renderer.render(12), 'to equal', 'xii');
  });
});
