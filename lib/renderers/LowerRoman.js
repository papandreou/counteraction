// Adapted from require('cldr').extractRbnfFunctionByType.renderRomanLower.toString()

module.exports = class LowerRoman {
  static get cssName() {
    return 'lower-roman';
  }

  render(counterValue) {
    if (counterValue < 0) {
      return `−${this.render(-counterValue)}`;
    }
    if (counterValue >= 5e3) {
      return String(counterValue);
    }
    if (counterValue >= 4e3) {
      return `mmmm${
        counterValue === 4e3 ? '' : this.render(counterValue % 1e3)
      }`;
    }
    if (counterValue >= 3e3) {
      return `mmm${
        counterValue === 3e3 ? '' : this.render(counterValue % 1e3)
      }`;
    }
    if (counterValue >= 2e3) {
      return `mm${counterValue === 2e3 ? '' : this.render(counterValue % 1e3)}`;
    }
    if (counterValue >= 1e3) {
      return `m${counterValue === 1e3 ? '' : this.render(counterValue % 1e3)}`;
    }
    if (counterValue >= 900) {
      return `cm${counterValue === 900 ? '' : this.render(counterValue % 100)}`;
    }
    if (counterValue >= 800) {
      return `dccc${
        counterValue === 800 ? '' : this.render(counterValue % 100)
      }`;
    }
    if (counterValue >= 700) {
      return `dcc${
        counterValue === 700 ? '' : this.render(counterValue % 100)
      }`;
    }
    if (counterValue >= 600) {
      return `dc${counterValue === 600 ? '' : this.render(counterValue % 100)}`;
    }
    if (counterValue >= 500) {
      return `d${counterValue === 500 ? '' : this.render(counterValue % 100)}`;
    }
    if (counterValue >= 400) {
      return `cd${counterValue === 400 ? '' : this.render(counterValue % 100)}`;
    }
    if (counterValue >= 300) {
      return `ccc${
        counterValue === 300 ? '' : this.render(counterValue % 100)
      }`;
    }
    if (counterValue >= 200) {
      return `cc${counterValue === 200 ? '' : this.render(counterValue % 100)}`;
    }
    if (counterValue >= 100) {
      return `c${counterValue === 100 ? '' : this.render(counterValue % 100)}`;
    }
    if (counterValue >= 90) {
      return `xc${counterValue === 90 ? '' : this.render(counterValue % 10)}`;
    }
    if (counterValue >= 80) {
      return `lxxx${counterValue === 80 ? '' : this.render(counterValue % 10)}`;
    }
    if (counterValue >= 70) {
      return `lxx${counterValue === 70 ? '' : this.render(counterValue % 10)}`;
    }
    if (counterValue >= 60) {
      return `lx${counterValue === 60 ? '' : this.render(counterValue % 10)}`;
    }
    if (counterValue >= 50) {
      return `l${counterValue === 50 ? '' : this.render(counterValue % 10)}`;
    }
    if (counterValue >= 40) {
      return `xl${counterValue === 40 ? '' : this.render(counterValue % 10)}`;
    }
    if (counterValue >= 30) {
      return `xxx${counterValue === 30 ? '' : this.render(counterValue % 10)}`;
    }
    if (counterValue >= 20) {
      return `xx${counterValue === 20 ? '' : this.render(counterValue % 10)}`;
    }
    if (counterValue >= 10) {
      return `x${counterValue === 10 ? '' : this.render(counterValue % 10)}`;
    }
    if (counterValue >= 9) {
      return 'ix';
    }
    if (counterValue >= 8) {
      return 'viii';
    }
    if (counterValue >= 7) {
      return 'vii';
    }
    if (counterValue >= 6) {
      return 'vi';
    }
    if (counterValue >= 5) {
      return 'v';
    }
    if (counterValue >= 4) {
      return 'iv';
    }
    if (counterValue >= 3) {
      return 'iii';
    }
    if (counterValue >= 2) {
      return 'ii';
    }
    if (counterValue >= 1) {
      return 'i';
    }
    if (counterValue >= 0) {
      return String(counterValue);
    }
  }
};
