<template>
  <div style="height:100%">
    <div style="position:fixed;top:0;left:0;right:0;background:#fff;height:50px; z-index: 2;">
      <nav-bar :data="menu" @indexChange="getNewsList"></nav-bar>
    </div>
    <div id="wrapper" style="height:100%;width:100%;position:relative;">
      <ul class="news_list">
        <li style="text-align:center;line-height:50px">{{refash}}</li>
        <li v-for="(item,index) in newslist" :key="index" @click="jump(item.title,item.surl)">
          <p>{{item.title,}}</p>
          <div>
            <img v-lazy="item.multi_imgs[0]" alt />
            <img v-lazy="item.multi_imgs[1]" alt />
            <img v-lazy="item.multi_imgs[2]" alt />
          </div>
          <p class="text_m">{{item.author_name}}&nbsp;&nbsp;&nbsp;&nbsp;{{item.date}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import navBar from "./navBar.vue";
import IScroll from "iscroll/build/iscroll-probe.js";
// console.log(IScroll)
export default {
  data() {
    return {
      isrefash: false,
      refash: "下拉刷新",
      isLoad: false,
      myScroll: null,
      currentType: "astro",
      currentPage: 0,
      url:'/irs/rcd',
      params:'&cid=56&ext=games&token=c786875b8e04da17b24ea5e332745e0f&num=20&expIds=20190106A13PFT%7C20190108A04MLS&page=0',
      menu: [
        { categroy: "astro", title: "头条" },
        { categroy: "cul", title: "社会" },
        { categroy: "edu", title: "国内" },
        { categroy: "house", title: "国际" },
        { categroy: "sports", title: "娱乐" },
        { categroy: "tech", title: "体育" },
        { categroy: "games", title: "军事" },
        { categroy: "finance", title: "科技" },
        { categroy: "fashion", title: "财经" },
        { categroy: "ent", title: "时尚" }
      ],
      newslist: []
    };
  },
  created() {
    this.getNewsList();
  },
  components: {
    navBar
  },
  methods: {
    jump(item,item1){
      // console.log(item,item1);
      this.$store.commit('add',item);
      this.$store.commit('ad',item1)
      location.href='http://localhost:8080/#/detail'
    },
    getNewsList(event) {
      this.currentType = event || "astro";
      this.currentType = event ? this.currentType = event : 'astro';
      // this.currentType = event ? (this.currentType = event) : "astro";
      this.axios
        .get(this.url+"?ext="+this.currentType+this.params+this.currentPage).then((res) => {
          // console.log(res.data.data)
          if(this.currentPage == 0){
            this.newslist = res.data.data;
          }else{
            this.newslist = this.newslist.concat(res.data.data)
          }
          
          this.$nextTick(function() {
            if (this.myScroll) {
              this.myScroll.refresh();
            } else {
              this.initIscroll();
            }
          });
        });
    },
    initIscroll() {
      var vm = this;
      this.myScroll = new IScroll("#wrapper", {
        scrollbars: true,
        mouseWheel: true,
        probeType: 2
        // bounce:false,
      });
      this.myScroll.on("scroll", function() {
        if (this.y > 50) {
          vm.refash = "松开刷新";
          vm.isrefash = true;
        } else if (this.y < this.maxScrollY) {
          vm.isLoad = true;
        } else {
          vm.refash = "下拉刷新";
          vm.isrefash = false;
          vm.isLoad = false;
        }
      });
      this.myScroll.on("scrollEnd", function() {
        if (vm.isrefash) {
          vm.currentPage = 0;
          vm.getNewsList(vm.currentType);
        } else if (vm.isLoad) {
          vm.currentPage++;
          vm.getNewsList(vm.currentType);
        }
      });
    }
  }
};
</script>
    
<style scoped>
ul.news_list {
  /* margin-top: 50px; */
 
}
ul.news_list li {
  padding: 5px 20px;
  border-bottom: 10px solid #f4f4f4;
  
}
ul.news_list li p {
  line-height: 1.4em;
  margin-bottom: 10px;
}
ul.news_list li img {
  display: inline-block;
  width: 30%;
  height: 100px;
  border: 1px solid #ccc;
  margin-right: 3.333%;
}
.text_m {
  color: #ccc;
  font-size: 0.8em;
}
</style>
