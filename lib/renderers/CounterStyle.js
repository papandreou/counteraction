const unescapeCssString = require('../unescapeCssString');
const unquote = require('../unquote');
const cssCounters = require('../');

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
  constructor(options = {}) {
    // symbols, fallback, renderers
    this.options = options;
    this.renderers = options.renderers || {};

    this.textBySymbolNumber = [];
    if (Array.isArray(this.options.symbols)) {
      this.textBySymbolNumber = this.options.symbols;
    } else if (typeof this.options.symbols === 'string') {
      options.symbols.replace(
        /"((?:[^"\\]|\\.)*)"|'((?:[^'\\]|\\.)*)'|(url\(\s*(?:'(?:[^']|\\')*'|"(?:[^"]|\\")*"|(?:[^'"\\]|\\.)*?\s*)\)|([^'" ]+))/g,
        ($0, doubleQuotedString, singleQuotedString, url, other) => {
          if (typeof doubleQuotedString === 'string') {
            this.textBySymbolNumber.push(unescapeCssString(doubleQuotedString));
          } else if (typeof singleQuotedString === 'string') {
            this.textBySymbolNumber.push(unescapeCssString(singleQuotedString));
          } else if (typeof other === 'string') {
            this.textBySymbolNumber.push(other.trim());
          }
        }
      );
    }
  }

  renderFallback(counterValue) {
    let fallback = this.options.fallback;
    let fallbackRenderer;
    if (typeof fallback === 'function') {
      fallback = fallback();
    }
    if (typeof fallback === 'string') {
      if (this.renderers[fallback]) {
        fallbackRenderer = this.renderers[fallback];
      } else {
        fallbackRenderer = cssCounters(fallback);
      }
    } else if (typeof fallback === 'object') {
      fallbackRenderer = fallback;
    }
    fallbackRenderer = fallbackRenderer || cssCounters('decimal');
    return fallbackRenderer.render(counterValue);
  }

  render(counterValue) {
    let text = '';

    if (
      this.options.range &&
      this.options.range !== 'auto' &&
      !isWithinRange(counterValue, this.options.range)
    ) {
      return this.renderFallback(counterValue);
    }

    if (typeof this.options.prefix === 'string') {
      text += unescapeCssString(unquote(this.options.prefix));
    }

    if (counterValue < 0 && typeof this.options.negative === 'string') {
      text += unescapeCssString(unquote(this.options.negative));
    }

    const renderedValue = this.renderValue(counterValue);
    if (renderedValue === undefined) {
      text += this.renderFallback(counterValue);
    } else {
      text += renderedValue;
    }

    if (typeof this.options.suffix === 'string') {
      text += unescapeCssString(unquote(this.options.suffix));
    }
    const padValue = this.options.pad;
    if (typeof padValue === 'string') {
      padValue.replace(
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
