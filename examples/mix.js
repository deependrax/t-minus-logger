const countdown = require('../index')

countdown('Prepare for launch', undefined, console.warn).then(() => {
    console.log('Launch ->');
});