<template>
	template>
	<div class="swiper-container" id="navbar">
		<ul class="swiper-wrapper nav-bar">
			<li class="swiper-slide" @click="actindex=index" :class="{active:actindex==index}" v-for="(item,index) in list" :key="index">{{item}}</li>
		</ul>
	</div>

</template>

<script>
	import Swiper from "swiper";
	export default {
		props: ["data"],
		data() {
			return {
				list: this.data || [],
				actindex: 0,
				mySwiper: null
			};
		},
		watch: {
			actindex(v) {
				this.$emit("indexchange", v);
			}
		},
		mounted() {
			this.mySwiper = new Swiper(".swiper-container", {
				direction: "horizontal", // 垂直切换选项
				slidesPerView: 6,
				freeMode: true
			});
		}
	};
</script>

<style scoped>
	#navbar {
		border-bottom: 1px solid #ccc;
	}

	.nav-bar ul {
		list-style: none;
	}

	.nav-bar li {
		height: 50px;
		line-height: 50px;
		cursor: pointer;
		text-align: center;
	}

	.nav-bar .active {
		font-size: 1.2em;
		color: red;
	}
</style>
