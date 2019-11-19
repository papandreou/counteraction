// Generated from require('cldr').extractRbnfFunctionByType('root', 'renderRomanUpper');

module.exports = class UpperRoman {
  static get cssName() {
    return 'upper-roman';
  }

  render(counterValue) {
    return this.renderRomanUpper(counterValue);
  }

  renderNumber(n) {
    return String(n);
  }

  renderRomanUpper(n) {
    const isFractional = n !== Math.floor(n);
    if (n < 0) return `\u2212${this.renderRomanUpper(-n)}`;
    if (isFractional && n > 1) return this.renderNumber(n, '#,##0.00');
    if (n >= 400000) return this.renderNumber(n, '#,##0');
    if (n >= 300000)
      return `ↈↈↈ${n % 300000 === 0 ? '' : this.renderRomanUpper(n % 100000)}`;
    if (n >= 200000)
      return `ↈↈ${n % 200000 === 0 ? '' : this.renderRomanUpper(n % 100000)}`;
    if (n >= 100000)
      return `ↈ${n % 100000 === 0 ? '' : this.renderRomanUpper(n % 100000)}`;
    if (n >= 90000)
      return `ↂↈ${n % 90000 === 0 ? '' : this.renderRomanUpper(n % 10000)}`;
    if (n >= 80000)
      return `ↇↂↂↂ${n % 80000 === 0 ? '' : this.renderRomanUpper(n % 10000)}`;
    if (n >= 70000)
      return `ↇↂↂ${n % 70000 === 0 ? '' : this.renderRomanUpper(n % 10000)}`;
    if (n >= 60000)
      return `ↇↂ${n % 60000 === 0 ? '' : this.renderRomanUpper(n % 10000)}`;
    if (n >= 50000)
      return `ↇ${n % 50000 === 0 ? '' : this.renderRomanUpper(n % 10000)}`;
    if (n >= 40000)
      return `ↂↇ${n % 40000 === 0 ? '' : this.renderRomanUpper(n % 10000)}`;
    if (n >= 30000)
      return `ↂↂↂ${n % 30000 === 0 ? '' : this.renderRomanUpper(n % 10000)}`;
    if (n >= 20000)
      return `ↂↂ${n % 20000 === 0 ? '' : this.renderRomanUpper(n % 10000)}`;
    if (n >= 10000)
      return `ↂ${n % 10000 === 0 ? '' : this.renderRomanUpper(n % 10000)}`;
    if (n >= 9000)
      return `Mↂ${n % 9000 === 0 ? '' : this.renderRomanUpper(n % 1000)}`;
    if (n >= 8000)
      return `ↁMMM${n % 8000 === 0 ? '' : this.renderRomanUpper(n % 1000)}`;
    if (n >= 7000)
      return `ↁMM${n % 7000 === 0 ? '' : this.renderRomanUpper(n % 1000)}`;
    if (n >= 6000)
      return `ↁM${n % 6000 === 0 ? '' : this.renderRomanUpper(n % 1000)}`;
    if (n >= 5000)
      return `ↁ${n % 5000 === 0 ? '' : this.renderRomanUpper(n % 1000)}`;
    if (n >= 4000)
      return `Mↁ${n % 4000 === 0 ? '' : this.renderRomanUpper(n % 1000)}`;
    if (n >= 3000)
      return `MMM${n % 3000 === 0 ? '' : this.renderRomanUpper(n % 1000)}`;
    if (n >= 2000)
      return `MM${n % 2000 === 0 ? '' : this.renderRomanUpper(n % 1000)}`;
    if (n >= 1000)
      return `M${n % 1000 === 0 ? '' : this.renderRomanUpper(n % 1000)}`;
    if (n >= 900)
      return `CM${n % 900 === 0 ? '' : this.renderRomanUpper(n % 100)}`;
    if (n >= 800)
      return `DCCC${n % 800 === 0 ? '' : this.renderRomanUpper(n % 100)}`;
    if (n >= 700)
      return `DCC${n % 700 === 0 ? '' : this.renderRomanUpper(n % 100)}`;
    if (n >= 600)
      return `DC${n % 600 === 0 ? '' : this.renderRomanUpper(n % 100)}`;
    if (n >= 500)
      return `D${n % 500 === 0 ? '' : this.renderRomanUpper(n % 100)}`;
    if (n >= 400)
      return `CD${n % 400 === 0 ? '' : this.renderRomanUpper(n % 100)}`;
    if (n >= 300)
      return `CCC${n % 300 === 0 ? '' : this.renderRomanUpper(n % 100)}`;
    if (n >= 200)
      return `CC${n % 200 === 0 ? '' : this.renderRomanUpper(n % 100)}`;
    if (n >= 100)
      return `C${n % 100 === 0 ? '' : this.renderRomanUpper(n % 100)}`;
    if (n >= 90)
      return `XC${n % 90 === 0 ? '' : this.renderRomanUpper(n % 10)}`;
    if (n >= 80)
      return `LXXX${n % 80 === 0 ? '' : this.renderRomanUpper(n % 10)}`;
    if (n >= 70)
      return `LXX${n % 70 === 0 ? '' : this.renderRomanUpper(n % 10)}`;
    if (n >= 60)
      return `LX${n % 60 === 0 ? '' : this.renderRomanUpper(n % 10)}`;
    if (n >= 50) return `L${n % 50 === 0 ? '' : this.renderRomanUpper(n % 10)}`;
    if (n >= 40)
      return `XL${n % 40 === 0 ? '' : this.renderRomanUpper(n % 10)}`;
    if (n >= 30)
      return `XXX${n % 30 === 0 ? '' : this.renderRomanUpper(n % 10)}`;
    if (n >= 20)
      return `XX${n % 20 === 0 ? '' : this.renderRomanUpper(n % 10)}`;
    if (n >= 10) return `X${n % 10 === 0 ? '' : this.renderRomanUpper(n % 10)}`;
    if (n >= 9) return 'IX';
    if (n >= 8) return 'VIII';
    if (n >= 7) return 'VII';
    if (n >= 6) return 'VI';
    if (n >= 5) return 'V';
    if (n >= 4) return 'IV';
    if (n >= 3) return 'III';
    if (n >= 2) return 'II';
    if (n >= 1) return 'I';
    return 'N';
  }
};
