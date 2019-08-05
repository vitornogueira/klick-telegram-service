const broker = require('../broker');
const sendMessage = require('../business/send_message');

const queue = {
  name: 'telegram.notification.send',
  options: {
    durable: true,
  },
};

const routingKey = 'notification.send';

broker.consume({ queue, routingKey }, data => sendMessage(data));
