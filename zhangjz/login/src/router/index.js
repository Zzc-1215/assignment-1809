import Vue from 'vue'
import VueRouter from 'vue-router'

import content from '../components/content.vue'
Vue.use(VueRouter);

var router = new VueRouter({
    routes: [
        {
            path: '/',
            component: content
        }
    ]
})

export default router;