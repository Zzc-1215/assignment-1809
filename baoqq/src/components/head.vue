<template>
  <div class="container">
    <div class="head">
      <div class="fl head_l">
        <span>&lt;</span>
        <span>墨迹天气</span>
      </div>
      <div class="fr head_r">
        <span>&bull;&bull;&bull;</span>
        <span class="circle">&omicron;</span>
      </div>
    </div>
    <div class="loading" v-if="datas.length<=0">加载中。。。</div>
    <div class="content" v-else>
      <div class="address" v-if="welcome==this.$route.params.address" @click="gotoSearch">房山区 现代管理大学</div>
      <div class="address" v-else @click="gotoSearch">
        {{welcome.province+' '+ welcome.city+' ' +welcome.district}}
      </div>
      <div class="broadcast">“35度计划”福利继续，快来参加</div>
      <div class="degBox">
        <!-- 温度 -->
        <div class="deg">{{datas.realtime.temperature}}&deg;</div>
        <!-- 多云 -->
        <div class="weather">
          <div class="duoyun fl clearfix">{{datas.realtime.info}}</div>
          <div class="yellow fr clearfix">{{datas.realtime.power}}</div>
        </div>
        <!-- 风向 -->
        <div class="feng">风向{{datas.realtime.direct}}  湿度{{datas.realtime.aqi}}%</div>
        <!-- 降雨 -->
        <div class="jiangyu clearfix">
          <div class="jiangyu_l fl clearfix">
            降雨带在32公里外
            <span class="fr">></span>
          </div>
          <div class="jiangyu_r fr clearfix">
            1905号台风“丹娜丝”来袭
            <span class="fr">></span>
          </div>
        </div>
      </div>
      <!-- 天气情况 -->
      <div class="tianqi clearfix">
        <div class="tianqi_l fl clearfix" @click="gotoWeatherDetail(datas)">
          今天
          <p style="float:right;margin-right:0.3rem;">
            {{datas.future[0].temperature}}&deg;
          </p>
        <div>{{datas.future[0].weather}}</div>
        </div>
        <div class="tianqi_r fr clearfix"  @click="gotoWeatherDetail(datas)">
          明天
          <p style="float:right;margin-right:0.3rem;">
            {{datas.future[1].temperature}}&deg;
          </p>
        <div>{{datas.future[1].weather}}</div>
        </div>
      </div>
    </div>

  </div>

</template>


<script>
export default {
  data () {
    return {
      datas:[],
      welcome:this.$route.params.address,
      wel:this.$route.params.address.city,

    }
  },
  created () {
    console.log(this.welcome);
    this.shuj()
    console.log(this.datas)
  },
  methods: {
    shuj() {
      this.axios.get("./detail.json").then(res => {
        console.log(res.data.result);
        var data = res.data.result;
        this.datas = data;
        console.log(data);
      });
    },
    gotoSearch () {
      this.$router.push('/search')
    },
    gotoWeatherDetail(item){
      this.$router.push({name:'futureWeather',params:{add:item}})
    },
  }
}
</script>



<style scoped>
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

.content {
  width: 7.5rem;
  height: auto;
}
.address {
  font-size: 0.4rem;
  text-align: center;
  margin: 0.5rem 0 0;
}
.broadcast {
  width: 4.7rem;
  height: 0.6rem;
  line-height: 0.6rem;
  background: rgba(0, 0, 0, 0.2);
  margin: auto;
  color: #fff;
  border-radius: 0.2rem;
}

.degBox {
  width: 5.5rem;
  margin: auto;
}
.deg {
  width: 2rem;
  height: 2rem;
  line-height: 2rem;
  text-align: center;
  font-size: 1rem;
  margin: auto;
}
.weather {
  width: 5rem;
  height: 0.7rem;
  margin: auto;
}
.weather > div {
  width: 50%;
  text-align: center;
  line-height: 0.7rem;
}
.yellow {
  width: 2rem;
  height: 0.6rem;
  line-height: 0.6rem;
  box-sizing: border-box;
  border-left: 2px solid #000;
}
.feng {
  color: #999;
  text-align: center;
}

.jiangyu {
  width: 6rem;
  height: 1.6rem;
  margin: auto;
}
.jiangyu > span {
  display: block;
}
.jiangyu_l {
  width: 2.8rem;
  height: 1.6rem;
  background: rgba(0, 0, 0, 0.1);
}
.jiangyu_r {
  width: 2.8rem;
  height: 1.6rem;
  line-height: 0.5rem;
  background: rgba(0, 0, 0, 0.1);
}
.tianqi{
  width: 7.5rem;
  height: 2rem;
  margin: 0.3rem 0;
}
.tianqi_l{
  width: 50%;
  height: 2rem;
  background: rgba(0, 0, 0, 0.1);
}
.tianqi_r{
  width: 50%;
  height: 2rem;
  border-left: 1px solid #ccc;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.1);
}
</style>
