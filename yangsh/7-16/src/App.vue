<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import home from './components/HelloWorld.vue'
export default {
  name:'app',
  components:{
    home
  }
}
</script>

<style>
*{margin: 0;padding: 0;list-style: none;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
