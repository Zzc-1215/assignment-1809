<template>
	<div class="swiper-container" id="newbar">
		<ul class="nav-bar swiper-wrapper">
			<li @click="activeIndex=cont.classif"  :class="{active:cont.classif==activeIndex}" class="swiper-slide" v-for="(cont,index) in list" :key="index" >{{cont.title}}</li>
		</ul>
	</div>
</template>

<script>
	import Swiper from 'swiper'
	export default{
		props:['data'],
		data(){
			return{
				activeIndex:'astro',
				list:this.data||['头条'],
				mySwiper:null,
			}
		},
		watch:{
			activeIndex(v){
				this.$emit('indexchange',v)
			}
		},
		mounted(){
			this.mySwiper=new Swiper('.swiper-container',{
				slidesPerView:6,
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