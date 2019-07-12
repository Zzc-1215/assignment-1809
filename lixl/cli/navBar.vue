<template>
	<div class="swiper-container" id="newbar">
		<ul class="nav-bar swiper-wrapper">
			<li @click="activeIndex=index"  :class="{active:index==activeIndex}" class="swiper-slide" v-for="(cont,index) in list" :key="index" >{{cont}}</li>
		</ul>
	</div>
</template>

<script>
	import Swiper from 'swiper'
	export default{
		props:['data'],
		data(){
			return{
				activeIndex:0,
				list:this.data||['404'],
				mySwiper:null,
			}
		},
		watch:{
			activeIndex(val){
				this.$emit('indexchange',val)
			}
		},
		mounted(){
			this.mySwiper=new Swiper('.swiper-container',{
//				autoplay:true,
				slidesPerView:8,
   				slidesPerGroup:1,
				freeMode:true,
			})
		}
	}
</script>

<style scoped>
	#newbar{
		border-bottom: solid 1px #ccc;
	}
	#newbar ul{
		list-style: none;
		padding: 0;
	}
	#newbar ul li{
		line-height: 50px;
		text-align: center;
		cursor: pointer;
	}
	#newbar ul li.active{
		color: red;
		font-size: 1.2em;
	}
</style>