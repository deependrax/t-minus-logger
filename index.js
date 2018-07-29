const logFormatter = require('./log-formatter')

/**
 * log initial message then start with the countdown.
 *
 * **All params are optional with default values.
 *
 * @param {string} [message=Launching] message log before starting the countdown
 * @param {number} [T=5] start countdown from T
 *
 */
module.exports = (message = 'Launching', T = 5) => {
  return new Promise((resolve, reject) => {
    console.log()
    if (typeof message !== 'string' || typeof T !== 'number' || T <= 0) {
      console.error(` ${logFormatter.fg.White}${logFormatter.bg.Red}  Countdown Error  ${logFormatter.Reset}`)
      return resolve()
    }
    logFormattedCountdown(message, T--)
    let counterInterval = setInterval(function () {
      if (T === 0) {
        clearInterval(counterInterval)
        console.log(`\r${message}\t\t`)
        return resolve()
      }
      logFormattedCountdown(message, T--)
    }, 1000)
  })
}

const logFormattedCountdown = (message, T) => {
  process.stdout.write(`\r ${logFormatter.Bright}${message} in ${logFormatter.fg.White}${logFormatter.bg.Red} T-${T} ${logFormatter.Reset}`)
}
