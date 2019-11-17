module.exports = class DecimalLeadingZero {
  static get cssName() {
    return 'decimal';
  }

  render(counterValue) {
    return String(counterValue);
  }
};
