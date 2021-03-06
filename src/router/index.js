import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import { $get } from '@/util/https';
import { $get } from "@/utils/https";

Vue.use(VueRouter)
const loginIndex = r => require.ensure([], () => r(require('@/views/login/Index')), 'loginIndex');
const loginPhone = r => require.ensure([], () => r(require('@/views/login/LoginPhone')), 'loginPhone');
const loginPCode = r => require.ensure([], () => r(require('@/views/login/LoginPCode')), 'loginPCode');

// 发现
const findIndex = r => require.ensure([], () => r(require('@/views/find/FindIndex')), 'findIndex');
const ranking = r => require.ensure([], () => r(require('@/views/find/Ranking')), 'ranking');

// 云村
const tribeIndex = r => require.ensure([], () => r(require('@/views/tribe/TribeIndex')), 'tribeIndex');

// 我的
const myIndex = r => require.ensure([], () => r(require('@/views/my/MyIndex')), 'myIndex');

// 搜索界面
const searchIndex = r => require.ensure([], () => r(require('@/views/search/SearchIndex')), 'searchIndex');
const showSearch = r => require.ensure([], () => r(require('@/views/search/ShowSearch')), 'showSearch');

// 音乐播放界面
const playIndex = r => require.ensure([], () => r(require('@/views/play/PlayIndex')), 'playIndex');

// 歌单
const sheetDetail = r => require.ensure([], () => r(require('@/views/sheet/SheetDetail')), 'SheetDetail');
const sheetSquare = r => require.ensure([], () => r(require('@/views/sheet/SheetSquare')), 'SheetSquare');
// 设置
const about = r => require.ensure([], () => (require('@/views/set/About')), 'about');

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
    meta: { title: '网易云音乐', mname: '登录主入口' }
  }, {
    path: '/loginPhone',
    name: 'LoginPhone',
    component: loginPhone,
    meta: { title: '手机号登录', mname: '输入手机号登录' }

  }, {
    path: '/loginPCode',
    name: 'LoginPCode',
    component: loginPCode,
    meta: { title: '填写手机验证码', mname: '填写手机登录验证码' }
  }, {
    path: '/findIndex',
    name: 'FindIndex',
    component: findIndex,
    meta: { keepalive: false, title: '发现', mname: '发现主页面' }
  }, {
    path: '/ranking',
    name: 'Ranking',
    component: ranking,
    meta: { title: '排行榜', mname: '发现页中的排行榜' }
  }, {
    path: '/myIndex',
    name: 'MyIndex',
    component: myIndex,
    meta: { keepalive: false, title: '我的', mname: '我的主页面' }
  }, {
    path: '/tribeIndex',
    name: 'TribeIndex',
    component: tribeIndex,
    meta: { keepalive: false, title: '云村', mname: '云村主页面' }
  }, {
    path: '/searchIndex',
    name: 'SearchIndex',
    component: searchIndex,
    meta: { title: '搜索', mname: '搜索主页面' }
  }, {
    path: '/showSearch',
    name: 'ShowSearch',
    component: showSearch,
    meta: { title: '搜索结果', mname: '搜索结果展示页' }
  }, {
    path: '/playIndex',
    name: 'PlayIndex',
    component: playIndex,
    meta: { title: '音乐播放', mname: '播放音乐主界面' }
  }, {
    path: '/sheetDetail',
    name: 'SheetDetail',
    component: sheetDetail,
    meta: { title: '歌单详情', mname: '歌单详情展示页' }
  }, {
    path: '/sheetSquare',
    name: 'SheetSquare',
    component: sheetSquare,
    meta: { title: '歌单广场', mname: '歌单广场展示页' }
  }, {
    path: '/about',
    name: 'About',
    component: about,
    meta: { title: '关于我们', mname: '关于我们' }
  },
  {
    path: '/err',
    name: 'Err',
    component: err,
    meta: { title: '错误', mname: '错误界面' }
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})
export default router
