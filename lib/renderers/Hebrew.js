// Generated from require('cldr').extractRbnfFunctionByType('root', 'renderHebrew');

module.exports = class Hebrew {
  static get cssName() {
    return 'hebrew';
  }

  render(counterValue) {
    return this.renderHebrew(counterValue);
  }

  renderNumber(n) {
    return String(n);
  }

  renderHebrew(n) {
    const isFractional = n !== Math.floor(n);
    if (n < 0) return `\u2212${this.renderHebrew(-n)}`;
    if (isFractional && n > 1) return this.renderNumber(n, '#,##0.00');
    if (n >= 1000001) return this.renderNumber(n, '#,##0');
    if (n >= 1000000) return 'אלף אלפים';
    if (n >= 3001)
      return (
        this.renderHebrewThousands(Math.floor(n / 1000)) +
        (n % 3001 === 0 ? '' : this.renderHebrew(n % 1000))
      );
    if (n >= 3000) return `${this.renderHebrew(Math.floor(n / 1000))} אלפים`;
    if (n >= 2001)
      return (
        this.renderHebrewThousands(Math.floor(n / 1000)) +
        (n % 2001 === 0 ? '' : this.renderHebrew(n % 1000))
      );
    if (n >= 2000) return 'אלפיים';
    if (n >= 1001)
      return (
        this.renderHebrewThousands(Math.floor(n / 1000)) +
        (n % 1001 === 0 ? '' : this.renderHebrew(n % 1000))
      );
    if (n >= 1000) return 'אלף';
    if (n >= 901) return `תתק${this.renderHebrew099(n % 100)}`;
    if (n >= 900) return 'תת\u05F4ק';
    if (n >= 801) return `תת${this.renderHebrew099(n % 100)}`;
    if (n >= 800) return 'ת\u05F4ת';
    if (n >= 745) return `תש${this.renderHebrew099(n % 100)}`;
    if (n >= 744) return 'תשד\u05F4מ';
    if (n >= 701) return `תש${this.renderHebrew099(n % 100)}`;
    if (n >= 700) return 'ת\u05F4ש';
    if (n >= 699) return `תר${this.renderHebrew099(n % 100)}`;
    if (n >= 698) return 'תרח\u05F4צ';
    if (n >= 601) return `תר${this.renderHebrew099(n % 100)}`;
    if (n >= 600) return 'ת\u05F4ר';
    if (n >= 501) return `תק${this.renderHebrew099(n % 100)}`;
    if (n >= 500) return 'ת\u05F4ק';
    if (n >= 400) return `ת${this.renderHebrew099(n % 100)}`;
    if (n >= 345) return `ש${this.renderHebrew099(n % 100)}`;
    if (n >= 344) return 'שד\u05F4מ';
    if (n >= 305) return `ש${this.renderHebrew099(n % 100)}`;
    if (n >= 304) return 'ד\u05F4ש';
    if (n >= 300) return `ש${this.renderHebrew099(n % 100)}`;
    if (n >= 299) return `ר${this.renderHebrew099(n % 100)}`;
    if (n >= 298) return 'רח\u05F4צ';
    if (n >= 200) return `ר${this.renderHebrew099(n % 100)}`;
    if (n >= 100) return `ק${this.renderHebrew099(n % 100)}`;
    if (n >= 91) return `צ\u05F4${this.renderHebrewItem(n % 10)}`;
    if (n >= 90) return 'צ\u05F3';
    if (n >= 81) return `פ\u05F4${this.renderHebrewItem(n % 10)}`;
    if (n >= 80) return 'פ\u05F3';
    if (n >= 71) return `ע\u05F4${this.renderHebrewItem(n % 10)}`;
    if (n >= 70) return 'ע\u05F3';
    if (n >= 61) return `ס\u05F4${this.renderHebrewItem(n % 10)}`;
    if (n >= 60) return 'ס\u05F3';
    if (n >= 51) return `נ\u05F4${this.renderHebrewItem(n % 10)}`;
    if (n >= 50) return 'נ\u05F3';
    if (n >= 41) return `מ\u05F4${this.renderHebrewItem(n % 10)}`;
    if (n >= 40) return 'מ\u05F3';
    if (n >= 31) return `ל\u05F4${this.renderHebrewItem(n % 10)}`;
    if (n >= 30) return 'ל\u05F3';
    if (n >= 21) return `כ\u05F4${this.renderHebrewItem(n % 10)}`;
    if (n >= 20) return 'כ\u05F3';
    if (n >= 17) return `י\u05F4${this.renderHebrewItem(n % 10)}`;
    if (n >= 16) return 'ט\u05F4ז';
    if (n >= 15) return 'ט\u05F4ו';
    if (n >= 11) return `י\u05F4${this.renderHebrewItem(n % 10)}`;
    return `${this.renderHebrewItem(n)}\u05F3`;
  }

  renderHebrewThousands(n) {
    if (n >= 401) return `${this.renderHebrew(n)}\u05F3`;
    if (n >= 100) return this.renderHebrew(n) + (n % 100 === 0 ? '' : '\u05F3');
    if (n >= 10) return this.renderHebrew(n) + (n % 10 === 0 ? '' : '\u05F3');
    return this.renderHebrew(n);
  }

  renderHebrew099(n) {
    if (n >= 91) return `צ\u05F4${this.renderHebrewItem(n % 10)}`;
    if (n >= 90) return '\u05F4צ';
    if (n >= 81) return `פ\u05F4${this.renderHebrewItem(n % 10)}`;
    if (n >= 80) return '\u05F4פ';
    if (n >= 71) return `ע\u05F4${this.renderHebrewItem(n % 10)}`;
    if (n >= 70) return '\u05F4ע';
    if (n >= 61) return `ס\u05F4${this.renderHebrewItem(n % 10)}`;
    if (n >= 60) return '\u05F4ס';
    if (n >= 51) return `נ\u05F4${this.renderHebrewItem(n % 10)}`;
    if (n >= 50) return '\u05F4נ';
    if (n >= 41) return `מ\u05F4${this.renderHebrewItem(n % 10)}`;
    if (n >= 40) return '\u05F4מ';
    if (n >= 31) return `ל\u05F4${this.renderHebrewItem(n % 10)}`;
    if (n >= 30) return '\u05F4ל';
    if (n >= 21) return `כ\u05F4${this.renderHebrewItem(n % 10)}`;
    if (n >= 20) return '\u05F4כ';
    if (n >= 17) return `י\u05F4${this.renderHebrewItem(n % 10)}`;
    if (n >= 16) return 'ט\u05F4ז';
    if (n >= 15) return 'ט\u05F4ו';
    if (n >= 11) return `י\u05F4${this.renderHebrewItem(n % 10)}`;
    if (n >= 1) return `\u05F4${this.renderHebrewItem(n)}`;
    return '\u05F3';
  }

  renderHebrewItem(n) {
    const isFractional = n !== Math.floor(n);
    if (n < 0) return `\u2212${this.renderHebrewItem(-n)}`;
    if (isFractional && n > 1) return this.renderNumber(n, '#,##0.00');
    if (n >= 2100) return this.renderNumber(n, '#,##0');
    if (n >= 2000)
      return `תתתתת${n % 2000 === 0 ? '' : this.renderHebrewItem(n % 1000)}`;
    if (n >= 1900)
      return `תתתתש${n % 1900 === 0 ? '' : this.renderHebrewItem(n % 1000)}`;
    if (n >= 1800)
      return `תתתתר${n % 1800 === 0 ? '' : this.renderHebrewItem(n % 1000)}`;
    if (n >= 1700)
      return `תתתתק${n % 1700 === 0 ? '' : this.renderHebrewItem(n % 1000)}`;
    if (n >= 1600)
      return `תתתת${n % 1600 === 0 ? '' : this.renderHebrewItem(n % 1000)}`;
    if (n >= 1500)
      return `תתתש${n % 1500 === 0 ? '' : this.renderHebrewItem(n % 1000)}`;
    if (n >= 1400)
      return `תתתר${n % 1400 === 0 ? '' : this.renderHebrewItem(n % 1000)}`;
    if (n >= 1300)
      return `תתתק${n % 1300 === 0 ? '' : this.renderHebrewItem(n % 1000)}`;
    if (n >= 1200)
      return `תתת${n % 1200 === 0 ? '' : this.renderHebrewItem(n % 1000)}`;
    if (n >= 1100)
      return `תתש${n % 1100 === 0 ? '' : this.renderHebrewItem(n % 1000)}`;
    if (n >= 1000)
      return `תתר${n % 1000 === 0 ? '' : this.renderHebrewItem(n % 1000)}`;
    if (n >= 900)
      return `תתק${n % 900 === 0 ? '' : this.renderHebrewItem(n % 100)}`;
    if (n >= 800)
      return `תת${n % 800 === 0 ? '' : this.renderHebrewItem(n % 100)}`;
    if (n >= 745) return `תש${this.renderHebrewItem(n % 100)}`;
    if (n >= 744) return 'תשדמ';
    if (n >= 700)
      return `תש${n % 700 === 0 ? '' : this.renderHebrewItem(n % 100)}`;
    if (n >= 699) return `תר${this.renderHebrewItem(n % 100)}`;
    if (n >= 698) return 'תרחצ';
    if (n >= 600)
      return `תר${n % 600 === 0 ? '' : this.renderHebrewItem(n % 100)}`;
    if (n >= 500)
      return `תק${n % 500 === 0 ? '' : this.renderHebrewItem(n % 100)}`;
    if (n >= 400)
      return `ת${n % 400 === 0 ? '' : this.renderHebrewItem(n % 100)}`;
    if (n >= 345) return `ש${this.renderHebrewItem(n % 100)}`;
    if (n >= 344) return 'שדמ';
    if (n >= 305) return `ש${this.renderHebrewItem(n % 100)}`;
    if (n >= 304) return 'דש';
    if (n >= 300)
      return `ש${n % 300 === 0 ? '' : this.renderHebrewItem(n % 100)}`;
    if (n >= 299) return `ר${this.renderHebrewItem(n % 100)}`;
    if (n >= 298) return 'רחצ';
    if (n >= 200)
      return `ר${n % 200 === 0 ? '' : this.renderHebrewItem(n % 100)}`;
    if (n >= 100)
      return `ק${n % 100 === 0 ? '' : this.renderHebrewItem(n % 100)}`;
    if (n >= 90) return `צ${n % 90 === 0 ? '' : this.renderHebrewItem(n % 10)}`;
    if (n >= 80) return `פ${n % 80 === 0 ? '' : this.renderHebrewItem(n % 10)}`;
    if (n >= 70) return `ע${n % 70 === 0 ? '' : this.renderHebrewItem(n % 10)}`;
    if (n >= 60) return `ס${n % 60 === 0 ? '' : this.renderHebrewItem(n % 10)}`;
    if (n >= 50) return `נ${n % 50 === 0 ? '' : this.renderHebrewItem(n % 10)}`;
    if (n >= 40) return `מ${n % 40 === 0 ? '' : this.renderHebrewItem(n % 10)}`;
    if (n >= 30) return `ל${n % 30 === 0 ? '' : this.renderHebrewItem(n % 10)}`;
    if (n >= 20) return `כ${n % 20 === 0 ? '' : this.renderHebrewItem(n % 10)}`;
    if (n >= 17) return `י${this.renderHebrewItem(n % 10)}`;
    if (n >= 16) return 'טז';
    if (n >= 15) return 'טו';
    if (n >= 10) return `י${n % 10 === 0 ? '' : this.renderHebrewItem(n % 10)}`;
    if (n >= 9) return 'ט';
    if (n >= 8) return 'ח';
    if (n >= 7) return 'ז';
    if (n >= 6) return 'ו';
    if (n >= 5) return 'ה';
    if (n >= 4) return 'ד';
    if (n >= 3) return 'ג';
    if (n >= 2) return 'ב';
    if (n >= 1) return 'א';
    return '\u05F4';
  }
};
