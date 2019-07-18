<template>
  <div id="app" style="height: 100%;">
		<transition enter-active-class="animated bounceInRight" leave-active-class="animated bounceOutLeft">
			<router-view></router-view>
		</transition>
  </div>
</template>

<script>
export default {
  name:'app',
}
</script>

<style>
	*{
		margin: 0;
		padding: 0;
		font-family: "楷体","楷体_GB2312";  
		box-sizing: border-box;
		outline:none;
		user-select:none;
	}
#app{
	width:7.5rem;
	height:100%;
}
</style>
