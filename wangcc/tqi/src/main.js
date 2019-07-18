import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import './assets/font/iconfont.css'
import animate from 'animate.css'
import VueAxios from 'vue-axios'
import axios from 'axios'

Vue.use(VueAxios,axios)
Vue.config.productionTip = false

new Vue({
	router,
  render: h => h(App),
}).$mount('#app')
