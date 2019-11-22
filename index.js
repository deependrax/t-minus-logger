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
    if (typeof message !== 'string' || typeof T !== 'number' || T <= 0) {
      console.error(`${logFormatter.fg.white}${logFormatter.bg.red} Countdown Error ${logFormatter.reset}`)
      return reject(new Error('Countdown Error, please refer documentation for valid message & initial counter (T) values'))
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
  process.stdout.write(`\r ${logFormatter.bright}${message} in ${logFormatter.fg.white}${logFormatter.bg.red} T-${T} ${logFormatter.reset}`)
}
