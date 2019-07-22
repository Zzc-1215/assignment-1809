import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './views/login.vue'
import LoginUp from './views/loginup.vue'

Vue.use(VueRouter)

var router = new VueRouter({
    routes: [
        {
            path:'/login',
            name:'Login',
            component: Login
        },
        {
            path:'/loginUp',
            name:'LoginUp',
            component: LoginUp
        }
    ]
})
export default router 