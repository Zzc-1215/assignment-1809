<template>
  <div>
    <div class="header">
      <div class="header-left">墨迹天气</div>
      <div class="header-right">
        <span class="iconfont icon-sangedian"></span>
        <span class="circle iconfont icon-yuandian"></span>
      </div>
    </div>
    <div class="content">
      <p class="title">
        <span class="iconfont icon-dingwei"></span>
        房山区良月县南大街
        <span class="iconfont icon-xiasanjiao"></span>
      </p>
      <p class="du">
        28
        <sup>o</sup>
      </p>
      <p class="tq">
        阴 &nbsp;&nbsp;|&nbsp;&nbsp;
        <span>80&nbsp;良</span>
      </p>
      <ul class="ul">
        <li>风向1级</li>
        <li>湿度68%</li>
        <li>气压500pa</li>
      </ul>
      <div class="content-bottom">
        <div class="left">
          26公里外正在下雨呢&nbsp;
          <span class="iconfont icon-iconfontyoujiantou-copy-copy-copy-copy"></span>
        </div>
        <div class="right">
          1905号台风"丹娜丝"来袭，关注动态
          <span class="iconfont icon-iconfontyoujiantou-copy-copy-copy-copy"></span>
        </div>
      </div>
    </div>
    <div class='footer'>
        <div class='jt'>
            <p class='jintian'>
              今天
              <span class='liang'>良</span>
              <span class='ds'>29/22<sup>o</sup>C</span>
            </p>
            <p class='lei'>雷阵雨转多云</p>
        </div>
        <div class='mt'>
          <p class='jintian'>
              明天
              <span class='liang'>良</span>
              <span class='ds'>32/25<sup>o</sup>C</span>
            </p>
            <p class='lei'>多云转雷阵雨</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: ""
    };
  }
};
</script>

<style scoped>
.header {
  width: 6.4rem;
  height: 1rem;
  border-bottom: 1px solid #ccc;
}
.header-left {
  float: left;
  height: 0.85rem;
  line-height: 0.85rem;
  font-size: 0.4rem;
  margin-left: 0.3rem;
}
.header-right {
  float: right;
  width: 1.75rem;
  height: 0.5rem;
  margin-top: 0.2rem;
  border-radius: 0.3rem;
  border: 1px solid #ccc;
  margin-right: 0.2rem;
}

.header-right > span {
  float: left;
  margin-left: 0.2rem;
  font-size: 0.5rem;
}
.content {
  width: 6.4rem;
  height: 7.8rem;
  background: linear-gradient(#abb3c0, #d0d3da, #e6efee);
}
.title {
  font-size: 0.35rem;
  text-align: center;
  padding-top: 0.4rem;
}
.du {
  text-align: center;
  padding-top: 1.5rem;
  font-size: 1.5rem;
}
.tq {
  font-size: 0.32rem;
  text-align: center;
}
.tq > span {
  display: inline-block;
  width: 1.32rem;
  height: 0.48rem;
  line-height: 0.48rem;
  text-align: center;
  background: #f1c339;
  color: #fff;
  font-size: 0.3rem;
  border-radius: 0.1rem;
}
.ul {
  width: 4.5rem;
  height: 0.3rem;
  margin: 0.4rem auto;
}
.ul li {
  float: left;
  list-style: none;
  font-size: 0.25rem;
  width: 1.5rem;
  height: 0.3rem;
  text-align: center;
  line-height: 0.3rem;
  color: #63666b;
}
.content-bottom {
  height: 1.45rem;
  margin-top: 0.6rem;
}
.left {
  width: 3.2rem;
  height: 1.45rem;
  line-height: 1.45rem;
  text-align: center;
  float: left;

  font-size: 0.25rem;
  color: #343837;
  background: #e9f2f1;
}
.left span {
  font-size: 0.4rem;
}
.right {
  width: 3.2rem;
  height: 1.45rem;
  text-align: center;
  font-size: 0.25rem;
  color: #343837;
  float: left;
  background: #e9f2f1;
  padding-top:0.4rem;
}
.footer{
  margin-top:1rem;
  height: 1.3rem;
 background: #fcfdff;
}
.jt{
  float: left;
   width: 3.2rem;
  height: 1.45rem;
  border-right:1px solid #ccc;
}
.jintian{
  font-size: 0.3rem;
  padding-left:0.23rem;
padding-top:0.15rem;
}
.liang{
  width:0.7rem;
  height: 0.35rem;
  line-height: 0.35rem;
  text-align: center;
  border-radius: 0.1rem;
  background: #e9c348;
  display: inline-block;
  color:#fff;
  font-size: 0.28rem;
}
.ds{
  font-size: 0.24rem;
  margin-left:0.5rem;
}
.lei{
  font-size: 0.26rem;
   padding-left:0.23rem;
  padding-top:0.2rem;
}
.mt{
  float: left;
   width: 3.2rem;
  height: 1.45rem;

}

</style>
