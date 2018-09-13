// External libraries
const { roomInterface } = require('rps-room-module');

module.exports = [
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
    const roomCreated = await roomInterface.Create();

    return ctx.serverResponse()
      .addData({
        statusCode: 201,
        data: roomCreated,
        entity: 'room',
      });
  },
];
