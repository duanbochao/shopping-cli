import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/tabbar/Home'
import Member from '@/tabbar/Member'
import Search from '@/tabbar/Search'
import Shop from '@/tabbar/Shop'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path:'/home',
      name: 'Home',
      component: Home
    },
    {
      path:'/member',
      name: 'member',
      component: Member
    },
    {
      path:'/search',
      name: 'search',
      component: Search
    },
    {
      path:'/shop',
      name: 'shop',
      component: Shop
    }
  ],
  linkActiveClass:'mui-active'
})
