const countdown = require('../index')

countdown('Prepare for launch', 5).then(() => {
    console.log('Launch ->');
});