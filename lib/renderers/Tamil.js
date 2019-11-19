// Generated from require('cldr').extractRbnfFunctionByType('root', 'renderTamil');

module.exports = class Tamil {
  static get cssName() {
    return 'tamil';
  }

  render(counterValue) {
    return this.renderTamil(counterValue);
  }

  renderNumber(n) {
    return String(n);
  }

  renderTamil(n) {
    const isFractional = n !== Math.floor(n);
    if (n < 0) return `\u2212${this.renderTamil(-n)}`;
    if (isFractional && n > 1) return this.renderNumber(n, '#,##0.00');
    if (n >= 100000000) return this.renderNumber(n, '#,##,##0');
    if (n >= 1000000)
      return `${this.renderTamil(Math.floor(n / 1000000))}\u0BF1\u0BF2${
        n % 1000000 === 0 ? '' : this.renderTamilThousands(n % 1000000)
      }`;
    if (n >= 2000)
      return `${this.renderTamil(Math.floor(n / 1000))}\u0BF2${
        n % 2000 === 0 ? '' : this.renderTamil(n % 1000)
      }`;
    if (n >= 1000)
      return `\u0BF2${n % 1000 === 0 ? '' : this.renderTamil(n % 1000)}`;
    if (n >= 200)
      return `${this.renderTamil(Math.floor(n / 100))}\u0BF1${
        n % 200 === 0 ? '' : this.renderTamil(n % 100)
      }`;
    if (n >= 100)
      return `\u0BF1${n % 100 === 0 ? '' : this.renderTamil(n % 100)}`;
    if (n >= 20)
      return `${this.renderTamil(Math.floor(n / 10))}\u0BF0${
        n % 20 === 0 ? '' : this.renderTamil(n % 10)
      }`;
    if (n >= 10) return `\u0BF0${n % 10 === 0 ? '' : this.renderTamil(n % 10)}`;
    if (n >= 9) return '௯';
    if (n >= 8) return '௮';
    if (n >= 7) return '௭';
    if (n >= 6) return '௬';
    if (n >= 5) return '௫';
    if (n >= 4) return '௪';
    if (n >= 3) return '௩';
    if (n >= 2) return '௨';
    if (n >= 1) return '௧';
    return '௦';
  }

  renderTamilThousands(n) {
    if (n >= 1000)
      return `${this.renderTamilThousands(Math.floor(n / 1000))}\u0BF2${
        n % 1000 === 0 ? '' : this.renderTamilThousands(n % 1000)
      }`;
    return this.renderTamil(n);
  }
};
