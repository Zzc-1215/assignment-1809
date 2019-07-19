<template>
  <div>
    <header class="clearfix">
      <div class="header_left fl">
        <span>墨迹天气</span>
      </div>
      <div class="header_right fr">
        <b> &weierp;</b> &nbsp; | &nbsp; <b> &empty; </b>
      </div>
    </header>
    <div class="weather">

      <!-- 地点 -->
      <div class="site"><span>▼</span> &nbsp;房山区 良月乡南大街</div>
      <!-- 广告 -->
      <div class="advertising">
        <div class="advertising_txt">
          <p><span>🔈</span> &nbsp;"35度计划" 福利继续，快来参加</p>
        </div>
      </div>
      <!-- 温度 -->
      <div class="temperature">
        <!-- <span>28°</span> -->
        <router-link to='/details'>28°</router-link>
      </div>
      <!-- 环境 -->
      <p class="environment">阴<span>|</span>🍃80良</p>
      <!-- 场面 -->
      <p class="scene">风向一级 &nbsp;&nbsp;湿度68% &nbsp;&nbsp;气压1003hPa</p>
    </div>
    <div class="tq clearfix">
      <div class="fl">
        <p>今天</p>
        <p class="zk">雷阵雨转多云</p>

      </div>
      <div class="fr">
        <p>明天</p>
        <p class="zk">多云转晴</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
header {
  width: 7.2rem;
  height: 0.92rem;
  line-height: 0.92rem;
  font-size: 0.3rem;
  padding: 0 0.27rem;
}
.header_right {
  width: 1.74rem;
  height: 0.56rem;
  line-height: 0.5rem;
  text-align: center;
  border: 0.02rem solid #ccc;
  border-radius: 0.3rem;
  margin-top: 0.18rem;
}
.weather {
  width: 7.2rem;
  height: 8.92rem;
  background: linear-gradient(to bottom, #9fa7b4, #fcfdff);
  padding-top: 0.3rem;
  padding-bottom: 1.15rem;
}
.site {
  font-size: 0.3rem;
  font-weight: bold;
  padding-bottom: 0.1rem;
  text-align: center;
}
.advertising_txt > p {
  background: rgba(0, 0, 0, 0.2);
  height: 0.6rem;
  line-height: 0.6rem;
  width: 60%;
  margin: 0 auto;
  border-radius: 0.1rem;
  font-size: 0.24rem;
  color: #fff;
  margin-bottom: 0.88rem;
}
.temperature {
  /* text-align: center; */
  font-size: 1.8rem;
}
.temperature > a {
  font-weight: 200;
  padding: 0 2.6rem;
  display: inline-block;
  color: #000;
}
.environment {
  font-size: 0.3rem;
  text-align: center;
  margin-bottom: 0.3rem;
}
.environment > span {
  padding: 0 0.2rem;
}
.scene {
  text-align: center;
  font-size: 0.25rem;
  color: #5d6065;
}
.tq {
  font-size: 0.25rem;
  padding: 0 1rem;
}
.zk {
  font-size: 0.2rem;
}
</style>

