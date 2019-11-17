const CounterStyle = require('./CounterStyle');

module.exports = class Symbolic extends CounterStyle {
  static get cssName() {
    return 'symbolic';
  }

  renderValue(counterValue) {
    if (counterValue >= 1 && this.textBySymbolNumber.length > 0) {
      const numRepetitions =
        1 + Math.floor((counterValue - 1) / this.textBySymbolNumber.length);
      return this.textBySymbolNumber[
        (counterValue - 1) % this.textBySymbolNumber.length
      ].repeat(numRepetitions);
    }
  }
};
