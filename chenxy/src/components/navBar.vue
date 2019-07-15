<template>
    
    <div class="swiper-container" id="navBar">
        <ul class="nav-bar swiper-wrapper">
            <li class="swiper-slide" @click="activefenlei=item.fenlei" :class="{active:item.fenlei==activefenlei}" v-for="(item,index) in list" :key="index">{{item.title}}</li>
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
                activefenlei:'astro',
                list:this.data || ['找不到更多的数据了'],
                mySwiper:null,
            }
        },
        watch:{
            activefenlei(v){
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
        text-align: center;
        /* margin:0 15px; */
        cursor:pointer;
    }
    .nav-bar>li.active{
        color:red;
        font-size:1.1em;
    }
</style>