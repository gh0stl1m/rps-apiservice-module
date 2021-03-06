// External libraries
const { userInterface } = require('rps-user-module');

module.exports = [
  async (ctx, next) => {
    ctx.checkBody('username')
      .notEmpty()
      .toLowercase();

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
    const { username } = ctx.request.body;

    const newUser = await userInterface.Create(username);

    return ctx.serverResponse()
      .addData({
        statusCode: 201,
        data: newUser,
        entity: 'user',
      });
  },
];
