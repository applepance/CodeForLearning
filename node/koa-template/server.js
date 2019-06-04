const Koa = require('koa');

const app = new Koa();
const admin = new Koa();

//回头tp.createServer
//req
//res
//ctx = req + res
app.use(async (ctx,next) => {
  console.log(1);
  await next();
  console.log(2);
})
app.use(async (ctx,next) => {
  console.log(4);
  await next();
  console.log(5)
})
app.use(async (ctx,next) => {
  console.log(3)
  ctx.body = `<strong>ti np</strong>`;
  await next();
});
app.use(async (ctx,next) => {
  console.log(6);
  // await next();
  // console.log(5)
})
//http.listen 语法糖
app.listen(8080,() => {
  console.log('server is running 8080')
})
