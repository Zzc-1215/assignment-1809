<template>
  <div style="height:100%;">
    <div style="height:50px;position:fixed;top:0;left:0;background-color:#fff;z-index:1;">
      <nav-bar :data="menu" @indexChange="getNewsList"></nav-bar>
    </div>

    <div id="wrapper" style="height:100%;width:100%;position:relative;">
      <ul class="news-list">
        <li style="text-align:center;line-height:50px;">{{refrash}}</li>
        <li v-for="(item,index) in newsList" :key="index">
          <h3>{{item.title}}</h3>
          <div>
            <img v-lazy="item.img" alt />
            <img v-lazy="item.img" alt />
            <img v-lazy="item.img" alt />
            <p>
              <span>{{item.source}}</span>
              <span>{{item.update_time}}</span>
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import IScroll from 'iscroll/build/iscroll-probe.js';
import navBar from "./navBar.vue";
export default {
  data() {
    return {
      currentPage:0,
      isLoad:false,
      isrefrash:false,
      refrash:'下拉刷新',
      currentType:'games',
      myScroll:null,
      url:'/irs/rcd',
      params:'&cid=56&token=c786875b8e04da17b24ea5e332745e0f&num=4&expIds=20190106A13PFT%7C20190108A04MLS&page=',
      menu: [
        {categroy:'games',title:'游戏'},
        {categroy:'asrto',title:'天文'},
        {categroy:'cul',title:'文化'},
        {categroy:'edu',title:'教育'},
        {categroy:'house',title:'房产'},
        {categroy:'sports',title:'体育'},
        {categroy:'tech',title:'科技'},
        {categroy:'finance',title:'财经'},
        {categroy:'fashion',title:'时尚'},
        {categroy:'ent',title:'娱乐'},
        {categroy:'auto',title:'汽车'},
      ],
      newsList: [],
    };
  },
  created() {
    this.getNewsList()
  },
  components: {
    navBar
  },
  methods: {
    getNewsList(event){
      this.currentType = event || 'games';
      this.axios.get(this.url+'?ext='+this.currentType+this.params+this.currentPage).then((res)=>{
        // console.log(res)
        if (this.currentPage == 0) {
          this.newsList = res.data.data
        } else {
          this.newsList = this.newsList.concat(res.data.data)
        }

        // 初始化iscroll
        this.$nextTick(function(){
          // this.myScroll = new IScroll('#wrapper',{
          //   scrollBars:'true'
          // })
          if (this.myScroll) {
            this.myScroll.refresh()
          } else {
            this.initIScroll()
          }
        })
      })
    },
    initIScroll(){
      var vm = this;
      this.myScroll = new IScroll('#wrapper',{
        scrollBars:true,
        mouseWheel:true,
        probeType:2,
      })
      this.myScroll.on('scroll',function(){
        if (this.y>50) {
          vm.refrash = '松开刷新'
          vm.isrefrash = true
        }else if(this.y<this.maxScrollY){
          vm.isLoad = true
        }else{
          vm.refrash = '下拉刷新'
          vm.isrefrash = false
          vm.isLoad = false
        }
      })
      this.myScroll.on('scrollEnd',function(){
        if (vm.isrefrash) {
          vm.currentPage = 0
          vm.getNewsList(vm.currentType)
        }else if(vm.isLoad){
          vm.currentPage++
          vm.getNewsList(vm.currentType)
        }
      })
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* ul.news-list{
    padding-top: 50px;
  } */
ul.news-list li {
  padding: 10px 20px;
}
ul.news-list li h3 {
  line-height: 1.4em;
  margin-bottom: 20px;
}
ul.news-list li img {
  width: 30%;
  height: 100px;
  border: 1px solid #ccc;
  margin-right: 3.33%;
  display: inline-block;
}
ul.news-list li p span {
  margin-right: 10px;
  font-size: 0.8em;
}
</style>
