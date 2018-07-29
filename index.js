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
const countdown = (message = 'Launching', T = 10) => {
  return new Promise((resolve, reject) => {
    if (typeof message !== 'string' || typeof T !== 'number' || T <= 0) {
      resolve()
      return
    }
    console.log()
    logFormattedCountdown(message, T--)
    let counterInterval = setInterval(function () {
      if (T === 0) {
        clearInterval(counterInterval)
        console.log(`\r${message}\t\t`, logFormatter.Reset)
        return resolve()
      }
      logFormattedCountdown(message, T--)
    }, 1000)
  })
}

const logFormattedCountdown = (message, T) => {
  process.stdout.write(`\r ${logFormatter.Bright}${message} in ${logFormatter.fg.White}${logFormatter.bg.Red} T-${T} ${logFormatter.Reset}`)
}

module.exports = countdown
