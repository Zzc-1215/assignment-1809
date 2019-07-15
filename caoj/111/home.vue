<template>
	<div>
		<div style="position:fixed;top:0;left:0;right:0;background:#fff;">
			<nav-bar :data="menu" @indexchange="i=$event"></nav-bar>
		</div>
		<ul class="news-list">
			<li v-for="(item,index) in newlist[i]" :key="index+item">
				<p>{{item.title}}</p>
				<div>
					<img :src="item.imgs[0]">
					<img :src="item.imgs[1]">
					<img :src="item.imgs[2]">
				</div>
				<p class="text-muted">{{item.author}}&nbsp;&nbsp;&nbsp;&nbsp;{{item.time}}</p>
			</li>
		</ul>
	</div>

</template>

<script>
	import navBar from "/navBar.vue";
	export default {
		data() {
			return {
				i: 0,
				menu: ["推荐", "热门", "等等"],
				newlist: [
					[{
							title: "阿达是否打打阿斯顿撒旦",
							imgs: ["1.jpg", "2.jpg", "3.jpg"],
							author: "sada",
							time: "一天前"
						},
						{
							title: "阿达是否打打阿斯顿撒旦",
							imgs: ["1.jpg", "2.jpg", "3.jpg"],
							author: "asdfs",
							time: "一天前"
						},
						{
							title: "阿达是否打打阿斯顿撒旦",
							imgs: ["1.jpg", "2.jpg", "3.jpg"],
							author: "adsadas",
							time: "一天前"
						},
						{
							title: "阿达是否打打阿斯顿撒旦",
							imgs: ["1.jpg", "2.jpg", "3.jpg"],
							author: "dsada",
							time: "一天前"
						}
					],
					[{
							title: "123212142343",
							imgs: ["1.jpg", "2.jpg", "3.jpg"],
							author: "sdadad",
							time: "一天前"
						},
						{
							title: "65432456443",
							imgs: ["1.jpg", "2.jpg", "3.jpg"],
							author: "asdfs",
							time: "一天前"
						},
						{
							title: "3432423423423",
							imgs: ["1.jpg", "2.jpg", "3.jpg"],
							author: "asdfs",
							time: "一天前"
						},
						{
							title: "1234567834",
							imgs: ["1.jpg", "2.jpg", "3.jpg"],
							author: "asdfs",
							time: "一天前"
						}
					],
					[{
							title: "adsadadfdsfsfdsfdsfds",
							imgs: ["1.jpg", "2.jpg", "3.jpg"],
							author: "asdfs",
							time: "一天前"
						},
						{
							title: "dasdasdasdsadsadasdsa",
							imgs: ["1.jpg", "2.jpg", "3.jpg"],
							author: "asdfs",
							time: "一天前"
						},
						{
							title: "dasdasdasdsadsadsadsafdsf",
							imgs: ["1.jpg", "2.jpg", "3.jpg"],
							author: "asdfs",
							time: "一天前"
						},
						{
							title: "dsaflhasdflkasdjfaslfk",
							imgs: ["1.jpg", "2.jpg", "3.jpg"],
							author: "asdfs",
							time: "一天前"
						}
					]
				]
			};
		},
		components: {
			navBar
		}
	};
</script>

<style scoped>
	ul.news-list li p {
		line-height: 1.4em;
		margin-bottom: 10px;
	}

	ul.news-list {
		margin-top: 50px;
	}

	ul.news-list li {
		padding: 20px;
		border-bottom: 10px solid #ccc;
	}

	ul.news-list li img {
		display: inline-block;
		width: 30%;
		margin-right: 3%;
		height: 100px;
		border: 1px solid red;
	}

	.text-muted {
		color: #ccc;
		font-size: 0.8em;
	}
</style>
