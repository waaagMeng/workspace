import Vue from 'vue'
import Router from 'vue-router'
import { networkInterfaces } from 'os'

Vue.use(Router)
import { getToken } from '@/utils/auth'

// 当进入/ 如果没有token 就去登录页

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/index')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/pages/login')
    }
  ]
})

// to from $router path /
let token = getToken()
const WhiteList = ['/login','/signup','/auth-redirect']
router.beforeEach((to,from,next) => {
  if(token) {

  } else {
    console.log(to.path)
    if (WhiteList.includes(to.path)) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
    }
  }
})
export default router 