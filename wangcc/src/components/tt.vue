<template>
	<div class="maxw swiper-container">
		<ul class="nav swiper-wrapper">
			<li class="swiper-slide" @click="dian(index)" :class="{active:ina==index}" v-for="(item,index) in datalist" :key="index">{{item}}</li>
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
				ina:0,
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
				slidesPerView :5, //显示几个
				slidesPerGroup :1,//一次走一个
				freeMode : true,//设置为true则变为free模式，slide会根据惯性滑动可能不止一格且不会贴合。
			  })        
		},
		methods:{
			dian(index){
				this.ina=index
				// console.log(this.ina)
			}
		}
	}
</script>

<style scoped>
	.maxw{
		width:700px;
		border-bottom: 1px solid #ccc;
		background: #fff;
	}
	.nav{
		width:100%;
	}
	.nav li{
		list-style:none;
		width:100px;
		height:60px;
		text-align: center;
		line-height:60px;
		font-size: 20px;
		font-family: "楷体";
	}
	.nav li.active{
		font-size:25px;
		color:red;
	}
</style>
