<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import index from './components/index.vue'

export default {
  name: 'app',
  components: {
    index
  }
}
</script>

<style>
*{margin: 0;padding: 0;box-sizing: border-box;}
</style>
