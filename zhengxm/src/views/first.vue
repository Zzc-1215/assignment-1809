<template>
    <div>
        <div class="header clearfix">
            <div class="header-left">
                <router-link to="/con">
                    <span class="iconfont jt">&#xe616;</span>
                    <p class="weather">{{$store.state.count.district}}</p>
                </router-link>
            </div>
            <div class="hr">
                <i class="iconfont gd">&#xe61d;</i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| <i class="iconfont dw">&#xe61c;</i>
            </div>
        </div>
        <!-- 轮播 -->
        <div class="swiper-container" id="navBar">
            <ul class="swiper-wrapper nav-bar">
                <li class="swiper-slide" v-for="item in week" :key="item + 'w'">{{item.date}}</li>
                <!-- <li class="swiper-slide">周二</li>
                <li class="swiper-slide">周三</li>
                <li class="swiper-slide">周四</li>
                <li class="swiper-slide">周五</li>
                <li class="swiper-slide">周六</li>
                <li class="swiper-slide">周日</li> -->
            </ul>
        </div>
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in week" :key="item">
              <div class='content'>
                  <p class='wendu'>{{item.temperature}}</p>
                  <p class='yu'>{{item.weather}}<span>轻度</span></p>
              </div>
              <div class='message'>
                  <div class='air'>
                      <p class='kq'>空气质量</p>
                      <p class='qd'>轻度</p>
                  </div>
                  <div class='feng'>
                      <p class='kq'>风力</p>
                      <p class='qd'>东北风3级</p>
                  </div>
                  <div class='sun'>
                      <p class='kq'>日出日落</p>
                      <p class='qd'>日出日落</p>
                  </div>
                  <div class='xianhao'>
                      <p class='kq'>空气质量</p>
                      <p class='qd'>2和7</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
    </div> 
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
   data(){
       return {
           indexs:0,
           mySwiper1:null,
           mySwiper2:null,
           weekDay:[],
           id:this.$store.state.count.id,
          //  week:['周一','周二','周三','周四','周五','周六','周日'],
          //  weeks:['7/18','7/19','7/20','7/21','7/22','7/23','7/24'],
          week:[]
       }
   },
   mounted(){
     if(this.id==undefined){
          setTimeout(()=>{
              this.$router.push({path:'/'})
          },50)
      }
      this.initSwiper()
    }, 
    created(){
      this.getWeatherData()
    },
    methods:{
      getWeatherData(){
        this.axios.get('/simpleWeather/query?city='+this.id+'&key=ae424baab7ceba58a7fa97b0c08e0ceb').then((res) => {
          // this.weekDay = res.data.result;
          // console.log(this.weekDay)
          this.week = res.data.result.future;
          this.$nextTick(()=>{
            this.initSwiper()
          })
        })
      },
      initSwiper(){
        // this.mySwiper1 = new Swiper ('#navBar', {
        //     slidesPerView:3,
        // })
        this.mySwiper2 = new Swiper ('.swiper-container', {
//             freeMode : true,
            thumbs:{
              swiper:{
                el:'#navBar',
                slidesPerView:3,
              }
            }
        })
      }
    }
}
</script>

<style scoped>
.swiper-slide-thumb-active{
  color: red;
}
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.box {
  overflow: hidden;
}
.header {
  width: 100%;
  height: 0.85rem;
}
.weather{
    font-size: 0.3rem;
}
.header-left {
  float: left;
  height: 0.85rem;
  line-height: 0.85rem;
  font-size: 0.3rem;
}
.header-left span {
  display: inline-block;
  font-size: 0.4rem;
  margin-left: 0.2rem;
  line-height: 0.85rem;
}
.header-right {
  float: right;
  width: 1.75rem;
  height: 0.5rem;
  margin-top: 0.15rem;
  border-radius: 0.3rem;
  border: 1px solid #ccc;
  margin-right: 0.2rem;
}
.header-right > span {
  float: left;
  margin-left: 0.2rem;
  font-size: 0.5rem;
}
/* #navBar {
  
} */
#navBar ul {
  padding: 0;
}
#navBar ul>li{
		list-style: none;
        font-size: 0.3rem;
		line-height: 0.5rem;
		text-align: center;
		cursor: pointer;
	}
.content{
        width:6.4rem;
        height: 2.72rem;
        margin-top:0.3rem;
        background: #93adce;
    }
.wendu{
    color: #fff;
    font-size: 0.5rem;
    padding-left:3rem;
    padding-top:0.7rem;
}
.yu{
      padding-left:3rem;
       color: #fff;
       font-size: 0.3rem;
       padding-top:0.2rem;
}
.yu span{
    display: inline-block;
    width:0.75rem;
    height:0.4rem;
    line-height: 0.4rem;
    text-align: center;
    margin-left:0.3rem;
    background: #f1a02d;
    color: #fff;
    font-size: 0.24rem;
}
.message{
  width:6rem;
  height: 3.5rem;
  margin: 0.2rem auto;
}
.air{
  width:2.8rem;
  height: 1.66rem;
  background: #fafafa;
  float: left;
  margin-right:0.2rem;
  margin-bottom:0.2rem;
}
.feng{
  width:2.8rem;
  height: 1.66rem;
  background: #fafafa;
  float: left;
   margin-bottom:0.2rem;
}
.sun{
  width:2.8rem;
  height: 1.66rem;
  background: #fafafa;
  float: left;
  margin-right:0.2rem;
}
.xianhao{
  width:2.8rem;
  height: 1.66rem;
  background: #fafafa;
  float: left;
}
.kq{
  font-size: 0.24rem;
  color: #5f5f5f;
  padding-top:0.36rem;
  padding-left:0.44rem;
}
.qd{
  font-size: 0.26rem;
  padding-left:0.44rem;
  padding-top:0.3rem;
}
</style>

