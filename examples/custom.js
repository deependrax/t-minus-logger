const countdown = require('../index')

countdown('Prepare for launch', 5, console.warn).then(() => {
    console.log('Launch ->');
});