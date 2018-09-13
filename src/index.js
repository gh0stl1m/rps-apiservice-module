// External libraries
const Bluebird = require('bluebird');

// Config
const serverConf = require('./config/server');

// Server
const server = require('./server');

// Logger
const logger = require('./logger');

// Set global promise with bluebird
global.Promise = Bluebird;

const serverPort = serverConf.port || 8888;

// Initialize server
server.listen(serverPort, (err) => {
  if (err) {
    logger.error(`Error initializing server: ${err.message}`);
  } else {
    logger.info(`Server running at port: ${serverPort}`);
  }
});
