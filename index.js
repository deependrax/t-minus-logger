/**
 * @param {string} message message log before starting the countdown
 * @param {number} T start countdown from T * 
 * @param {function} logger logger function
 */
const countdown = (message, T, logger) => {
  return new Promise((resolve, reject) => {
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