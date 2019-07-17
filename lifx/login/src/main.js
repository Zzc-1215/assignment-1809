import Vue from 'vue'
import App from './App.vue'
import router from './router'
import home from './components/home.vue'
Vue.config.productionTip = false

new Vue({
  router,
  home,
  render: h => h(App)
}).$mount('#app')
