import Vue from 'vue'
import Router from 'vue-router'

const Home = ()=>import('../components/tabbar/home/index')
const Category = ()=>import('../components/tabbar/category/index')
const Cart = ()=>import('../components/tabbar/cart/index')
const Profile = ()=>import('../components/tabbar/profile/index')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect:'/home',
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta:{
        title:'首页',
      }

    },
    {
      path: '/category',
      name: 'category',
      component: Category,
      meta:{
        title:'分类',
      }
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
      meta:{
        title:'购物车',
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      meta:{
        title:'个人中心',
      }
    }
  ],
  mode:'history'
})
