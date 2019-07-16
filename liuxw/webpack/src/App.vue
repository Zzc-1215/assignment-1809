<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  name:"app",
}
</script>
<style>
*{margin: 0;
box-sizing: border-box;
list-style: none;
 touch-action: pan-y;
padding: 0;}
html,body,#app{
  overflow:hidden;
}
</style>
