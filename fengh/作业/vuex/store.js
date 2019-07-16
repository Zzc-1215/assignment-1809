import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
var store = new Vuex.store({
    state:{
        count:1,
    }
})
export default store