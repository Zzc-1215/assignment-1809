<template>
  <div class="box">
    <div class="title">
      <span @click="back" class="el-icon-arrow-left"></span>
      {{list.city}}
    </div>
    <div class="swiper-container days" id="thumbs">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in list.data" :key="index">
          <p>{{item.week}}</p>
          <p>{{item.date.substring(5)}}</p>
        </div>
      </div>
    </div>
    <div class="swiper-container" id="container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in list.data" :key="item+index">
          <div class="deta">
            <p>{{item.tem1}}/{{item.tem2}}</p>
            <p>{{item.wea}}</p>
          </div>
        </div>
      </div>
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
var updat = null;
var vm = {
  name: "days",
  data() {
    return {
      list: this.$route.params.torrow,
      num: 0
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (vm.list == undefined) {
        vm.$router.push({ path: "/" });
      }
    });
  },
  mounted() {
    this.initswiper();
  },
  methods: {
    back() {
      this.$router.push({ name: "today", params: { isdata: this.list } });
    },
    initswiper() {
      var myswi2 = new Swiper("#container", {
        direction: "horizontal",
        thumbs: {
          swiper: {
            el: "#thumbs",
            slidesPerView: 5
          }
        }
      });
    }
  }
};
export default vm;
</script>
<style scope>
html,body{-moz-user-select: none; -khtml-user-select: none; user-select: none;}
* {
  margin: 0;
  padding: 0;
}
.box {
  margin: 0 auto;
  width: 10rem;
  min-height: 9.259rem;
}
.title {
  width: 100%;
  text-align: left;
  font-size: 0.463rem /* 50/108 */;
  height: 0.926rem /* 100/108 */;
  padding-left: 0.343rem /* 37/108 */;
  margin: 0.556rem auto;
  height: 0.556rem /* 60/108 */;
}

.title span {
  width: 0.926rem /* 100/108 */;
  display: inline-block;
}
.days {
  height: 1.37rem;
  margin-bottom: 0.194rem;
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
.days .swiper-slide-thumb-active {
  color: #73b0df;
}
#container {
  width: 100%;
  height: 3.704rem;
}
#container .swiper-slide {
  height: 4.63rem;
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