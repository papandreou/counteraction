// Generated from require('cldr').extractRbnfFunctionByType('root', 'renderEthiopic');

module.exports = class Ethiopic {
  static get cssName() {
    return 'ethiopic';
  }

  render(counterValue) {
    return this.renderEthiopic(counterValue);
  }

  renderNumber(n) {
    return String(n);
  }

  renderEthiopic(n) {
    const isFractional = n !== Math.floor(n);
    if (n < 0) return `\u2212${this.renderEthiopic(-n)}`;
    if (isFractional && n > 1)
      return `${this.renderEthiopic(Math.floor(n))}\u1361${this.renderEthiopic(
        parseInt(String(n).replace(/\d*\./, ''), 10)
      )}`;
    if (n >= 1000000000000000000) return this.renderNumber(n, '#,##0');
    if (n >= 20000000000000000)
      return `${this.renderEthiopic(
        Math.floor(n / 10000000000000000)
      )}\u137C${this.renderEthiopicP3(n % 10000000000000000)}`;
    if (n >= 10000000000000000)
      return `\u137C${this.renderEthiopicP3(n % 10000000000000000)}`;
    if (n >= 2000000000000)
      return `${this.renderEthiopic(
        Math.floor(n / 1000000000000)
      )}\u137C${this.renderEthiopicP2(n % 1000000000000)}`;
    if (n >= 1000000000000)
      return `\u137C${this.renderEthiopicP2(n % 1000000000000)}`;
    if (n >= 200000000)
      return `${this.renderEthiopic(
        Math.floor(n / 100000000)
      )}\u137C${this.renderEthiopicP1(n % 100000000)}`;
    if (n >= 100000000) return `\u137C${this.renderEthiopicP1(n % 100000000)}`;
    if (n >= 20000)
      return `${this.renderEthiopic(Math.floor(n / 10000))}\u137C${
        n % 20000 === 0 ? '' : this.renderEthiopic(n % 10000)
      }`;
    if (n >= 10000)
      return `\u137C${n % 10000 === 0 ? '' : this.renderEthiopic(n % 10000)}`;
    if (n >= 200)
      return `${this.renderEthiopic(Math.floor(n / 100))}\u137B${
        n % 200 === 0 ? '' : this.renderEthiopic(n % 100)
      }`;
    if (n >= 100)
      return `\u137B${n % 100 === 0 ? '' : this.renderEthiopic(n % 100)}`;
    if (n >= 90)
      return `\u137A${n % 90 === 0 ? '' : this.renderEthiopic(n % 10)}`;
    if (n >= 80)
      return `\u1379${n % 80 === 0 ? '' : this.renderEthiopic(n % 10)}`;
    if (n >= 70)
      return `\u1378${n % 70 === 0 ? '' : this.renderEthiopic(n % 10)}`;
    if (n >= 60)
      return `\u1377${n % 60 === 0 ? '' : this.renderEthiopic(n % 10)}`;
    if (n >= 50)
      return `\u1376${n % 50 === 0 ? '' : this.renderEthiopic(n % 10)}`;
    if (n >= 40)
      return `\u1375${n % 40 === 0 ? '' : this.renderEthiopic(n % 10)}`;
    if (n >= 30)
      return `\u1374${n % 30 === 0 ? '' : this.renderEthiopic(n % 10)}`;
    if (n >= 20)
      return `\u1373${n % 20 === 0 ? '' : this.renderEthiopic(n % 10)}`;
    if (n >= 10)
      return `\u1372${n % 10 === 0 ? '' : this.renderEthiopic(n % 10)}`;
    if (n >= 9) return '\u1371';
    if (n >= 8) return '\u1370';
    if (n >= 7) return '\u136F';
    if (n >= 6) return '\u136E';
    if (n >= 5) return '\u136D';
    if (n >= 4) return '\u136C';
    if (n >= 3) return '\u136B';
    if (n >= 2) return '\u136A';
    if (n >= 1) return '\u1369';
    return 'ባዶ';
  }

  renderEthiopicP3(n) {
    if (n >= 1000000000000)
      return `${this.renderEthiopic(
        Math.floor(n / 1000000000000)
      )}\u137C${this.renderEthiopicP2(n % 1000000000000)}`;
    if (n >= 1) return `\u137C\u137C\u137C${this.renderEthiopicP(n)}`;
    return '\u137C\u137C\u137C';
  }

  renderEthiopicP2(n) {
    if (n >= 100000000)
      return `${this.renderEthiopic(
        Math.floor(n / 100000000)
      )}\u137C${this.renderEthiopicP1(n % 100000000)}`;
    if (n >= 1) return `\u137C\u137C${this.renderEthiopicP(n)}`;
    return '\u137C\u137C';
  }

  renderEthiopicP1(n) {
    if (n >= 10000)
      return `${this.renderEthiopic(Math.floor(n / 10000))}\u137C${
        n % 10000 === 0 ? '' : this.renderEthiopic(n % 10000)
      }`;
    if (n >= 1) return `\u137C${this.renderEthiopicP(n)}`;
    return '\u137C';
  }

  renderEthiopicP(n) {
    if (n >= 10000000000000000)
      return `${this.renderEthiopicP(
        Math.floor(n / 10000000000000000)
      )}\u137C${this.renderEthiopicP3(n % 10000000000000000)}`;
    if (n >= 1000000000000)
      return `${this.renderEthiopicP(
        Math.floor(n / 1000000000000)
      )}\u137C${this.renderEthiopicP2(n % 1000000000000)}`;
    if (n >= 100000000)
      return `${this.renderEthiopicP(
        Math.floor(n / 100000000)
      )}\u137C${this.renderEthiopicP1(n % 100000000)}`;
    if (n >= 10000)
      return `${this.renderEthiopicP(Math.floor(n / 10000))}\u137C${
        n % 10000 === 0 ? '' : this.renderEthiopicP(n % 10000)
      }`;
    if (n >= 1) return this.renderEthiopic(n);
  }
};
