import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';

Vue.use(VueRouter)
Vue.use(VueAxios,axios)
Vue.config.productionTip = false

new Vue({
  // router,
  render: h => h(App),
}).$mount('#app')