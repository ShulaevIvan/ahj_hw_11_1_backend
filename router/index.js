const Router = require('koa-router');
const messages = require('../api/messages');

const router = new Router();

router.get('/', async (ctx, next) => {
  ctx.response.body = 'server-start';
  ctx.response.status = 200;
});

router.get('/messages/unread', async (ctx, next) => {
  try {
    const result = await messages.getMessages();
    ctx.status = 200;
    ctx.body = result;
  } catch (err) {
    ctx.status = 500;
    ctx.body = 'iternal error';
  }
});

module.exports = router;
