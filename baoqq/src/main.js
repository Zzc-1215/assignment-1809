import Vue from 'vue'
import App from './App.vue'
import home from './components/home.vue'
import detail from './components/detail.vue'
import VueRouter from 'vue-router'

import 'swiper/dist/css/swiper.min.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyload from 'vue-lazyload'

import libFlexible from 'lib-flexible/flexible.js'


Vue.use(VueRouter);
Vue.use(VueLazyload);
Vue.use(libFlexible);

var router = new VueRouter({
  routes: [
    {
      path: '/',
      component: home
    }, {
      path: '/detail',
      component: detail
    }
  ]
});



Vue.use(VueAxios, axios)
// Vue.prototype.axios = axios;
console.log(axios);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
