import Vue from 'vue'
import Router from 'vue-router'
import User from './module/user'
import { Toast } from 'mand-mobile'

Vue.use(Router)

const commonRoutes = [
  {
    path: '/404',
    component: () => import('@/components/RouterError/404')
  },
  {
    path: '/401',
    component: () => import('@/components/RouterError/401')
  },
  {
    path: '*',
    redirect: '/404'
  },
  {
    path: '/',
    redirect: '/trip'
  }
]

// 分模块的路由，合并传入Router
let router = new Router({
  base: process.env.BASE_URL,
  routes: commonRoutes.concat(User)
})

// 导航守卫，非登录状态下先登录
router.beforeEach((to,from,next) => {
  let tmp = localStorage.getItem('user')
  if (!tmp && to.name != 'Login') {
    Toast.succeed('你需要先登录哟!',1500)
    next({ path: '/login' })
    return
  }
  next()
})

export default router
// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })
