import Vue from 'vue'
import VueRouter from 'vue-router'

import search from '../components/search.vue'
import weather from '../components/weather.vue'
import details from '../components/details.vue'
Vue.use(VueRouter)
var router = new VueRouter({
    routes: [
        {
            path: '/',
            component: weather
        },
        {
            path: '/search',
            component: search
        },
        {
            path: '/details',
            component: details
        }
    ]
})


export default router;