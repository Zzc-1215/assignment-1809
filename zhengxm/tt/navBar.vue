<template>
    <div class="swiper-container" id="navBar">
        <ul class="nav-bar swiper-wrapper">
            <li class="swiper-slide" @click="activeIndex=index" :class="{active:index==activeIndex}" v-for="(item,index) in list" :key="index">{{item}}</li>
        </ul>
    </div>
</template>

<script>
import Swiper from 'swiper';
console.log(Swiper);
export default {
    props:['data'],
    data(){
        return{
            activeIndex:0,
            list:this.data || ['推荐','热门','影视','娱乐','搞笑','视频','科技'],
            mySwiper:null,
        }
    },
    mounted(){
        this.mySwiper = new Swiper('.swiper-container',{
            autoplay:true,
            slidesPerView:4,
            slidesPerGroup:1,
            freeMode:true
        })
    },
    watch:{
        activeIndex(v){
            this.$emit('indexChange',v)
        }
    }
}
</script>

<style scoped>
    #navBar{
        border-bottom: 1px solid #ccc;
    }
    #navBar ul>li{
        list-style: none;
        line-height: 50px;
        cursor: pointer;
    }
    #navBar ul>li.active{
        color: red;
        font-size: 1.1em;
    }
</style>

