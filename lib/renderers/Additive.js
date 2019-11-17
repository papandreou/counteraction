const CounterStyle = require('./CounterStyle');

module.exports = class Additive extends CounterStyle {
  static get cssName() {
    return 'additive';
  }

  renderValue(counterValue) {
    const tokens = [];
    (this.options['additive-symbols'] || '').replace(
      /(\d+)\s+(?:(url\(\s*(?:'(?:[^']|\\')*'|"(?:[^"]|\\")*"|(?:[^'"\\]|\\.)*?\s*)\))|"((?:[^"\\]|\\.)*)"|'((?:[^'\\]|\\.)*)'|([^'",]+))/g,
      ($0, value, url, doubleQuotedString, singleQuotedString, other) => {
        let text = '';
        if (typeof doubleQuotedString === 'string') {
          text = doubleQuotedString;
        } else if (typeof singleQuotedString === 'string') {
          text = singleQuotedString;
        } else if (typeof other === 'string') {
          text = other;
        }
        tokens.push({
          value: parseInt(value, 10),
          text
        });
      }
    );
    if (tokens.length > 0) {
      let text = '';
      let remainder = counterValue;
      // Sort by descending value so we can greedily find the symbols to use:
      tokens.sort((a, b) => b.value - a.value);
      remainder = counterValue;
      for (const token of tokens) {
        while (remainder >= token.value) {
          text += token.text;
          remainder -= token.value;
        }
      }
      return text;
    }
  }
};
