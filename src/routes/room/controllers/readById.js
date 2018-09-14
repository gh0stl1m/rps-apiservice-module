// External libraries
const { roomInterface } = require('rps-room-module');

// Utilities
const { fieldSelector } = require('../../../utils');

module.exports = [
  async (ctx, next) => {
    ctx.checkParams('roomId')
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
    const { roomId } = ctx.params;
    const { select } = ctx.request.query;
    // Select fields
    const selector = fieldSelector(select);

    const roomFound = await roomInterface.ReadById(roomId, selector);

    return ctx.serverResponse()
      .addData({
        statusCode: 200,
        data: roomFound,
        entity: 'room',
      });
  },
];
