const CounterStyle = require('./CounterStyle');

module.exports = class Cyclic extends (
  CounterStyle
) {
  static get cssName() {
    return 'cyclic';
  }

  renderValue(counterValue) {
    if (counterValue >= 1 && this.symbols.length > 0) {
      return this.symbols[(counterValue - 1) % this.symbols.length];
    }
  }
};
