<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import home from './components/Home.vue'

export default {
  name: 'app',
  components: {
    home
  }
}
</script>

<style>
/* #app {
  width:640px;
} */
*{
  margin:0;
  padding:0;
  text-decoration:none;
}
body,html,#app{
  height:100%;
  overflow:hidden;
  box-sizing:border-box;
}
</style>
