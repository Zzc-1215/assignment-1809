<template>
<div style="height: 100%;">
	<div>
		<span style="font-size: 26px;line-height: 50px;float: left;"><router-link :to="{path:'/'}"><</router-link></span>
		<p style="font-size: 16px;line-height: 50px;font-style: normal;text-align: center;">{{$store.state.cont.title}}</p>
	</div>
	<iframe :src="$store.state.cont.vurl" style="height: 100%;width: 100%;"></iframe>
</div>
</template>

<script>
export default {
//	data(){
//		return{
//			itemurl:this.$store.state.cont
//		}
//	}
}
</script>

<style>
</style>