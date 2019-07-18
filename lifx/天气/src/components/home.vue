<template>
  <div class="box">
    <div class="header">
      <div class="zuo" @click="jump">&lt;</div>
      <div class="you">
        墨迹天气
        <span class="tu"></span>
      </div>
    </div>
    <div class="search">
      <div class="put">
        <span class="sstb"></span>
        <input type="text" placeholder="请输入城市名，快速查询天气信息" @change="shuju($event)" id="pu" />
      </div>
      <button>取消</button>
    </div>
    <h2 class="cnxz">猜你想找</h2>
    <div class="tuijian">{{val}}</div>
    <div class="lsjl">
      <h3>历史纪录</h3>
      <div>清空</div>
    </div>
    <div class="ls"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cs: "%e5%8c%97%e4%ba%ac",
      val: "",
    };
  },
  methods: {
    jump() {
      this.$router.push("/");
    },
    shuju(e) {
      // console.log(this.urlencode())
      this.val = e.target.value;
      // urlencode;
      // console.log(val)
      this.axios
        .get("/simpleWeather/query?city=%E5%8C%97%E4%BA%AC&key=ccf8c5046a732b0cec249e6b48b98deb")
        .then(res => {
          console.log(res);
          // var data = data.data.result;
          
        });
    }
  }
};
</script>
<style>
.box {
  width: 7.5rem;
  height: auto;
}
.header {
  width: 7.5rem;
  height: 1.7rem;
}
.zuo {
  width: 1.3rem;
  height: 1.7rem;
  text-align: center;
  line-height: 1.7rem;
  font-size: 0.5rem;
  float: left;
}
.you {
  width: 6.2rem;
  height: 1.7rem;
  float: left;
  line-height: 1.7rem;
  font-size: 0.5rem;
}
.tu {
  width: 1.5rem;
  height: 0.7rem;
  float: right;
  line-height: 1.7rem;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  margin-top: 0.5rem;
  margin-right: 0.3rem;
}
.search {
  width: 7.5rem;
  height: 1rem;
  background: pink;
}
.put {
  width: 6rem;
  height: 1rem;
  margin-left: 0.3rem;
  background: #f2f2f2;
  border-radius: 0.1rem;
  float: left;
}
.put .sstb {
  width: 1rem;
  height: 1rem;
  float: left;
  background-color: cyan;
  border-radius: 0.1rem 0 0 0.1rem;
}
.put input {
  float: left;
  width: 5rem;
  height: 1rem;
  outline: none;
  border: none;
  border-radius: 0 0.1rem 0.1rem 0;
  font-size: 0.25rem;
}
.search button {
  width: 1.2rem;
  float: left;
  height: 1rem;
  border: none;
}
.cnxz {
  font-size: 0.42rem;
  margin-top: 0.87rem;
  margin-left: 0.4rem;
  margin-bottom: 0.3rem;
}
.tuijian {
  width: 7.5rem;
  height: 3.5rem;
}
.lsjl {
  width: 7.5rem;
  height: 0.5rem;
}
.lsjl h3 {
  width: 5rem;
  height: 0.5rem;
  margin-left: 0.5rem;
  font-size: 0.4rem;
  float: left;
}
.lsjl div {
  width: 2rem;
  height: 0.5rem;
  float: right;
  padding-right: 0.2rem;
  font-size: 0.4rem;
}
.ls {
  width: 7.5rem;
  height: 1rem;
}
</style>


