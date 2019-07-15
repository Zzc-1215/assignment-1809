import Vue from 'vue'
import App from './App.vue'
// import router from './router'
import 'swiper/dist/css/swiper.min.css'
import VueRouter from 'vue-router'
import home from './components/HelloWorld.vue'
import detail from './components/detail.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyload from 'vue-lazyload'

Vue.use(VueRouter)
Vue.use(VueLazyload)

var router = new VueRouter({
  routes:[
    {
      path:'/',
      component:home,
    },{
      path:'/detail',
      component:detail
    }
  ]
})

Vue.use(VueAxios,axios)

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
