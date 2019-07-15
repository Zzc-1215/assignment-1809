import Vue from 'vue'
import App from './App.vue'
import home from './components/home.vue'
import xq from './components/xq.vue'
import VueRouter from 'vue-router'
import 'swiper/dist/css/swiper.min.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyload from 'vue-lazyload'
import flexible from 'lib-flexible/flexible.js'
import Vuex from 'vuex'
Vue.use(VueRouter);
Vue.use(VueLazyload);
Vue.use(flexible);
Vue.use(Vuex);

var router = new VueRouter({
  routes:[
    {
      path:'/',
      component:home
    },{
      path:'/xq',
      component:xq
    }
  ]
})

Vue.use(VueAxios,axios)
console.log(axios);
Vue.config.productionTip = false

new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
