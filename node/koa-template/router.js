/**
 * 管理 router
 */
const Router = require('koa-router')
const router = new Router
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


router.get('/user', async (ctx) => {
  await ctx.render('user', { user })
})
router.get('/posts', async (ctx) => {
  const { id } = ctx.query
  const post = postsDetail.find(postitem => postitem.id == id)
  await ctx.render('post', { post })
})
router.get('/create', async (ctx) => {
  await ctx.render('create')
})
router.post('/create', async (ctx) => {
  console.log(ctx.request.body)
  const {title,content} = ctx.request.body;
  let id = Date.now()
  user.posts.push({
    id,
    title
  })
  postsDetail.push({
    id,
    content
  })
  ctx.redirect('/user')
})

module.exports = router