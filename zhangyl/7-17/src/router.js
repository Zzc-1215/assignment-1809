import Vue from 'vue'
import VueRouter from 'vue-router'
import weather from './views/weather.vue'
import index from './views/index.vue'

Vue.use(VueRouter)

var router= new VueRouter({
  routes: [
    {
      path: '/weather',
      name:'weather',
      component: weather
    },
    {
      path: '/index',
      name:'index',
      component: index
    }
  ]
})
export default router;
