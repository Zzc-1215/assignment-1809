import Vue from 'vue'
import App from './App.vue'

import router from './router/index' //路由
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

// Vue.use (vue的插件(plugin) , 插件选项)



Vue.config.productionTip = false

new Vue({
  router, //注册一下路由
  render: h => h(App),
  // created () {
  //   console.log(this);
  //   Vue.axios
  // }
}).$mount('#app')
