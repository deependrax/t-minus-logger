/**
 * log initial message then start with the countdown.
 * 
 * **All params are optional with default values.
 * 
 * @param {string} [message=Starting] message log before starting the countdown
 * @param {number} [T=5] start countdown from T
 * 
 */
const countdown = (message='Starting', T=5) => {
  return new Promise((resolve, reject) => {
    if(typeof message != 'string' || typeof T != 'number' || T <= 0) {
        resolve()
        return
    }

    console.log(`${message} in ${T} secs...`)
    let counterInterval = setInterval(function () {
      if (T === 0) {
        clearInterval(counterInterval)
        resolve()
        return
      }

      console.log(T--)
    }, 1000)
  })
}

module.exports = countdown;