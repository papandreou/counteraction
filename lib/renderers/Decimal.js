module.exports = class DecimalLeadingZero {
  static get name() {
    return 'decimal';
  }

  render(counterValue) {
    return String(counterValue);
  }
};
