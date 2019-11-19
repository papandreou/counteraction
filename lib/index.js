const CounterClassByType = {};

function create(name, options) {
  if (typeof name === 'object' && name) {
    if (options) {
      options = {
        ...name,
        ...options
      };
    } else {
      options = name;
    }
    name = name.system;
  }
  if (name) {
    const Constructor = CounterClassByType[name.toLowerCase()];
    if (Constructor) {
      return new Constructor(options);
    }
  }
}

module.exports = create;

create.supports = create.isSupported = name => {
  if (typeof name === 'object' && name) {
    name = name.system;
  }
  return CounterClassByType.hasOwnProperty(name.toLowerCase());
};

for (const Class of [
  require('./renderers/Additive'),
  require('./renderers/Alphabetic'),
  require('./renderers/Armenian'),
  require('./renderers/CounterStyle'),
  require('./renderers/Cyclic'),
  require('./renderers/Decimal'),
  require('./renderers/DecimalLeadingZero'),
  require('./renderers/Disc'),
  require('./renderers/Ethiopic'),
  require('./renderers/Fixed'),
  require('./renderers/Georgian'),
  require('./renderers/Hebrew'),
  require('./renderers/LowerAlpha'),
  require('./renderers/LowerGreek'),
  require('./renderers/LowerLatin'),
  require('./renderers/LowerRoman'),
  require('./renderers/None'),
  require('./renderers/Numeric'),
  require('./renderers/Symbolic'),
  require('./renderers/Tamil'),
  require('./renderers/UpperAlpha'),
  require('./renderers/UpperLatin'),
  require('./renderers/UpperGreek'),
  require('./renderers/UpperRoman')
]) {
  if (Class.cssName) {
    CounterClassByType[Class.cssName] = Class;
  }
}
