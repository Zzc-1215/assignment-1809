<template>
  <div id="app">
    <!-- <router-view></router-view> -->
    <login></login>
  </div>
</template>

<script>
import login from './components/login.vue'

export default {
  name: 'app',
  components: {
    login
  }
}
</script>

<style>
*{
  padding:0;
  margin:0;
  box-sizing: border-box;
  text-decoration:none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
