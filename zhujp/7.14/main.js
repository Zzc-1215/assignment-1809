import Vue from 'vue'
import App from './App.vue'
import 'swiper/dist/css/swiper.min.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyload from 'vue-lazyload'
//import VueRouter from 'vue-router'
//import detail from './components/detail.vue'

Vue.use(VueAxios, axios)
//Vue.use(VueRouter, axios)
Vue.use(VueLazyload, axios)

console.log(axios);

//var router = new VueRouter({
  //routes:[
    //{
      //path: '/',
      //component: home
    //},{
      //path: '/detail',
      //component: detail
    //}
  //]
//})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
 // router,
}).$mount('#app')
