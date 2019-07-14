<template>
    
    <div class="swiper-container">
        <ul class="nav-bar swiper-wrapper">
            <li class="swiper-slide" v-for="(item,index) in list" :key="index">{{item}}</li>
        </ul>
    </div>
</template>

<script>
import Swiper from 'swiper';
console.log(Swiper);
export default {
    data(){
        return{
            list:['推荐','热门','影视','娱乐','搞笑','视频','科技']
        }
    }
}
</script>

<style scoped>
    .nav-bar{

    }
</style>

