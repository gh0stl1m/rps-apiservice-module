const prefix = require('./environment');

module.exports = {
  port: process.env[`${prefix}SERVER_PORT`],
  socketPort: process.env[`${prefix}SOCKET_SERVER_PORT`],
};
