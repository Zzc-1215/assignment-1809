import Vue from 'vue'
import App from './App.vue'
import home from "./components/Home.vue"
import detail from "./components/detail.vue"
import VueRouter from "vue-router"
import VueAxios from "vue-axios"
import 'swiper/dist/css/swiper.min.css'
import axios from "axios"
import Vuex from 'vuex'
import VueLazyload from "vue-lazyload"
Vue.use(VueRouter);
Vue.use(Vuex);
var router = new VueRouter({
  routes:[
    {
      path:'/',
      component:home
    },{
      path:'/detail',
      component: detail
    }
  ]
});
Vue.use(VueAxios, axios);
Vue.use(VueLazyload,{
  loading:"http://img4.imgtn.bdimg.com/it/u=849861780,3894336956&fm=11&gp=0.jpg"
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
