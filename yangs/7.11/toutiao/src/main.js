import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
import '../node_modules/_swiper@4.5.0@swiper/dist/css/swiper.css'
new Vue({
  render: h => h(App)
}).$mount('#app')
