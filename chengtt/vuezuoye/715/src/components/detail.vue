<template>
    <div>
    	<div class="head">
    		<h3><span @click='fanhui()'><</span>新闻详情</h3>
    	</div>
        <iframe src="https://www.baidu.com" style="width:100%;height:754px;"></iframe>
    </div>
</template>

<script>
export default {
    methods:{
    	fanhui(){
    		location.href="http://localhost:8080/#/"
    	}
    }
}
</script>

<style>
    .head{
    	width: 100%;
    	height: 50px;
    	line-height: 50px;
    	padding: 0 20px;
    	box-sizing: border-box;
    }
    .head h3{
    	font-size: 20px;
    	text-align: center;
    	font-weight: normal;
    }
    .head h3 span{
    	font-size: 40px;
    	color: #ccc;
    	float: left;
    }
</style>