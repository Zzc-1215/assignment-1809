<template>
  <div id="app">
    <!-- <router-view></router-view> -->
    <div id="nav">
    <router-link :to="{path:'/login'}">登录</router-link>&nbsp;&nbsp;&nbsp;
      <router-link :to="{path:'/loginUp'}">注册</router-link>
    </div>
    <transition enter-active-class="animated bounceOutRight" leave-active-class="animated bounceOutRight">
      <router-view />
    </transition>
    <!-- <component :is="Login"></component> -->
  </div>
</template>

<script>
// import login from './views/login.vue'
// import loginUp from './views/loginup.vue'

export default {
  
}
</script>

<style>
*{
  padding:0;
  margin:0;
  box-sizing: border-box;
  text-decoration:none;
}
#app {
    margin: 40px auto;
    width:400px;
    height:460px;
    padding: 40px;
    background-image: url('http://img1.imgtn.bdimg.com/it/u=2727204955,1713148738&fm=15&gp=0.jpg') no-repeat;
    background-size: 100%; 
}
</style>
