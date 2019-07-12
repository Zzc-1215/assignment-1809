<template>
    <div class="swiper-container" id="newBar">
        <ul class="nav-bar swiper-wrapper">
            <li class="swiper-slide" @click="activeIndex=index" :class="{active:index==activeIndex}" v-for="(item,index) in list" :key="index">
                {{item}}
            </li>
        </ul>
    </div>
</template>
<script>
import Swiper from 'swiper';
export default {
    props:['data'],
    data() {
        return {
            activeIndex: 0,
            list: this.data || ['推荐'],
            mySwiper: null,
        }
    },
    watch:{
        activeIndex(v){
            this.$emit('indexChange',v);
        }
    },
    mounted(){
        this.mySwiper = new Swiper ('.swiper-container', {
            // autoplay: true,
            freeMode: true,
            slidesPerView : 4,
        })
    }
}
</script>
<style>
    #navBar{
        border-bottom: solid 1px #ccc;
    }
    #navBar ul{
        padding: 0;
    }
    #navBar ul>li{
        padding: 0;
        list-style: none;
        float: left;
        line-height: 50px;
        cursor: pointer;
    }
    #navBar ul>li.active{
        color: red;
        font-size: 1.1em;
    }
</style>


