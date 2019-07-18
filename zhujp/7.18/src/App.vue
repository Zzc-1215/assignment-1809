<template>
  <div id="app">
    <home></home>
  </div>
</template>

<script>
import home from './components/home.vue'

export default {
  name: 'app',
  components: {
    home,
  },
}
</script>

<style>
  *{
    margin:0;
    padding:0;
    vertical-align:top;
    outline:none;
  }
  .clearfix:before,.clearfix:after{
	  content: '';
	  display: table;
  }
  .clearfix:after{
	  clear: both;
  }
  .clearfix{
	  zoom:1;
  }
</style>
