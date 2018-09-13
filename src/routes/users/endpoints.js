// External libraries
const Router = require('koa-router');

// Controllers
const create = require('./controllers/create');
const readById = require('./controllers/readById');
const readStatistics = require('./controllers/readStatistics');

// Define prefix router
const router = new Router({
  prefix: '/user',
});

module.exports = () => {
  // Endpoitt to read user statistics
  router.get('/:userId/statistics', ...readStatistics);

  // Endpoint to read by id an user
  router.get('/:userId', ...readById);

  // Endpoint to create an user
  router.post('/', ...create);

  return router;
};
