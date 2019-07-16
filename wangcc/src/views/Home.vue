<template>
	<div id="main">
		<div class="head" style='position:fixed;top:0;left: 0;background-color: #fff;'>
			<headlines :data="menu" @change="shuj"></headlines>
		</div>
		<div id="wrapper" class="main_xw">
			<ul style="position: relative;">
				<div style="width: 100%;height:1rem;font-size:0.2rem;text-align: center;">
					<p>{{ts}}</p>
					{{xl}}
				</div>
				<li v-for="(item,index) in mian">
					<h3>{{item.title}}</h3>
					<img v-lazy="item.multi_imgs[0]">
					<img v-lazy="item.multi_imgs[1]">
					<img v-lazy="item.multi_imgs[2]">
					<p>{{item.source}}&nbsp;&nbsp;&nbsp;{{item.publish_time}}</p>
				</li>
				<div style="width: 100%;height: 230px;font-size:40px;text-align: center;position:absolute;left: 0;bottom:-230px;">
					<p>{{s}}</p>
					{{shang}}
				</div>
			</ul>
		</div>
		<!-- <template id="xq">
			<div>
				Hellow 清晨的粥
			</div>
		</template> -->
  </div>
</template>

<script>
	import Iscroll from 'iscroll/build/iscroll-probe.js'
	// console.log(Iscroll)
	//headlines就是组件在dom上写入它就渲染上了../components/tt.vue里的数据
	import headlines from '../components/tt.vue'
	export default {
		components: {
			headlines
			},
			//ext:['astro','cul','edu','house','sports','tech','games','finance','fashion','ent','auto']
			data(){
				return{
					xl:'下啦刷新',
					shang:'上啦刷新',
					inxb:'astro',
					ts:'∨',
					s:'∧',
					num:0,
					menu:[
					    {categroy:'astro',title:'星座'},
					    {categroy:'cul',title:'历史'},
					    {categroy:'edu',title:'教育'},
					    {categroy:'house',title:'房产'},
					    {categroy:'sports',title:'体育'},
					    {categroy:'tech',title:'科技'},
					    {categroy:'games',title:'游戏'},
					    {categroy:'finance',title:'财经'},
					    {categroy:'fashion',title:'女性'},
					    {categroy:'ent',title:'时尚'},
						{categroy:'auto',title:'汽车'}
					],
					mr:'astro',
					mian:[],
					myScroll:null,
					true:false,
					atr:false,
					xla:false,
				}
		},
		created() {
		  this.shuj();
		},
		watch:{
			inxb(val,oldval){
				var parge=null;
				if(val!=oldval){
					this.num=0
					parge=this.num
				}
				return parge;
			}
		},
		methods:{
			shuj(event){
				this.inxb=event?this.inxb=event:this.inxb='astro';
				this.axios.get('/irs/rcd?cid=56&ext='+this.inxb+'&token=c786875b8e04da17b24ea5e332745e0f&num=20&expIds=20190106A13PFT%7C20190108A04MLS&page='+this.inxb+'').then((data)=>{
					//成功的回调函数
					if(this.num==0){
						this.mian=data.data.data
					}else{
						this.mian=this.mian.concat(data.data.data)//向后添加数据
					}
					// console.log(data.data.data)
					this.$nextTick(function(){
						if(this.myScroll){//防止刷新一次请求多次数据
							this.myScroll.refresh();
						}else{
							this.cs();
						}
					})
					
				}).catch((res)=>{
					//失败的回调函数
					console.log(res);
				})
			},
			cs(){
				var e=this;
				this.myScroll =new Iscroll('#wrapper',{
					 scrollbars:true,
					 mouseWheel:true,
					 probeType:2,
				});
				this.myScroll.on('scroll',function(){//滚动距离
					console.log(this.y)
					if(this.y>220){
						e.xl='松开刷新';
						e.ts='∧';
						e.true=true;
						// console.log('松开刷新')
					}else if(this.y<this.maxScrollY){
						e.shang='松开刷新';
						e.s='∨';
						e.atr=true;
					}else{
						e.xl='下拉刷新';
						e.ts='∨';
						e.true=false;
						e.atr=false;
					}
				})
				this.myScroll.on('scrollEnd',function(){
					if(e.true){
						e.shuj(e.inxb);
					}else if(e.atr){
						e.num++;
						e.shuj(e.inxb)
					}
				})
			}
		},
	}
	
</script>
	
<style>
	.head{
		width:7.5rem;
		z-index:90;
		position: absolute;
		top:0;
		left:0;
	}
	.kd{
		display:none;
	}
	#main{
		width: 7.5rem;
		height: 100%;
	}
	.main_xw{
		width:7.5rem;
		height:100%;
		overflow:hidden;
	}
	.main_xw ul{
		width:7.3rem;
		padding:0;
		margin:0 auto;
	}
	.main_xw ul>li{
		width:100%;
		min-height:2.5rem;
		margin-bottom: 0.3rem;
		list-style:none;
	}
	.main_xw ul>li h3{
		font-size:0.25rem;
	}
	.main_xw ul>li h3 a{
		text-decoration: none;
		color: #000;
	}
	.main_xw ul>li img{
		width:2.20rem;
		height:1.5rem;
		margin-right:0.23rem;
		margin-top:0.2rem;
	}
	.main_xw ul>li p{
		font-size:0.15rem;
		font-size: 0.2rem;
		color: #ccc;
	}
</style>
