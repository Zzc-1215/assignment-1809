import Vue from 'vue'
import App from './App.vue'
import Home from './components/home.vue'
import detail from './components/detail.vue'
import VueRouter from 'vue-router'
import 'swiper/dist/css/swiper.min.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyload from 'vue-lazyload'
import 'amfe-flexible'
Vue.use(VueRouter)
Vue.use(VueLazyload)
var router=new VueRouter({
routes:[
	{
		path:'/',
		component:Home
	},
	{
		path:'/detail',
		component:detail
	}
]
})
Vue.use(VueAxios,axios)
Vue.config.productionTip=false
new Vue({
	router,
	render:h=>h(App),
}).$mount('#app')
