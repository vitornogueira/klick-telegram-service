const Telegraf = require('telegraf');
const Telegram = require('telegraf/telegram');
const broker = require('../broker');

const bot = new Telegraf(process.env.BOT_TOKEN);
const telegram = new Telegram(process.env.BOT_TOKEN);

module.exports = {
  launch() {
    bot.start((ctx) => {
      ctx.reply('Hey! Register your email using /register your@email.here');
    });

    bot.command('register', (ctx) => {
      const { from, text } = ctx.message;
      const telegramId = from.id;
      const name = `${from.first_name} ${from.last_name}`;
      const email = text.split(' ')[1];

      if (email) {
        broker.publish('user.register', { email, name, telegramId });
      }
    });


    bot.launch();
  },
  sendMessage({ chatId, message }) {
    telegram.sendMessage(chatId, message, { parse_mode: 'Markdown' });
  },
};
