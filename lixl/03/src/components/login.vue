<template>
	<div style="overflow: hidden;">
		<Vcode :show="isShow" @onSuccess="onSuccess" @onClose="onClose" />
		<button @click="onSubmit">登录</button>
	</div>
</template>

<script>
	import Vcode from "vue-puzzle-vcode";
	export default {
		data() {
			return {
				isShow: false,
			}
		},
		components: {
			Vcode
		},
		methods: {
			onSubmit() {
				this.isShow = true;
			},
			onSuccess(msg) {
				this.isShow = false;
			},
			onClose() {
				this.isShow = false;
			}
		}
	}
</script>

<style>
	button{
		float: left;
		margin-left: 50px;
	}
</style>