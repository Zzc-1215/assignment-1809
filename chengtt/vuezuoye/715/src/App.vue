<template>
  <div id="app">
    <home></home>
  </div>
</template>

<script>
import home from './components/Home.vue'
export default {
  name:'app',
  components:{
    home
  }
}
</script>

<style>
*{margin: 0;padding: 0;box-sizing: border-box;}
html,body,#app{
  overflow:hidden;
}
</style>
