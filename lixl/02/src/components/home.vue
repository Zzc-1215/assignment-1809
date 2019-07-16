<template>
	<div style="height: 100%;">
		<div style="position: fixed;z-index:1;top: 0;left: 0; width: 100%;background-color: white;">
			<nav-bar :data="num" @indexchange="newlists"></nav-bar>
		</div>
		<div id="wrapper" style="height: 100%;width: 100%;position: relative;">
			<ul class="new-list">
				<li style="text-align: center;">{{refash}}</li>
				<li v-for="(item,index) in newList" :key="index" @click="$store.state.cont=item">
					<router-link :to="{path:'/detail'}">
						<p>{{item.title}}</p>
						<div>
							<img v-lazy="item.multi_imgs[0]" alt="" />
							<img v-lazy="item.multi_imgs[1]" alt="" />
							<img v-lazy="item.multi_imgs[2]" alt="" />
						</div>
						<p class="text-muted">{{item.source}}&nbsp;&nbsp;&nbsp;&nbsp;{{item.publish_time}}</p>
					</router-link>
				</li>
				<li style="text-align: center;position: absolute;left: 0;bottom: -50px;">{{reload}}</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import IScroll from 'iscroll/build/iscroll-probe.js';
	import navBar from './navBar.vue';
	export default {
		data(){
			return{
				refash:'下拉刷新',
				reload:'上拉加载',
				page:0,
				myScroll:null,
				isrefash:false,
				isload:false,
				current:'astro',
				ind:0,
				num:[
					{
						classif:'astro',title:'头条'
					},
					{
						classif:'cul',title:'社会'
					},
					{
						classif:'edu',title:'国内'
					},
					{
						classif:'house',title:'国际'
					},
					{
						classif:'sports',title:'娱乐'
					},
					{
						classif:'tech',title:'军事'
					},
					{
						classif:'games',title:'科技'
					},
					{
						classif:'finance',title:'体育'
					},
					{
						classif:'fashion',title:'财经'
					},
					{
						classif:'ent',title:'时尚'
					},
					{
						classif:'auto',title:'自动'
					},
				],
				newList:[],
			}
		},
		components:{
			navBar
		},
		created(){
			this.newlists()
		},
		methods:{
			newlists(event){
				this.current=event || 'astro'
//				console.log(this.current)
				this.axios.get('/irs/rcd?ext='+this.current+'&cid=56&&token=c786875b8e04da17b24ea5e332745e0f&num=20&expIds=20190106A13PFT%7C20190108A04MLS&page='+this.page).then((res)=>{
//					console.log(res.data.data)
					if(this.page==0){
						this.newList=res.data.data
					}else{
						this.newList=this.newList.concat(res.data.data)
					}
					this.$nextTick(function(){
						if(this.myScroll){
							this.myScroll.refresh()
						}else{
							this.initIScroll()
						}
					})
				})
			},
			initIScroll(){
				var vm=this;
				this.myScroll=new IScroll('#wrapper',{
					scrollbars: true,
					mouseWheel:true,
					probeType:2,
				})
				this.myScroll.on('scroll',function(){
					if(this.y>50){
						vm.refash = '松开刷新'
						vm.isrefash=true
					}else if(this.y<this.maxScrollY){
						vm.reload = '松开加载'
						vm.isload=true
					}else{
						vm.refash = '下拉刷新'
						vm.isrefash=false
						vm.reload = '上拉加载'
						vm.isload=false
					}
				})
				this.myScroll.on('scrollEnd',function(){
					if(vm.isrefash){
						vm.page=0
						vm.newlists(vm.current)
					}else if(vm.isload){
						vm.page++
						vm.newlists(vm.current)
					}
				})
			}
		}
	}
</script>

<style scoped>
	.new-list li{
		padding: 10px 20px;
		list-style: none;
		border-bottom: solid 10px #ccc;
	}
	.new-list li p{
		line-height: 1.4em;
		margin-bottom: 10px;
		text-align: left;
	}
	.new-list li img{
		width: 30%;
		height: 150px;
		display: inline-block;
		margin-right: 3.3333333%;
	}
	.text-muted{
		color: #ccc;
		font-size: 0.8em;
	}
	#wrapper{
		height: 100%;
		width: 100%;
		position: relative;
	}
</style>