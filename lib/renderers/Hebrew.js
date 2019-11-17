// Adapted from require('cldr').extractRbnfFunctionByType.renderHebrew.toString()

module.exports = class Hebrew {
  static get cssName() {
    return 'hebrew';
  }

  renderItem(counterValue) {
    if (counterValue < 0) {
      return `−${this.renderItem(-counterValue)}`;
    }
    if (counterValue >= 2100) {
      return String(counterValue);
    }
    if (counterValue >= 2e3) {
      return `תתתתת${
        counterValue === 2e3 ? '' : this.renderItem(counterValue % 1e3)
      }`;
    }
    if (counterValue >= 1900) {
      return `תתתתש${
        counterValue === 1900 ? '' : this.renderItem(counterValue % 1e3)
      }`;
    }
    if (counterValue >= 1800) {
      return `תתתתר${
        counterValue === 1800 ? '' : this.renderItem(counterValue % 1e3)
      }`;
    }
    if (counterValue >= 1700) {
      return `תתתתק${
        counterValue === 1700 ? '' : this.renderItem(counterValue % 1e3)
      }`;
    }
    if (counterValue >= 1600) {
      return `תתתת${
        counterValue === 1600 ? '' : this.renderItem(counterValue % 1e3)
      }`;
    }
    if (counterValue >= 1500) {
      return `תתתש${
        counterValue === 1500 ? '' : this.renderItem(counterValue % 1e3)
      }`;
    }
    if (counterValue >= 1400) {
      return `תתתר${
        counterValue === 1400 ? '' : this.renderItem(counterValue % 1e3)
      }`;
    }
    if (counterValue >= 1300) {
      return `תתתק${
        counterValue === 1300 ? '' : this.renderItem(counterValue % 1e3)
      }`;
    }
    if (counterValue >= 1200) {
      return `תתת${
        counterValue === 1200 ? '' : this.renderItem(counterValue % 1e3)
      }`;
    }
    if (counterValue >= 1100) {
      return `תתש${
        counterValue === 1100 ? '' : this.renderItem(counterValue % 1e3)
      }`;
    }
    if (counterValue >= 1e3) {
      return `תתר${
        counterValue === 1e3 ? '' : this.renderItem(counterValue % 1e3)
      }`;
    }
    if (counterValue >= 900) {
      return `תתק${
        counterValue === 900 ? '' : this.renderItem(counterValue % 100)
      }`;
    }
    if (counterValue >= 800) {
      return `תת${
        counterValue === 800 ? '' : this.renderItem(counterValue % 100)
      }`;
    }
    if (counterValue >= 745) {
      return `תש${this.renderItem(counterValue % 100)}`;
    }
    if (counterValue >= 744) {
      return 'תשדמ';
    }
    if (counterValue >= 700) {
      return `תש${
        counterValue === 700 ? '' : this.renderItem(counterValue % 100)
      }`;
    }
    if (counterValue >= 699) {
      return `תר${this.renderItem(counterValue % 100)}`;
    }
    if (counterValue >= 698) {
      return 'תרחצ';
    }
    if (counterValue >= 600) {
      return `תר${
        counterValue === 600 ? '' : this.renderItem(counterValue % 100)
      }`;
    }
    if (counterValue >= 500) {
      return `תק${
        counterValue === 500 ? '' : this.renderItem(counterValue % 100)
      }`;
    }
    if (counterValue >= 400) {
      return `ת${
        counterValue === 400 ? '' : this.renderItem(counterValue % 100)
      }`;
    }
    if (counterValue >= 345) {
      return `ש${this.renderItem(counterValue % 100)}`;
    }
    if (counterValue >= 344) {
      return 'שדמ';
    }
    if (counterValue >= 305) {
      return `ש${this.renderItem(counterValue % 100)}`;
    }
    if (counterValue >= 304) {
      return 'דש';
    }
    if (counterValue >= 300) {
      return `ש${
        counterValue === 300 ? '' : this.renderItem(counterValue % 100)
      }`;
    }
    if (counterValue >= 299) {
      return `ר${this.renderItem(counterValue % 100)}`;
    }
    if (counterValue >= 298) {
      return 'רחצ';
    }
    if (counterValue >= 200) {
      return `ר${
        counterValue === 200 ? '' : this.renderItem(counterValue % 100)
      }`;
    }
    if (counterValue >= 100) {
      return `ק${
        counterValue === 100 ? '' : this.renderItem(counterValue % 100)
      }`;
    }
    if (counterValue >= 90) {
      return `צ${
        counterValue === 90 ? '' : this.renderItem(counterValue % 10)
      }`;
    }
    if (counterValue >= 80) {
      return `פ${
        counterValue === 80 ? '' : this.renderItem(counterValue % 10)
      }`;
    }
    if (counterValue >= 70) {
      return `ע${
        counterValue === 70 ? '' : this.renderItem(counterValue % 10)
      }`;
    }
    if (counterValue >= 60) {
      return `ס${
        counterValue === 60 ? '' : this.renderItem(counterValue % 10)
      }`;
    }
    if (counterValue >= 50) {
      return `נ${
        counterValue === 50 ? '' : this.renderItem(counterValue % 10)
      }`;
    }
    if (counterValue >= 40) {
      return `מ${
        counterValue === 40 ? '' : this.renderItem(counterValue % 10)
      }`;
    }
    if (counterValue >= 30) {
      return `ל${
        counterValue === 30 ? '' : this.renderItem(counterValue % 10)
      }`;
    }
    if (counterValue >= 20) {
      return `כ${
        counterValue === 20 ? '' : this.renderItem(counterValue % 10)
      }`;
    }
    if (counterValue >= 17) {
      return `י${this.renderItem(counterValue % 10)}`;
    }
    if (counterValue >= 16) {
      return 'טז';
    }
    if (counterValue >= 15) {
      return 'טו';
    }
    if (counterValue >= 10) {
      return `י${
        counterValue === 10 ? '' : this.renderItem(counterValue % 10)
      }`;
    }
    if (counterValue >= 9) {
      return 'ט';
    }
    if (counterValue >= 8) {
      return 'ח';
    }
    if (counterValue >= 7) {
      return 'ז';
    }
    if (counterValue >= 6) {
      return 'ו';
    }
    if (counterValue >= 5) {
      return 'ה';
    }
    if (counterValue >= 4) {
      return 'ד';
    }
    if (counterValue >= 3) {
      return 'ג';
    }
    if (counterValue >= 2) {
      return 'ב';
    }
    if (counterValue >= 1) {
      return 'א';
    }
    if (counterValue >= 0) {
      return '״';
    }
  }

  render099(counterValue) {
    if (counterValue >= 91) {
      return `צ״${this.renderItem(counterValue % 10)}`;
    }
    if (counterValue >= 90) {
      return '״צ';
    }
    if (counterValue >= 81) {
      return `פ״${this.renderItem(counterValue % 10)}`;
    }
    if (counterValue >= 80) {
      return '״פ';
    }
    if (counterValue >= 71) {
      return `ע״${this.renderItem(counterValue % 10)}`;
    }
    if (counterValue >= 70) {
      return '״ע';
    }
    if (counterValue >= 61) {
      return `ס״${this.renderItem(counterValue % 10)}`;
    }
    if (counterValue >= 60) {
      return '״ס';
    }
    if (counterValue >= 51) {
      return `נ״${this.renderItem(counterValue % 10)}`;
    }
    if (counterValue >= 50) {
      return '״נ';
    }
    if (counterValue >= 41) {
      return `מ״${this.renderItem(counterValue % 10)}`;
    }
    if (counterValue >= 40) {
      return '״מ';
    }
    if (counterValue >= 31) {
      return `ל״${this.renderItem(counterValue % 10)}`;
    }
    if (counterValue >= 30) {
      return '״ל';
    }
    if (counterValue >= 21) {
      return `כ״${this.renderItem(counterValue % 10)}`;
    }
    if (counterValue >= 20) {
      return '״כ';
    }
    if (counterValue >= 17) {
      return `י״${this.renderItem(counterValue % 10)}`;
    }
    if (counterValue >= 16) {
      return 'ט״ז';
    }
    if (counterValue >= 15) {
      return 'ט״ו';
    }
    if (counterValue >= 11) {
      return `י״${this.renderItem(counterValue % 10)}`;
    }
    if (counterValue >= 1) {
      return `״${this.renderItem(counterValue)}`;
    }
    if (counterValue >= 0) {
      return '׳';
    }
  }

  render(counterValue) {
    if (counterValue < 0) {
      return `−${this.render(-counterValue)}`;
    }
    if (counterValue >= 1000001) {
      return String(counterValue);
    }
    if (counterValue >= 1e6) {
      return 'אלף אלפים';
    }
    if (counterValue >= 3001) {
      return (
        this.renderThousands(Math.floor(counterValue / 1e3)) +
        (counterValue === 3001 ? '' : this.render(counterValue % 1e3))
      );
    }
    if (counterValue >= 3e3) {
      return `${this.render(Math.floor(counterValue / 1e3))} אלפים`;
    }
    if (counterValue >= 2001) {
      return (
        this.renderThousands(Math.floor(counterValue / 1e3)) +
        (counterValue === 2001 ? '' : this.render(counterValue % 1e3))
      );
    }
    if (counterValue >= 2e3) {
      return 'אלפיים';
    }
    if (counterValue >= 1001) {
      return (
        this.renderThousands(Math.floor(counterValue / 1e3)) +
        (counterValue === 1001 ? '' : this.render(counterValue % 1e3))
      );
    }
    if (counterValue >= 1e3) {
      return 'אלף';
    }
    if (counterValue >= 901) {
      return `תתק${this.render099(counterValue % 100)}`;
    }
    if (counterValue >= 900) {
      return 'תת״ק';
    }
    if (counterValue >= 801) {
      return `תת${this.render099(counterValue % 100)}`;
    }
    if (counterValue >= 800) {
      return 'ת״ת';
    }
    if (counterValue >= 745) {
      return `תש${this.render099(counterValue % 100)}`;
    }
    if (counterValue >= 744) {
      return 'תשד״מ';
    }
    if (counterValue >= 701) {
      return `תש${this.render099(counterValue % 100)}`;
    }
    if (counterValue >= 700) {
      return 'ת״ש';
    }
    if (counterValue >= 699) {
      return `תר${this.render099(counterValue % 100)}`;
    }
    if (counterValue >= 698) {
      return 'תרח״צ';
    }
    if (counterValue >= 601) {
      return `תר${this.render099(counterValue % 100)}`;
    }
    if (counterValue >= 600) {
      return 'ת״ר';
    }
    if (counterValue >= 501) {
      return `תק${this.render099(counterValue % 100)}`;
    }
    if (counterValue >= 500) {
      return 'ת״ק';
    }
    if (counterValue >= 400) {
      return `ת${this.render099(counterValue % 100)}`;
    }
    if (counterValue >= 345) {
      return `ש${this.render099(counterValue % 100)}`;
    }
    if (counterValue >= 344) {
      return 'שד״מ';
    }
    if (counterValue >= 305) {
      return `ש${this.render099(counterValue % 100)}`;
    }
    if (counterValue >= 304) {
      return 'ד״ש';
    }
    if (counterValue >= 300) {
      return `ש${this.render099(counterValue % 100)}`;
    }
    if (counterValue >= 299) {
      return `ר${this.render099(counterValue % 100)}`;
    }
    if (counterValue >= 298) {
      return 'רח״צ';
    }
    if (counterValue >= 200) {
      return `ר${this.render099(counterValue % 100)}`;
    }
    if (counterValue >= 100) {
      return `ק${this.render099(counterValue % 100)}`;
    }
    if (counterValue >= 91) {
      return `צ״${this.renderItem(counterValue % 10)}`;
    }
    if (counterValue >= 90) {
      return 'צ׳';
    }
    if (counterValue >= 81) {
      return `פ״${this.renderItem(counterValue % 10)}`;
    }
    if (counterValue >= 80) {
      return 'פ׳';
    }
    if (counterValue >= 71) {
      return `ע״${this.renderItem(counterValue % 10)}`;
    }
    if (counterValue >= 70) {
      return 'ע׳';
    }
    if (counterValue >= 61) {
      return `ס״${this.renderItem(counterValue % 10)}`;
    }
    if (counterValue >= 60) {
      return 'ס׳';
    }
    if (counterValue >= 51) {
      return `נ״${this.renderItem(counterValue % 10)}`;
    }
    if (counterValue >= 50) {
      return 'נ׳';
    }
    if (counterValue >= 41) {
      return `מ״${this.renderItem(counterValue % 10)}`;
    }
    if (counterValue >= 40) {
      return 'מ׳';
    }
    if (counterValue >= 31) {
      return `ל״${this.renderItem(counterValue % 10)}`;
    }
    if (counterValue >= 30) {
      return 'ל׳';
    }
    if (counterValue >= 21) {
      return `כ״${this.renderItem(counterValue % 10)}`;
    }
    if (counterValue >= 20) {
      return 'כ׳';
    }
    if (counterValue >= 17) {
      return `י״${this.renderItem(counterValue % 10)}`;
    }
    if (counterValue >= 16) {
      return 'ט״ז';
    }
    if (counterValue >= 15) {
      return 'ט״ו';
    }
    if (counterValue >= 11) {
      return `י״${this.renderItem(counterValue % 10)}`;
    }
    if (counterValue >= 0) {
      return `${this.renderItem(counterValue)}׳`;
    }
  }

  renderThousands(counterValue) {
    if (counterValue >= 401) {
      return `${this.render(counterValue)}׳`;
    }
    if (counterValue >= 100) {
      return this.render(counterValue) + (counterValue === 100 ? '' : '׳');
    }
    if (counterValue >= 10) {
      return this.render(counterValue) + (counterValue === 10 ? '' : '׳');
    }
    if (counterValue >= 0) {
      return this.render(counterValue);
    }
  }
};
