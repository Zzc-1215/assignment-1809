<template>
    
    <div class="swiper-container" id="navBar">
        <ul class="nav-bar swiper-wrapper">
            <li class="swiper-slide" @click="activeIndex=index" :class="{active:index==activeIndex}" v-for="(item,index) in list" :key="index">{{item}}</li>
        </ul>
    </div>
</template>

<script>
    import Swiper from 'swiper';
    console.log(Swiper)
    export default {
        props:['data'],
        data(){
            return{
                activeIndex:0,
                list:this.data || ['找不到更多的数据了'],
                mySwiper:null,
            }
        },
        watch:{
            activeIndex(v){
                this.$emit('indexChange',v);
            }
        },
        mounted(){
            this.mySwiper = new Swiper('.swiper-container',{
                slidesPerView:6,
                freeMode:true
            })
        }
    }

</script>

<style scoped>
    #navBar{
        width:100%;
        border-bottom:1px solid #ccc;
    }
    .nav-bar{
        height:50px;
        padding:0;
        line-height:50px;
    }
    .nav-bar>li{
        cursor:pointer;
    }
    .nav-bar>li.active{
        color:red;
        font-size:1.1em;
    }
</style>