// Generated from require('cldr').extractRbnfFunctionByType('root', 'renderGeorgian');

module.exports = class Georgian {
  static get cssName() {
    return 'georgian';
  }

  render(counterValue) {
    return this.renderGeorgian(counterValue);
  }

  renderNumber(n) {
    return String(n);
  }

  renderGeorgian(n) {
    const isFractional = n !== Math.floor(n);
    if (n < 0) return `\u2212${this.renderGeorgian(-n)}`;
    if (isFractional && n > 1) return this.renderNumber(n, '#,##0.00');
    if (n >= 20000) return this.renderNumber(n, '#,##0');
    if (n >= 10000)
      return `ჯ${n % 10000 === 0 ? '' : this.renderGeorgian(n % 10000)}`;
    if (n >= 9000)
      return `ჵ${n % 9000 === 0 ? '' : this.renderGeorgian(n % 1000)}`;
    if (n >= 8000)
      return `ჴ${n % 8000 === 0 ? '' : this.renderGeorgian(n % 1000)}`;
    if (n >= 7000)
      return `ხ${n % 7000 === 0 ? '' : this.renderGeorgian(n % 1000)}`;
    if (n >= 6000)
      return `ჭ${n % 6000 === 0 ? '' : this.renderGeorgian(n % 1000)}`;
    if (n >= 5000)
      return `წ${n % 5000 === 0 ? '' : this.renderGeorgian(n % 1000)}`;
    if (n >= 4000)
      return `ძ${n % 4000 === 0 ? '' : this.renderGeorgian(n % 1000)}`;
    if (n >= 3000)
      return `ც${n % 3000 === 0 ? '' : this.renderGeorgian(n % 1000)}`;
    if (n >= 2000)
      return `ჩ${n % 2000 === 0 ? '' : this.renderGeorgian(n % 1000)}`;
    if (n >= 1000)
      return `შ${n % 1000 === 0 ? '' : this.renderGeorgian(n % 1000)}`;
    if (n >= 900)
      return `ყ${n % 900 === 0 ? '' : this.renderGeorgian(n % 100)}`;
    if (n >= 800)
      return `ღ${n % 800 === 0 ? '' : this.renderGeorgian(n % 100)}`;
    if (n >= 700)
      return `ქ${n % 700 === 0 ? '' : this.renderGeorgian(n % 100)}`;
    if (n >= 600)
      return `ფ${n % 600 === 0 ? '' : this.renderGeorgian(n % 100)}`;
    if (n >= 500)
      return `ჳ${n % 500 === 0 ? '' : this.renderGeorgian(n % 100)}`;
    if (n >= 400)
      return `უ${n % 400 === 0 ? '' : this.renderGeorgian(n % 100)}`;
    if (n >= 300)
      return `ტ${n % 300 === 0 ? '' : this.renderGeorgian(n % 100)}`;
    if (n >= 200)
      return `ს${n % 200 === 0 ? '' : this.renderGeorgian(n % 100)}`;
    if (n >= 100)
      return `რ${n % 100 === 0 ? '' : this.renderGeorgian(n % 100)}`;
    if (n >= 90) return `ჟ${n % 90 === 0 ? '' : this.renderGeorgian(n % 10)}`;
    if (n >= 80) return `პ${n % 80 === 0 ? '' : this.renderGeorgian(n % 10)}`;
    if (n >= 70) return `ო${n % 70 === 0 ? '' : this.renderGeorgian(n % 10)}`;
    if (n >= 60) return `ჲ${n % 60 === 0 ? '' : this.renderGeorgian(n % 10)}`;
    if (n >= 50) return `ნ${n % 50 === 0 ? '' : this.renderGeorgian(n % 10)}`;
    if (n >= 40) return `მ${n % 40 === 0 ? '' : this.renderGeorgian(n % 10)}`;
    if (n >= 30) return `ლ${n % 30 === 0 ? '' : this.renderGeorgian(n % 10)}`;
    if (n >= 20) return `კ${n % 20 === 0 ? '' : this.renderGeorgian(n % 10)}`;
    if (n >= 10) return `ი${n % 10 === 0 ? '' : this.renderGeorgian(n % 10)}`;
    if (n >= 9) return 'თ';
    if (n >= 8) return 'ჱ';
    if (n >= 7) return 'ზ';
    if (n >= 6) return 'ვ';
    if (n >= 5) return 'ე';
    if (n >= 4) return 'დ';
    if (n >= 3) return 'გ';
    if (n >= 2) return 'ბ';
    if (n >= 1) return 'ა';
    return this.renderNumber(n, '#,##0');
  }
};
