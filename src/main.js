import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/reset.css'
import './assets/common.less'
import './utils/vantTool'
import * as tool from './utils/tools'
import * as uapi from './utils/userApi'
import * as api from './utils/api'

Vue.config.productionTip = false
Vue.prototype.$assetsUrl = "http://tm.lilanz.com/QYWX/Test/LMTest/assets/img/music/"
Vue.prototype.$utils = tool
Vue.prototype.$uApi = uapi
Vue.prototype.$api = api

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
