<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
import home from './components/home.vue'
export default {
  name:'app',
  components: {
    home
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box
}
body,html,#app{
  height: 100%;
  overflow: hidden;
}
</style>
