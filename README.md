# counteraction

[![Build Status](https://travis-ci.org/papandreou/counteraction.svg?branch=master)](https://travis-ci.org/papandreou/counteraction)

[![Coverage Status](https://coveralls.io/repos/github/papandreou/counteraction/badge.svg?branch=master)](https://coveralls.io/github/papandreou/counteraction?branch=master)

Implementations of most of the counter types supported by the [`list-style-type`
CSS property](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type)
as well as the numbering systems allowed by
[`@counter-style`](https://developer.mozilla.org/en-US/docs/Web/CSS/@counter-style).

Many of the renderers are based on CLDR with the code generated by the [cldr module](https://github.com/papandreou/node-cldr) (see `extractRbnfFunctionByType`).

## Installation

```
npm install counteraction
```

## Supported renderers

Simple `list-style-type` renderers (option-less):

- `armenian`
- `decimal`
- `decimal-leading-zero`
- `ethiopic`
- `georgian`
- `hebrew`
- `lower-alpha`
- `lower-greek`
- `lower-latin`
- `lower-roman`
- `tamil`
- `upper-alpha`
- `upper-greek`
- `upper-latin`
- `upper-roman`

These bogus ones are there for completeness:

- `disc` (renders a `•` regardless of the value)
- `none` (renders the empty string regardless of the value)

More complex `@counter-system` renderers:

- `alphabetic`
- `additive`
- `cyclic`
- `fixed`
- `symbolic`
- `numeric`

## Example

The simple counter renderers are instantiated by their name and don't need any options:

```js
const counteraction = require('counteraction');

const renderer = counteraction('lower-roman');
console.log(renderer.render(123)); // cxxiii
```

```output
cxxiii
```

The `@counter-system` ones are created by their `system` name and accept an
options object that corresponds to the CSS properties of the `@counter-style`
declaration:

```js
const renderer = counteraction('alphabetic', {
  symbols: ['X', 'Y', 'Z'],
});
console.log(renderer.render(123)); // XXXXZ
```

```output
cxxiii
```

The name (system) can also be passed as a separate property instead of the name
parameter. That might be easier if you're working with a parsed representation
of the whole `@counter-style` declaration:

```js
const renderer = counteraction({
  system: 'alphabetic',
  symbols: ['X', 'Y', 'Z'],
});
console.log(renderer.render(123)); // XXXXZ
```

```output
XXXXZZvqeiojqvwioejvqwe
```

They also support a `fallback` option to be used when the value is out of range.
It can be passed as either a renderer instance or the name of a
`list-style-type` renderer:

```js
const renderer = counteraction('fixed', {
  symbols: ['X', 'Y', 'Z'],
  fallback: 'disc',
});
console.log(renderer.render(3)); // Z
console.log(renderer.render(4)); // •
```

```output
Z
•
```

The `fallback` option can also be passed as another renderer instance, or "lazily" as a function that returns either a `list-style-type` name or a renderer.
