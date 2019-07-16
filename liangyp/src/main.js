import Vue from 'vue'
import App from './App.vue'
import 'swiper/dist/css/swiper.min.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyload from 'vue-lazyload'
import VueRouter from 'vue-router'
import detail from './components/detail.vue'
import home from './components/home.vue'
import Vuex from 'vuex'


Vue.use(VueAxios, axios)
Vue.use(VueRouter)
Vue.use(VueLazyload)

Vue.use(Vuex)

var router = new VueRouter({
  routes:[
    {
      path: '/',
      component: home
    },{
      path: '/detail',
      name:'detail',
      component: detail
    },{
      path:'/xiangqing',
      name:'xiangqing',
      component:xiangqing
    }
  ]
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
 router,
}).$mount('#app')