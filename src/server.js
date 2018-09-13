// External libraries
const Koa = require('koa');
const { socketInterface } = require('rps-realtime-module');

// Koa middlewares
const bodyParser = require('koa-bodyparser');
const koaValidate = require('koa-validate');
const conditional = require('koa-conditional-get');
const etag = require('koa-etag');
const compress = require('koa-compress');
const helmet = require('koa-helmet');
const cors = require('kcors');

// Config
const serverConf = require('./config/server');

// Additional middlewares
const { payloadValidator, serverResponse } = require('./middlewares');

// Load routes
const routes = require('./routes');

const app = new Koa();

app
  .use(helmet())
  .use(bodyParser())
  .use(cors({ allowMethods: 'GET,POST,PUT,PATCH,DELETE' }))
  .use(compress())
  .use(conditional())
  .use(etag())
  .use(payloadValidator)
  .use(serverResponse);

koaValidate(app);
app.use(routes());

// Initialize socket server
const socketPort = serverConf.socketPort || 42050;

// Initialize websocket server
socketInterface.StartServer(socketPort);

module.exports = app;
