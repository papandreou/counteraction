// Adapted from require('cldr').extractRbnfFunctionByType.renderArmenianLower.toString()

module.exports = class Armenian {
  static get name() {
    return 'armenian';
  }

  render(counterValue) {
    if (counterValue < 0) {
      return `−${this.render(-counterValue)}`;
    }
    if (counterValue >= 1e4) {
      return String(counterValue);
    }
    if (counterValue >= 9e3) {
      return `ք${counterValue === 9e3 ? '' : this.render(counterValue % 1e3)}`;
    }
    if (counterValue >= 8e3) {
      return `փ${counterValue === 8e3 ? '' : this.render(counterValue % 1e3)}`;
    }
    if (counterValue >= 7e3) {
      return `ւ${counterValue === 7e3 ? '' : this.render(counterValue % 1e3)}`;
    }
    if (counterValue >= 6e3) {
      return `ց${counterValue === 6e3 ? '' : this.render(counterValue % 1e3)}`;
    }
    if (counterValue >= 5e3) {
      return `ր${counterValue === 5e3 ? '' : this.render(counterValue % 1e3)}`;
    }
    if (counterValue >= 4e3) {
      return `տ${counterValue === 4e3 ? '' : this.render(counterValue % 1e3)}`;
    }
    if (counterValue >= 3e3) {
      return `վ${counterValue === 3e3 ? '' : this.render(counterValue % 1e3)}`;
    }
    if (counterValue >= 2e3) {
      return `ս${counterValue === 2e3 ? '' : this.render(counterValue % 1e3)}`;
    }
    if (counterValue >= 1e3) {
      return `ռ${counterValue === 1e3 ? '' : this.render(counterValue % 1e3)}`;
    }
    if (counterValue >= 900) {
      return `ջ${counterValue === 900 ? '' : this.render(counterValue % 100)}`;
    }
    if (counterValue >= 800) {
      return `պ${counterValue === 800 ? '' : this.render(counterValue % 100)}`;
    }
    if (counterValue >= 700) {
      return `չ${counterValue === 700 ? '' : this.render(counterValue % 100)}`;
    }
    if (counterValue >= 600) {
      return `ո${counterValue === 600 ? '' : this.render(counterValue % 100)}`;
    }
    if (counterValue >= 500) {
      return `շ${counterValue === 500 ? '' : this.render(counterValue % 100)}`;
    }
    if (counterValue >= 400) {
      return `ն${counterValue === 400 ? '' : this.render(counterValue % 100)}`;
    }
    if (counterValue >= 300) {
      return `յ${counterValue === 300 ? '' : this.render(counterValue % 100)}`;
    }
    if (counterValue >= 200) {
      return `մ${counterValue === 200 ? '' : this.render(counterValue % 100)}`;
    }
    if (counterValue >= 100) {
      return `ճ${counterValue === 100 ? '' : this.render(counterValue % 100)}`;
    }
    if (counterValue >= 90) {
      return `ղ${counterValue === 90 ? '' : this.render(counterValue % 10)}`;
    }
    if (counterValue >= 80) {
      return `ձ${counterValue === 80 ? '' : this.render(counterValue % 10)}`;
    }
    if (counterValue >= 70) {
      return `հ${counterValue === 70 ? '' : this.render(counterValue % 10)}`;
    }
    if (counterValue >= 60) {
      return `կ${counterValue === 60 ? '' : this.render(counterValue % 10)}`;
    }
    if (counterValue >= 50) {
      return `ծ${counterValue === 50 ? '' : this.render(counterValue % 10)}`;
    }
    if (counterValue >= 40) {
      return `խ${counterValue === 40 ? '' : this.render(counterValue % 10)}`;
    }
    if (counterValue >= 30) {
      return `լ${counterValue === 30 ? '' : this.render(counterValue % 10)}`;
    }
    if (counterValue >= 20) {
      return `ի${counterValue === 20 ? '' : this.render(counterValue % 10)}`;
    }
    if (counterValue >= 10) {
      return `ժ${counterValue === 10 ? '' : this.render(counterValue % 10)}`;
    }
    if (counterValue >= 9) {
      return 'թ';
    }
    if (counterValue >= 8) {
      return 'ը';
    }
    if (counterValue >= 7) {
      return 'է';
    }
    if (counterValue >= 6) {
      return 'զ';
    }
    if (counterValue >= 5) {
      return 'ե';
    }
    if (counterValue >= 4) {
      return 'դ';
    }
    if (counterValue >= 3) {
      return 'գ';
    }
    if (counterValue >= 2) {
      return 'բ';
    }
    if (counterValue >= 1) {
      return 'ա';
    }
    if (counterValue >= 0) {
      return '0';
    }
  }
};
