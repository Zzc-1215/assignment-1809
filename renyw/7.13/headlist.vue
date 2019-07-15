<template>
    <div class="swiper-container" id="listUl">
        <ul class="nav-bar swiper-wrapper">
            <li class="swiper-slide" :class="{active:item.categroy==activeCategroy}" @click="activeCategroy=item.categroy" v-for="(item,$index) in list" :key="$index">{{item.title}}</li>
        </ul>
    </div>
</template>
<script>
import Swiper from 'swiper'
export default {
    data(){
        return {
            activeCategroy: 'games',
            list:this.data || ['游戏'],
            mySwiper:null,
        }
    },
    props:['data'],
    watch:{
        activeCategroy(v){
            this.$emit('activechange',v)
        }
    },
    mounted(){
        this.mySwiper = new Swiper('.swiper-container', {
            // autoplay: true,//可选选项，自动滑动
            freeMode : true,
            slidesPerView : 5,

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
        user-select: none;
        cursor: pointer;
    }
    #listUl .nav-bar li.active{
        color: red;
        font-size: 1.2em;
    }
</style>

