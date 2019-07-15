<template>
  <div id="box">
    <header>
      <div>
        <i class="iconfont icon-fangdajing1"></i>
        <input type="search" placeholder="请输入您想要的话题">
      </div>
    </header>
    <div class="container">
      <div class="swiper-container nav" id="swiper1">
        <ul class="swiper-wrapper dataList">
          <li class="swiper-slide" v-for="(l,index) in arr" :key="l.id" @click='getNews(l.key,index)' :class="{'color':color==index}">
              {{l.title}}
          </li>
        </ul>
      </div>
      <div class="content swiper-container" id="swiper2">
        <ul class="swiper-wrapper" id='container'>  
            <li id='refresh'>{{text}}</li>       
            <li class="swiper-slide" v-for="(i,index) in news" :key="index">  
                <div class="news-container">
                  <a :href="i.url">
                      <p class="title">{{i.title}}</p>
                      <div class='img'>
                          <img :src="i.thumbnail_pic_s" alt="">
                          <img :src="i.thumbnail_pic_s02" alt="">
                          <img :src="i.thumbnail_pic_s03" alt="">
                      </div> 
                      <p class="msg">{{i.date}}<span>{{i.author_name}}</span></p>
                  </a>
                </div>
            </li>
            <li id='load'>{{text1}}</li>           
        </ul>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
window.onload = function() {
  document.documentElement.style.fontSize =
    (document.documentElement.clientWidth / 750) * 100 + "px";
  window.onresize = function() {
    document.documentElement.style.fontSize =
      (document.documentElement.clientWidth / 750) * 100 + "px";
  };
};
</script>
<script>
import Swiper from "swiper";
export default {
  name: "home",
  data() {
    return {
        isXiala:null,
        bottom:null,
        text:'下拉刷新',
        text1:'上拉加载',
        swiper1: null,
        swiper2:null,
        news: [], //获取整个新闻信息
        color:0,
        arr: [
            {
            title:'头条',
            key:'top',
        },
        {
            title:'社会',
            key:'shehui',
        },
        {
            title:'国内',
            key:'guonei',
        },
        {
            title:'国际',
            key:'guoji',
        },
        {
            title:'娱乐',
            key:'yule',
        },
        {
            title:'体育',
            key:'top',
        },
        {
            title:'军事',
            key:'tiyu',
        },
        {
            title:'科技',
            key:'keji',
        },
        {
            title:'财经',
            key:'caijing',
        },
        {
            title:'时尚',
            key:'shishang',
        },
        ]
    };
  },
    created() {
      console.log(this.axios);
      this.getNews(); //回调数据,只有写了这一步才能出来数据
    },
  mounted() {
    var  _this = this;
    //导航的滚动
    this.swiper1 = new Swiper('#swiper1',{
        slidesPerView:5,//页面展示5条导航
    })
    //下面内容的滚动
    this.swiper2 = new Swiper("#swiper2", {
        // slidesPerView:'auto',//页面展示不固定
        freeMode:true,
        direction:'vertical',//改变成垂直方向的滚动
        //setWrapperSize:true,
        //observer:true,
        on:{
          touchEnd(){
             if(this.translate>30){
              _this.text='正在加载';
              this.setTransition(300);
              this.setTranslate(30);
              this.touchEventsData.isTouched = false;
              _this.isxiala = true;
              _this.getNews();
            }
            if(this.translate<_this.bottom){
               _this.isxiala = false;
               _this.text1='正在加载';
              this.setTransition(300);
              this.setTranslate(_this.bottom);
              this.touchEventsData.isTouched = false;
              _this.getNews();
            }
          },
          touchMove(){
            
             _this.bottom =-( document.getElementById("container").clientHeight -this.height +30);
            //swiper的移动距离
             if(this.translate>30){
              _this.text='释放刷新';
            }else{
              _this.text='下拉刷新';
            }
            if(this.translate<_this.bottom){
              _this.text1 = '松开加载';
            }else{
              _this.text1 = '释放加载';
            }
          }
        }
    });
  },
  methods: {
    //   select(index){
    //       this.activeIndex = index;
    //   },
      getData(){
          setTimeout(()=>{
              if(this.isxiala){
                  this.swiper.touchEventsData.isTouched = true;
                  this.swiper.setTransition(300);
                  this.swiper.setTranslate(0);
              }else{
                  this.swiper.touchEventsData.isTouched = true;
                  this.swiper.setTransition(300);
                  this.swiper.setTranslate(this.bottom);
              }
          },1000)
      },
    getNews(key,index) {
        if(!index){
            this.color = 0;
        }else{
            this.color = index;
        }
      var getUrl = "/toutiao/index?type="+key+"&key=c3ec5730516ff75b435b45c7e3e8bc9f";
      this.axios.get(getUrl).then(response => {
        this.news = response.data.result.data;
        console.log(this.news)
      });
    }
  }
};
</script>
<style scope>
html,body{
  height:100%;
}
#box{
  height:100%;
}
.container{
  height:100%;
}
#swiper2{
  height:100%;
}
#slide{
  height: auto;
}
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

header {
    width: 100%;
    height: 3rem;
    background: #d53d32;
    padding: 0.4rem 0.6rem;
}
header > div {
  width: 100%;
  height: 100%;
  position: relative;
}
header > div > i {
  position: absolute;
  left: 0.15rem;
  top: 0.6rem;
  display: inline-block;
}
header > div > input {
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: #fff;
  vertical-align: top;
  border-radius: 0.1rem;
  padding: 0 1.5rem;
}
.nav {
  width: 100%;
  height: 2.1rem;
}
.content {
  width: 100%;
  height: auto;
  padding: 0 0.45rem;
}
.content > ul {
  width: 100%;
  border-bottom: 1px #ccc solid;
}
.content > ul > li {
  width: 100%;
  height: auto;
  padding: 0.44rem 0;
  border-bottom: 1px #ccc solid;
}
.content.title {
  line-height: 0.6rem;
}
.content .img {
  width: 100%;
  height: 6rem;
  margin: 0.25rem 0;
  display: flex;
  justify-content: space-between;
}
.content .img img {
  width: 7rem;
  height: 6rem;
}
.content .msg {
  color:#ccc;
}
.content .msg>span{
  float:right;
  color:#d53d32;
}
#swiper1 {
  width: 100%;
  height: 2rem;
  background: rgb(248, 246, 246);
  line-height: 2rem;
  text-align: center;
}
.swiper-slide a{
    color:#000;
}
#swiper1.swiper-slide {
  font-size: 20px;
}
.color {
  color: blueviolet;
  border-bottom: 1px solid blueviolet;
}
#refresh{
  width:100%;
  height:30px;
  line-height: 30px;
  text-align: center;
  position:absolute;
  left:0;
  top:-30px;
  background: blueviolet;
  
}
#load{
  position:absolute;
  left:0;
  bottom:-30px;
  height:30px;
  line-height: 30px;
  text-align: center;
  background: blueviolet;
}
#swiper2 {
  width: 100%;
  height: 100%;
}

</style>