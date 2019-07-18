<template>
  <div class="box">
    <div class="header">
      <span class="el-icon-arrow-left"></span>
      <p>房山区</p>
    </div>
    <div class="swiper-container days">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in list" :key="index">
          <p>{{item.week}}</p>
          <p>{{item.date}}</p>
        </div>
      </div>
    </div>
    <div class="swiper-container" id="container">
      <!-- <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in list" :key="item+index">
          <div class="deta">
            <p>{{item.tem1}}/{{item.tem2}}</p>
            <p>{{item.wea}}</p>
          </div>
        </div>
      </div> -->
    </div>
    <div class="wenxintishi">
      <div>
        <p>风力</p>
        <p>南风转西南风</p>
      </div>
      <div>
        <p>日出日落</p>
        <p>日出05:09日落19:33</p>
      </div>
    </div>
  </div>
</template>
<script>
import "../main.js";
export default {
  name: "days",
  data() {
    return {
      list: null
    };
  },
  mounted() {
    if (this.$route.params.torrow) {
      this.list = this.$route.params.torrow;
      console.log(this.list);
    }
    // if(this.list){
        var mySwiper = new Swiper(".days", {
        direction: "horizontal",
        slidesPerView: 3
      });
      var mySwiperto = new Swiper("#container", {
        direction: "horizontal" // 垂直切换选项
      });
    // }
  }
};
</script>
<style scope>
* {
  margin: 0;
  padding: 0;
}
.box {
  width: 10rem;
  min-height: 9.259rem;
}
.header {
  width: 100%;
  height: 0.741rem;
  padding: 0rem 0.185rem;
  box-sizing: border-box;
  line-height: 0.741rem;
  font-size: 0.463rem;
  text-align: left;
  margin-bottom: 0.556rem;
  color: #0f0f0f;
}
.header > span {
  width: 0.63rem;
  height: 0.741rem;
  line-height: 0.741rem;
  display: inline-block;
  text-align: center;
}
.header > p {
  display: inline-block;
}
.days {
  height: 1.37rem;
  margin-bottom: 0.194rem;
  padding: 0rem 0.185rem;
  box-sizing: border-box;
}
.days > .swiper-slide p:nth-child(1) {
  font-size: 0.407rem;
  color: #4d4d4d;
  margin-bottom: 0.278rem;
}
.days > .swiper-slide p:nth-child(1) {
  font-size: 0.278rem;
  color: #cdcdcd;
}
.days .swiper-slide-active {
  color: #73b0df;
}
#container {
  width: 100%;
  height: 3.704rem;
}
#container .swiper-slide {
  /* padding-top: 1.241rem; */
  background: #7591b6;
}
#container .deta {
  width: 3.704rem;
  float: right;
  margin: 1.241rem 2.009rem 0rem 0rem;
}
#container .deta p:nth-child(1) {
  font-size: 0.926rem;
  color: #fff9f4;
  margin-bottom: 0.278rem;
}
#container .deta p:nth-child(2) {
  font-size: 0.333rem;
  color: #fff9f4;
}
.wenxintishi {
  width: 100%;
  height: 2.241rem;
}
.wenxintishi div {
  width: 4.63rem;
  height: 2.241rem;
  background: #fcfafb;
  padding-top: 0.556rem;
  display: inline-block;
  margin-right: 0.093rem;
  box-sizing: border-box;
}
.wenxintishi div p:nth-child(1) {
  font-size: 0.315rem;
  height: 0.315rem;
  color: #716f70;
  margin-bottom: 0.537rem;
}
.wenxintishi div p:nth-child(2) {
  font-size: 0.389rem;
  height: 0.389rem;
  color: #4d4b4c;
  margin-bottom: 0.537rem;
}
</style>