module.exports = [
  async ctx => ctx.serverResponse()
    .addData({
      statusCode: 200,
      data: { message: 'Server Running' },
    }),
];
