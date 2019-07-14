<template>
  <div style="height:100%;">
    <div style="height:50px;position:fixed;top:0;left:0;right:0;background:#fff;z-index:2;">
      <nav-bar :data='menu' @indexChange="getNewsList"></nav-bar>
    </div>
      <div id="wrapper" style="height:100%;width:100%;position:relative;">
        <ul class="news-list">
          <li style="text-align:center;">{{refash}}</li>
          <li v-for='(item,index) in newList' :key="index">
            <p>{{item.title}}</p>
            <div>
              <img v-lazy="item.multi_imgs[0]" alt="">
              <img v-lazy="item.multi_imgs[1]" alt="">
              <img v-lazy="item.multi_imgs[2]" alt="">
            </div>
            <p class="text-muted">{{item.source}}&nbsp;&nbsp;&nbsp;{{item.publish_time}}</p>
          </li>
          <li style="text-align:center;">{{load}}</li>
        </ul>
      </div>
  </div>
</template>

<script>
import IScroll from 'iscroll/build/iscroll-probe.js'
import navBar from './navBar.vue'
export default {
  data(){
    return{
      refash:'下拉刷新',
      load:'',
      isLoad:false,
      myScroll:null,
      currentType: 'astro',
      currentPage:0,
      menu:[
        {
          ext:'astro',title:'天文'
        },{
          ext:'cul',title:'网络'
        },{
          ext:'edu',title:'教育'
        },{
          ext:'house',title:'机构'
        },{
          ext:'sports',title:'运动'
        },{
          ext:'tech',title:'技术'
        },{
          ext:'games',title:'游戏'
        },{
          ext:'finance',title:'财政'
        },{
          ext:'fashion',title:'时尚'
        },{
          ext:'ent',title:'企业'
        },{
          ext:'auto',title:'汽车'
        }
      ],
      newList:[]
    }
  },
  created(){
    this.getNewsList()
  },
  components: {
    navBar,
  },
  methods:{
    getNewsList(event){
      this.currentType = event || 'astro';
      this.axios.get('/irs/rcd?cid=56&ext='+this.currentType+'&token=c786875b8e04da17b24ea5e332745e0f&num=5&expIds=20190106A13PFT%7C20190108A04MLS&page='+this.currentPage+'').then((res)=>{
        if(this.currentType ==0){
          this.newList = res.data.data
        }else{
          this.newList = this.newList.concat(res.data.data)
        }
          this.$nextTick(function(){
            if(this.myScroll){
              this.myScroll.refresh()
            }else{
              this.initIScroll();
            }
          })
      })
    },
    initIScroll(){
      var vm = this;
      this.myScroll = new IScroll('#wrapper',{
        scrollbars:true,
        mouseWheel:true,
        probeType:2
      });
      this.myScroll.on('scroll',function(){
        if(this.y>50){
          vm.refash = '松开刷新';
          vm.isrefash = true;
        }else if(this.y<this.maxScrollY){
          vm.isLoad = true
        }else{
          vm.refash = '下拉刷新';
          vm.isrefash = false;
          vm.isLoad = false;
        }
        
      });
      this.myScroll.on('scrollEnd',function(){
        if(vm.isrefash){
          this.currentPage = 0;
          vm.getNewsList(vm.currentType);
        }else if(vm.isLoad){
          vm.currentType ++;
          vm.load = '上拉加载';
          vm.getNewsList(vm.currentType);
        }else{
          vm.load = '';
        }
      })
    }
  }
}
</script>
<style>
  ul.news-list{
    margin-top: 10px;
  }
  ul.news-list li{
    padding: 5px 20px;
    border-bottom: 1px solid #ccc;
    list-style: none;
  }
  ul.news-list li p{
    line-height: 1.4em;
  }
  ul.news-list li img{
    display: inline-block;
    width: 130px;
    height: 110px;
    margin-right: 3.33%;
    border: 1px solid #ccc;
  }
  .text-muted{
    color: #ccc;
    font-size: 0.8em;
  }
</style>

