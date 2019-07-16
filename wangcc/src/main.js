import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'swiper/dist/css/swiper.min.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyload from 'vue-lazyload'
import VueRouter from 'vue-router'
import xq from '/xq.vue'
import Home from '/Home.vue'
Vue.use(VueLazyload)
Vue.use(VueAxios,axios)
Vue.use(VueRouter)
Vue.config.productionTip = false

export default new VueRouter({
	routes:[
		{
		path:'/xq',
		component:xq,
		name:'xq',
		},
		{
		path:'/',
		component:Home,
		name:'Home',
		},
	]
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
