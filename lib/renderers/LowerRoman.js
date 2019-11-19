// Generated from require('cldr').extractRbnfFunctionByType('root', 'renderRomanLower');

module.exports = class LowerRoman {
  static get cssName() {
    return 'lower-roman';
  }

  render(counterValue) {
    return this.renderRomanLower(counterValue);
  }

  renderNumber(n) {
    return String(n);
  }

  renderRomanLower(n) {
    const isFractional = n !== Math.floor(n);
    if (n < 0) return `\u2212${this.renderRomanLower(-n)}`;
    if (isFractional && n > 1) return this.renderNumber(n, '#,##0.00');
    if (n >= 5000) return this.renderNumber(n, '#,##0');
    if (n >= 4000)
      return `mmmm${n % 4000 === 0 ? '' : this.renderRomanLower(n % 1000)}`;
    if (n >= 3000)
      return `mmm${n % 3000 === 0 ? '' : this.renderRomanLower(n % 1000)}`;
    if (n >= 2000)
      return `mm${n % 2000 === 0 ? '' : this.renderRomanLower(n % 1000)}`;
    if (n >= 1000)
      return `m${n % 1000 === 0 ? '' : this.renderRomanLower(n % 1000)}`;
    if (n >= 900)
      return `cm${n % 900 === 0 ? '' : this.renderRomanLower(n % 100)}`;
    if (n >= 800)
      return `dccc${n % 800 === 0 ? '' : this.renderRomanLower(n % 100)}`;
    if (n >= 700)
      return `dcc${n % 700 === 0 ? '' : this.renderRomanLower(n % 100)}`;
    if (n >= 600)
      return `dc${n % 600 === 0 ? '' : this.renderRomanLower(n % 100)}`;
    if (n >= 500)
      return `d${n % 500 === 0 ? '' : this.renderRomanLower(n % 100)}`;
    if (n >= 400)
      return `cd${n % 400 === 0 ? '' : this.renderRomanLower(n % 100)}`;
    if (n >= 300)
      return `ccc${n % 300 === 0 ? '' : this.renderRomanLower(n % 100)}`;
    if (n >= 200)
      return `cc${n % 200 === 0 ? '' : this.renderRomanLower(n % 100)}`;
    if (n >= 100)
      return `c${n % 100 === 0 ? '' : this.renderRomanLower(n % 100)}`;
    if (n >= 90)
      return `xc${n % 90 === 0 ? '' : this.renderRomanLower(n % 10)}`;
    if (n >= 80)
      return `lxxx${n % 80 === 0 ? '' : this.renderRomanLower(n % 10)}`;
    if (n >= 70)
      return `lxx${n % 70 === 0 ? '' : this.renderRomanLower(n % 10)}`;
    if (n >= 60)
      return `lx${n % 60 === 0 ? '' : this.renderRomanLower(n % 10)}`;
    if (n >= 50) return `l${n % 50 === 0 ? '' : this.renderRomanLower(n % 10)}`;
    if (n >= 40)
      return `xl${n % 40 === 0 ? '' : this.renderRomanLower(n % 10)}`;
    if (n >= 30)
      return `xxx${n % 30 === 0 ? '' : this.renderRomanLower(n % 10)}`;
    if (n >= 20)
      return `xx${n % 20 === 0 ? '' : this.renderRomanLower(n % 10)}`;
    if (n >= 10) return `x${n % 10 === 0 ? '' : this.renderRomanLower(n % 10)}`;
    if (n >= 9) return 'ix';
    if (n >= 8) return 'viii';
    if (n >= 7) return 'vii';
    if (n >= 6) return 'vi';
    if (n >= 5) return 'v';
    if (n >= 4) return 'iv';
    if (n >= 3) return 'iii';
    if (n >= 2) return 'ii';
    if (n >= 1) return 'i';
    return 'n';
  }
};
