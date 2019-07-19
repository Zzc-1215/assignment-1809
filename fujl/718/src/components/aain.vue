<template>
  <div id="weather">
    <div id="header">
      <p>{{msg.province}}{{msg.city}}{{msg.district}}</p>
      <p id="tianqi">
        <span class="icon iconfont" id="pp">&#xe634;</span>爱上了中国确认
      </p>
    </div>
    <router-link :to="{name:'three',params:{'num':num}}">
      <div id="temperature">{{num.sk.temp}}°</div>
    </router-link>
    <p id="duoyun">
      <span id="duo">{{num.today.weather}}</span>|
      <span id="qingdu">
        <span class="icon iconfont">&#xea1b;</span>106轻度
      </span>
    </p>
    <p id="xiang">
      <i class="iconfont icon-location"></i>
      <span id="qing">{{num.sk.wind_strength}}</span>
      <span class="icon iconfont">&#xe6b9;</span>
      <span id="qing">{{num.sk.humidity}}</span>
      <span class="icon iconfont">&#xe600;</span>
      <span id="qing">999hPa</span>
    </p>
    <div id="future">
      未来两小时不会降雨
      <span id="tu">></span>
    </div>
    <div id="specific ">
      <div id="fist">
        <p>
          <span>今天</span>
          <span id="liang">{{num.today.uv_index}}</span>
          <span id="du">{{num.today.temperature}}</span>
        </p>
        <p>
          <span>{{num.today.wind}}</span>
          <i class="iconfont icon-leizhenyu"></i>
        </p>
      </div>
      <div id="fist">
        <p>
          <span>明天</span>
          <a id="liang">良</a>
          <a id="du">32/18°C</a>
        </p>
        <p>
          <span>多云转中雨</span>
        </p>
      </div>
    </div>
    <div id="footer">
      <router-link to="/">
        <dl>
          <dt>
            <span class="icon iconfont">&#xe67c;</span>
          </dt>
          <dd>首页</dd>
        </dl>
      </router-link>
      <dl>
        <dt>
          <span class="icon iconfont">&#xe673;</span>
        </dt>
        <dd>足迹</dd>
      </dl>
    </div>
  </div>
</template>
<script>
export default {
  props: ["citys", "searchCitys"],
  data() {
    return {
      num: [],
      msg: [],
      arr1: this.citys
    };
  },
  created() {
    console.log(this.$route.params.city);
    if (!this.$route.params.city) {
      this.msg = {
        id: 1,
        text: "北京"
      }; //地区
    } else {
      if (this.$route.params.city.text) {
        this.msg = this.$route.params.city; //地区
      } else {
        this.msg = {
          id: this.$route.params.city.id,
          text:
            this.$route.params.city.city +
            " " +
            this.$route.params.city.district
        };
      }
    }
    // this.fuck(this.$route.params.city.id)
    this.fuck(this.msg.id);
  },
  mounted() {
    (this.msg = this.$route.params.city), console.log(this.msg);
    var aa = this.msg.district;
    console.log(aa);
  },
  methods: {
    fuck(aa) {
      var getUrl =
        "/weather/index?format=2&cityname=" +
        aa +
        "&key=d3412d1028ba32371fa3725c018b50d5";
      this.axios.get(getUrl).then(response => {
        this.num = response.data.result;
        console.log(this.num);
      });
    }
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  list-style-type: none;
  text-decoration: none;
  box-sizing: border-box;
}
#pp {
  margin-left: 0.2rem;
}
#weather {
  width: 7.5rem;
  height: 7.5rem;
  background: linear-gradient(rgb(154, 154, 240), white);
}
#header {
  font-size: 0.4rem;
  text-align: center;
}
#tianqi {
  width: 70%;
  height: 0.4rem;
  background: #ccc;
  line-height: 0.4rem;
  border-radius: 0.2rem;
  margin: 0.27rem auto;
  font-size: 0.2rem;
  color: white;
  overflow: hidden;
}
#temperature {
  width: 50%;
  height: 4.5rem;
  text-align: center;
  line-height: 4.5rem;
  font-size: 1.5rem;
  margin: 0 auto;
}
#qingdu {
  width: 25%;
  height: 0.2rem;
  background: gold;
  color: white;
  text-align: center;
  line-height: 0.2rem;
  margin-left: 0.3rem;
  font-size: 14px;
}
#duoyun {
  width: 60%;
  height: 0.2rem;
  font-size: 0.4rem;
  margin: 0.3rem auto;
  text-align: center;
  line-height: 0.2rem;
}
#duo {
  margin-right: 0.3rem;
}
#xiang {
  width: 70%;
  height: 0.2rem;
  margin: 0.5rem auto;
  text-align: center;
  line-height: 0.2rem;
}
#qing {
  margin-right: 0.2rem;
  font-size: 0.3rem;
}
#future {
  width: 7.5rem;
  height: 0.5rem;
  background: linear-gradient(to right, white, rgb(190, 181, 181), white);
  text-align: center;
  line-height: 0.5rem;
  font-size: 0.3rem;
  margin-top: 1rem;
}
#tu {
  float: right;
  margin-right: 0.3rem;
}
#specific {
  width: 7.5rem;
  height: 2rem;
  background: rgb(175, 110, 110);
}
#fist {
  width: 50%;
  height: 1.6rem;
  font-size: 0.3rem;
  background: rgb(245, 207, 235);
  line-height: 0.6rem;
  float: left;
  margin-top: 0.6rem;
  padding: 0 0.3rem;
  border-right: 1px solid gray;
}
#first p {
  width: 100%;
  height: 0.3rem;
}
#liang {
  width: 0.5rem;
  height: 0.3rem;
  background: yellowgreen;
  text-align: center;
  line-height: 0.3rem;
  display: inline-block;
}
#du {
  float: right;
  margin-right: 0.2rem;
}
#footer {
  width: 50%;
  height: 1.5rem;
  margin: 2.5rem auto;
  text-align: center;
  line-height: 1.5rem;
}
#footer dl {
  width: 50%;
  height: 1.5rem;
  display: inline-block;
  float: left;
}
#footer dl dt {
  width: 1.8rem;
  height: 1.2rem;
  text-align: center;
  font-size: 0.4rem;
}

#footer dl dd {
  font-size: 0.3rem;
  text-align: center;
  line-height: 0.3rem;
}
</style>
