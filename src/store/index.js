//初始始化
import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex);
const debug = process.env.NODE_ENV !== 'production'; //判断环境 vuex提示生产环境中不使用
//单例模式
export default new Vuex.Store({
  getters,
  actions,
  mutations,
  state,
  strict: debug,
});

