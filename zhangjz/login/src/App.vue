<template>
  <div id="app"
       v-cloak>
    <router-view></router-view>
  </div>
</template>

<script>
import content from './components/content.vue'

export default {
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body,
html,
#app {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
[v-cloak] {
  display: none;
}
</style>
