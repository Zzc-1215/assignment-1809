import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vcode from "vue-puzzle-vcode"
// import login from './components/login.vue'
import Vuex from 'vuex'

Vue.use(ElementUI)
Vue.use(Vcode)
Vue.use(Vuex)


// var router = new VueRouter({
//   routes:[
//     {
//       path: '/',
//       component: login
//     }
//   ]
// })

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App),
}).$mount('#app')

