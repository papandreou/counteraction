const CounterStyle = require('./CounterStyle');

module.exports = class Symbolic extends (
  CounterStyle
) {
  static get cssName() {
    return 'symbolic';
  }

  renderValue(counterValue) {
    if (counterValue >= 1 && this.symbols.length > 0) {
      const numRepetitions =
        1 + Math.floor((counterValue - 1) / this.symbols.length);
      return this.symbols[(counterValue - 1) % this.symbols.length].repeat(
        numRepetitions
      );
    }
  }
};
