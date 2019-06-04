const Koa = require('koa')
// 支持哪些 模版
const views = require('koa-views')
const ejs = require('ejs')
const path = require('path')
const app = new Koa()

const user = {
  name: '你滴寒王',
  posts: [
    {
      id: 0,
      title: '天热脾气燥，你别跟我闹'
    },
    {
      id: 1,
      title: '<strong>刀不锋利马太瘦，我还不想和你斗</strong>'
    }
  ]
}

const postsDetail = [
  {
    id: 0,
    content: '寒王语录1'
  },
  {
    id: 1,
    content: '寒王语录2'
  }
]

app.use(
  views(path.join(__dirname, './views'), {
    extension: 'ejs'
  })
)


// /user 个人的主页面
// /posts 文章详情
app.use(async (ctx) => {
  // 区分 页面
  if (ctx.path === '/user') {
    await ctx.render('user', { user })
  } else if (ctx.path === '/posts') {
    const { id } = ctx.query
    const post = postsDetail.find(postitem => postitem.id == id)
    await ctx.render('post', { post })
  } else {
    ctx.body = '无法处理该请求'
  }
})
app.listen(8080, () => {
  console.log('server is running 8080')
})