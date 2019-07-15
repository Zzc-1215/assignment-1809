<template>
  <div style="height:100%;">
    <div>
      <nav-bar
        :data="list"
        @indexChange="getNewsList"
        style="position:fixed;top:0;left:0;background:#fff;"
      ></nav-bar>
    </div>
    <div id="wrapper" style="height:100%;width:100%;position:relative;">
      <ul class="news-list">
          <li style="text-align:center;line-height:30px;">{{refash}}</li>
        <li v-for="(item,index) in newsList" :key="index">
          <p>{{item.title}}</p>
          <div class="listImgs">
            <img v-lazy="item.multi_imgs[1]" />
            <img v-lazy="item.multi_imgs[0]" />
            <img v-lazy="item.multi_imgs[2]" />
          </div>
          <p class="text-muted">{{item.source}}&nbsp;&nbsp;{{item.publish_time}}</p>
        </li>
        <li style="text-align:center;line-height:50px;">{{reload}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import IScroll from "iscroll/build/iscroll-probe.js";
import navBar from "./navBar.vue";
export default {
  data() {
    return {
      refash:'下拉刷新',
      reload:'上拉加载',
      myScroll: null,
    //   默认不刷新
      isrefash:false,
    //   默认不加载
      isLoad:false,
      currentType: "astro",
      currentPage:0,
      list: [
        { fenlei: "astro", title: "天文" },
        { fenlei: "cul", title: "文化" },
        { fenlei: "edu", title: "教育" },
        { fenlei: "sports", title: "体育" },
        { fenlei: "auto", title: "汽车" },
        { fenlei: "tech", title: "科技" },
        { fenlei: "games", title: "游戏" },
        { fenlei: "finance", title: "财经" },
        { fenlei: "house", title: "房产" },
        { fenlei: "fashion", title: "时尚" },
        { fenlei: "ent", title: "医学" }
      ],
      newsList: []
    };
  },
  created() {
    this.getNewsList();
  },
  components: {
    navBar
  },
  methods: {
    getNewsList(event) {
        // this.currentType = event || 'astro';
        // this.axios.get(this.url+'?ext='+this.currentType+this.params).then
      this.currentType = event ? (this.currentType = event) : this.currentType;
      // console.log(event)
      this.axios
        .get(
          "/irs/rcd?cid=56&ext=" +
            this.currentType +
            "&token=c786875b8e04da17b24ea5e332745e0f&num=20&expIds=20190106A13PFT%7C20190108A04MLS&page="+this.currentPage+""
        )
        .then(res => {
            if(this.currentPage ==0 ){
                this.newsList = res.data.data;
            }else{
                this.newsList = this.newsList.concat(res.data.data);
            }

            // 调用初始化Iscroll方法
          this.$nextTick(function() {
            //   防止一次渲染多个
              if(this.myScroll){
                  this.myScroll.refresh();
              }else{
                this.initIScroll();
              }
          });
        });
    },
    // 初始化iscroll
    initIScroll() {
        var vm = this; 
        this.myScroll = new IScroll("#wrapper", {
          scrollbars: true,
          mouseWheel: true,
          probeType:2,
        });
        this.myScroll.on('scroll',function(){
            if(this.y>60){
                vm.refash = '松开刷新';
                vm.isrefash = true;
            }else if(this.y<this.maxScrollY){
                // 上拉加载
                vm.isLoad = true;
            }else{
                vm.refash = '下拉刷新';
                vm.isrefash = false;
                vm.isLoad = false;
            }

            

        });
        this.myScroll.on('scrollEnd',function(){
            if(vm.isrefash){
                // 下拉刷新
                vm.currentPage = 0;
                vm.getNewsList(vm.currentType);
            }else if(vm.isLoad){
                // 上拉加载
                vm.currentPage ++;
                vm.getNewsList(vm.currentType);
            }
        })
    }
  }
};
</script>

<style scoped>
.listImgs img {
  display: inline-block;
  width: 29.5%;
  height: 130px;
  border: 1px #ccc solid;
  margin: 0 1.5%;
  margin-bottom: 10px;
}
.news-list {
  /* margin-top: 50px; */
  background: #f4f4f4;
}
.news-list li {
  padding: 5px 30px;
  box-sizing: border-box;
  margin-bottom: 10px;
  background: #fff;
}
.news-list p {
  line-height: 30px;
  margin-bottom: 10px;
}
.text-muted {
  color: #ccc;
  font-size: 15px;
}
</style>