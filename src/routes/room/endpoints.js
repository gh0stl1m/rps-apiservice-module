// External libraries
const Router = require('koa-router');

// Controllers
const create = require('./controllers/create');
const readById = require('./controllers/readById');

// Define prefix router
const router = new Router({
  prefix: '/room',
});

module.exports = () => {
  // Endpoint to read room by id
  router.get('/:roomId', ...readById);

  // Endpoint to create a room
  router.post('/', ...create);

  return router;
};
