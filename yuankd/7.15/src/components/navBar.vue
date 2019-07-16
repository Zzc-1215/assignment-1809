<template>
    <div class="swiper-container" id="navBar">
        <ul class="nav-bar swiper-wrapper">
            <li class="swiper-slide" @click="activeCategroy=item.ext" :class="{active:item.ext==activeCategroy}" v-for="(item,index) in list" :key="index">
                {{item.title}}
            </li>
        </ul>
    </div>
</template>
<script>
    import Swiper from 'swiper'

    // console.log(Swiper)
    export default {
        props:['data'],
        data(){
            return{
                activeCategroy:'astro',
                list:this.data || ['天文'],
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
            activeCategroy(v){
                this.$emit('indexChange',v)
            }
        }
    }
</script>
<style scoped>
    #navBar{
        width:100%;
        border-bottom:solid 1px #ccc;
    }
    #navBar ul{
        width: 100%;
        list-style: none;
        line-height: 60px;
        cursor:pointer;
    }
    #navBar ul>li{
        width:100%;
        text-align:center;
        line-height:60px;
        font-size:18px;
    }
    #navBar ul>li.active{
        color:red;
        font-size: 1.2em;
    }


</style>
