const Koa = require('koa');
const app = new Koa;

app.use(async (ctx, next) => {
  console.log(1);
  next();
  console.log(2);
})
app.use(async (ctx) => {
  ctx.body = '123';
  console.log(3);
})
app.listen(9999)