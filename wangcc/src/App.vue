<template>
  <div id="app">
		<home></home>
  </div>
</template>

<script>
	import home from './views/Home.vue'
	export default{
		name:'app',
		components:{
			home
		}
	}
</script>

<style>
	#app{
		width:700px;
		min-height: 800px;
		margin:0 atuo;
	}
</style>
