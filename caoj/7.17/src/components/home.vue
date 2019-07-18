<template id="home">
	<div class="con">
		<div class="header">
			<span class="fh"><</span>
			<span class="mj">墨迹天气</span>
			<span class="cd"></span>
		</div>
		<div class="inp">
			<input type="text" placeholder="请输入城市名,快速查询天气信息">
			<span class="qx">取消</span>
		</div>
		<span class="xian"></span>
		<div class="content">
			<span class="cai">猜你想找</span>
			<ul class="oul">
				<li>北京</li>
				<li>天津</li>
				<li>上海</li>
				<li>沈阳</li>
				<li>哈尔滨</li>
				<li>广东</li>
				
			</ul>
			<span class="lishi">历史记录</span>
			<span class="shan">X删除</span>
		</div>
	</div>
</template>
	
<script>
	export default{
		name:'home'
	}
</script>

<style>
	*{
		margin: 0;
		padding: 0;
	}
	.con{
		margin: 0 auto;
		width: 100%;
		min-height: 500px;
	}
	.header{
		width: 95%;
		margin: 0 auto;
		height: 50px;
	}
	.fh{
		line-height: 50px;
		
	}
	.mj{
		margin-left: 30px;
		font-size: 28px;
		line-height: 50px;
	}
	.cd{
		width: 80px;
		height: 30px;
		border: 1px solid #000;
		display: inline-block;
		border-radius: 30px;
		float: right;
		margin-right: 20px;
		margin-top: 10px;
	}
	.inp{
		width: 95%;
		height: 30px;
		margin: 0 auto;
		
	}
	.inp input{
		width: 80%;
		height: 30px;
		background: #eaeaea;
		border: none;
		float: left;
	}
	.qx{
		float: left;
		line-height: 30px;
		width: 60px;
		height: 30px;
		display: inline-block;
		text-align: center;
	}
	.xian{
		width: 100%;
		height: 1px;
		background: #ccc;
		display: inline-block;
	}
	.content{
		width: 95%;
		height: auto;
		margin-top: 20px;
		margin: 0 auto;
	}
	.cai{
		margin-top: 10px;
		display: inline-block;
	}
	.oul{
		width: 100%;
		min-height: 200px;
		list-style-type: none;
	}
	.oul li{
		width: 30%;
		height: 30px;
		text-align: center;
		line-height: 30px;
		background: royalblue;
		color: #fff;
		float: left;
		margin-left: 2%;
		border-radius: 5px;
		margin-top: 10px;
	}
	.lishi{
		float: left;
	}
	.shan{
		float: right;
		display: inline-block;
		width: 50px;
		text-align: center;
	}
</style>
