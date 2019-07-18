import Vue from 'vue'
import VueRouter from 'vue-router'
import head from '../components/head.vue'

import search from '../subject/search.vue'
import weatherDetail from '../subject/weatherDetail.vue';



Vue.use(VueRouter);

var router = new VueRouter({
    routes:[
        {
            path:'/',
            component:head,
        },
        {
            path:'/search',
            component:search,
        },
        {
            path:'/weatherDetail',
            component:weatherDetail,
        }
    ]
})
export default router;