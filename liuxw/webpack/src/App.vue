<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import home from './components/Home.vue'
export default {
  name:"app",
  components:{
    home
  }
}
</script>
<style>
*{margin: 0;
box-sizing: border-box;
list-style: none;
 /* touch-action: pan-y; */
padding: 0;}
html,body,#app{
  overflow:hidden;
}
</style>
