<template>
     <div class="swiper-container" id="navBar">
        <ul class="nav-bar swiper-wrapper">
            <li class="swiper-slide" @click="activeIndex=index" :class="{active:index==activeIndex}" v-for="(item,index) in list" :key="index">
                {{item}}
            </li>
        </ul>
    </div>
</template>
<script>
import Swiper from 'swiper';
console.log(Swiper)
export default {
    props:['data'],
    data(){
        return {
            activeIndex:0,
            list:this.data || ['推荐'],
            mySwiper: null
        }
    },
    watch:{
        activeIndex(v){
            this.$emit('indexChange',v);
        }
    },
    mounted(){
        this.mySwiper = new Swiper ('.swiper-container', {
            autoPlay:true,
            slidesPerView:4,
            freeMode:true,
        })
    }
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
        list-style:none;
        line-height:50px;
        cursor:poiner;
        text-align:center;
    }
    #navBar ul>li.active{
        color:red;
        font-size:1.8em;
    }
</style>
