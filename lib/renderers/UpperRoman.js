// Adapted from require('cldr').extractRbnfFunctionByType.renderRomanUpper.toString()

module.exports = class UpperRoman {
  static get name() {
    return 'upper-roman';
  }

  render(counterValue) {
    if (counterValue < 0) {
      return '−' + this.render(-counterValue);
    }
    if (counterValue >= 4e5) {
      return String(counterValue);
    }
    if (counterValue >= 3e5) {
      return (
        'ↈↈↈ' + (counterValue === 3e5 ? '' : this.render(counterValue % 1e5))
      );
    }
    if (counterValue >= 2e5) {
      return (
        'ↈↈ' + (counterValue === 2e5 ? '' : this.render(counterValue % 1e5))
      );
    }
    if (counterValue >= 1e5) {
      return (
        'ↈ' + (counterValue === 1e5 ? '' : this.render(counterValue % 1e5))
      );
    }
    if (counterValue >= 9e4) {
      return (
        'ↂↈ' + (counterValue === 9e4 ? '' : this.render(counterValue % 1e4))
      );
    }
    if (counterValue >= 8e4) {
      return (
        'ↇↂↂↂ' + (counterValue === 8e4 ? '' : this.render(counterValue % 1e4))
      );
    }
    if (counterValue >= 7e4) {
      return (
        'ↇↂↂ' + (counterValue === 7e4 ? '' : this.render(counterValue % 1e4))
      );
    }
    if (counterValue >= 6e4) {
      return (
        'ↇↂ' + (counterValue === 6e4 ? '' : this.render(counterValue % 1e4))
      );
    }
    if (counterValue >= 5e4) {
      return (
        'ↇ' + (counterValue === 5e4 ? '' : this.render(counterValue % 1e4))
      );
    }
    if (counterValue >= 4e4) {
      return (
        'ↂↇ' + (counterValue === 4e4 ? '' : this.render(counterValue % 1e4))
      );
    }
    if (counterValue >= 3e4) {
      return (
        'ↂↂↂ' + (counterValue === 3e4 ? '' : this.render(counterValue % 1e4))
      );
    }
    if (counterValue >= 2e4) {
      return (
        'ↂↂ' + (counterValue === 2e4 ? '' : this.render(counterValue % 1e4))
      );
    }
    if (counterValue >= 1e4) {
      return (
        'ↂ' + (counterValue === 1e4 ? '' : this.render(counterValue % 1e4))
      );
    }
    if (counterValue >= 9e3) {
      return (
        'Mↂ' + (counterValue === 9e3 ? '' : this.render(counterValue % 1e3))
      );
    }
    if (counterValue >= 8e3) {
      return (
        'ↁMMM' + (counterValue === 8e3 ? '' : this.render(counterValue % 1e3))
      );
    }
    if (counterValue >= 7e3) {
      return (
        'ↁMM' + (counterValue === 7e3 ? '' : this.render(counterValue % 1e3))
      );
    }
    if (counterValue >= 6e3) {
      return (
        'ↁM' + (counterValue === 6e3 ? '' : this.render(counterValue % 1e3))
      );
    }
    if (counterValue >= 5e3) {
      return (
        'ↁ' + (counterValue === 5e3 ? '' : this.render(counterValue % 1e3))
      );
    }
    if (counterValue >= 4e3) {
      return (
        'Mↁ' + (counterValue === 4e3 ? '' : this.render(counterValue % 1e3))
      );
    }
    if (counterValue >= 3e3) {
      return (
        'MMM' + (counterValue === 3e3 ? '' : this.render(counterValue % 1e3))
      );
    }
    if (counterValue >= 2e3) {
      return (
        'MM' + (counterValue === 2e3 ? '' : this.render(counterValue % 1e3))
      );
    }
    if (counterValue >= 1e3) {
      return (
        'M' + (counterValue === 1e3 ? '' : this.render(counterValue % 1e3))
      );
    }
    if (counterValue >= 900) {
      return (
        'CM' + (counterValue === 900 ? '' : this.render(counterValue % 100))
      );
    }
    if (counterValue >= 800) {
      return (
        'DCCC' + (counterValue === 800 ? '' : this.render(counterValue % 100))
      );
    }
    if (counterValue >= 700) {
      return (
        'DCC' + (counterValue === 700 ? '' : this.render(counterValue % 100))
      );
    }
    if (counterValue >= 600) {
      return (
        'DC' + (counterValue === 600 ? '' : this.render(counterValue % 100))
      );
    }
    if (counterValue >= 500) {
      return (
        'D' + (counterValue === 500 ? '' : this.render(counterValue % 100))
      );
    }
    if (counterValue >= 400) {
      return (
        'CD' + (counterValue === 400 ? '' : this.render(counterValue % 100))
      );
    }
    if (counterValue >= 300) {
      return (
        'CCC' + (counterValue === 300 ? '' : this.render(counterValue % 100))
      );
    }
    if (counterValue >= 200) {
      return (
        'CC' + (counterValue === 200 ? '' : this.render(counterValue % 100))
      );
    }
    if (counterValue >= 100) {
      return (
        'C' + (counterValue === 100 ? '' : this.render(counterValue % 100))
      );
    }
    if (counterValue >= 90) {
      return 'XC' + (counterValue === 90 ? '' : this.render(counterValue % 10));
    }
    if (counterValue >= 80) {
      return (
        'LXXX' + (counterValue === 80 ? '' : this.render(counterValue % 10))
      );
    }
    if (counterValue >= 70) {
      return (
        'LXX' + (counterValue === 70 ? '' : this.render(counterValue % 10))
      );
    }
    if (counterValue >= 60) {
      return 'LX' + (counterValue === 60 ? '' : this.render(counterValue % 10));
    }
    if (counterValue >= 50) {
      return 'L' + (counterValue === 50 ? '' : this.render(counterValue % 10));
    }
    if (counterValue >= 40) {
      return 'XL' + (counterValue === 40 ? '' : this.render(counterValue % 10));
    }
    if (counterValue >= 30) {
      return (
        'XXX' + (counterValue === 30 ? '' : this.render(counterValue % 10))
      );
    }
    if (counterValue >= 20) {
      return 'XX' + (counterValue === 20 ? '' : this.render(counterValue % 10));
    }
    if (counterValue >= 10) {
      return 'X' + (counterValue === 10 ? '' : this.render(counterValue % 10));
    }
    if (counterValue >= 9) {
      return 'IX';
    }
    if (counterValue >= 8) {
      return 'VIII';
    }
    if (counterValue >= 7) {
      return 'VII';
    }
    if (counterValue >= 6) {
      return 'VI';
    }
    if (counterValue >= 5) {
      return 'V';
    }
    if (counterValue >= 4) {
      return 'IV';
    }
    if (counterValue >= 3) {
      return 'III';
    }
    if (counterValue >= 2) {
      return 'II';
    }
    if (counterValue >= 1) {
      return 'I';
    }
    if (counterValue >= 0) {
      return 'N';
    }
  }
};
