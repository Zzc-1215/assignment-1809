<template>
  <div>
    <div class="header">
      <span>墨迹天气</span>
      <div class="right">
        <i class="iconfont gd">&#xe63b;</i> |
        <i class="iconfont yd">&#xe60a;</i>
      </div>
    </div>
    <div class='content'>
      <p class="city"><router-link to='/search' @click="onval">{{city.district || '城市'}}▼</router-link></p>

      <!-- <div v-for="(item,index) in cityList" :key='index'>
        <p>{{item.api}}</p>
      </div> -->
      <p class="wendu">{{cityList.temperature}}<span>℃</span></p>
      <p class="info"><span>{{cityList.info}}</span> | <span>{{cityList.aqi}}</span></p>

      <p class="climate"><span>风向{{cityList.power}}</span> <span>湿度{{cityList.humidity}}%</span> <span>气压{{cityList.aqi}}hPa</span></p>
      
      <!-- <p>{{cityList.power}}</p> -->
      
      <!-- <p>{{cityList.wid}}</p> -->


      <div class="gdtq" @click="tz(gdList,index)">
        <!-- <router-link to='/details'> -->
          <div class="tomorrow">
            <p>今天<span>{{gdList[0].temperature}}</span></p>
            <p>{{gdList[0].weather}}</p>
          </div>
          <i>|</i>
          <div class="yesterday">
            <p>明天<span>{{gdList[1].temperature}}</span></p>
            <p>{{gdList[1].weather}}</p>

          </div>
        <!-- </router-link> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      // city:[北京,天津,上海,重庆],
      city:this.$router.history.current.query.id,
      citys:this.$router.history.current.query.id.district,
      cityList:[],
      gdList:[],
      datas:[],
    }
  },
  created() {
    // console.log(this.$router.history.current.query.id.district);
    this.getCitysList();

  },
  methods:{
    onval(){
      // console.log(111);
    },
    tz(gdList,index){
      // console.log(gdList);
      this.$nextTick(function(){
        this.$router.push({name:'details',query:{id:gdList}});
      })
    },
    getCitysList(){
      //http://apis.juhe.cn/simpleWeather/query?city=%E5%A4%A7%E5%85%B4&key=f1d197655f3dac22850212f0e04274e9
      // http://api.k780.com:88/?app=weather.today&weaid=1&&appkey=10003&sign=b59bc3ef6191eb9f747dd4e83c99f2a4&format=json
      this.axios.get('./data.json').then((res)=>{
          // console.log(res.city);
          console.log(res.data.result.realtime);
          console.log(res.data.result.future)
          this.cityList=res.data.result.realtime;
          this.gdList=res.data.result.future;
          // this.datas
      })
    },
  },
}
</script>

<style scoped>
.header{
  width: 7.5rem;
  height: 0.8rem;
  border-bottom: 1px solid #ccc;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff
}
.header span{
  font-size: 0.4rem;
  line-height: 0.8rem;
  float: left;
  padding-left: 0.56rem;
  font-weight: 300;
}
.right{
  width: 1.5rem;
  height: 0.5rem;
  float: right;
  margin:0.15rem 0.25rem 0 0;
  border: 1px solid #ccc;
  border-radius: 0.3rem;
  font-size: 0.3rem;
  color: #ccc;
  font-weight: 100;
}
.gd{
  float: left;
  line-height: 0.5rem;
  width: 0.7rem;
  text-align: center;
}
.yd{
  float: right;
  line-height: 0.5rem;
  width: 0.7rem;
  text-align: center;
}
.iconfont {
  color: #000;
  font-size: 0.28rem;
}
.content{
  width: 7.5rem;
  height:5rem;
  background: linear-gradient(#6868cc,#e2dada,#fff);
  margin-top: 0.8rem;
}
.city{
  height: 0.6rem;
  text-align: center;
}
.city a{
  text-decoration: none;
  font-size: 0.3rem;
  line-height: 0.6rem;
  position: absolute;
  left: 50%;
  margin-left: -0.3rem;
  color: #000;
}
.wendu{
  font-size: 1.4rem;
  font-weight: 100;
  font-family: serif;
  color: #001;
  text-align: center;
}
.wendu span{
  font-size: 0.6rem;
  position: absolute;
}
.info{
    font-size: 0.4rem;
    text-align: center;
    margin: 0.2rem 0;
}
.info span{
    margin: 0 0.3rem;
}
.info span:nth-child(2){
  background: #efc646;
  border-radius: 0.1rem;
  color: #fff;
  padding: 0 0.3rem;
}
.climate{
  font-size: 0.26rem;
  text-align: center;
  margin: 0.2rem 0;
  color: #7d8087;
}
.climate span{
  padding: 0 0.25rem;
}
.gdtq{
  width: 100%;
  height: 2rem;
  background: #f8fbff;
  margin: 0.4rem 0;
  font-size: 0.3rem;
  /* text-align: center; */
}
.gdtq i{
    font-weight: 100;
    font-style: normal;
    font-size: 1.6rem;
    float: left;
    margin-top: -0.25rem;
    color: #ccc;
}
.gdtq a{
  color: #ccc;
}
.tomorrow{
  width: 47%;
  height: 2rem;
  float: left;
  color: #000;
}
.yesterday{
  width: 47%;
  height: 2rem;
  float: right;
  color: #000;
}
.tomorrow p,.yesterday p{
  line-height: 0.8rem;
  padding-left: 0.2rem;
}
.tomorrow span,.yesterday span{
  float: right;
  padding-right: 0.1rem;
}
</style>
