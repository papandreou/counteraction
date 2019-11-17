// Adapted from require('cldr').extractRbnfFunctionByType.renderGreekNumeralMinuscules.toString()

module.exports = class LowerGreek {
  static get name() {
    return 'lower-greek';
  }

  render(counterValue) {
    if (counterValue < 0) {
      return `−${this.render(-counterValue)}`;
    }
    if (counterValue >= 0) {
      return `${this.renderGreekNumeralMinuscules(counterValue)}´`;
    }
  }

  renderGreekNumeralMinuscules(counterValue) {
    if (counterValue >= 1e18) {
      return String(counterValue);
    }
    if (counterValue >= 1e16) {
      return `${this.renderGreekNumeralMinuscules(
        Math.floor(counterValue / 1e16)
      )}μμμμ${
        counterValue === 1e16
          ? ''
          : ` ${this.renderGreekNumeralMinuscules(counterValue % 1e16)}`
      }`;
    }
    if (counterValue >= 1e12) {
      return `${this.renderGreekNumeralMinuscules(
        Math.floor(counterValue / 1e12)
      )}μμμ${
        counterValue === 1e12
          ? ''
          : ` ${this.renderGreekNumeralMinuscules(counterValue % 1e12)}`
      }`;
    }
    if (counterValue >= 1e8) {
      return `${this.renderGreekNumeralMinuscules(
        Math.floor(counterValue / 1e8)
      )}μμ${
        counterValue === 1e8
          ? ''
          : ` ${this.renderGreekNumeralMinuscules(counterValue % 1e8)}`
      }`;
    }
    if (counterValue >= 1e4) {
      return `${this.renderGreekNumeralMinuscules(
        Math.floor(counterValue / 1e4)
      )}μ${
        counterValue === 1e4
          ? ''
          : ` ${this.renderGreekNumeralMinuscules(counterValue % 1e4)}`
      }`;
    }
    if (counterValue >= 1e3) {
      return `͵${this.renderGreekNumeralMinuscules(
        Math.floor(counterValue / 1e3)
      )}${
        counterValue === 1e3
          ? ''
          : this.renderGreekNumeralMinuscules(counterValue % 1e3)
      }`;
    }
    if (counterValue >= 900) {
      return `ϡ${
        counterValue === 900
          ? ''
          : this.renderGreekNumeralMinuscules(counterValue % 100)
      }`;
    }
    if (counterValue >= 800) {
      return `ω${
        counterValue === 800
          ? ''
          : this.renderGreekNumeralMinuscules(counterValue % 100)
      }`;
    }
    if (counterValue >= 700) {
      return `ψ${
        counterValue === 700
          ? ''
          : this.renderGreekNumeralMinuscules(counterValue % 100)
      }`;
    }
    if (counterValue >= 600) {
      return `χ${
        counterValue === 600
          ? ''
          : this.renderGreekNumeralMinuscules(counterValue % 100)
      }`;
    }
    if (counterValue >= 500) {
      return `φ${
        counterValue === 500
          ? ''
          : this.renderGreekNumeralMinuscules(counterValue % 100)
      }`;
    }
    if (counterValue >= 400) {
      return `υ${
        counterValue === 400
          ? ''
          : this.renderGreekNumeralMinuscules(counterValue % 100)
      }`;
    }
    if (counterValue >= 300) {
      return `τ${
        counterValue === 300
          ? ''
          : this.renderGreekNumeralMinuscules(counterValue % 100)
      }`;
    }
    if (counterValue >= 200) {
      return `σ${
        counterValue === 200
          ? ''
          : this.renderGreekNumeralMinuscules(counterValue % 100)
      }`;
    }
    if (counterValue >= 100) {
      return `ρ${
        counterValue === 100
          ? ''
          : this.renderGreekNumeralMinuscules(counterValue % 100)
      }`;
    }
    if (counterValue >= 90) {
      return `ϟ${
        counterValue === 90
          ? ''
          : this.renderGreekNumeralMinuscules(counterValue % 10)
      }`;
    }
    if (counterValue >= 80) {
      return `π${
        counterValue === 80
          ? ''
          : this.renderGreekNumeralMinuscules(counterValue % 10)
      }`;
    }
    if (counterValue >= 70) {
      return `ο${
        counterValue === 70
          ? ''
          : this.renderGreekNumeralMinuscules(counterValue % 10)
      }`;
    }
    if (counterValue >= 60) {
      return `ξ${
        counterValue === 60
          ? ''
          : this.renderGreekNumeralMinuscules(counterValue % 10)
      }`;
    }
    if (counterValue >= 50) {
      return `ν${
        counterValue === 50
          ? ''
          : this.renderGreekNumeralMinuscules(counterValue % 10)
      }`;
    }
    if (counterValue >= 40) {
      return `μ${
        counterValue === 40
          ? ''
          : this.renderGreekNumeralMinuscules(counterValue % 10)
      }`;
    }
    if (counterValue >= 30) {
      return `λ${
        counterValue === 30
          ? ''
          : this.renderGreekNumeralMinuscules(counterValue % 10)
      }`;
    }
    if (counterValue >= 20) {
      return `κ${
        counterValue === 20
          ? ''
          : this.renderGreekNumeralMinuscules(counterValue % 10)
      }`;
    }
    if (counterValue >= 10) {
      return `ι${
        counterValue === 10
          ? ''
          : this.renderGreekNumeralMinuscules(counterValue % 10)
      }`;
    }
    if (counterValue >= 9) {
      return 'θ';
    }
    if (counterValue >= 8) {
      return 'η';
    }
    if (counterValue >= 7) {
      return 'ζ';
    }
    if (counterValue >= 6) {
      return 'ϝ';
    }
    if (counterValue >= 5) {
      return 'ε';
    }
    if (counterValue >= 4) {
      return 'δ';
    }
    if (counterValue >= 3) {
      return 'γ';
    }
    if (counterValue >= 2) {
      return 'β';
    }
    if (counterValue >= 1) {
      return 'α';
    }
    if (counterValue >= 0) {
      return '𐆊';
    }
  }
};
