<template>
  <div id="app">
  	<ul style="overflow: hidden;">
  		<li @click="isshow=true,isshows=false">登录</li>
  		<li @click="isshow=false,isshows=true">注册</li>
  	</ul>
  	<transition-group tag="p" name="deng">
	    <login :key="1" v-show="isshow"></login>
	    <denglu :key="2" v-show="isshow"></denglu>
		</transition-group>
		<transition-group tag="p" name="zhu" appear>
    <zhuce :key="1" v-show="isshows"></zhuce>
		</transition-group>
  </div>
</template>

<script>
import login from './components/login.vue'
import denglu from './components/denglu.vue'
import zhuce from './components/zhuce.vue'
export default {
  name: 'app',
  components: {
    login,
    denglu,
    zhuce
  },
  data(){
  	return{
  		isshow:false,
  		isshows:true
  	}
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
li{
	list-style: none;
	float: left;
	width: 50px;
	text-align: center;
}
.deng-enter{
	transform: translateX(-300px);
}
.deng-enter-active{
	transition: all 0.8s;
}
.deng-enter-to{
	transform: translateX(0);
}
.zhu-enter{
	transform: translateX(-300px);
}
.zhu-enter-active{
	transition: all 0.8s;
}
.zhu-enter-to{
	transform: translateX(0);
}
</style>
