<template>
    <div class="container">
        <div class="header">
            <span>墨迹天气</span>
            <div class="help">
                <i class="iconfont">&#xe607;</i>
                |
                <i class="iconfont">&#xe608;</i>
            </div>
        </div>
        <div class="temperature">
            <h3><i class="iconfont">&#xe608;</i>房山区</h3>
        </div>
        <div class="swiper-container" id="navBar">
            <ul class="nav-bar swiper-wrapper">
                <li class="swiper-slide">
                    <p class="week">213</p>
                    <span class="date">3123</span>
                </li>
            </ul>
        </div>
        <div class="weather">
            <div class="wendu">
                <h3>ger</h3>
                <p>te<span>tertet</span></p>
            </div>
        </div>
        <div class="content">
            <div class="air">
                <p><i class="iconfont">&#xe608;</i>空气质量</p>
                <h4>良</h4>
            </div>
            <div class="air">
                <p><i class="iconfont">&#xe608;</i>空气质量</p>
                <h4>良</h4>
            </div>
            <div class="air">
                <p><i class="iconfont">&#xe608;</i>空气质量</p>
                <h4>良</h4>
            </div>
            <div class="air">
                <p><i class="iconfont">&#xe608;</i>空气质量</p>
                <h4>良</h4>
            </div>
        </div>
    </div>
</template>
<script>
import Swiper from 'swiper/dist/js/swiper.js';
export default {
    props:['data'],
    data(){
        return{

        }
    },
    created(){
        this.getNavlist();
    },
    methods:{
        this.mySwiper = new Swiper ('.swiper-container', {
            slidesPerView:5,
            freeMode:true,
        }),
        getNavlist(){
            var getUrl="/weather/index?cityname=&dtype=&format=&key=3e8a4be6431f59d421bf97a0b1c6717e"
            this.$http.get(getUrl).then((res) => {

            })
        }
    }
}
</script>

<style>
    *{
        margin: 0;
        padding: 0;
        user-select: none;
    }
    .container{
        width: 100%;
        height: auto;
    }
    /* 头部 */
    .header{
        width: 100%;
        height: 0.70rem;
        display: flex;
        font-size: 0.34rem;
        align-items: center;
        padding-left: 0.3rem;
        box-sizing: border-box;
        margin: 10px 0;
    }
    .fanhui{
        font-size: 0.38rem;
        color: #000;
    }
    .header span{
        margin-left: 0.1rem;
    }
    .help{
        width: 1.8rem;
        height: 0.66rem;
        border: 0.01rem #aaa solid;
        font-size: 0.3rem;
        color: #000;
        border-radius:1rem;
        position: absolute;
        right: 0.3rem;
        box-sizing: border-box;
        display: flex;
        justify-content: space-around;
        align-items: center;
        color: #aaa;
        padding: 0 0.1rem;
    }
    .help i{
        font-size: 0.48rem;
        color: #000; 
    }
    /* 导航 */
    #navBar{
        border-bottom:1px solid #ccc;
    }
    #navBar ul{
        padding:0;
    }
    #navBar ul>li{
        list-style:none;
        line-height:50px;
        cursor:poiner;
        text-align:center;
    }
    #navBar ul>li.active{
        color: #49a4f7;
    }
    .week{
        font-size: 0.30rem;
    }
    .date{
        font-size: 0.18rem;
    }
    /* 天气详情 */
    .weather{
        width: 100%;
        height: 3rem;
    }
    .wendu{
        width: 40%;
        height: 1.7rem;
        float: right;
        margin-top: 0.5rem;
        margin-right: 1rem;
        color: #ffff;
        text-align: center;
    }
    .wendu h3{
        font-size: 0.4rem;
    }
    .wendu p{
        font-size: 0.2rem;
    }
    .wendu p span{
        margin-left: 0.1rem;
        padding: 0 0.1rem;
        font-size: 0.18rem;
        background: #edc446;
        border-radius: 0.04rem;
    }
    .content{
        width: 100%;
        min-height: 5rem;
    }
    .air{
        width: 44%;
        height: 1.8rem;
        background: #fcc;
        padding-left: 1%;
        padding-top: 0.1rem;
        margin-left: 5%;
        margin-top: 0.18rem;
        box-shadow: 0.02rem 0.02rem 0.02rem 0.02rem #ccd;
        float: left;
    }
    .air p{
        line-height: 0.5rem;
        font-size: 0.22rem;
    }
    .air p i{
        display: block;
        float: left;
    }
    .air h4{
        line-height: 0.6rem;
        font-size: 0.34rem;
    }
</style>
