<template>
  <div class="box">
    <div class="header">
        <p><span class="iconfont" @click="gotoIndex()">&#xe602;</span>房山区 良月乡南大街</p>
    </div>
    <div class="swiper-container" id="navBar">
        <ul class="nav-bar swiper-wrapper">
            <li class="swiper-slide" v-for='(item,index) in week' :key='index'>
                <p>{{item}}</p >
                <i>7/18</i>
            </li>
        </ul>
    </div>
    <div class="banner clearfix">
        <div class="img">

        </div>
        <div class="right">
        </div>
    </div>
    <div class="footer clearfix">
        <div class="item">
            <p>空气质量</p>
            <h3>良</h3>
        </div>
        <div class="item">
            <p>空气质量</p>
            <h3>良</h3>
        </div>
        <div class="item">
            <p>空气质量</p>
            <h3>良</h3>
        </div>
        <div class="item">
            <p>空气质量</p>
            <h3>良</h3>
        </div>
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper'
export default {
   data(){
       return {
           indexs:0,
           week:['周一','周二','周三','周四','周五','周六','周日'],
           weeks:['7/18','7/19','7/20','7/21','7/22','7/23','7/24'],
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
    .box{
        width:6.4rem;
        padding:0.15rem 0rem 0rem 0rem;
    }
    .header{
        width:6.4rem;
        padding-bottom:.35rem;
    }
    .header p{
        font-size:0.4rem;
        margin-left:0.25rem;
    }
    .header p span{
        padding-right:0.3rem;
        display:block;
        margin-top:0.1rem;
        float:left;
        font-size:0.35rem;
    }
    #navBar{
        width:6.4rem;
        height:1.9rem;
        overflow:hidden;
    }
    #navBar ul{
        width:20rem;
    }
    .swiper-slide{
        list-style:none;
        line-height:0.5rem;
        cursor: pointer;
        float:left;
        width:1rem;
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
    .banner{
        width:6.4rem;
        background:yellow;
        margin-top:-0.8rem;
        padding-top:0.6rem;
        padding-bottom:0.6rem;
        margin-bottom:0.25rem;
    }
    .img{
        width:1.5rem;
        height:1.5rem;
        background:red;
        margin-left:0.5rem;
        float:left;
    }
    .right{
        width:3.5rem;
        height:1.5rem;
        background:#ccc;
        float:right;
        margin-right:0.3rem;
    }
    .footer{
        width:6rem;
        margin:auto;
    }
    .item{
        width:2.8rem;
        height:1.5rem;
        background:#fafcfb;
        float:left;
        margin-bottom:0.2rem;
    }
    .item:nth-child(2n){
        float:right;
    }
    .item p{
        font-size:0.2rem;
        margin-top:0.2rem;
        width:2.5rem;
        margin-left:0.2rem;
        margin-bottom:0.4rem;
        color:#ccc;
    }
    .item h3{
        font-size:0.25rem;
        margin-left:0.2rem;
    }     
</style>
