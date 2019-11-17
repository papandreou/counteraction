module.exports = class DecimalLeadingZero {
  static get cssName() {
    return 'decimal-leading-zero';
  }

  render(counterValue) {
    // FIXME: Depends on the number of digits in the max (possible) overall counter value
    if (counterValue < 0) {
      return `-0${-counterValue}`;
    } else {
      return `0${counterValue}`;
    }
  }
};
