const countdown = require('../src/index')

countdown('Prepare for launch', 5).then(() => {
  console.log('Launch ->')
})
