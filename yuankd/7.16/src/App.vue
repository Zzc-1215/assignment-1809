<template>
  <div id="app">
     <div class="hide">
       <home></home>
     </div>
  </div>
</template>

<script>
import home from './components/Home.vue'
// import Vcode from "vue-puzzle-vcode";





export default {
  name: 'app',
  components: {
    home
  }
}
</script>

<style scoped>
*{
  margin:0;
  padding:0;
}
#app{
  width:500px;
  height:600px;
  background:url(../public/7.jpg) left center no-repeat;
  background-size:100%,100%;
  position:relative;
}
#app .hide{
  width:100%;
  height:100%;
  background-color:rgba(61,76,116,.7);
  position:absolute;
  left:0;top:0;
}
</style>
