// Generated from require('cldr').extractRbnfFunctionByType('root', 'renderGreekNumeralMinuscules');

module.exports = class LowerGreek {
  static get cssName() {
    return 'lower-greek';
  }

  render(counterValue) {
    return this.renderGreekNumeralMinuscules(counterValue);
  }

  renderNumber(n) {
    return String(n);
  }

  renderGreekNumeralMinuscules(n) {
    if (n >= 1000000000000000000) return this.renderNumber(n, '#,##0');
    if (n >= 10000000000000000)
      return `${this.renderGreekNumeralMinuscules(
        Math.floor(n / 10000000000000000)
      )}μμμμ${
        n % 10000000000000000 === 0
          ? ''
          : ` ${this.renderGreekNumeralMinuscules(n % 10000000000000000)}`
      }`;
    if (n >= 1000000000000)
      return `${this.renderGreekNumeralMinuscules(
        Math.floor(n / 1000000000000)
      )}μμμ${
        n % 1000000000000 === 0
          ? ''
          : ` ${this.renderGreekNumeralMinuscules(n % 1000000000000)}`
      }`;
    if (n >= 100000000)
      return `${this.renderGreekNumeralMinuscules(
        Math.floor(n / 100000000)
      )}μμ${
        n % 100000000 === 0
          ? ''
          : ` ${this.renderGreekNumeralMinuscules(n % 100000000)}`
      }`;
    if (n >= 10000)
      return `${this.renderGreekNumeralMinuscules(Math.floor(n / 10000))}μ${
        n % 10000 === 0
          ? ''
          : ` ${this.renderGreekNumeralMinuscules(n % 10000)}`
      }`;
    if (n >= 1000)
      return `\u0375${this.renderGreekNumeralMinuscules(Math.floor(n / 1000))}${
        n % 1000 === 0 ? '' : this.renderGreekNumeralMinuscules(n % 1000)
      }`;
    if (n >= 900)
      return `ϡ${
        n % 900 === 0 ? '' : this.renderGreekNumeralMinuscules(n % 100)
      }`;
    if (n >= 800)
      return `ω${
        n % 800 === 0 ? '' : this.renderGreekNumeralMinuscules(n % 100)
      }`;
    if (n >= 700)
      return `ψ${
        n % 700 === 0 ? '' : this.renderGreekNumeralMinuscules(n % 100)
      }`;
    if (n >= 600)
      return `χ${
        n % 600 === 0 ? '' : this.renderGreekNumeralMinuscules(n % 100)
      }`;
    if (n >= 500)
      return `φ${
        n % 500 === 0 ? '' : this.renderGreekNumeralMinuscules(n % 100)
      }`;
    if (n >= 400)
      return `υ${
        n % 400 === 0 ? '' : this.renderGreekNumeralMinuscules(n % 100)
      }`;
    if (n >= 300)
      return `τ${
        n % 300 === 0 ? '' : this.renderGreekNumeralMinuscules(n % 100)
      }`;
    if (n >= 200)
      return `σ${
        n % 200 === 0 ? '' : this.renderGreekNumeralMinuscules(n % 100)
      }`;
    if (n >= 100)
      return `ρ${
        n % 100 === 0 ? '' : this.renderGreekNumeralMinuscules(n % 100)
      }`;
    if (n >= 90)
      return `ϟ${
        n % 90 === 0 ? '' : this.renderGreekNumeralMinuscules(n % 10)
      }`;
    if (n >= 80)
      return `π${
        n % 80 === 0 ? '' : this.renderGreekNumeralMinuscules(n % 10)
      }`;
    if (n >= 70)
      return `ο${
        n % 70 === 0 ? '' : this.renderGreekNumeralMinuscules(n % 10)
      }`;
    if (n >= 60)
      return `ξ${
        n % 60 === 0 ? '' : this.renderGreekNumeralMinuscules(n % 10)
      }`;
    if (n >= 50)
      return `ν${
        n % 50 === 0 ? '' : this.renderGreekNumeralMinuscules(n % 10)
      }`;
    if (n >= 40)
      return `μ${
        n % 40 === 0 ? '' : this.renderGreekNumeralMinuscules(n % 10)
      }`;
    if (n >= 30)
      return `λ${
        n % 30 === 0 ? '' : this.renderGreekNumeralMinuscules(n % 10)
      }`;
    if (n >= 20)
      return `κ${
        n % 20 === 0 ? '' : this.renderGreekNumeralMinuscules(n % 10)
      }`;
    if (n >= 10)
      return `ι${
        n % 10 === 0 ? '' : this.renderGreekNumeralMinuscules(n % 10)
      }`;
    if (n >= 9) return 'θ';
    if (n >= 8) return 'η';
    if (n >= 7) return 'ζ';
    if (n >= 6) return 'ϝ';
    if (n >= 5) return 'ε';
    if (n >= 4) return 'δ';
    if (n >= 3) return 'γ';
    if (n >= 2) return 'β';
    if (n >= 1) return 'α';
    return '\uD800\uDD8A';
  }
};
