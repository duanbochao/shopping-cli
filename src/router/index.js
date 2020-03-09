import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/tabbar/Home'
import Member from '@/tabbar/Member'
import Search from '@/tabbar/Search'
import Shop from '@/tabbar/Shop'
import NewsList from '@/components/News/NewsList'
import NewsDetail from '@/components/News/NewsDetail'
import Comment from '@/components/subcomponents/Comment'

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
    },
    {
      path:'/News/newsList',
      name: 'NewsList',
      component: NewsList
    },
    {
      path:'/News/newsList/NewsDetail/:id',
      name: 'NewsDetail',
      component: NewsDetail
    },
    {
      path:'/comment',
      name: 'comment',
      component: Comment
    }
  ],
  linkActiveClass:'mui-active'
})
