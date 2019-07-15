import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'swiper/dist/css/swiper.min.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload)
Vue.use(VueAxios,axios)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
