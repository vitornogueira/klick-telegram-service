const consumers = require('./app/consumers');
const bot = require('./app/services/bot');

consumers.load();
bot.launch();
