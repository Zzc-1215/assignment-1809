import Vue from 'vue'
import App from './App.vue'
import home from './components/home.vue'
import detail from './components/detail.vue'
import VueRouter from 'vue-router'

import 'swiper/dist/css/swiper.min.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyload from 'vue-lazyload'

import 'lib-flexible/flexible.js'

import Vuex from 'vuex'
Vue.use(Vuex);


Vue.use(VueRouter);
Vue.use(VueLazyload);

var router = new VueRouter({
  routes: [
    {
      path: '/',
      component: home
    }, {
      path: '/detail',
      name: '/detail',
      component: detail
    }
  ]
});

var store = new Vuex.Store({
  state: {
    num: '',
  }
})



Vue.use(VueAxios, axios)
// Vue.prototype.axios = axios;
console.log(axios);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  store,
}).$mount('#app')
