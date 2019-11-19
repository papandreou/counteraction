// Generated from require('cldr').extractRbnfFunctionByType('root', 'renderGreekNumeralMajuscules');

module.exports = class UpperGreek {
  static get cssName() {
    return 'upper-greek';
  }

  render(counterValue) {
    return this.renderGreekNumeralMajuscules(counterValue);
  }

  renderNumber(n) {
    return String(n);
  }

  renderGreekNumeralMajuscules(n) {
    if (n >= 1000000000000000000) return this.renderNumber(n, '#,##0');
    if (n >= 10000000000000000)
      return `${this.renderGreekNumeralMajuscules(
        Math.floor(n / 10000000000000000)
      )}ΜΜΜΜ${
        n % 10000000000000000 === 0
          ? ''
          : ` ${this.renderGreekNumeralMajuscules(n % 10000000000000000)}`
      }`;
    if (n >= 1000000000000)
      return `${this.renderGreekNumeralMajuscules(
        Math.floor(n / 1000000000000)
      )}ΜΜΜ${
        n % 1000000000000 === 0
          ? ''
          : ` ${this.renderGreekNumeralMajuscules(n % 1000000000000)}`
      }`;
    if (n >= 100000000)
      return `${this.renderGreekNumeralMajuscules(
        Math.floor(n / 100000000)
      )}ΜΜ${
        n % 100000000 === 0
          ? ''
          : ` ${this.renderGreekNumeralMajuscules(n % 100000000)}`
      }`;
    if (n >= 10000)
      return `${this.renderGreekNumeralMajuscules(Math.floor(n / 10000))}Μ${
        n % 10000 === 0
          ? ''
          : ` ${this.renderGreekNumeralMajuscules(n % 10000)}`
      }`;
    if (n >= 1000)
      return `\u0375${this.renderGreekNumeralMajuscules(Math.floor(n / 1000))}${
        n % 1000 === 0 ? '' : this.renderGreekNumeralMajuscules(n % 1000)
      }`;
    if (n >= 900)
      return `Ϡ${
        n % 900 === 0 ? '' : this.renderGreekNumeralMajuscules(n % 100)
      }`;
    if (n >= 800)
      return `Ω${
        n % 800 === 0 ? '' : this.renderGreekNumeralMajuscules(n % 100)
      }`;
    if (n >= 700)
      return `Ψ${
        n % 700 === 0 ? '' : this.renderGreekNumeralMajuscules(n % 100)
      }`;
    if (n >= 600)
      return `Χ${
        n % 600 === 0 ? '' : this.renderGreekNumeralMajuscules(n % 100)
      }`;
    if (n >= 500)
      return `Φ${
        n % 500 === 0 ? '' : this.renderGreekNumeralMajuscules(n % 100)
      }`;
    if (n >= 400)
      return `Υ${
        n % 400 === 0 ? '' : this.renderGreekNumeralMajuscules(n % 100)
      }`;
    if (n >= 300)
      return `Τ${
        n % 300 === 0 ? '' : this.renderGreekNumeralMajuscules(n % 100)
      }`;
    if (n >= 200)
      return `Σ${
        n % 200 === 0 ? '' : this.renderGreekNumeralMajuscules(n % 100)
      }`;
    if (n >= 100)
      return `Ρ${
        n % 100 === 0 ? '' : this.renderGreekNumeralMajuscules(n % 100)
      }`;
    if (n >= 90)
      return `Ϟ${
        n % 90 === 0 ? '' : this.renderGreekNumeralMajuscules(n % 10)
      }`;
    if (n >= 80)
      return `Π${
        n % 80 === 0 ? '' : this.renderGreekNumeralMajuscules(n % 10)
      }`;
    if (n >= 70)
      return `Ο${
        n % 70 === 0 ? '' : this.renderGreekNumeralMajuscules(n % 10)
      }`;
    if (n >= 60)
      return `Ξ${
        n % 60 === 0 ? '' : this.renderGreekNumeralMajuscules(n % 10)
      }`;
    if (n >= 50)
      return `Ν${
        n % 50 === 0 ? '' : this.renderGreekNumeralMajuscules(n % 10)
      }`;
    if (n >= 40)
      return `Μ${
        n % 40 === 0 ? '' : this.renderGreekNumeralMajuscules(n % 10)
      }`;
    if (n >= 30)
      return `Λ${
        n % 30 === 0 ? '' : this.renderGreekNumeralMajuscules(n % 10)
      }`;
    if (n >= 20)
      return `Κ${
        n % 20 === 0 ? '' : this.renderGreekNumeralMajuscules(n % 10)
      }`;
    if (n >= 10)
      return `Ι${
        n % 10 === 0 ? '' : this.renderGreekNumeralMajuscules(n % 10)
      }`;
    if (n >= 9) return 'Θ';
    if (n >= 8) return 'Η';
    if (n >= 7) return 'Ζ';
    if (n >= 6) return 'Ϝ';
    if (n >= 5) return 'Ε';
    if (n >= 4) return 'Δ';
    if (n >= 3) return 'Γ';
    if (n >= 2) return 'Β';
    if (n >= 1) return 'Α';
    return '\uD800\uDD8A';
  }
};
