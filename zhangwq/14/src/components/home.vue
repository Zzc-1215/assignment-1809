<template>
    <div style="height:100%">
		<div style="height: 0.5rem;position: fixed;left: 0;top: 0;right: 0;background: #fff;z-index:10">
			<nav-bar :data='menu' @indexChange="getNewsList"></nav-bar>
		</div>
		<div id="wrapper" style="width:100%;height:100%;position:relative;">
			<ul class="news-list">
				<p style="text-align:center;height:0.5rem;line-height:0.5rem;font-size:0.2rem;">{{refash}}</p>
				<li v-for='(item,index) in newsList' :key='index'>
					<a :href="item.vurl">
						<p class="title">{{item.title}}</p>
						<div>
							<img v-lazy="item.multi_imgs[0]">
							<img v-lazy="item.multi_imgs[1]">
							<img v-lazy="item.multi_imgs[2]">
						</div>
						<p class="text-muted">{{item.source}}&nbsp;&nbsp;&nbsp;&nbsp;{{item.publish_time}}</p>
					</a>
				</li>
				
				
				<p style="text-align:center;height:0.5rem;line-height:0.5rem;font-size:0.2rem;">{{refashs}}</p>
			</ul>
		</div>
		
    </div>
</template>

<script>
import IScroll from 'iscroll/build/iscroll-probe.js';
console.log(IScroll)
import navBar from './navBar.vue'

export default {
	data(){
		return{
			refash:'下拉刷新',
			refashs:'上拉加载',
			isLoad:false,
			isrefash:false,
			currentPage:0,
			myScroll:null,
			currentType:'astro',
			menu: [
				{categroy:'astro',title:'生肖'},
				{categroy:'cul',title:'历史'},
				{categroy:'edu',title:'教育'},
				{categroy:'house',title:'房子'},
				{categroy:'sports',title:'体育'},
				{categroy:'tech',title:'技术'},
				{categroy:'games',title:'游戏'},
				{categroy:'finance',title:'金融'},
				{categroy:'fashion',title:'时尚'},
				{categroy:'auto',title:'汽车'},
				{categroy:'ent',title:'娱乐'},
			],
			newsList:[],
		}
	},
  components: {
    navBar
  },
  created() {
    this.getNewsList();
  },
  methods:{
	  getNewsList(event){
		// this.currentType = event;
		this.currentType=event?this.currentType=event:this.currentType='astro';
		this.axios.get('/irs/rcd?cid=56&ext='+this.currentType+'&token=c786875b8e04da17b24ea5e332745e0f&num=10&expIds=20190106A13PFT%7C20190108A04MLS&page='+this.currentPage+'').then((res)=>{
			if(this.currentPage ==0){
				// console.log(res.data.data)
				this.newsList = res.data.data;
			}else{
				this.newsList = this.newsList.concat(res.data.data)
			}
			
			// 初始化iscroll
			this.$nextTick(function(){
				if(this.myScroll){
					this.myScroll.refresh();
				}else{
					this.initIScroll();
				}
				
			})
			
      	})
	  },
	  initIScroll(){
		var vm = this;
		this.myScroll = new IScroll('#wrapper',{
			scrollbars:true,
			mouseWheel:true,
			probeType:2,
		});
		this.myScroll.on('scroll',function(){
			if(this.y>50){
				vm.refash = '松开刷新';
				vm.isrefash = true;
			}else if(this.y<this.maxScrollY){
				vm.isLoad = true;
				vm.refashs = '加载中';
			}else{
				vm.refash = '下拉刷新';
				vm.refashs = '上拉加载';
				vm.isrefash = false;
				vm.isLoad = false;
			}
			
			
		});
		this.myScroll.on('scrollEnd',function(){
			if(vm.isrefash){
				vm.currentPage =0
				vm.getNewsList(vm.currentType);
			}else if(vm.isLoad){
				vm.currentPage++;
				vm.getNewsList(vm.currentType);
			}
		})
	  }
  },
}
</script>

<style>
	ul.news-list>li{
		padding: 0.2rem;
		border-bottom: 3px solid #ccc;
	}
	.title{
		line-height: 0.38rem;
		font-size: 0.28rem;
		color: #222;
	}
	ul.news-list>li a{
		text-decoration: none;
	}
	ul.news-list>li img{
		width:30%;
		height:2rem;
		margin: 0.1rem 1.5%;
	}
	.text-muted{
		color: #999;
		font-size: 0.2rem;
		line-height: 0.3rem;
	}
</style>