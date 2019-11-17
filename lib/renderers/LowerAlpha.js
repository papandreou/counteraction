const Alphabetic = require('./Alphabetic');

module.exports = class LowerAlpha extends Alphabetic {
  static get cssName() {
    return 'lower-alpha';
  }

  constructor() {
    super({
      symbols: 'a b c d e f g h i j k l m n o p q r s t u v w x y z'
    });
  }
};
