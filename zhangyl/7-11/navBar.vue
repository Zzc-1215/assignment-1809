<template>
	<div class="swiper-container" id='navBar'>
		<ul class='nav-bar swiper-wrapper'>
		    <li class="swiper-slide" @click="activeIndex=index" :class="{active:index==activeIndex}" v-for="(item,index) in list" :key='index'>{{item}}</li>
		</ul>
	</div>
</template>

<script>
	import Swiper from 'swiper';
	console.log(Swiper);
	export default{
		props:['data'],
		data(){
			return{
				list:this.data || ['推荐'],
				mySwiper:null,
				activeIndex:0,
			}
		},
		watch:{
			activeIndex(v){
				this.$emit('indexChange',v);
			}
		},
		mounted(){
			this.mySwiper=new Swiper('.swiper-container',{
				autoplay:true,
				freeMode:true,
				slidesPerView:6,
				// slidesPerGroup:1,
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
		text-align: center;
		cursor: pointer;
	}
	#navBar ul>li.active{
		color: red;
		font-size: 1.1em;
	}
</style>