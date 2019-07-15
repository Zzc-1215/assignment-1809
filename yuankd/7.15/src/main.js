import Vue from 'vue'
import App from './App.vue'
import 'swiper/dist/css/swiper.min.css'
import home from './components/Home.vue'
import detail from './components/detail.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import VueLazyload from 'vue-lazyload'
import 'amfe-flexible'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueLazyload)
Vue.use(VueAxios,axios)
var router=new VueRouter({
  routes:[
    {
      path:'/',
      component:home
    },
    {
      path:'/detail',
      component:detail
    }
  ]
})

var store=new Vuex.Store({
      state:{
        count:null,
      }
})



Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
