<template>
    <div class="swiper-container" id="navBar">
        <ul class="nav-bar swiper-wrapper">
            <li class="swiper-slide" @click="activeCategroy=item.ext" :class="{active:item.ext==activeCategroy}" v-for="(item,index) in list" :key="index">{{item.title}}</li>
        </ul>
    </div>
</template>

<script>
import Swiper from 'swiper';
export default {
    props:['data'],
    data(){
        return{
            activeCategroy:'astro',
            list:this.data || ['推荐'],
            mySwiper:null,
        }
    },
    mounted(){
        this.mySwiper = new Swiper('.swiper-container',{
            slidesPerView:4,
            slidesPerGroup:1,
            freeMode:true
        })
    },
    watch:{
        activeCategroy(v){
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

