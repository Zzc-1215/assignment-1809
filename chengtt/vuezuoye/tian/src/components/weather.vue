<template>
  <div class="box" v-if="mei">
    <header class="header">
      <span>墨迹天气</span>
      <div class="right">
        <i class="iconfont icon-sangedian"></i>
        |
        <i class="iconfont icon-yuanquan"></i>
      </div>
    </header>
    <!-- 背景随着天气的变化变化 -->
    <div class="content" :class="weatherType">
      <h4>
        <i class="iconfont icon-location"></i>
        {{msg.text}}
        <i class="iconfont icon-jiantou-up-down"></i>
      </h4>
      <h5>
        <i class="iconfont icon-laba"></i>惊！镜头下的水竟美成这样
      </h5>
      <h6>
        <span class="left">
          <i class="iconfont icon-leidianyujing"></i>雷电预警
        </span>
        <span class="right">
          <i class="iconfont icon-haibao"></i>海报
        </span>
      </h6>
      <h1>{{num.sk.temp}}°</h1>
      <div class="atmosphere">
        <span class="rain">{{num.today.weather}}</span>
        |
        <span class="liang">
          <i class="iconfont icon-huanbaoyezishuyemianxing"></i>80良
        </span>
      </div>
      <div class="specific">
        <span>
          <i class="iconfont icon-fengli"></i>
          {{num.sk.wind_strength}}
        </span>
        <span>
          <i class="iconfont icon-shuidi"></i>
          {{num.sk.humidity}}
        </span>
        <span>
          <i class="iconfont icon-kefu"></i>998hPa
        </span>
      </div>
      <div class="message">
        20分钟左右雨渐停
        <span>></span>
      </div>
    </div>
    <div id="weather">
      <div class="first">
        <router-link :to="{name:'three',params:{num:num,msg:msg}}">
          <ul>
            <li>
              今天
              <span>良</span>
            </li>
            <li>{{num.future[0].temperature}}</li>
            <li>{{num.future[0].weather}}</li>
            <li>
              <i class="iconfont icon-leizhenyu"></i>
            </li>
          </ul>
        </router-link>
      </div>
      <div class="second">
        <router-link :to="{name:'three',params:{'num':num,'msg':msg}}">
          <ul>
            <li>
              明天
              <span>良</span>
            </li>
            <li>{{num.future[1].temperature}}</li>
            <li>{{num.future[1].weather}}</li>
            <li>
              <i class="iconfont icon-taiyang"></i>
            </li>
          </ul>
        </router-link>
      </div>
    </div>
    <footer>
      <ul class="clearfix">
        <li>
          <router-link to="/">
            <i class="iconfont icon-index"></i>
            <br>
            <span>首页</span>
          </router-link>
        </li>
        <li>
          <i class="iconfont icon-zuji"></i>
          <br>
          <span>足迹</span>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  props: ["citys",'city'],
  data() {
    return {
      mei:false,
      num: [],
      msg: [],
      arr: this.citys
    }
  },
  created() {
    if(!this.$route.params.city){
      this.msg = {
        id:1,
        text:'北京'
      }//地区
    }else{
        if(this.$route.params.city.text){
        this.msg = this.$route.params.city//地区
    }else{
       this.msg = {
     "id":this.$route.params.city.id,
     "text":this.$route.params.city.city+' '+this.$route.params.city.district
      }
    } 
      }
    this.sha(this.msg.id);
  },
  mounted() {
    console.log(this.$route.params);  
    console.log(this.msg)
  },
  computed:{
    weatherType(){
       switch(this.num.today.weather){
        case '晴':
          return 'qing'
        case '阴':
          return 'yin'
        case '多云转阴':
          return 'duoyun'
        case '雷阵雨':
          return 'leizhenyu'
       }
    }
    
  },
  methods: {
    sha(ss) {
      var geturl =
        "/weather/index?format=2&cityname="+ss+"&key=6a18c9f5015c0831ea3e6d2a938afe1b";
        this.axios.get(geturl).then((response) => {
        this.num = response.data.result;
        this.mei=true;
        console.log(this.num)//所有的数据
        console.log(this.num.today.weather)
      });

    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
}
.header > span {
  color: #000;
  font-size: 0.3rem;
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
.content {
  width: 7.5rem;
  height: 7.4rem;
  background: linear-gradient(#8c9fbd, #f0f4f7);
  padding-top: 0.35rem;
}
.content.qing {
  background: linear-gradient(rgb(4, 4, 245), #ffff);
}
.content.yin {
  background: linear-gradient(#ccc, #fff);
}
.content.duoyun {
  background: linear-gradient(#8c9fbd, #f0f4f7);
}
.content.leizhenyu {
  background: linear-gradient(rgb(1, 1, 44), #fff);
}
.content > h4 {
  width: 100%;
  text-align: center;
  height: 0.37rem;
  margin: 0 auto;
  color: #000212;
  font-size: 0.3rem;
}
.content > h5 {
  width: 4.5rem;
  height: 0.6rem;
  background: #929eac;
  color: #fff;
  margin: 0.2rem auto;
  border-radius: 0.1rem;
  /* text-align: center; */
  line-height: 0.6rem;
  font-size: 0.25rem;
  padding: 0 0.25rem;
}
.content > h5 > i {
  margin-right: 0.4rem;
  display: inline-block;
}
.content > h6 {
  width: 100%;
  height: 0.6rem;
}
.content > h6 > .left {
  width: 1.7rem;
  height: 0.6rem;
  float: left;
  background: #1eb6f7;
  color: #fff;
  font-size: 0.24rem;
  text-align: center;
  line-height: 0.6rem;
  border-radius: 0 0.1rem 0.1rem 0;
}
.content > h6 > .right {
  width: 1.4rem;
  height: 0.6rem;
  float: right;
  background: #9aa5b7;
  color: #fff;
  font-size: 0.24rem;
  text-align: center;
  line-height: 0.6rem;
  border-radius: 0.1rem 0 0 0.1rem;
}
.content > h6 i {
  display: inline-block;
  margin-right: 0.1rem;
}
.content > h1 {
  width: 3rem;
  height: 2rem;
  margin: 0.33rem auto;
  line-height: 2rem;
  text-align: center;
  font-weight: normal;
}
.atmosphere {
  width: 100%;
  height: 0.45rem;
  text-align: center;
  font-size: 0.3rem;
}
.rain {
  color: #000;
  font-size: 0.3rem;
  display: inline-block;
  margin-right: 0.2rem;
}
.liang {
  display: inline-block;
  margin-left: 0.2rem;
  width: 1.35rem;
  height: 0.45rem;
  background: #efc245;
  color: #fff;
  text-align: center;
  line-height: 0.45rem;
}
.liang > i {
  margin-right: 0.1rem;
}
.specific {
  width: 3.5rem;
  height: 0.3rem;
  margin: 0.35rem auto;
  font-size: 0.26rem;
  color: #63686e;
  display: flex;
  justify-content: space-between;
}

.message {
  width: 100%;
  height: 0.75rem;
  line-height: 0.75rem;
  text-align: center;
  font-size: 0.24rem;
  color: #161a1d;
  position: relative;
  background: linear-gradient(to right, #f4f8fb, #e5e9ec, #f4f8fb);
}
.message > span {
  position: absolute;
  right: 1rem;
  font-weight: bold;
}
footer {
  width: 100%;
  height: 1.2rem;
  position: fixed;
  bottom: 0;
  left: 0;
}
footer > ul {
  width: 100%;
  height: 1.2rem;
  text-align: center;
}
footer > ul > li {
  float: left;
  width: 50%;
  padding-top: 0.1rem;
  height: 1.2rem;
  font-size: 0.24rem;
  text-align: center;
}
footer i {
  font-size: 0.5rem;
}
footer > ul > li > a {
  color: #000;
}
footer > ul > li:hover a {
  color: #1eb6f7;
}
#weather {
  width: 100%;
  height: 1.55rem;
  margin-top: 1.4rem;
  background: #f9fdff;
  padding: 0.2rem 0;
}
.first,
.second {
  width: 50%;
  height: 100%;
  float: left;
  padding: 0.2rem;
  border-right: 1px solid #ccc;
}
.second {
  float: right;
}
#weather ul {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
#weather ul > li {
  width: 50%;
  line-height: 0.5rem;
  font-size: 0.24rem;
}
#weather ul > li:nth-child(2),
#weather ul > li:nth-child(4) {
  text-align: right;
}
#weather ul > li > i {
  color: #bee3fd;
}
#weather ul > li > span {
  display: inline-block;
  width: 0.7rem;
  height: 0.32rem;
  border-radius: 0.05rem;
  background: #eac251;
  color: #fff;
  margin-left: 0.1rem;
  text-align: center;
  line-height: 0.32rem;
}
#weather a {
  color: #000;
}
</style>
