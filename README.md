# T-Minus Logger [![T-Minus](./assets/logo.png)]()
> A T-Minus countdown logger for indicating the time remaining before a process is scheduled to start.


## Why?

- Give time to review run params
- Give warning & action time before starting irreversible tasks

  <img src="./assets/screenshot.png">


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


## License

MIT © [Deependra Mishra](https://www.linkedin.com/in/deependrax/)