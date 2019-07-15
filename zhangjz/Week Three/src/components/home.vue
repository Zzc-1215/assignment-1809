<template>
  <div style="height:100%;">
    <div style="height: 50px;position: fixed;top:0;left: 0;right: 0;background: #fff;z-index:1;">
      <nav-bar :data="menu"
               @indexChange="getNewsList"></nav-bar>
    </div>

    <div id="wrapper"
         style="height:100%;width:100%;position:relative;">
      <ul class="news-list">
        <li style="text-align:center;line-height:50px;border:none;">{{refash}}</li>
        <li v-for="(item,index) in newsList"
            :key="index">
          <p>{{item.title}}</p>
          <div>
            <img v-lazy="item.multi_imgs[0]">
            <img v-lazy="item.multi_imgs[1]">
            <img v-lazy="item.multi_imgs[2]">
          </div>
          <p class="text-muted">{{item.source}}&nbsp;&nbsp;{{item.publish_time}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import IScroll from 'iscroll/build/iscroll-probe.js';
// console.log(IScroll)
import navBar from "./navBar.vue";
export default {
  data () {
    return {
      refash: '下拉刷新',
      myScroll: null,
      isrefash: false,
      isload: false,
      currentType: "cul",
      pages: 0,
      menu: [
        { categroy: "cul", title: "文化" },
        { categroy: "edu", title: "教育" },
        { categroy: "house", title: "房产" },
        { categroy: "sports", title: "运动" },
        { categroy: "tech", title: "科技" },
        { categroy: "games", title: "游戏" },
        { categroy: "astro", title: "天文" },
        { categroy: "finance", title: "财经" },
        { categroy: "auto", title: "汽车" },
        { categroy: "ent", title: "娱乐" },
      ],
      newsList: []
    };
  },
  created () {
    this.getNewsList();
  },
  components: {
    navBar
  },
  methods: {
    getNewsList (event) {
      // this.currentType=event
      this.currentType = event ? this.currentType = event : this.currentType;
      this.axios.get("/irs/rcd?cid=56&ext=" + this.currentType + "&token=c786875b8e04da17b24ea5e332745e0f&num=20&expIds=20190106A13PFT%7C20190108A04MLS&page=" + this.pages).then((res) => {
        if (this.pages == 0) {
          this.newsList = res.data.data;
        } else {
          this.newsList = this.newsList.concat(res.data.data);
        }

        //初始化 iscroll
        this.$nextTick(function () {
          if (this.myScroll) {
            this.myScroll.refresh();
          } else {
            this.initIScroll();
          }

        })
      })
    },
    initIScroll () {
      var vm = this;
      this.myScroll = new IScroll('#wrapper', {
        scrollbars: true,
        mouseWheel: true,
        probeType: 2,
      });
      this.myScroll.on('scroll', function () {
        if (this.y > 50) {
          vm.refash = '松开刷新';
          vm.isrefash = true;
        } else if (this.y < this.maxScrollY) {
          vm.isload = true;
        } else {
          vm.refash = '下拉刷新';
          vm.isrefash = false;
          vm.isload = false;
        }
      });
      this.myScroll.on('scrollEnd', function () {
        if (vm.isrefash) {
          vm.pages = 0;
          vm.getNewsList(vm.currentType);
        } else if (vm.isload) {
          vm.pages++;
          vm.getNewsList(vm.currentType);
        }

      })
    }
  },
};
</script>

<style scoped>
ul.news-list {
  /* margin-top: 50px; */
  /* margin: 50px auto 0 auto; */
}
ul.news-list li {
  padding: 5px 20px;
  border-bottom: 10px solid #f4f4f4;
}
ul.news-list li p {
  line-height: 1.4em;
  margin-bottom: 10px;
}
ul.news-list li img {
  display: inline-block;
  width: 30%;
  margin-right: 3.333%;
  height: 200px;
  border: 1px solid #ccc;
}
.text-muted {
  color: #ccc;
  font-size: 0.8em;
}
</style>