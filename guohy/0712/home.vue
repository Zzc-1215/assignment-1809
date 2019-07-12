<template>
	<div>
		<div style='position:fixed;top:0;left: 0;background-color: #fff;'>
			<nav-bar :data='menu' @indexChange='i=$event' ></nav-bar>
		</div>
		
			<ul class="news-list">
				<li v-for='(item,index) in newsList' :key='index'>
					<p>{{item.title}}</p>
					<div class="img">
						<img :src="item.imgs[0]" alt="">
						<img :src="item.imgs[1]" alt="">
						<img :src="item.imgs[2]" alt="">
					</div>
					<p class='text-muted'>{{item.author}}&nbsp;&nbsp;&nbsp;{{item.time}}</p>
				</li>
			</ul>
	</div>
</template>

<script>
	import navBar from './navBar.vue'
	export default{
		data(){
			return{
				i:0,
				menu:['推荐','热门','科技','娱乐','航空','政治','法政'],
				newsList:[
					{
						title:'第五道阿达淡看看看哪款的那款的',
						imgs:['1.jpg','2.jpg','3.jpg'],
						author:'老王',
						time:'一天前',
					},
					{
						title:'第五道阿达淡看看看哪款的那款的',
						imgs:['1.jpg','2.jpg','3.jpg'],
						author:'老王',
						time:'一天前',
					},
					{
						title:'第五道阿达淡看看看哪款的那款的',
						imgs:['1.jpg','2.jpg','3.jpg'],
						author:'老王',
						time:'一天前',
					},
					{
						title:'第五道阿达淡看看看哪款的那款的',
						imgs:['','',''],
						author:'老王',
						time:'一天前',
					},
					{
						title:'第五道阿达淡看看看哪款的那款的',
						imgs:['','',''],
						author:'老王',
						time:'一天前',
					},
					{
						title:'第五道阿达淡看看看哪款的那款的',
						imgs:['','',''],
						author:'老王',
						time:'一天前',
					}
				]
			}
		},
		components:{
			navBar
		}
	}
	
	
</script>

<style>
	ul.news-list {
		padding: 0;
		margin-top: 50px;
	}
	ul.news-list li{
		padding: 20px;
		border-bottom: solid 20px #ddd;
	}
	ul.news-list li p{
		line-height: 1.14em;
	}
	ul.news-list li img{
		display: inline-block;
		width: 28%;
		height: 100px;
		margin-left: 3%;
		border:solid 1px #000;
	}
	.text-muted{
		font-size: .8em;
		color:#ccc;
	}
	
</style>
