const Alphabetic = require('./Alphabetic');

module.exports = class LowerLatin extends (
  Alphabetic
) {
  static get cssName() {
    return 'upper-latin';
  }

  constructor() {
    super({
      symbols: 'A B C D E F G H I J K L M N O P Q R S T U V W Z Y Z',
    });
  }
};
