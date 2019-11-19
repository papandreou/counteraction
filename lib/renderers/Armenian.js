// Generated from require('cldr').extractRbnfFunctionByType('root', 'renderArmenianLower');

module.exports = class Armenian {
  static get cssName() {
    return 'armenian';
  }

  render(counterValue) {
    return this.renderArmenianLower(counterValue);
  }

  renderNumber(n) {
    return String(n);
  }

  renderArmenianLower(n) {
    const isFractional = n !== Math.floor(n);
    if (n < 0) return `\u2212${this.renderArmenianLower(-n)}`;
    if (isFractional && n > 1) return this.renderNumber(n, '#,##0.00');
    if (n >= 10000) return this.renderNumber(n, '#,##0');
    if (n >= 9000)
      return `ք${n % 9000 === 0 ? '' : this.renderArmenianLower(n % 1000)}`;
    if (n >= 8000)
      return `փ${n % 8000 === 0 ? '' : this.renderArmenianLower(n % 1000)}`;
    if (n >= 7000)
      return `ւ${n % 7000 === 0 ? '' : this.renderArmenianLower(n % 1000)}`;
    if (n >= 6000)
      return `ց${n % 6000 === 0 ? '' : this.renderArmenianLower(n % 1000)}`;
    if (n >= 5000)
      return `ր${n % 5000 === 0 ? '' : this.renderArmenianLower(n % 1000)}`;
    if (n >= 4000)
      return `տ${n % 4000 === 0 ? '' : this.renderArmenianLower(n % 1000)}`;
    if (n >= 3000)
      return `վ${n % 3000 === 0 ? '' : this.renderArmenianLower(n % 1000)}`;
    if (n >= 2000)
      return `ս${n % 2000 === 0 ? '' : this.renderArmenianLower(n % 1000)}`;
    if (n >= 1000)
      return `ռ${n % 1000 === 0 ? '' : this.renderArmenianLower(n % 1000)}`;
    if (n >= 900)
      return `ջ${n % 900 === 0 ? '' : this.renderArmenianLower(n % 100)}`;
    if (n >= 800)
      return `պ${n % 800 === 0 ? '' : this.renderArmenianLower(n % 100)}`;
    if (n >= 700)
      return `չ${n % 700 === 0 ? '' : this.renderArmenianLower(n % 100)}`;
    if (n >= 600)
      return `ո${n % 600 === 0 ? '' : this.renderArmenianLower(n % 100)}`;
    if (n >= 500)
      return `շ${n % 500 === 0 ? '' : this.renderArmenianLower(n % 100)}`;
    if (n >= 400)
      return `ն${n % 400 === 0 ? '' : this.renderArmenianLower(n % 100)}`;
    if (n >= 300)
      return `յ${n % 300 === 0 ? '' : this.renderArmenianLower(n % 100)}`;
    if (n >= 200)
      return `մ${n % 200 === 0 ? '' : this.renderArmenianLower(n % 100)}`;
    if (n >= 100)
      return `ճ${n % 100 === 0 ? '' : this.renderArmenianLower(n % 100)}`;
    if (n >= 90)
      return `ղ${n % 90 === 0 ? '' : this.renderArmenianLower(n % 10)}`;
    if (n >= 80)
      return `ձ${n % 80 === 0 ? '' : this.renderArmenianLower(n % 10)}`;
    if (n >= 70)
      return `հ${n % 70 === 0 ? '' : this.renderArmenianLower(n % 10)}`;
    if (n >= 60)
      return `կ${n % 60 === 0 ? '' : this.renderArmenianLower(n % 10)}`;
    if (n >= 50)
      return `ծ${n % 50 === 0 ? '' : this.renderArmenianLower(n % 10)}`;
    if (n >= 40)
      return `խ${n % 40 === 0 ? '' : this.renderArmenianLower(n % 10)}`;
    if (n >= 30)
      return `լ${n % 30 === 0 ? '' : this.renderArmenianLower(n % 10)}`;
    if (n >= 20)
      return `ի${n % 20 === 0 ? '' : this.renderArmenianLower(n % 10)}`;
    if (n >= 10)
      return `ժ${n % 10 === 0 ? '' : this.renderArmenianLower(n % 10)}`;
    if (n >= 9) return 'թ';
    if (n >= 8) return 'ը';
    if (n >= 7) return 'է';
    if (n >= 6) return 'զ';
    if (n >= 5) return 'ե';
    if (n >= 4) return 'դ';
    if (n >= 3) return 'գ';
    if (n >= 2) return 'բ';
    if (n >= 1) return 'ա';
    return '0';
  }
};
