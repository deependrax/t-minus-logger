/**
 * log initial message then start with the countdown.
 * 
 * **All params are optional with default values.
 * 
 * @param {string} [message=Starting] message log before starting the countdown
 * @param {number} [T=5] start countdown from T
 * @param {function} [logger=console.log] logger function
 */
const countdown = (message='Starting', T=5, logger=console.log) => {
  return new Promise((resolve, reject) => {
    if(typeof message != 'string' || typeof T != 'number' || T <= 0 || typeof logger != 'function') {
        resolve()
        return
    }

    logger(`${message} in ${T} secs...`)
    let counterInterval = setInterval(function () {
      if (T === 0) {
        clearInterval(counterInterval)
        resolve()
        return
      }

      logger(T--)
    }, 1000)
  })
}

module.exports = countdown;