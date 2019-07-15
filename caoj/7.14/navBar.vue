<template>
	<div class="swiper-container" id="navbar">
		<ul class="swiper-wrapper nav-bar">
			<li class="swiper-slide" @click="acsele=item.categroy" :class="{active:item.categroy==acsele}" v-for="(item,index) in list"
			 :key="index">{{item.title}}</li>
		</ul>
	</div>
</template>
<script>
	import Swiper from "swiper";
	export default {
		props: ["data"],
		data() {
			return {
				acsele: "astro",
				list: this.data || [],
				mySwiper: null
			};
		},
		watch: {
			acsele(v) {
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
		height: 1.25rem;
		line-height: 1.25rem;
		cursor: pointer;
		font-size: 0.525rem;
		text-align: center;
	}

	.nav-bar .active {
		font-size: 0.525rem;
		color: red;
	}
</style>
