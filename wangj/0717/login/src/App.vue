<template>
  <div
    id="app"
    style="width:100%;max-width:525px;min-height:670px;background:url('bg.jpg') no-repeat center;position:relative;"
  >
    <div style="width:100%;height:100%;background:rgba(40,57,101,.9);position:absolute;">
      <div id="nav" style="">
        <router-link to="/login" style="color:#fff;">登录</router-link> |
        <router-link to="/register" style="color:#fff;">注册</router-link>
      </div>
      <transition enter-active-class="animated rotateIn" leave-active-class="animated rotateOut">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
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
