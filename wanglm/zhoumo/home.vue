<template>
	<div style="height: 100%;">
		<div style="height:50px;position:fixed;top:0;left:0;right:0;background:#fff;z-index: 1;">
			<nav-bar :data="menu" @indexChange="getNewsList"></nav-bar>
		</div>
		<div id="wrapper" style="height: 100%;width: 100%;position: relative;">
			<ul class="news-list">
				<li style="text-align:center;line-height: 50px;">{{refash}}</li>
				<li v-for="(item,index) in newsList" :key="index">
					<p>{{item.title}}</p>
					<div>
						<img v-lazy="item.img" />
						<img v-lazy="item.img" />
						<img v-lazy="item.img" />
					</div>
					<p class="text-muted">{{item.source}}&nbsp;&nbsp;{{item.update_time}}</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import IScroll from "iscroll/build/iscroll-probe.js";
	import navBar from "./navBar.vue";
	export default {
		data() {
			return {
				refash: '下拉刷新',
				isrefash: false,
				isLoad: false,
				myScroll: null,
				url: '/irs/rcd',
				params: '&cid=56&token=c786875b8e04da17b24ea5e332745e0f&num=20&expIds=20190106A13PFT%7C20190108A04MLS&page=0'
				currentType: 'games',
				currentPage: 0,
				menu: [{
						categroy: 'games',
						title: '头条'
					},
					{
						categroy: 'astro',
						title: '社会'
					},
					{
						categroy: 'cul',
						title: '国内'
					},
					{
						categroy: 'edu',
						title: '国际'
					},
					{
						categroy: 'house',
						title: '娱乐'
					},
					{
						categroy: 'sports',
						title: '体育'
					},
					{
						categroy: 'tech',
						title: '军事'
					},
					{
						categroy: 'finance',
						title: '科技'
					},
					{
						categroy: 'fashion',
						title: '财经'
					},
					{
						categroy: 'ent',
						title: '时尚'
					}
				],
				newsList: []
			};
		},
		created() {
			this.getNewsList();
		},
		components: {
			navBar
		},
		methods: {
			getNewsList(event) {
				this.currentType = event || 'games';
				// http://v.juhe.cn/toutiao/index?type=&key=f53d292ce8d1d53e83e82adc737514c7
				this.axios.get(this.url + '?ext=' + this.currentType + this.params + this.currentPage).then((res) => {
					// this.newsList = res.result.data;
					if (this.currentPage == 0) {
						this.newsList = res.data.data;
					} else {
						this.newsList = this.newsList.concat(res.data.data)
					}
					this.$nextTick(function() {
						if (this.myScroll) {
							this.myScroll.refresh()
						} else {
							this.initIScroll()
						}
					})

				})
			},
			initIScroll() {
				var vm = this
				this.myScroll = new IScroll('#wrapper', {
						scrollbars: true,
						mouseWheel: true,
						probeType: 2,

					}),
					this.myScroll.on('scroll', function() {
						if (this.y > 50) {
							vm.refash = '松开刷新',
							vm.isrefash = true;
						} else if (this.y < this.maxScrollY) {
							vm.isLoad = true
						} else {
							vm.refash = '下拉刷新'
							vm.isrefash = false;
							vm.isLoad = false;
						}
					})
				this.myScroll.on('scrollEnd', function() {
					console.log(vm.myScroll)
					if (vm.isrefash) {
						vm.currentPage = 0
						vm.getNewsList(vm.currentType)
					} else if (vm.isLoad) {
						vm.currentPage++
						vm.getNewsList(vm.currentType)
					}
				})
			}
		},
	};
</script>


<style scoped>
	ul.news-list li {
		padding: 5px 20px;
		border-bottom: 10px solid #ddd;
	}

	ul.news-list li p {
		line-height: 1.4em;
		margin-bottom: 10px;
	}

	ul.news-list li img {

		width: 30%;
		margin-right: 3.333%;
		height: 100px;
		border: 1px solid #ccc;
		display: inline-block;
	}

	.text-muted {
		color: #ccc;
		font-size: 0.8em;
	}
</style>
