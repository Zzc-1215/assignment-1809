<template>
	<div class="swiper-container" id="maxw">
		<ul class="nav swiper-wrapper">
			<li class="swiper-slide" @click="ina=item.categroy" :class="{active:item.categroy==ina}" v-for="(item,index) in datalist" :key="index">{{item.title}}</li>
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
				ina:'astro',
				datalist:this.data,
			}
		},
		watch:{
			ina(v){
				this.$emit('change',v)
			}
		},
		mounted(){
			var mySwiper = new Swiper ('.swiper-container', {
				slidesPerView:5, //显示几个
				slidesPerGroup:1,//一次走一个
				freeMode:true,//设置为true则变为free模式，slide会根据惯性滑动可能不止一格且不会贴合。
			  })        
		},
	}
</script>

<style>
	#maxw{
		width:7.5rem;
		border-bottom: 1px solid #ccc;
		background: #fff;
	}
	.nav{
		height:1rem;
		padding:0;
	}
	.nav>li{
		list-style:none;
		height:100%;
		/* float: left; */
		line-height:1rem;
		font-size:0.2rem;
		font-family:"楷体";
		text-align:center;
		cursor:pointer;
	}
	.nav li.active{
		font-size:0.25rem;
		color:red;
	}
</style>
