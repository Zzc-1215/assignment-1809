<template>
  <div id="app">
    <div id="nav">
        <router-view></router-view>
    </div>
    
  </div>
</template>
<script>
import home from './components/home'
export default {
  name:'app',
  components:{
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
#app{
  width: 100%;
  height: auto;
}
</style>
