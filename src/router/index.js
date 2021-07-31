import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
const loginIndex = r => require.ensure([], () => r(require('@/views/login/Index')), 'loginIndex');
const loginPhone = r => require.ensure([], () => r(require('@/views/login/LoginPhone')), 'loginPhone');
const loginPCode = r => require.ensure([], () => r(require('@/views/login/LoginPCode')), 'loginPCode');

// 发现
const findIndex = r => require.ensure([], () => r(require('@/views/find/FindIndex')), 'findIndex');

// 云村
const tribeIndex = r => require.ensure([], () => r(require('@/views/tribe/TribeIndex')), 'tribeIndex');

// 我的
const myIndex = r => require.ensure([], () => r(require('@/views/my/MyIndex')), 'myIndex');

// 错误界面
const err = r => require.ensure([], () => r(require('@/views/err/Err')), 'err');

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/loginIndex',
    name: 'LoginIndex',
    component: loginIndex,
    meta: { mname: '登录主入口', hasTab: false }
  }, {
    path: '/loginPhone',
    name: 'LoginPhone',
    component: loginPhone,
    meta: { mname: '输入手机号登录', hasTab: false }

  }, {
    path: '/loginPCode',
    name: 'LoginPCode',
    component: loginPCode,
    meta: { mname: '填写手机登录验证码', hasTab: false }
  }, {
    path: '/findIndex',
    name: 'FindIndex',
    component: findIndex,
    meta: { mname: '发现主页面', hasTab: true }
  }, {
    path: '/myIndex',
    name: 'MyIndex',
    component: myIndex,
    meta: { mname: '我的主页面', hasTab: true }
  }, {
    path: '/tribeIndex',
    name: 'TribeIndex',
    component: tribeIndex,
    meta: { mname: '云村主页面', hasTab: true }
  }, {
    path: '/err',
    name: 'Err',
    component: err,
    meta: { mname: '错误界面', hasTab: false }
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (Array.isArray(to.matched) && to.matched.length == 0) {
    next({
      path: "/err",
      query: { msg: decodeURIComponent('界面走丢啦~') }
    })
    return;
  }
  next();
})

export default router