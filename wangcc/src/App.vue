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
	window.onload = function () {
		document.documentElement.style.fontSize = document.documentElement.clientWidth/750 * 100 + 'px';
		window.onresize = function () {
			document.documentElement.style.fontSize = document.documentElement.clientWidth/ 750 * 100 + 'px';
		}
	}
</script>
<style>
	*{
		margin: 0;
		padding: 0;
		user-select:none;
	}
	html,body,#app{
		width:7.5rem;
		height:100%;
		margin:0 atuo;
	}
</style>
