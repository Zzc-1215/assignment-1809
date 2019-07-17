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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 400px;
  height: 600px;
  /* background-color: #ccc; */
 
}
#app>div{
	height: 100%;
	 background: url(//pic.ibaotu.com/00/03/05/62P888piC9sF.jpg-0.jpg!ww700) no-repeat;
	 background-position: -70px -100px;
}
</style>
