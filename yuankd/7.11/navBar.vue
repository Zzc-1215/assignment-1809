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
    import Swiper from 'swiper'

    console.log(Swiper)
    export default {
        props:['data'],
        data(){
            return{
                activeIndex:0,
                list:this.data || ['推荐'],
                mySwiper:null,
                
            }
        },
        mounted(){
            this.mySwiper = new Swiper ('.swiper-container', {
                // autoplay:true,
                slidesPerGroup:1,
                slidesPerView:4,
                freeMode:true,


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
        width:700px;
        border-bottom:solid 1px #ccc;
    }
    #navBar ul{
        list-style: none;
        line-height: 60px;
        cursor:pointer;
    }
    #navBar ul>li{
        text-align:center;
        line-height:60px;
    }
    #navBar ul>li.active{
        color:red;
        font-size: 1.2em;
    }
</style>
