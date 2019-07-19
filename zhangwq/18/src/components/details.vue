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
                <li class="swiper-slide" v-for='(item,index) in week' @click='xq' :key='index' :class="{active:(indexs==index)}">
                    <p>{{item}}</p>
                    <i>7/18</i>
                </li>
            </ul>
        </div>
        <div class="content swiper-container">
            <!-- <ul class="swiper-wrapper"> -->
                <!-- <li class="swiper-slide"> -->
                    <div class="tq">
                        <div class="tq-left">

                        </div>
                        <div class="tq-right">
                            <p class="wd">{{weather.id[0].temperature}}</p>
                            <p class="info"><span>{{weather.id[0].weather}} </span><span>{{weather.id[0].direct}}</span></p>
                        </div>
                    </div>
                    <div class="xq">
                        <div>
                            <p>空气质量</p>
                            <span>良</span>
                        </div>
                        <div>
                            <p>风力</p>
                            <span>{{weather.id[0].direct}}{{weather.id[0].weather}}</span>
                        </div>
                        <div>
                            <p>日落日出</p>
                            <!-- <span>白天{{weather.id[0].wid.day}}、晚上{{weather.id[0].wid.night}}</!--> 
                        </div>
                        <div>
                            <p>限行尾号</p>
                            <span>2和7</span>
                        </div>
                    </div>
                <!-- </li> -->
            <!-- </ul> -->
            
        </div>
    </div>
</template>


<script>
import Swiper from 'swiper'
export default {
    data(){
        return{
            indexs:0,
            week:['周一','周二','周三','周四','周五','周六','周日'],
            weeks:['7/18','7/19','7/20','7/21','7/22','7/23','7/24'],
            weather:this.$router.history.current.query,
        }
    },
    created(){
        console.log(this.weather);
        // console.log(this.weather)
        // console.log(this.$router.history.current.query);
    },
    methods:{
        xq(){
            // console.log(111);
        }
    },
    mounted(){
        this.mySwiper = new Swiper ('.swiper-container', {
            autoPlay:true,
			freeMode : true,
            slidesPerView:5,
            
        })
    },
}
</script>


<style scoped>
.header{
    width: 7.5rem;
    height: 0.8rem;
    line-height: 0.8rem;
    position: fixed;
    top: 0;
    left: 0;
    background: #fff;
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
  width: 0.7rem;
  text-align: center;
}
.yd{
  float: right;
  line-height: 0.5rem;
  width: 0.7rem;
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
    line-height:0.5rem;
    cursor: pointer;
    text-align: center;
    font-size: 0.2rem;
}
#navBar ul>li p{
    text-align: center;
}
#navBar ul>li i{
    font-style: normal;
    text-align: center;
}
#navBar ul>li.active{
    color:#6195bc;
    font-size:0.25rem;
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
    margin-top: 1.2rem;
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
