// vuex 与 全局对象的区别

// 1、 Vuex 的状态存储是响应式的，可以高效更新
// 2、 每次更新都要提交(commit)mutation，会记录跟踪状态修改


// vuex安装

// 1、npm install --save vuex
// 2、import Vuex from 'vuex'
// 3、Vue.use(Vuex);

// 核心
// store

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);


var  store =  new Vuex.Store({
    // state   相当于组件里的data
    // 访问： this.$store.state....
    // state 不可以直接修改
    state:{
       count:1, 
    },
    // 2、mutation   相当于全局methods。是修改state的
    // 方法的第一个参数是state，而不是methods里的this来修改data
    // 提交、调用： this.$store.commit('mutations名字');
    // commit的第二个参数是就是我mutation的第二个参数
    // mutation的第一个参数是state
    // 必须同步执行
    mutations:{
        add(state,n){
            // console.log(this);
            state.count += (n||1); 
        }
    },
    // 3、 getter 相当于 computed
    // 访问： this.$store.getters....
    // getters 必须有return值
    //  它的第一个参数是state
    getters:{
        Ccount(state){
            return state.count + 1;
        }
    },
    // action  异步提交mutations的
    // 第一个参数是context执行上下文，
    // 执行： this.$store.dispatch('actions名字'，arg)
    actions: {
        addFun(context,n){
            // console.log(this);
            // console.log(context);
            // context.commit('add')
            setTimeout(() => {
                context.commit('add',n)
            }, 1000);
            
        }
    }
});
export default store;
