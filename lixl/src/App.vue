<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Home from './components/home.vue';
export default{
  name:'app',
  component:{
		Home
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body,html,#app{
	height: 100%;
	overflow: hidden;
}
</style>
