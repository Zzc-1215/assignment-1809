<template>
    <div class="swiper-container" id="navBar">
        <ul class="nav-bar swiper-wrapper">
            <li class="swiper-slide" @click="activeIndex=index" :class="{active:index==activeIndex}" v-for="(item,index) in list" :key="index">{{item}}</li>
        </ul>
    </div>
</template>

<script>
import Swiper from 'swiper';

export default{
    props:['data'],
    data(){
        return{
            activeIndex:0,
            list:this.data || ['推荐'],
            mySwiper:null,
        }
    },
    watch:{
        activeIndex(){
            this.$emit('inde')
        }
    },
    mounted(){
        this.mySwiper = new Swiper ('.swiper-container',{
            autoplay:true,//可选选项，自动滑动
            slidesPerView : 6,
            // slidesPerGroup : 1,
            freeMode : true,
        })
    },
}
</script>

<style scoped>
    #navBar{
        border-bottom:1px solid #ccc;
    }
    #navBar ul{
        padding:0;
    }
    #navBar ul>li{
        padding:0;
        list-style:none;
        line-height:50px;
        cursor:pointer;
    }
    #navBar ul>li.active{
        color:red;
        font-size:1.1em;
    }
</style>