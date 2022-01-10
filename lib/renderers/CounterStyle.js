const unescapeCssString = require('../unescapeCssString');
const unquote = require('../unquote');

function isWithinRange(value, range) {
  const subRanges = range.split(/\s*,\s*/);
  for (let i = 0; i < subRanges.length; i += 1) {
    const endpoints = subRanges[i].split(/\s+/);
    let lower = endpoints[0];
    let upper = endpoints[1];
    if (lower.toLowerCase() === 'infinite') {
      lower = -Infinity;
    }
    if (upper.toLowerCase() === 'infinite') {
      upper = Infinity;
    }
    if (value >= lower && value <= upper) {
      return true;
    }
  }
  return false;
}

module.exports = class CounterStyle {
  constructor({
    prefix,
    suffix,
    negative,
    pad,
    range,
    fallback,
    symbols,
  } = {}) {
    this.prefix = prefix;
    this.suffix = suffix;
    this.negative = negative;
    this.pad = pad;
    this.range = range;
    this.fallback = fallback;
    if (Array.isArray(symbols)) {
      this.symbols = symbols;
    } else {
      this.symbols = [];
      if (typeof symbols === 'string') {
        symbols.replace(
          /"((?:[^"\\]|\\.)*)"|'((?:[^'\\]|\\.)*)'|(url\(\s*(?:'(?:[^']|\\')*'|"(?:[^"]|\\")*"|(?:[^'"\\]|\\.)*?\s*)\)|([^'" ]+))/g,
          ($0, doubleQuotedString, singleQuotedString, url, other) => {
            if (typeof doubleQuotedString === 'string') {
              this.symbols.push(unescapeCssString(doubleQuotedString));
            } else if (typeof singleQuotedString === 'string') {
              this.symbols.push(unescapeCssString(singleQuotedString));
            } else if (typeof other === 'string') {
              this.symbols.push(other.trim());
            }
          }
        );
      }
    }
  }

  renderFallback(counterValue) {
    let fallback = this.fallback;
    let fallbackRenderer;
    if (typeof fallback === 'function') {
      fallback = fallback();
    }
    if (typeof fallback === 'string') {
      fallbackRenderer = require('..')(fallback);
    } else if (typeof fallback === 'object') {
      fallbackRenderer = fallback;
    }
    fallbackRenderer = fallbackRenderer || require('..')('decimal');
    return fallbackRenderer.render(counterValue);
  }

  render(counterValue) {
    let text = '';

    if (
      this.range &&
      this.range !== 'auto' &&
      !isWithinRange(counterValue, this.range)
    ) {
      return this.renderFallback(counterValue);
    }

    if (typeof this.prefix === 'string') {
      text += unescapeCssString(unquote(this.prefix));
    }

    if (counterValue < 0 && typeof this.negative === 'string') {
      text += unescapeCssString(unquote(this.negative));
    }

    const renderedValue = this.renderValue(counterValue);
    if (renderedValue === undefined) {
      text += this.renderFallback(counterValue);
    } else {
      text += renderedValue;
    }

    if (typeof this.suffix === 'string') {
      text += unescapeCssString(unquote(this.suffix));
    }
    if (typeof this.pad === 'string') {
      this.pad.replace(
        /\d+ (?:"((?:[^"\\]|\\.)*)"|'((?:[^'\\]|\\.)*)'|(url\(\s*(?:'(?:[^']|\\')*'|"(?:[^"]|\\")*"|(?:[^'"\\]|\\.)*?\s*)\)))/g,
        ($0, doubleQuotedString, singleQuotedString) => {
          if (typeof doubleQuotedString === 'string') {
            text += unescapeCssString(doubleQuotedString);
          } else if (typeof singleQuotedString === 'string') {
            text += unescapeCssString(singleQuotedString);
          }
        }
      );
    }

    return text;
  }
};
