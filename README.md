# T-Minus Logger
A T-Minus countdown logger for indicating the time remaining before a process is scheduled to start.

## Installation
```shell
$ npm install t-minus-logger -g
$ npm install t-minus-logger --save
```

In Node.js:
```js
const countdown = require('t-minus-logger')

countdown('Prepare for launch', 5, console.warn).then(() => {
    console.log('Launch ->');
});
```

**Note:**<br>
Please refer examples in repository for usage.