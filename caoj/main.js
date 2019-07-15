import Vue from 'vue'
import App from './App.vue'
import home from "./components/home.vue"
import detail from "./components/detail.vue"
import VueRouter from "vue-router"
import VueAxios from "vue-axios"
import "swiper/dist/css/swiper.min.css"
import axios from "axios"
import VueLazyload from "vue-lazyload"
import 'lib-flexible/flexible.js'
// Vue.use(Vuex);
Vue.use(VueRouter);
var router = new VueRouter({
  routes:[
    {
      path:'/',
			name:'/home',
      component: home
    },{
      path:'/detail',
			name:'/detail',
      component: detail
    }
  ]
});
// var router = new VueRouter({
//   routes: [
//     {
//       path: "/",
//       component: home
//     },
//     {
//       path: "/detail",
//       component: detail
//     }
//   ]
// })

Vue.use(VueAxios, axios);
Vue.use(VueLazyload);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
