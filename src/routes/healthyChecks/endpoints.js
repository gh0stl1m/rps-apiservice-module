// External libraries
const Router = require('koa-router');

// Controllers
const serverStatus = require('./controllers/serverStatus');

// Define prefix router
const router = new Router({
  prefix: '/',
});

module.exports = () => {
  router.get('/', ...serverStatus);

  return router;
};
