<template>
    <div>
        <div class="header">
            <span><router-link to='/?id=%5Bobject%20Object%5D'><i class="iconfont fanhui">&#xe65b;</i></router-link>墨迹天气</span>
            <div class="right">
                <i class="iconfont gd">&#xe63b;</i> |
                <i class="iconfont yd">&#xe60a;</i>
            </div>
        </div>
        <div class="swiper-container" id="navBar">
            <ul class="nav-bar swiper-wrapper">
                <li class="swiper-slide" v-for='(item,index) in weather' :key="index">
                    <p>{{item.date}}</p>
                </li>
            </ul>
        </div>
        <div class="content swiper-container" id="mySwiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for='item in weather' :key="item.date+'a'">
                    <div class="tq">
                        <div class="tq-left">
                        </div>
                        <div class="tq-right">
                            <p class="wd">{{item.temperature}}</p>
                            <p class="info"><span>{{item.weather}} </span><span>{{item.direct}}</span></p>
                        </div>
                    </div>
                    <div class="xq">
                        <div>
                            <p>空气质量</p>
                            <span>良</span>
                        </div>
                        <div>
                            <p>风力</p>
                            <span>{{item.direct}}&nbsp;&nbsp;&nbsp;&nbsp;{{item.weather}}</span>
                        </div>
                        <div>
                            <p>日落日出</p>
                            <span>白天{{item.wid.day}}、晚上{{item.wid.night}}</span>
                        </div>
                        <div>
                            <p>限行尾号</p>
                            <span>2和7</span>
                        </div>
                    </div>
                    
                </div>
                
            </div>
            
        </div>
    </div>
</template>


<script>
import Swiper from 'swiper'
export default {
    data(){
        return{
            mySwiper1:null,//navBar
            mySwiper2:null,//mySwiper
            indexs:0,
            weather:this.$route.params.id,
            // weather:this.$route.query.id,
        }
    },
    created(){
        console.log(this.$route.params.id);
        // console.log(this.$route.query.id);
    },
    mounted(){
        if(this.weather==undefined){
            setTimeout(()=>{
                this.$router.push({name:'index'})
            },500)
            
        }
        //navBar
        // this.mySwiper1 = new Swiper ('#navBar', {
        //     autoPlay:true,
		// 	freeMode : true,
        //     slidesPerView:5,
        // })
        //mySwiper
        this.mySwiper2 = new Swiper ('#mySwiper', {
            thumbs:{
                // swiper:this.mySwiper1 
                swiper:{
                    el:'#navBar',
                    slidesPerView:4,
                    // loop : true,
                }
            },
            loop : true,
            effect : 'cube',
            cubeEffect: {
                slideShadows: true,
                shadow: true,
                shadowOffset: 20,
            },
        })
    },
}
</script>


<style scoped>
.swiper-slide-thumb-active{
    color: red;
}
.header{
    width: 7.5rem;
    height: 0.8rem;
    line-height: 0.8rem;
    position: fixed;
    top: 0;
    left: 0;
    background: #fff;
    z-index: 10;
}
.header span{
    font-size: 0.38rem;
    float: left;
    margin-left: 0.2rem;
    font-family:"Times New Roman",Georgia,Serif;
}
.header span a{
    text-decoration: none;
    color: #000;
    margin-right:0.15rem;
}
.fanhui{
    font-size: 0.3rem;
    line-height: 0.6rem;
}
.right{
  width: 1.5rem;
  height: 0.5rem;
  line-height: 0.45rem;
  float: right;
  margin: 0.15rem 0.3rem 0 0;
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
  font-size: 0.3rem;
}
.header .iconfont {
  color: #000;
  font-size: 0.3rem;
}

#navBar{
    border-bottom:0.01rem solid #ccc;
    margin-top: 0.8rem;
}
#navBar ul{
    padding:0;
}
#navBar ul>li{
    list-style:none;
    line-height:0.8rem;
    cursor: pointer;
    text-align: center;
    font-size: 0.26rem;
}
#navBar ul>li p{
    text-align: center;
}
#navBar ul>li i{
    font-style: normal;
    text-align: center;
}
.content{
    width: 100%;
    height: auto;
}
.tq{
    width: 100%;
    height:3rem;
    background: #728eb3;
}
.xq{
    width:100%;
    height: 3rem;
}
.xq div{
    width: 46%;
    background: #fbfbfb;
    margin: 2%;
    height: 46%;
    float:left;
    font-size: 0.24rem;
}
.xq div p{
    padding: 0.2rem 0 0 0.2rem;
    font-size: 0.2rem;
} 
.xq span{
    display: block;
    height: 60%;
    line-height: 100%;
    padding: 0.2rem 0 0 0.2rem;
    font-size: 0.3rem;
} 
.tq-left{
    width: 40%;
    height: 3rem;
    float: left;
}
.tq-right{
    width: 60%;
    height: 3rem;
    float: left;
}
.wd{
    font-size: 0.7rem;
    margin-top: 1rem;
    color: #fff;
}
.info{
    font-size: 0.24rem;
    margin: 0.15rem 0;
    color: #fff;
}
.info span:nth-child(2){
    font-size: 0.2rem;
    padding: 0 0.1rem;
    background: #efc74d;
    border-radius: 0.05rem;
    
}
</style>
