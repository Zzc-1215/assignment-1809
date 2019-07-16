import Vue from 'vue'
import App from './App.vue'
import 'swiper/dist/css/swiper.min.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyload from 'vue-lazyload'
import VueRouter from 'vue-router'
import detail from './components/detail.vue'
import home from './components/home.vue'

Vue.use(VueAxios, axios)
Vue.use(VueRouter)
Vue.use(VueLazyload)


var router = new VueRouter({
  routes:[
    {
      path: '/',
      name:'home',
      component:home
    },{
      path: '/detail',
      name:'detail',
      component: detail
    }
  ]
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')