const CounterStyle = require('./CounterStyle');

module.exports = class Alphabetic extends CounterStyle {
  static get cssName() {
    return 'alphabetic';
  }

  renderValue(counterValue) {
    let remainder = counterValue;
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
