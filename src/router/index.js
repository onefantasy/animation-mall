import Vue from 'vue'
import Router from 'vue-router'

// 1. 安装插件
Vue.use(Router)

const home = () => import('views/home/home')
const category = () => import('views/category/category')
const cart = () => import('views/cart/cart')
const profile = () => import('views/profile/profile')
const detail = () => import('views/detail/detail')
const login = () => import('views/login/login')
const userDetail = () => import('views/userDetail/userDetail')
const register = () => import('views/register/register')

// 解决错误：Uncaught (in promise) NavigationDuplicated {_name: "NavigationDuplicated", name: "NavigationDuplicated"}
// 原因，点击后跳转到与当前页面相同的路由
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

// 2. 实例化对象
const router = new Router({
  routes:[
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      component: home,
    },
    {
      path: '/category',
      component: category,
    },
    {
      path: '/cart',
      component: cart,
    },
    {
      path: '/profile',
      component: profile,
    },
    {
      path: '/detail/:id',
      component: detail,
    },
    {
      path: '/login',
      component: login,
    },
    {
      path: '/userDetail',
      component: userDetail,
    },
    {
      path: '/register',
      component: register,
    },
  ],
  mode: 'history'
});

// 3. 导出
export default router
