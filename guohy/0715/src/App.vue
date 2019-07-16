<template>
  <div id="app">
    <router-view></router-view>
    <!-- <home></home> -->
  </div>
</template>

<script>
import home from './components/home.vue';

export default {
  name: 'app',
  components: {
    home
  }
}
</script>

<style>
*{
	margin:0;
	padding:0;
	box-sizing:border-box;
}
body,html,#app{
  height: 100%;
  overflow: hidden;
}

</style>
<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
<script>
    window.onload = function () {
        document.documentElement.style.fontSize = document.documentElement.clientWidth / 750 * 100 + 'px';
        window.onresize = function () {
            document.documentElement.style.fontSize = document.documentElement.clientWidth / 750 * 100 + 'px';
        };
    };
</script>
