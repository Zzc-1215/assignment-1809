<template>
  <div id="app">
    <div id="nav">
      <router-link to="/login">登录</router-link> |
      <router-link to="/register">注册</router-link>
    </div>
    <transition enter-active-class="animated zoomInLeft" leave-active-class="animated zoomOutRight">
      <router-view/>
    </transition>
    <!-- <component :is="Login"></component> -->
  </div>
</template>
<script>

import Login from './views/Login'
import Register from './views/Register'
export default {
  
}
</script>



<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
