const Koa = require('koa')
// 支持哪些 模版
const views = require('koa-views')
const ejs = require('ejs')
const path = require('path')
const router = require('./router')
const koaBody = require('koa-body')
const app = new Koa()

app.use(koaBody())
app.use(
  views(path.join(__dirname, './views'), {
    extension: 'ejs'
  })
)

// router.get('/user',)
// router.get('/posts',)

// /user 个人的主页面
// /posts 文章详情
// app.use(async (ctx) => {
//   // 区分 页面
//   if (ctx.path === '/user') {
//     await ctx.render('user', { user })
//   } else if (ctx.path === '/posts') {
//     const { id } = ctx.query
//     const post = postsDetail.find(postitem => postitem.id == id)
//     await ctx.render('post', { post })
//   } else {
//     ctx.body = '无法处理该请求'
//   }
// })
app
  .use(router.routes())
  .use(router.allowedMethods())
app.listen(8080, () => {
  console.log('server is running 8080')
})