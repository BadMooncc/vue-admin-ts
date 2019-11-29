import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import ElementUi from 'element-ui'
import Echarts from 'echarts'

import 'element-ui/lib/theme-chalk/index.css'
import './assets/style/reset.scss'
import '../mock/common'
Vue.use(ElementUi)
Vue.config.productionTip = false
Vue.prototype.$echarts = Echarts
new Vue({
  router,
  // store,
  render: h => h(App),
}).$mount('#app')
