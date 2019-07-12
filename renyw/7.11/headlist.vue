<template>
    <div class="swiper-container" id="listUl">
        <ul class="nav-bar swiper-wrapper">
            <li class="swiper-slide" :class="{active:$index==actidx}" @click="actidx=$index" v-for="(item,$index) in list" :key="$index">{{item}}</li>
        </ul>
    </div>
</template>
<script>
import Swiper from 'swiper'
export default {
    data(){
        return {
            actidx:0,
            list:this.list || ['空空如也'],
            mySwiper:null,
        }
    },
    props:['list'],
    watch:{
        actidx(v){
            this.$emit('activechange',v)
        }
    },
    mounted(){
        this.mySwiper = new Swiper('.swiper-container', {
            // autoplay: true,//可选选项，自动滑动
            freeMode : true,
            slidesPerView : 4,

        })
    }
}
</script>
<style>
    #listUl{
        width: 100%;
        border-bottom: 1px solid #ccc;
    }
    .nav-bar{
        height: 50px;
        line-height: 50px;
    }
    #listUl .nav-bar li{
        font-size: 14px;
    }
    #listUl .nav-bar li.active{
        color: red;
        font-size: 1.1em;
    }
</style>

