const UserRepository = require('../repositories/user');
const bot = require('../services/bot');

module.exports = (data) => {
  const model = new UserRepository();

  model.create(data);

  return bot.sendMessage({
    chatId: data.telegramId,
    message: 'Hey! You have been registered!',
  });
};
