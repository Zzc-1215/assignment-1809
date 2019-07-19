<template>
  <div id="app">
    <router-view></router-view>
  </div>

</template>

<script>

export default {
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
}
/*公用*/
.fl {
  float: left;
}
.fr {
  float: right;
}
/*普通清浮动*/
.clearfix {
  zoom: 1;
}
.clearfix::after,
.clearfix::before {
  content: "";
  display: block;
  width: 0;
  height: 0;
  visibility: hidden;
  clear: both;
}
</style>
