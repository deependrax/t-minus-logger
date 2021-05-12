## T-Minus Logger <img src="./src/assets/logo.png">

[![travis][travis-image]][travis-url] [![CodeFactor][codefactor-image]][codefactor-url] [![Coverage Status][coverall-image]][coverall-url] [![npm][npm-image]][npm-url] [![downloads][downloads-image]][downloads-url] [![javascript style guide][standard-image]][standard-url]

[travis-image]: https://travis-ci.org/deependrax/t-minus-logger.svg?branch=master
[travis-url]: https://travis-ci.org/deependrax/t-minus-logger
[codefactor-image]: https://www.codefactor.io/repository/github/deependrax/t-minus-logger/badge
[codefactor-url]: https://www.codefactor.io/repository/github/deependrax/t-minus-logger
[coverall-image]: https://coveralls.io/repos/github/deependrax/t-minus-logger/badge.svg?branch=master
[coverall-url]: https://coveralls.io/github/deependrax/t-minus-logger?branch=master
[npm-image]: https://img.shields.io/npm/v/t-minus-logger.svg
[npm-url]: https://npmjs.org/package/t-minus-logger
[downloads-image]: https://img.shields.io/npm/dm/t-minus-logger.svg
[downloads-url]: https://npmjs.org/package/t-minus-logger
[standard-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[standard-url]: https://standardjs.com

> A T-Minus countdown logger for indicating the time remaining before a process is scheduled to start.

## Why?

- Give time to review run params
- Give warning & action time before starting irreversible tasks

  <img src="./src/assets/screenshot.png">

## Installation

```shell
$ npm i t-minus-logger
```

## Usage

```js
const countdown = require("t-minus-logger");

countdown("Prepare for launch", 5).then(() => {
  console.log("Launch ->");
});
```

**Note:**<br>

- Please refer to examples in the repository for more usage options and default behavior.
- Exclude in dev mode by conditionally passing start time T = 0

## License

MIT © [Deependra Mishra](https://www.linkedin.com/in/deependrax/)
