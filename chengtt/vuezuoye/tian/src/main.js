// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import vueaxios from 'vue-axios'
import vueswiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(vueaxios,axios)
Vue.use(vueswiper)
Vue.config.productionTip = false
/* eslint-disable no-new */
Vue.prototype.$axios = axios
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
