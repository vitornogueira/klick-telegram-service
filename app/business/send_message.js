const UserRepository = require('../repositories/user');
const bot = require('../services/bot');

module.exports = ({ identifier, title, content }) => {
  const model = new UserRepository();
  const user = model.find(identifier);

  return bot.sendMessage({
    chatId: user.telegramId,
    message: `${title}\n${content}`,
  });
};
