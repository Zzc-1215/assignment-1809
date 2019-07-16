import Vue from 'vue'
import App from './App.vue'
// import router from './router'
import Vcode from 'vue-puzzle-vcode'
import VueRouter from 'vue-router'
import home from './components/HelloWorld.vue'
import detail  from './components/detail.vue'

Vue.use(VueRouter)
Vue.use(Vcode)

var router = new VueRouter({
  routes:[
    {
      path:'/',
      component:home,
    },{
      path:'/detail',
      component:detail,
    }
  ]
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
