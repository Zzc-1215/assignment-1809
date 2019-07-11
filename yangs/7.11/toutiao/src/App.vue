<template>
    <div id="app">
      <home></home>
    </div>
</template>

<script>
import home from './components/home.vue'

export default{
    name:'app',
    components:{
      home
    }
}
</script>

<style>
  *{
    padding:0;
    margin:0;
    box-sizing:border-box;
  }
</style>
