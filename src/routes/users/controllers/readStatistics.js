// External libraries
const { statisticsInterface } = require('rps-user-module');

// Utilities
const { fieldSelector } = require('../../../utils');

module.exports = [
  async (ctx, next) => {
    ctx.checkParams('userId')
      .notEmpty();
    ctx.checkQuery('select')
      .optional();

    return ctx.checkValidate(next);
  },
  async (ctx, next) => {
    try {
      return await next();
    } catch (err) {
      return ctx.serverResponse()
        .addError({
          statusCode: 401,
          message: err.message,
        });
    }
  },
  async (ctx) => {
    const { userId } = ctx.params;
    const { select } = ctx.request.query;
    // Select fields
    const selector = fieldSelector(select);

    const userStatistics = await statisticsInterface.ReadStatistics(userId, selector);

    return ctx.serverResponse()
      .addData({
        statusCode: 200,
        data: userStatistics,
        entity: 'statistics',
      });
  },
];
