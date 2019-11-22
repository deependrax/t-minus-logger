const countdown = require('../src/index')

countdown(undefined, 3).then(() => {
  console.log('Launch ->')
})
