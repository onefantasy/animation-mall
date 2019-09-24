import Vue from 'vue'
import App from './App.vue'

import VueLazyLoad from 'vue-lazyload'
import ElementUI from 'element-ui'

import router from './router'
import store from './store'

import waterfall from 'vue-waterfall2'
Vue.use(waterfall)

import 'element-ui/lib/theme-chalk/index.css'

import toast from 'components/common/toast'

// 安装toast插件
Vue.use(toast);

Vue.use(ElementUI)
Vue.use(VueLazyLoad)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
