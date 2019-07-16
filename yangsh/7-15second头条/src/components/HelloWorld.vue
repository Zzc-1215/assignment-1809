<template>
  <div style="height:100%;">
    <div style="height:50px;position:fixed;top:0;left:0;right:0;background-color:#fff;z-index:1;">
      <nav-bar :data="menu" @indexChange="getNewsList"></nav-bar>
    </div>

    <div id="wrapper" style="height:100%;width:100%;position:relative;">
      <ul class="news-list">
        <li style="text-align:center;line-height:32px;">{{refrash}}</li>
        <li v-for="(item,index) in newsList" :key="index" @click="go(item.url,item.title)">
          <h3>{{item.title}}</h3>
          <div>
            <img v-lazy="item.multi_imgs[0]" alt />
            <img v-lazy="item.multi_imgs[1]" alt />
            <img v-lazy="item.multi_imgs[2]" alt />
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
// import '../main.js'
export default {
  data() {
    return {
      currentPage:0,
      isLoad:false,
      isrefash:false,
      refrash:'下拉刷新',
      currentType:'astro',
      myScroll:null,
      url:'/irs/rcd',
      // https://pacaio.match.qq.com/irs/rcd?cid=56&ext=games&token=c786875b8e04da17b24ea5e332745e0f&num=20&expIds=20190106A13PFT%7C20190108A04MLS&page=0
      params:'&token=c786875b8e04da17b24ea5e332745e0f&num=20&expIds=20190106A13PFT%7C20190108A04MLS&page=',
      menu: [
        {categroy:'astro',title:'头条'},
        {categroy:'cul',title:'社会'},
        {categroy:'edu',title:'教育'},
        {categroy:'house',title:'房产'},
        {categroy:'sports',title:'体育'},
        {categroy:'tech',title:'科技'},
        {categroy:'games',title:'游戏'},
        {categroy:'finance',title:'财经'},
        {categroy:'fashion',title:'时尚'},
        {categroy:'ent',title:'娱乐'},
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
    go(item,item1){
      this.$store.state.itemurl={
        url:item,
        title:item1,
      }
      location.href = 'http://localhost:8080/#/detail'
    },
    getNewsList(event){
      this.currentType = event || 'astro';
      this.currentType = event ? this.currentType = event:'astro'
      this.axios.get(this.url+"?cid=56&ext="+this.currentType+this.params+this.currentPage).then((res)=>{
        if (this.currentPage == 0) {
          this.newsList = res.data.data
        } else {
          this.newsList = this.newsList.concat(res.data.data)
        }
        console.log(res)

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
          vm.isrefash = true
        }else if(this.y<this.maxScrollY){
          vm.isLoad = true
        }else{
          vm.refrash = '下拉刷新'
          vm.isrefash = false
          vm.isLoad = false
        }
      })
      this.myScroll.on('scrollEnd',function(){
        if (vm.isrefash) {
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
  /* border-bottom: 4px solid #ccc; */
  box-shadow: 0 0 3px 3px #ccc;
}
ul.news-list li:nth-of-type(1) {
  box-shadow: none;
}
ul.news-list li h3 {
  line-height: 1.4em;
  margin-bottom: 20px;
  cursor: pointer;
}
ul.news-list li img {
  width: 30%;
  height: 100px;
  border: 1px solid #ccc;
  margin-right: 3.33%;
  display: inline-block;
  cursor: pointer;
}
ul.news-list li p span {
  margin-right: 10px;
  font-size: 0.8em;
}
</style>
