<template>
    <div class="swiper-container" id="navBar">
        <ul class="nav-bar swiper-wrapper">
            <li class="swiper-slide" @click="activeCategroy=item.categroy" :class="{active:item.categroy==activeCategroy}" v-for="(item,index) in list" :key="index">
                {{item.title}}
            </li>
        </ul>
    </div>
</template>

<script>
import Swiper from 'swiper';

console.log(Swiper);
export default {
    props:['data'],
    data() {
        return {
            activeCategroy: 'top',
            list:this.data || ['推荐'],
            mySwiper: null,
        }
    },
    watch: {
        activeCategroy(v){
            this.$emit('indexChange',v);
        }
    },
    mounted() {
        this.mySwiper = new Swiper('.swiper-container', {
            autoplay: true,
            freeMode : true,
            slidesPerView : 6,
            // slidesPerGroup : 1,//可选选项，自动滑动
        })
    },
}
</script>

<style scoped>
    #navBar{
        border-bottom:1px solid #ccc; 
    }
    #navBar ul{
        padding: 0;
    }
    #navBar ul>li{
        padding: 0;
        list-style: none;
        line-height: 50px; 
        cursor: pointer;
    }
    #navBar ul>li.active{
        color: red;
        font-size: 1.1em;
    }
</style>
