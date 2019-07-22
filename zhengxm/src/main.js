import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/font/iconfont.css'
import home from './views/home.vue'
import first from './views/first.vue'
import detail from './views/detail.vue'
import Vuex from 'vuex'
import 'swiper/dist/css/swiper.min.css'

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueAxios,axios)
Vue.config.productionTip = false

var router = new VueRouter({
  routes:[
    {
      path:'/',
      component:home
    },
    {
      path:'/first',
      component:first
    },
    {
      path:'/detail',
      component:detail
    }
  ]
})

var store = new Vuex.Store({
  state:{
    count:''
  },
  mutations:{
    changeWeather(state,id){
      state.count = id
    }
  }
})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
