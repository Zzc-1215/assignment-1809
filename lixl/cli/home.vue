<template>
	<div>
		<div style="position: fixed;top: 0;left: 0; width: 100%;background-color: white;">
			<nav-bar :data="num" @indexchange="i=$event"></nav-bar>
		</div>
		<div class="new-list">
			<ul>
				<li v-for="item in newList[i]">
					<p>{{item.title}}</p>
					<div>
						<img :src="item.imgs[0]" alt="" />
						<img :src="item.imgs[1]" alt="" />
						<img :src="item.imgs[2]" alt="" />
					</div>
					<p class="text-muted">{{item.author}}&nbsp;&nbsp;&nbsp;&nbsp;{{item.time}}</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import navBar from './navBar.vue'
	export default {
		data(){
			return{
				i:0,
				num:['推荐','电影','电视','综艺','动漫','少儿','纪录','原创'],
				newList:[
					[
					{
						title:'加强党的政治建设，习近平总书记这么说',
						imgs:['/img/10.553bce61.png','/img/12.bf5d3b22.png','/img/html.56d66572.png'],
						author:'神秘人',
						time:'一天前'
					},
					{
						title:'加强党的政治建设，习近平总书记这么说',
						imgs:['/img/10.553bce61.png','/img/12.bf5d3b22.png','/img/html.56d66572.png'],
						author:'神秘人',
						time:'一天前'
					},
					{
						title:'加强党的政治建设，习近平总书记这么说',
						imgs:['/img/10.553bce61.png','/img/12.bf5d3b22.png','/img/html.56d66572.png'],
						author:'神秘人',
						time:'一天前'
					},
					{
						title:'加强党的政治建设，习近平总书记这么说',
						imgs:['/img/10.553bce61.png','/img/12.bf5d3b22.png','/img/html.56d66572.png'],
						author:'神秘人',
						time:'一天前'
					},
				],
				[
					{
						title:'党的政治建设，习近平总书记这么说',
						imgs:['/img/10.553bce61.png','/img/12.bf5d3b22.png','/img/html.56d66572.png'],
						author:'神秘人',
						time:'一天前'
					},
					{
						title:'加强党的政治建设，习近平总书记这么说',
						imgs:['/img/10.553bce61.png','/img/12.bf5d3b22.png','/img/html.56d66572.png'],
						author:'神秘人',
						time:'一天前'
					},
					{
						title:'加强党的政治建设，习近平总书记这么说',
						imgs:['/img/10.553bce61.png','/img/12.bf5d3b22.png','/img/html.56d66572.png'],
						author:'神秘人',
						time:'一天前'
					},
					{
						title:'加强党的政治建设，习近平总书记这么说',
						imgs:['/img/10.553bce61.png','/img/12.bf5d3b22.png','/img/html.56d66572.png'],
						author:'神秘人',
						time:'一天前'
					},
				],
				[
					{
						title:'加强党的政治建设，习近平总书记这么说',
						imgs:['/img/10.553bce61.png','/img/12.bf5d3b22.png','/img/html.56d66572.png'],
						author:'神秘人',
						time:'一天前'
					},
					{
						title:'加强党的政治建设，习近平总书记这么说',
						imgs:['/img/10.553bce61.png','/img/12.bf5d3b22.png','/img/html.56d66572.png'],
						author:'神秘人',
						time:'一天前'
					},
					{
						title:'加强党的政治建设，习近平总书记这么说',
						imgs:['/img/10.553bce61.png','/img/12.bf5d3b22.png','/img/html.56d66572.png'],
						author:'神秘人',
						time:'一天前'
					},
					{
						title:'加强党的政治建设，习近平总书记这么说',
						imgs:['/img/10.553bce61.png','/img/12.bf5d3b22.png','/img/html.56d66572.png'],
						author:'神秘人',
						time:'一天前'
					},
				],
				[
					{
						title:'加强党的政治建设，习近平总书记这么说',
						imgs:['/img/10.553bce61.png','/img/12.bf5d3b22.png','/img/html.56d66572.png'],
						author:'神秘人',
						time:'一天前'
					},
					{
						title:'加强党的政治建设，习近平总书记这么说',
						imgs:['/img/10.553bce61.png','/img/12.bf5d3b22.png','/img/html.56d66572.png'],
						author:'神秘人',
						time:'一天前'
					},
					{
						title:'加强党的政治建设，习近平总书记这么说',
						imgs:['/img/10.553bce61.png','/img/12.bf5d3b22.png','/img/html.56d66572.png'],
						author:'神秘人',
						time:'一天前'
					},
					{
						title:'加强党的政治建设，习近平总书记这么说',
						imgs:['/img/10.553bce61.png','/img/12.bf5d3b22.png','/img/html.56d66572.png'],
						author:'神秘人',
						time:'一天前'
					},
				],
				[
					{
						title:'加强党的政治建设，习近平总书记这么说',
						imgs:['/img/10.553bce61.png','/img/12.bf5d3b22.png','/img/html.56d66572.png'],
						author:'神秘人',
						time:'一天前'
					},
					{
						title:'加强党的政治建设，习近平总书记这么说',
						imgs:['/img/10.553bce61.png','/img/12.bf5d3b22.png','/img/html.56d66572.png'],
						author:'神秘人',
						time:'一天前'
					},
					{
						title:'加强党的政治建设，习近平总书记这么说',
						imgs:['/img/10.553bce61.png','/img/12.bf5d3b22.png','/img/html.56d66572.png'],
						author:'神秘人',
						time:'一天前'
					},
					{
						title:'加强党的政治建设，习近平总书记这么说',
						imgs:['/img/10.553bce61.png','/img/12.bf5d3b22.png','/img/html.56d66572.png'],
						author:'神秘人',
						time:'一天前'
					},
				],
				[
					{
						title:'加强党的政治建设，习近平总书记这么说',
						imgs:['/img/10.553bce61.png','/img/12.bf5d3b22.png','/img/html.56d66572.png'],
						author:'神秘人',
						time:'一天前'
					},
					{
						title:'加强党的政治建设，习近平总书记这么说',
						imgs:['/img/10.553bce61.png','/img/12.bf5d3b22.png','/img/html.56d66572.png'],
						author:'神秘人',
						time:'一天前'
					},
					{
						title:'加强党的政治建设，习近平总书记这么说',
						imgs:['/img/10.553bce61.png','/img/12.bf5d3b22.png','/img/html.56d66572.png'],
						author:'神秘人',
						time:'一天前'
					},
					{
						title:'加强党的政治建设，习近平总书记这么说',
						imgs:['/img/10.553bce61.png','/img/12.bf5d3b22.png','/img/html.56d66572.png'],
						author:'神秘人',
						time:'一天前'
					},
				],
				[
					{
						title:'加强党的政治建设，习近平总书记这么说',
						imgs:['/img/10.553bce61.png','/img/12.bf5d3b22.png','/img/html.56d66572.png'],
						author:'神秘人',
						time:'一天前'
					},
					{
						title:'加强党的政治建设，习近平总书记这么说',
						imgs:['/img/10.553bce61.png','/img/12.bf5d3b22.png','/img/html.56d66572.png'],
						author:'神秘人',
						time:'一天前'
					},
					{
						title:'加强党的政治建设，习近平总书记这么说',
						imgs:['/img/10.553bce61.png','/img/12.bf5d3b22.png','/img/html.56d66572.png'],
						author:'神秘人',
						time:'一天前'
					},
					{
						title:'加强党的政治建设，习近平总书记这么说',
						imgs:['/img/10.553bce61.png','/img/12.bf5d3b22.png','/img/html.56d66572.png'],
						author:'神秘人',
						time:'一天前'
					},
				],
				[
					{
						title:'加强党的政治建设，习近平总书记这么说',
						imgs:['/img/10.553bce61.png','/img/12.bf5d3b22.png','/img/html.56d66572.png'],
						author:'神秘人',
						time:'一天前'
					},
					{
						title:'加强党的政治建设，习近平总书记这么说',
						imgs:['/img/10.553bce61.png','/img/12.bf5d3b22.png','/img/html.56d66572.png'],
						author:'神秘人',
						time:'一天前'
					},
					{
						title:'加强党的政治建设，习近平总书记这么说',
						imgs:['/img/10.553bce61.png','/img/12.bf5d3b22.png','/img/html.56d66572.png'],
						author:'神秘人',
						time:'一天前'
					},
					{
						title:'加强党的政治建设，习近平总书记这么说',
						imgs:['/img/10.553bce61.png','/img/12.bf5d3b22.png','/img/html.56d66572.png'],
						author:'神秘人',
						time:'一天前'
					},
				],
				]
			}
		},
		components:{
			navBar
		}
	}
</script>

<style scoped>
	.new-list{
		margin-top: 50px;
	}
	.new-list ul li{
		padding: 10px 20px;
		list-style: none;
		border-bottom: solid 10px #ccc;
	}
	.new-list ul li p{
		line-height: 1.4em;
		margin-bottom: 10px;
		text-align: left;
	}
	.new-list ul li img{
		width: 30%;
		height: 150px;
		display: inline-block;
		margin-right: 3.3333333%;
	}
	.text-muted{
		color: #ccc;
		font-size: 0.8em;
	}
</style>