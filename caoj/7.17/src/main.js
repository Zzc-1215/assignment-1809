import Vue from 'vue'
import App from './App.vue'
// import router from './router/index.js'
// vue.use(Router)
// 
Vue.config.productionTip = false

new Vue({
	// router,
  render: h => h(App),
}).$mount('#app')
