<template>
    <div>

        <!-- <input type="text" :value="$store.state.newsTitle" @input="$store.commit('changeNewsTitle',$event.target.value)"> -->
        
        <input type="text" v-model="newsTitle">

        <!-- {{newsTitle}} -->

        {{$store.state.newsTitle}}

     
    </div>
</template>

<script>

/* 
1、 模拟vuex的state双向绑定（v-model）
v-model  :value + @input 

:value="$store.state.newsTitle"
@input="$store.commit('changeNewsTitle',$event.target.value)"


2、 通过computed 来绑定v-model
    get + set



拓展在computed里
mapState
mapGetters

拓展到methods里
mapMutations
mapActions

4个map相同
1、...mapMutations(['mutations名']),
2、...mapMutations({
    '对应的名字': 'mutations定义的名字'
}),

知识点：
1、improt 和 export
2、... 运算符

*/ 
// a.js
// var a= {}
// var b= {}


// export {a,b}  
// export default  {x:1}

// import ddd from 'a.js'


var [a,b,...c] = [1,2,3,4,4,5,5,,66,,,7]

import Vuex from 'vuex'
import {mapState,mapGetters,mapMutations} from 'vuex'


export default {
    data() {
        return {
            // a: this.$store.state.a,
            // a: this.$store.state.a,
            // a: this.$store.state.a,
            // a: this.$store.state.a,
            // a: this.$store.state.a,
            // a: this.$store.state.a,
        }
    },
    computed: {
        newsTitle:{
            get(){
                 return this.$store.state.newsTitle
            },
            set(value){
                this.$store.commit('changeNewsTitle',value);
            }
        },
        // ...mapState(['newsTitle','newsUrl'])
        // newsTitle(){
        //     return this.$store.state.newsTitle
        // },
        // newsUrl(){
        //     return this.$store.state.newsUrl
        // },
        // ...mapState({
        //     abc: 'newsTitle'
        // })
    },
    methods: {
        ...mapMutations(['changeNewsTitle']),



        zijidefunction(){

        }
    },
}
</script>

<style>

</style>
