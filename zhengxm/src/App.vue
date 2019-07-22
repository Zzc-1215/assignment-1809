<template>
  <div id="app">
    <router-view></router-view>
    <!-- <home></home> -->
  </div>
</template>

<script>
import home from './views/home.vue'

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
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
