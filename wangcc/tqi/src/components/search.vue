<template>
	<div id="search-header">
		<div class="header-search">
			<router-link :to="{name:'home'}" id="de"><p class="pa"><&nbsp;墨迹天气</p></router-link>
			<div class="details">
				<p class="iconfont">&#xe61d;</p>&nbsp;|<p class="iconfont">&#xe7c2;</p>
			</div>
			<input type="text" v-model="valname" @change="search(valname)" placeholder="请输入城市名,快速查询天气信息">
			<i class="iconfont" id="lcon">&#xe68f;</i>
			<router-link :to="{name:'home'}" id="de"><span>取消</span></router-link>
		</div>
		<div class="recommend">
			<p>猜你想找</p>
			<ul class="content">
				<li :class="{active:true}">定位</li>
				<li v-for="item in epl" >{{item}}</li><!-- @click="city(item)" -->
			</ul>
		</div>
		<div class="record">
			<p>历史记录</p>
			<p><i class="iconfont" id="delete">&#xe696;</i>清空</p>
		</div>
	</div>
</template>

<script>
export default{
	data(){
		return{
			true:true,
			valname:'',
			information:'',
			arr:{},
			err:[{}],
			epl:['北京','广州','深圳','上海','南京','杭州','武汉']
		}
	},
	methods:{
		search(val){
			this.information=val;
			this.axios.get('/simpleWeather/query?city='+this.information+'&key=e5a03f6b3fe13c0e25700d1ae752a594').then((data)=>{
				this.arr=data
				console.log(this.arr)
				// this.$router.push('/home')
				this.$router.push({name: 'home',query:{id:this.arr}})//跳转路由并穿餐
				this.$nextTick(function(){
					this.err.push(this.this.information)
				})
			}).catch((error)=>{
				console.log(error)
			})
		},
		// city(name){
		// 	this.valname=name
		// 	this.search(this.valname)
		// }
	}
}
</script>

<style>
	#search-header{
		width:7.5rem;
	}
	.header-search{
		width:7.5rem;
		height:1.7rem;
		background-color:#fff;
		border-bottom: 1px solid #ccc;
		position: relative;
	}
	#de{
		color: #000000;
		text-decoration: none;
	}
	.pa{
		line-height: 1rem;
		font-size:0.3rem;
		margin-left:0.3rem;
	}
	.header-search input{
		position: absolute;
		bottom:0.2rem;
		left:50%;
		margin-left: -3.5rem;
		width:6rem;
		height: 0.5rem;
		color: #898989;
		border:none;
		background-color: #f2f2f2;
		border-radius:5px;
		font-size: 0.25rem;
		text-indent: 2em;
	}
	.header-search span{
		font-size:0.3rem;
		line-height: 0.5rem;
		color: #000;
		position:absolute;
		bottom:0.2rem;
		right:0.5rem;
		cursor: pointer;
	}
	.details{
		/* overflow: hidden; */
		width:1.5rem;
		height: 0.6rem;
		padding: 0.1rem 0.2rem;
		border-radius:1rem;
		border:1px solid #ccc;
		position: absolute;
		top:0.2rem;
		right:0.4rem;
		cursor: pointer;
		font-size:0.3rem;
		line-height: 0.4rem;
		color: #ccc;
	}
	.details p:nth-child(1){
		font-size:0.3rem;
		float: left;
		color: #000;
	}
	.details p:nth-child(2){
		font-size:0.3rem;
		float: right;
		color: #000;
	}
	#lcon{
		color:#898989;
		font-size:0.25rem;
		position:absolute;
		bottom: 0.3rem;
		left: 0.35rem;
		z-index: 2;
	}
	.recommend{
		width: 7.5rem;
		min-height:3rem;
		padding:0.3rem 0.25rem;
	}
	.recommend p{
		font-size: 0.4rem;
		color:#000000;
		margin-bottom: 0.2rem;
	}
	.content{
		width:100%;
	}
	.content li{
		list-style: none;
		width:2.2rem;
		height:0.6rem;
		margin-top:0.1rem;
		margin-right:0.1rem;
		text-align: center;
		line-height:0.6rem;
		background-color: #f2f3f5;
		font-size:0.3rem;
		color:#58595b;
		float:left;
		border-radius: 8px;
		cursor: pointer;
	}
	.content li:hover{
		background-color: #4294e6;
		color: #fff;
	}
	.record{
		width:7.5rem;
		min-height:3rem;
		padding:0.3rem 0.25rem;
	}
	.record p:nth-child(1){
		font-size: 0.4rem;
		color:#000000;
		margin-bottom: 0.2rem;
		float: left;
		cursor: pointer;
	}
	.record p:nth-child(2){
		font-size: 0.38rem;
		color:#000000;
		margin-bottom: 0.2rem;
		float: right;
		cursor: pointer;
	}
	#delete{
		font-size:0.38rem;
	}
	.recommend .active{
		background-color: #4294e6;
		color: #fff;
	}
</style>
