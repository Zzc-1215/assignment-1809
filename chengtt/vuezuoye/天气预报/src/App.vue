<template>
  <div id="app">
  
     <div class="weather-content">
        <router-view/>
    </div>
  </div>
</template>

<script>
import '../icon/iconfont.css'
export default {
 
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}
a{
  color: #000;
}
body,html{
  width: 100%;
  height: 100%;
}
#app{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.weather-content{
  width: 100%;
  height: 100%;
}
</style>
