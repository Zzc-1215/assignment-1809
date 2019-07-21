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
      <p class="city"><router-link to='/search'><i class="iconfont" style="font-size:0.38rem;margin-right:0.1rem;">&#xe657;</i>{{city}}▼</router-link></p>
      <p class="wendu">{{cityList.temperature}}<sup>℃</sup></p>
      <p class="info"><span>{{cityList.info}}</span> | <span>{{cityList.aqi}}</span></p>

      <p class="climate"><span>风向{{cityList.power}}</span> <span>湿度{{cityList.humidity}}%</span> <span>气压{{cityList.aqi}}hPa</span></p>


      <div class="gdtq" @click="tz(gdList)">
        <div class="tomorrow">
          <p>今天<span>{{gdList[0].temperature}}</span></p>
          <p>{{gdList[0].weather}}</p>
        </div>
        <i>|</i>
        <div class="yesterday">
          <p>明天<span>{{gdList[1].temperature}}</span></p>
          <p>{{gdList[1].weather}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      // city:this.$route.params.id || '城市',
      city:localStorage.histroyCity[localStorage.histroyCity.length-5]+''+localStorage.histroyCity[localStorage.histroyCity.length-4],
      cityList:[],//当天的数据
      gdList:'res.data.result.future',//前后几天的天气
    }
  },
  created() {
    // console.log(this.gdList);
    // console.log(this.$route.params.id)
    // console.log(localStorage.histroyCity)
    // console.log(localStorage.histroyCity[localStorage.histroyCity.length-5]+''+localStorage.histroyCity[localStorage.histroyCity.length-4])
    this.getCitysList();
  },
  methods:{
    tz(gdList){
      this.$router.push({name:'details',params:{id:gdList}});
    },
    getCitysList(){
      //http://apis.juhe.cn/simpleWeather/query?city=%E5%A4%A7%E5%85%B4&key=f1d197655f3dac22850212f0e04274e9
      // /simpleWeather/query?city='+this.city.id+'&key=f1d197655f3dac22850212f0e04274e9
      this.axios.get('/simpleWeather/query?city='+this.city+'&key=f1d197655f3dac22850212f0e04274e9').then((res)=>{
          this.cityList=res.data.result.realtime;
          this.gdList=res.data.result.future;
          // console.log(this.gdList);
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
  background: #fff;
  z-index: 10;
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
  width: 0.65rem;
  text-align: center;
}
.yd{
  float: right;
  line-height: 0.5rem;
  width: 0.65rem;
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
  height: 1rem;
  text-align: center;
  padding: 0.2rem 0;
  font-size: 0.4rem;
}
.city a{
  text-decoration: none;
  font-size: 0.4rem;
  line-height: 0.6rem;
  position: absolute;
  left: 50%;
  margin-left: -0.9rem;
  color: #000;
}
.wendu{
  font-size: 1.6rem;
  font-weight: 100;
  font-family: serif;
  color: #001;
  text-align: center;
  margin: 0.1rem 0;
  padding-left: 0.4rem;
}
.wendu sup{
  font-size: 0.6rem;
}
.info{
    font-size: 0.4rem;
    text-align: center;
    margin: 0.4rem 0;
    padding-left: 0.4rem;
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
  font-size: 0.3rem;
  text-align: center;
  color: #7d8087;
  margin: 0.4rem 0;
}
.climate span{
  padding: 0 0.25rem;
}
.gdtq{
  width: 100%;
  height: 2rem;
  background: #f8fbff;
  margin-top: 3rem;
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
