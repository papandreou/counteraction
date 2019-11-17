const CounterStyle = require('./CounterStyle');

module.exports = class Cyclic extends CounterStyle {
  static get cssName() {
    return 'cyclic';
  }

  renderValue(counterValue) {
    if (counterValue >= 1 && this.textBySymbolNumber.length > 0) {
      return this.textBySymbolNumber[
        (counterValue - 1) % this.textBySymbolNumber.length
      ];
    }
  }
};
