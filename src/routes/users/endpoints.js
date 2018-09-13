// External libraries
const Router = require('koa-router');

// Controllers
const create = require('./controllers/create');
const readById = require('./controllers/readById');

// Define prefix router
const router = new Router({
  prefix: '/user',
});

module.exports = () => {
  // Endpoint to read by id an user
  router.get('/:userId', ...readById);

  // Endpoint to create an user
  router.post('/', ...create);

  return router;
};
