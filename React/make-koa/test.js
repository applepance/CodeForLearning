const delegates = require('delegates');
const Koa = require('./lib/application.js');
const app =  new Koa();

app.use(async (ctx, next) => {
  console.log(1);
  await next();
  console.log(2);
})
app.use(async (ctx) => {
  console.log(3);
  ctx.body = '<h2>hello!</h2>';
})
app.listen(3000, () => {
  console.log('server is running 3000');
})
// const ctx = {
//   request: {
//     url: 'baidu.com'
//   },
//   response: {
//     body: 123
//   }
// }
// delegates(ctx, 'request')
// .access('url')
// delegates(ctx, 'response')
// .access('body')
// console.log(ctx.url === ctx.request.url);
// ctx.body = 456;
// console.log(ctx);