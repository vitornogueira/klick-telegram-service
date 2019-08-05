const broker = require('../broker');
const userRegister = require('../business/user_register');

const queue = {
  name: 'telegram.user.sync',
  options: {
    durable: true,
  },
};

const routingKey = 'user.sync';

broker.consume({ queue, routingKey }, user => userRegister(user));
