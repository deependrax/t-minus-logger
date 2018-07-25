# T-Minus Logger
A T-Minus countdown logger for indicating the time remaining before a process is scheduled to start.

## Installation
```shell
$ npm i t-minus-logger
```

## Usage
```js
const countdown = require('t-minus-logger')

countdown('Prepare for launch', 5).then(() => {
    console.log('Launch ->');
});
```

**Note:**<br>
Please refer examples in repository for more usage options and default behaviour.