const colors =  require('./colors')

/**
 * log initial message then start with the countdown.
 * 
 * **All params are optional with default values.
 * 
 * @param {string} [message=Starting] message log before starting the countdown
 * @param {number} [T=5] start countdown from T
 * 
 */
const countdown = (message='Starting', T=10) => {
  return new Promise((resolve, reject) => {
    if(typeof message != 'string' || typeof T != 'number' || T <= 0) {
        resolve()
        return
    }

    let counterInterval = setInterval(function () {
      if (T === 0) {
        clearInterval(counterInterval)
        console.log(`\r${message}\t\t`, colors.Reset);
        resolve()
        return
      }

      process.stdout.write(`\r${colors.Bright}${message} in ${colors.fg.White}${colors.bg.Red} T-${T} ${colors.Reset}`);
      T--
    }, 1000)
  })
}

module.exports = countdown;