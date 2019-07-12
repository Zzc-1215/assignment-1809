<template>
  <div id="app">
    <home></home>
  </div>
</template>

<script>
import home from './components/home.vue'

export default {
  name: 'app',
  components: {
    home
  }
}
</script>

<style>
	*{
		padding: 0;
		margin: 0;
		list-style: none;
	}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
