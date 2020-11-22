const CounterStyle = require('./CounterStyle');

module.exports = class Numeric extends (
  CounterStyle
) {
  static get cssName() {
    return 'numeric';
  }

  renderValue(counterValue) {
    let remainder = counterValue + 1;
    if (remainder >= 1 && this.symbols.length > 0) {
      let text = '';
      while (remainder > 0) {
        text = this.symbols[(remainder - 1) % this.symbols.length] + text;
        remainder = Math.floor((remainder - 1) / this.symbols.length);
      }
      return text;
    }
  }
};
