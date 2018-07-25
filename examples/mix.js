const countdown = require('../index')

countdown(undefined, 3).then(() => {
    console.log('Launch ->');
});