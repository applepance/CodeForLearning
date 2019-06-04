import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Look from '@/components/Look'
import LookOne from '@/components/LookOne'
import LookTwo from '@/components/LookTwo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/nya',
      name: 'Look',
      component: Look,
      children: [
        {
          path: 'nya-one',
          name: 'LookOne',
          component: LookOne
        },
        {
          path: 'nya-two',
          name: 'LookTwo',
          component: LookTwo
        }
      ]
    },
    {
      path: '/go-back',
      redirect: '/'
    }
  ]
})
