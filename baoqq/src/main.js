import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import iconfont from '../src/assets/font/font/iconfont.css'

Vue.use(VueAxios,axios)
// import icon from './assets/download/font_1274229_1x1a7x4flv1/iconfont.css'



Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
