import Vue from 'vue'
import VueRouter from 'vue-router'
import home from './components/home.vue'
import search from './components/search.vue'
import recentweather from './components/recentweather.vue'
Vue.use(VueRouter)

var router = new VueRouter({
	routes:[
		{
			path:'/',
			component:home,
			name:'home',
		},
		{
			path:'/search',
			component:search,
			name:'search',
		},
	]
})
export default router