import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/font/iconfont.css'
import 'swiper/dist/css/swiper.min.css'


Vue.use(VueAxios, axios)
console.log(axios)

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

