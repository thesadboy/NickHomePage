const Koa = require('koa');
const app = new Koa();

const onerror = require('koa-onerror');
const path = require('path');

const port = 8888;

// error handler
onerror(app);

// middlewares
app.use(require('koa-static')(path.join(__dirname, '../dist')));
// logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});
app.on('error', function (err, ctx) {
  console.error('server error', err, ctx);
});

module.exports = app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
