// External libraries
const Router = require('koa-router');

// Controllers
const create = require('./controllers/create');

// Define prefix router
const router = new Router({
  prefix: '/room',
});

module.exports = () => {
  // Endpoint to create an user
  router.post('/', ...create);

  return router;
};
