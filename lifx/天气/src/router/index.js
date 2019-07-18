import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../components/home.vue'

Vue.use(VueRouter);
var router = new VueRouter({
    routes:[
      {
        path:'/home',
        component:home
      }
    ]
  })
  export default router;