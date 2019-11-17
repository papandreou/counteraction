const CounterStyle = require('./CounterStyle');

module.exports = class Alphabetic extends CounterStyle {
  static get name() {
    return 'alphabetic';
  }

  renderValue(counterValue) {
    let remainder = counterValue;
    if (remainder >= 1 && this.textBySymbolNumber.length > 0) {
      let text = '';
      while (remainder > 0) {
        text =
          this.textBySymbolNumber[
            (remainder - 1) % this.textBySymbolNumber.length
          ] + text;
        remainder = Math.floor(
          (remainder - 1) / this.textBySymbolNumber.length
        );
      }
      return text;
    }
  }
};
