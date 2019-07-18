import Vue from 'vue'
import Router from 'vue-router'
import home from './components/home.vue'
// import seer from './components/seer.vue'

// Vue.use(Router)


export default new Router({
	routes:[
		{
			path:'/',
			component:home
		}
	]
	
})