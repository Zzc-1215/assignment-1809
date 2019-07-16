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
import Swiper from 'swiper'
// console.log(Swiper)
export default {
	props:['data'],
    data(){
        return {
            activeCategroy:'astro',
            list:this.data || [],
            mySwiper: null
        }
    },
	watch:{
		activeCategroy(v){
			this.$emit('indexChange',v)
		}
	},
    mounted(){
        this.mySwiper = new Swiper ('.swiper-container', {
            autoPlay:true,
			freeMode : true,
            slidesPerView:6,
            // slidesPerGroup:1,
            
        })
    },
}
</script>

<style>
    #navBar{
        border-bottom:1px solid #ccc;
    }
    #navBar ul{
        padding:0;
    }
    #navBar ul>li{
        list-style:none;
        line-height:0.5rem;
		cursor: pointer;
		text-align: center;
        font-size: 0.2rem;
    }
    #navBar ul>li.active{
        color:red;
        font-size:0.25rem;
    }
</style>