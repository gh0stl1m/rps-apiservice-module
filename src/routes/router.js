// External libraries
const Router = require('koa-router');
const Boom = require('boom');
const compose = require('koa-compose');

// Load endpoints
const healthyChecks = require('./healthyChecks');
const user = require('./users');

const allowedMethods = {
  throw: true,
  notImplemented: () => Boom.notImplemented(),
  methodNotAllowed: () => Boom.methodNotAllowed(),
};

module.exports = () => {
  const router = new Router();
  // Register endpoints into the router
  router.use(healthyChecks().routes());
  router.use(user().routes());

  return compose([router.routes(), router.allowedMethods(allowedMethods)]);
};
