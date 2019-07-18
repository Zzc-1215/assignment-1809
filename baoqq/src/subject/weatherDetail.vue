<template>
  <div class="container">
    <div class="head">
      <div class="fl head_l">
        <span>&lt;</span>
        <span @click="gotoHead">返回</span>
      </div>
      <div class="fr head_r">
        <span>&bull;&bull;&bull;</span>
        <span class="circle"
              @click="gotoHead">&omicron;</span>
      </div>
    </div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../img/1.jpg">
        </div>
        <div class="swiper-slide">
          <img src="../img/meng.jpg">
        </div>
        <div class="swiper-slide">
          <img src="../img/1.jpg">
        </div>
        <div class="swiper-slide">
          <img src="../img/meng.jpg">
        </div>
        <div class="swiper-slide">
          <img src="../img/1.jpg">
        </div>
        <div class="swiper-slide">
          <img src="../img/meng.jpg">
        </div>
        <div class="swiper-slide">
          <img src="../img/1.jpg">
        </div>
      </div>
    </div>
    <div class="con clearfix">
        <!-- 质量 -->
        <div class="quality fl clearfix">质量</div>
        <!-- 风力 -->
        <div class="fengli fl clearfix">风力</div>
        <!-- 日出日落 -->
        <div class="sunComeOut fl clearfix">日出日落</div>
        <!-- 限行尾号 -->
        <div class="weihao fl clearfix">1和6</div>
    </div>
  </div>
</template>


<script>

import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';


export default {
  data () {
    return {

    }
  },
  methods: {
    gotoHead () {
      this.$router.push('/')
    },
    gotoWeatherDetail () {
      this.$router.push('/weatherDetail');
    }
  },
  mounted () {
    var mySwiper = new Swiper('.swiper-container', {
      autoplay: true,
      loop: true
    })
  }
}
</script>

<style scoped>
.container{
  background: url("https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1460611193,3175527856&fm=26&gp=0.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  min-height: 15rem;
}
* {
  margin: 0;
  padding: 0;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
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
.head {
  width: 7.5rem;
  height: 1rem;
  line-height: 1rem;
  font-size: 0.5rem;
  color: #000;
  background: url("https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1460611193,3175527856&fm=26&gp=0.jpg");
  background-repeat: no-repeat;
}
.head span {
  margin-left: 0.1rem;
}
.head_r {
  width: 2rem;
  height: 0.7rem;
  margin-top: 0.15rem;
  border: 2px solid #ccc;
  border-radius: 0.45rem;
  margin-right: 0.3rem;
  vertical-align: top;
}
.head_r > span {
  color: #000;
  box-sizing: border-box;
  height: 0.7rem;
  display: inline-block;
  vertical-align: top;
  line-height: 0.7rem;
  text-align: center;
}
.circle {
  width: 50%;
  height: 0.7rem;
  border-left: 1px solid #ccc;
}


.swiper-container{
    width: auto;
}
.swiper-slide{
    height: 2rem;
}
.swiper-slide>img{
    width: 100%;
    height: 100%;
}

.con{
    width: 7rem;
    margin: auto;
}
.con>div{
    width: 3rem;
    height: 1.5rem;
    line-height: 1.5rem;
    text-align: center;
    margin:0.2rem;
    background: cyan;
    font-size: 0.3rem;
    background: rgba(0,0,0,.1)
}
</style>
