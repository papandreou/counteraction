const CounterStyle = require('./CounterStyle');

module.exports = class Fixed extends CounterStyle {
  static get cssName() {
    return 'fixed';
  }

  renderValue(counterValue) {
    const firstSymbolValue = 1;
    // TODO: Find out where this came from:
    // const matchFixedWithNumber = system.match(/^\s*fixed\s+(-?\d+)\s*$/);
    // if (matchFixedWithNumber) {
    //   firstSymbolValue = parseInt(matchFixedWithNumber[1]);
    // }
    const symbolIndex = counterValue - firstSymbolValue;
    if (symbolIndex >= 0 && symbolIndex < this.symbols.length) {
      return this.symbols[symbolIndex];
    }
  }
};
