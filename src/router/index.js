import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 都使用路由懒加载，()=>import('路径')
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home/Home.vue')
  },
  {
    path: '/about/:name',
    name: 'about',
    component: () => import('../views/about/About.vue')
  },
  {
    path: '/MyCart',
    name: 'MyCart',
    component: () => import('../views/cart/MyCart.vue')
  },
  {
    path: '/MyPro',
    name: 'MyPro',
    component: () => import('../views/project/MyPro.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
