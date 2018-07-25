# T-Minus Logger
A T-Minus countdown logger for indicating the time remaining before a process is scheduled to start.

## Installation
```shell
$ npm install t-minus-logger -g
$ npm install t-minus-logger --save
```

## Usage
```js
const countdown = require('t-minus-logger')

countdown('Prepare for launch', 5, console.warn).then(() => {
    console.log('Launch ->');
});
```

**Note:**<br>
Please refer examples in repository for more usage options and default behaviour.