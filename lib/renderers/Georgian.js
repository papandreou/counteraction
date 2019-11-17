// Adapted from require('cldr').extractRbnfFunctionByType.renderGeorgian.toString()

module.exports = class Georgian {
  static get name() {
    return 'georgian';
  }

  render(counterValue) {
    if (counterValue < 0) {
      return `−${this.render(-counterValue)}`;
    }
    if (counterValue >= 2e4) {
      return String(counterValue);
    }
    if (counterValue >= 1e4) {
      return `ჯ${counterValue === 1e4 ? '' : this.render(counterValue % 1e4)}`;
    }
    if (counterValue >= 9e3) {
      return `ჵ${counterValue === 9e3 ? '' : this.render(counterValue % 1e3)}`;
    }
    if (counterValue >= 8e3) {
      return `ჴ${counterValue === 8e3 ? '' : this.render(counterValue % 1e3)}`;
    }
    if (counterValue >= 7e3) {
      return `ხ${counterValue === 7e3 ? '' : this.render(counterValue % 1e3)}`;
    }
    if (counterValue >= 6e3) {
      return `ჭ${counterValue === 6e3 ? '' : this.render(counterValue % 1e3)}`;
    }
    if (counterValue >= 5e3) {
      return `წ${counterValue === 5e3 ? '' : this.render(counterValue % 1e3)}`;
    }
    if (counterValue >= 4e3) {
      return `ძ${counterValue === 4e3 ? '' : this.render(counterValue % 1e3)}`;
    }
    if (counterValue >= 3e3) {
      return `ც${counterValue === 3e3 ? '' : this.render(counterValue % 1e3)}`;
    }
    if (counterValue >= 2e3) {
      return `ჩ${counterValue === 2e3 ? '' : this.render(counterValue % 1e3)}`;
    }
    if (counterValue >= 1e3) {
      return `შ${counterValue === 1e3 ? '' : this.render(counterValue % 1e3)}`;
    }
    if (counterValue >= 900) {
      return `ყ${counterValue === 900 ? '' : this.render(counterValue % 100)}`;
    }
    if (counterValue >= 800) {
      return `ღ${counterValue === 800 ? '' : this.render(counterValue % 100)}`;
    }
    if (counterValue >= 700) {
      return `ქ${counterValue === 700 ? '' : this.render(counterValue % 100)}`;
    }
    if (counterValue >= 600) {
      return `ფ${counterValue === 600 ? '' : this.render(counterValue % 100)}`;
    }
    if (counterValue >= 500) {
      return `ჳ${counterValue === 500 ? '' : this.render(counterValue % 100)}`;
    }
    if (counterValue >= 400) {
      return `უ${counterValue === 400 ? '' : this.render(counterValue % 100)}`;
    }
    if (counterValue >= 300) {
      return `ტ${counterValue === 300 ? '' : this.render(counterValue % 100)}`;
    }
    if (counterValue >= 200) {
      return `ს${counterValue === 200 ? '' : this.render(counterValue % 100)}`;
    }
    if (counterValue >= 100) {
      return `რ${counterValue === 100 ? '' : this.render(counterValue % 100)}`;
    }
    if (counterValue >= 90) {
      return `ჟ${counterValue === 90 ? '' : this.render(counterValue % 10)}`;
    }
    if (counterValue >= 80) {
      return `პ${counterValue === 80 ? '' : this.render(counterValue % 10)}`;
    }
    if (counterValue >= 70) {
      return `ო${counterValue === 70 ? '' : this.render(counterValue % 10)}`;
    }
    if (counterValue >= 60) {
      return `ჲ${counterValue === 60 ? '' : this.render(counterValue % 10)}`;
    }
    if (counterValue >= 50) {
      return `ნ${counterValue === 50 ? '' : this.render(counterValue % 10)}`;
    }
    if (counterValue >= 40) {
      return `მ${counterValue === 40 ? '' : this.render(counterValue % 10)}`;
    }
    if (counterValue >= 30) {
      return `ლ${counterValue === 30 ? '' : this.render(counterValue % 10)}`;
    }
    if (counterValue >= 20) {
      return `კ${counterValue === 20 ? '' : this.render(counterValue % 10)}`;
    }
    if (counterValue >= 10) {
      return `ი${counterValue === 10 ? '' : this.render(counterValue % 10)}`;
    }
    if (counterValue >= 9) {
      return 'თ';
    }
    if (counterValue >= 8) {
      return 'ჱ';
    }
    if (counterValue >= 7) {
      return 'ზ';
    }
    if (counterValue >= 6) {
      return 'ვ';
    }
    if (counterValue >= 5) {
      return 'ე';
    }
    if (counterValue >= 4) {
      return 'დ';
    }
    if (counterValue >= 3) {
      return 'გ';
    }
    if (counterValue >= 2) {
      return 'ბ';
    }
    if (counterValue >= 1) {
      return 'ა';
    }
    if (counterValue >= 0) {
      String(counterValue);
    }
  }
};
