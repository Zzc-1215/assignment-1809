<template>
  <div class="box">
    <header class="header">
        <router-link to='/weather'>
            <span><i class='iconfont icon-fanhui-copy'></i>{{msg.text}}</span>
        </router-link>
      <div class="right">
        <i class="iconfont icon-sangedian"></i>
        |
        <i class="iconfont icon-yuanquan"></i>
      </div>
    </header>
    <div class='swiper-container' id='swiper1'> 
      <ul class='swiper-wrapper'>
        <li v-for='l in num' :key='l.date' class='swiper-slide'>
          <span>{{l.week}}</span>
          <!-- 写日期 -->
          <p>{{l.date}}</p>
        </li>
      </ul> 
    </div> 
    <div class="swiper-container" id='swiper2'>
      <div class="swiper-wrapper">
          <div class="swiper-slide" v-for='l in num' :key="l.date+'1'">
            <div class='b'>
              <h2>{{l.temperature}}</h2>
              <h3>{{l.weather}}<span>{{l.exercise_index}}</span></h3>
            </div>
            <h2>风力<span>{{l.wind}}3级</span></h2>
          </div>
          
      </div>
    </div>
  </div>
</template>
<script>
//import 'swiper/dist/css/swiper.css'
//引入swiper
import Swiper from 'swiper'
export default {
  name: 'weather',
  data() {
    return {
      swiper1:null,
    }
  },
  mounted(){
  this.swiper1= new Swiper('#swiper2', {
        thumbs: {
          swiper:{
            el:'#swiper1',
            slidesPerView:3,
            slidesPerGroup:1, 
          } 
      },
      slideThumbActiveClass:'active',
    });
    
     
  },
  // 计算属性接受路由传过来的数据
  computed: {
    num() {//接受第二个页面传过来的未来七天的数据
      return this.$route.params.num.future;
    },
    msg() {
      return this.$route.params.msg;
    }
  },
};
</script>
<style scope>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
  text-decoration: none;
}
.clearfix:after,
.clearfix:before {
  content: "";
  display: table;
}
.clearfix:after {
  clear: both;
}
.clearfix {
  zoom: 1;
}
body{
  -webkit-overflow-scrolling: touch;
  touch-action: none;
}
i {
  font-size: 0.3rem;
}
.box {
  width: 7.5rem;
  height: auto;
}
.header {
  width: 100%;
  height: 1.15rem;
  padding: 0.3rem;
  /* 水平居中 */
  display: flex;
  align-items: center;
  position: relative;
  line-height: 1.15rem;
}
.header>a>span {
  color: #000;
  font-size: 0.3rem;
}
.header>a>span>i{
  display:inline-block;
  margin-right:0.2rem;
}
.header .right {
  width: 1.93rem;
  height: 0.65rem;
  border: 0.01rem #ccc solid;
  position: absolute;
  right: 0.3rem;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 0.15rem;
  font-size: 0.2rem;
  color: #ccc;
  line-height: 0.65rem;
}
.header .right > i {
  display: inline-table;
  margin: 0 0.3rem;
  color: #000;
  font-size: 0.34rem;
}
.swiper-wrapper>li{
  text-align: center;
  margin-bottom: .2rem;
}
.swiper-wrapper li span{
  display: inline-block;
  width:1rem;
  height:1rem;
  font-size:0.24rem;
  text-align: center;
  line-height: 1rem;
  border-radius: 50%;
}
.swiper-wrapper>li.swiper-slide-thumb-active span{
  background-color:blueviolet;
}
.swiper-wrapper li p{
  font-size:0.24rem;
  color:#000;
}
.b{
  height:3rem;
  background: rgb(37, 83, 170);
}
.b>h2{
  width:100%;
  height:1.5rem;
  font-size:0.4rem;
  line-height: 1.5rem;
  text-align: center;
  color:#fff;
}
.b>h3{
  width:100%;
  height:1rem;
  line-height: 1rem;
  font-size:0.3rem;
  text-align: center;
   color:#fff;
}
.b>h3>span{
  width:.5rem;
  height:0.2rem;
  background: rgb(236, 129, 6);
  color:#fff;
  text-align: center;
  line-height: 0.2rem;
}
.swiper-slide h2{
  width:100%;
  height:1rem;
  line-height: 1rem;
  font-size: 0.3rem;
  padding:0 0.5rem;

}
.swiper-slide h2 span{
  float:right;
}
</style>
