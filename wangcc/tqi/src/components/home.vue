<template>
  <div id="homepage">
		<div class="header">
			<p class="el">墨迹天气</p>
			<div class="sc">
				<p class="iconfont">&#xe61d;</p>&nbsp;|<p class="iconfont">&#xe7c2;</p>
			</div>
		</div>
		<div class="main">
			<router-link :to="{name:'search'}" class="al"><p><i class="iconfont" id="lcn">&#xe637;</i> {{data.data.result.city}} <span class="e">∨</span></p></router-link><!-- {{data.data.result.city}} -->
			<p>{{data.data.result.realtime.temperature}}</p>
			<p>{{data.data.result.realtime.info}} | {{data.data.result.realtime.aqi}}</p>
			<p>{{data.data.result.realtim.direct}} {{data.data.result.realtime.power}}&nbsp;&nbsp;{{data.data.result.realtime.humidity}}%&nbsp;&nbsp;气压999hpa</p>
		</div>
	</div>
</template>

<script>
export default {
	created(){
			console.log(this.$route.query.id)
	}, 
	data(){
			return{
				data:this.$route.query.id,
			}
		}
}
</script>

<style scoped>
	#homepage{
		width:7.5rem;
		height:100%;
		background-color:#42B983;
	}
	.header{
		width:7.5rem;
		height:1rem;
		line-height: 1rem;
		background-color:#fff;
		position: relative;
	}
	.el{
		font-size:0.3rem;
		margin-left:0.3rem;
	}
		.sc{
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
	.sc p:nth-child(1){
		font-size:0.3rem;
		float: left;
		color: #000;
	}
	.sc p:nth-child(2){
		font-size:0.3rem;
		float: right;
		color: #000;
	}
	.main{
		width:7.5rem;
		height:6.7rem;
		text-align: center;
		padding-top:0.3rem;
		background:linear-gradient(#a0a5b8,#c9cbda,#f7f7f7);
	}
	.e{
		font-size: 0.2rem;
	}
	.main p:nth-child(1){
		font-size: 0.3rem;
		line-height: 0.4rem;
		font-weight: bold;
	}
	.main p:nth-child(2){
		font-size:2rem;
		margin-top:0.5rem;
		font-weight:none;
	}
	.main p:nth-child(3){
		font-size: 0.3rem;
		line-height: 0.4rem;
	}
	.main p:nth-child(4){
		font-size: 0.3rem;
		line-height: 0.6rem;
		color: #606060;
	}
	#lcn{
		font-size:0.2rem;
		line-height: 0.4rem;
	}
	.al{
		text-decoration: none;
		color: #000;
	}
</style>
