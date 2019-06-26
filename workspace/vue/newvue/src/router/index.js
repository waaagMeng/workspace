import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import TimeEntries from '@/components/TimeEntries'
import LogTime from '@/components/LogTime'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/time-entries',
      component: TimeEntries,
      // children: [{
      //   path: log-time,
      //   component: LogTime
      // }]
    }
  ]
})
