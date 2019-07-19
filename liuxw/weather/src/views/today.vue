<template>
  <div class="box">
    <div class="detail">
      <p @click="seledq" class="diqu">{{isdata.city}}</p>
      <p class="tip">{{isdata.data[0].air_tips}}</p>
      <div class="du" @click="otherday">{{isdata.data[0].tem}}</div>
      <div class="ing">
        <span class="tq">{{isdata.data[0].wea}}</span>|
        <span class="kongqi">{{isdata.data[0].humidity}}{{isdata.data[0].air_level}}</span>
      </div>
      <div class="other">
        <span>{{isdata.data[0].win[0]}}{{isdata.data[0].win_speed}}</span>
        <span>{{isdata.data[0].index[0].title}}--{{isdata.data[0].index[0].level}}</span>
      </div>
      <div class="yujing">
        <div>
          {{isdata.data[0].index[2].desc}}
          <span class="el-icon-arrow-right"></span>
        </div>
        <div>
          {{isdata.data[0].index[3].desc}}
          <span class="el-icon-arrow-right"></span>
        </div>
      </div>
      <div class="mingtian">
        <div class="td">
          <p>
            <span>{{isdata.data[0].day}}</span>
            <span>{{isdata.data[0].air_level}}</span>
            <span>{{isdata.data[0].tem1}}/{{isdata.data[0].tem2}}</span>
          </p>
          <p>{{isdata.data[0].wea}}</p>
        </div>
        <div class="td">
          <p>
            <span>{{isdata.data[1].day}}</span>
            <span v-show="isdata.data[1].air_level">{{isdata.data[1].air_level}}</span>
            <span>{{isdata.data[1].tem1}}/{{isdata.data[1].tem2}}</span>
          </p>
          <p>{{isdata.data[1].wea}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
var vm = {
  data() {
    return {
      isdata: this.$route.params.isdt
        ? this.$route.params.isdt
        : this.$route.params.isdata
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (vm.isdata == undefined) {
        vm.$router.push({ path: "/" });
      }
    });
  },
  methods: {
    seledq() {
      this.$router.push({ name: "home" });
    },
    otherday() {
      this.$router.push({ name: "days", params: { torrow: this.isdata } });
    }
  }
};
export default vm;
</script>
<style scope>
* {
  margin: 0;
  padding: 0;
}
html,body{-moz-user-select: none; -khtml-user-select: none; user-select: none;}
.box {
  margin: 0 auto;
  width: 10rem;
}
.detail {
  width: 100%;
  background: linear-gradient(#b4bcc9, #f8f8fa);
  padding-top: 0.611rem;
  box-sizing: border-box;
}
.du {
  text-align: center;
  font-size: 2.556rem;
  margin: 0 auto;
  margin-bottom: 0.741rem;
}
.diqu {
  font-size: 0.407rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 0.37rem;
}
.tip {
  width: 6.241rem;
  height: 0.778rem;
  line-height: 0.778rem;
  text-align: center;
  font-size: 0.352rem;
  color: #fff;
  margin: 0 auto;
  margin-bottom: 1.574rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.ing {
  text-align: center;
  margin-bottom: 0.556rem;
}
.tq {
  display: inline-block;
  height: 0.481rem;
  font-size: 0.481rem;
  margin-right: 0.444rem;
}
.kongqi {
  width: 1.944rem;
  height: 0.648rem;
  background: #f5c348;
  color: #f9fff6;
  font-size: 0.352rem;
  text-align: center;
  line-height: 0.648rem;
}
.other {
  height: 0.37rem;
  width: 100%;
  text-align: center;
  line-height: 0.37rem;
  margin-bottom: 0.796rem;
}
.other span {
  margin-right: 0.648rem;
  color: #55585f;
  font-size: 0.37rem;
}
.other span:nth-child(3) {
  margin-right: 0;
}
.yujing {
  padding: 0rem 0.574rem;
  height: 1.574rem;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 1.231rem;
}
.yujing div {
  float: left;
  display: block;
  width: 3.57rem;
  height: 1.574rem;
  font-size: 0.452rem;
  color: #434544;
  padding-right: 0.426rem;
  box-sizing: border-box;
  line-height: 1.574rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  position: relative;
}
.yujing div:nth-child(2) {
  float: right;
}
.yujing div > span {
  display: inline-block;
  height: 1.574rem;
  line-height: 1.574rem;
  width: 0.426rem;
  font-size: 0.37rem;
  position: absolute;
  right: 0;
  top: 0;
}
.mingtian {
  width: 100%;
  height: 1.722rem;
}
.td {
  width: 49%;
  height: 1.722rem;
  display: inline-block;
  padding: 0.19rem 0.124rem 0px 0.124rem;
  box-sizing: border-box;
}
.td p {
  height: 0.5rem;
  margin-bottom: 0.278rem;
  text-align: left;
}
.td p:nth-child(2) {
  font-size: 0.417rem;
  text-align: left;
}
.td p span:nth-child(1) {
  color: #191d1e;
}
.td p span:nth-child(2) {
  width: 0.963rem;
  height: 0.463rem;
  display: inline-block;
  background: #e8c351;
  text-align: center;
  line-height: 0.463rem;
  color: #fff8c1;
  font-size: 0.315rem;
}
</style>

