<template>
  <div style="height:100%">
    <div style="height:50px;position:fixed;top:0;left:0;right:0;background:#fff;">
      <nav-bar :data="menu" @indexChange="getNewsList"></nav-bar>
      <!-- position:fixed定位需要中间数据滚动 -->
      <!-- @indexChange="i=$event" 这个改变了里面的i就会改变 li循环的newsList[i]也会改变 -->
    </div>
    <div id="wrapper" style="height:100%;width:100%;position">
      <ul class="news-list">
        <li style="text-align:center;line-height:50px;">{{refash}}</li>
        <!-- 刷新 -->
        <li v-for="(itme,index) in newList" :key="index">
          <!-- 放的数据 -->
          <p>{{itme.title}}</p>
          <div>
            <!-- 懒加载 v-lazy  -->
            <img v-lazy="item.img">
            <img v-lazy="item.img">
            <img v-lazy="item.img">
          </div>
          <p class="text-muted">{{itme.author}}&nbsp;&nbsp;&nbsp;{{itme.time}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import IScroll from "iscroll/build/iscroll-probe.js";
//现在这个对象被引进home里面 做滚动-  //在使用自定义事件需要版本 /iscroll/build/iscroll-probe.js
import navBar from "navBar.vue";

export default {
  data() {
    return {
      refash: "下拉刷新",
      isrefash: false, //手松下请求数据用的开关
      isLoad: false, //上拉加载
      // i:0,//默认显示第0条数据
      myScroll: null,
      params:
        "https://pacaio.match.qq.com/irs/rcd?cid=56&ext=games&token=c786875b8e04da17b24ea5e332745e0f&num=20&expIds=20190106A13PFT%7C20190108A04MLS&page=0",
      currentType: "games", //当前的type
      currentPage: 0, //页数
      url: "/irs/rcd",
      menu: [
        { categroy: "top", title: "头条" },
        { categroy: "shehui", title: "社会" },
        { categroy: "guonei", title: "国内" },
        { categroy: "guoji", title: "国际" },
        { categroy: "yule", title: "娱乐" },
        { categroy: "tiyu", title: "体育" },
        { categroy: "junshi", title: "军事" },
        { categroy: "keji", title: "科技" },
        { categroy: "caijing", title: "财经" },
        { categroy: "shishang", title: "时尚" }
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
      this.currentType = event || "games";
      // http://v.juhe.cn/toutiao/index?type=&key=f53d292ce8d1d53e83e82adc737514c7
      this.axios
        .get(
          this.url + "?ext=" + this.currentType + this.params + this.currentPage
        )
        .then(res => {
          if (this.currentPage == 0) {
            this.newsList = res.data.data;
          } else {
            this.newsList = this.newsList.concat(res.data.data);
          }
          // this.newsList = res.result.data; -
          // this.newsList = res.data.data; --

          //初始化iscroll  //接口更新完成了去调用它  这个时候就能滚动了
          this.$nextTick(function() {
            if (this.myScroll) {
              //有这个实例
              this.myScroll.refresh(); //渲染一下
            } else {
              this.initIScroll(); //没有重新绑定一下
            }
          });
        });
    },

    initIScroll() {
      //新数据的长度不一样 还要重新调用 就拿出来用这个方法
      var vm = this; //定义实例  this.refash = '松开刷新'
      //数据加载完 new iscroll把wrapper
      this.myScroll = new IScroll("#wrapper", {
        scrollbars: true, //iscroll官网里滚动条
        mouseWheel: true,
        probeType: 2 //iscroll的属性，监听的档位
      });

      //监听滚动距离 滚动就会触发
      //scroll事件可以通过改变probeType选项值来改变scroll事件的触发时机
      this.myScroll.on("scroll", function() {
        if (this.y > 50) {
          vm.refash = "松开刷新";
          vm.isrefash = true;
        } else if (this.y < this.maxScrollY) {
          //maxScrollY数据里最大滚动值
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
          //为真的话 多加载一行
          vm.currentPage++; //把第二页取来 给覆盖第一页
          vm.getNewsList(vm.currentType);
        }
      });
    }
  }
};
</script>

<style scoped>
/* 中间数据的样式 */
ul.news-list {
  /* margin-top:50px; */
}
ul.news-list li {
  padding: 5px 20px;
  border-bottom: solid 10px #dedede;
}
ul.news-list li p {
  line-height: 1.4em;
  margin-bottom: 10px;
}
ul.news-list li img {
  display: inline-block;
  width: 30%;
  margin-right: 3%;
  height: 100px;
  border: 1px solid #ccc;
}
.text-muted {
  color: #ccc;
  font-size: 0.8em;
}
</style>  
<script>
// @ is an alias to /src
import IScroll from "iscroll/build/iscroll-probe.js";
//现在这个对象被引进home里面 做滚动-  //在使用自定义事件需要版本 /iscroll/build/iscroll-probe.js
import navBar from "navBar.vue";

export default {
  data() {
    return {
      refash: "下拉刷新",
      isrefash: false, //手松下请求数据用的开关
      isLoad: false, //上拉加载
      // i:0,//默认显示第0条数据
      myScroll: null,
      params:
        "https://pacaio.match.qq.com/irs/rcd?cid=56&ext=games&token=c786875b8e04da17b24ea5e332745e0f&num=20&expIds=20190106A13PFT%7C20190108A04MLS&page=0",
      currentType: "games", //当前的type
      currentPage: 0, //页数
      url: "/irs/rcd",
      menu: [
        { categroy: "top", title: "头条" },
        { categroy: "shehui", title: "社会" },
        { categroy: "guonei", title: "国内" },
        { categroy: "guoji", title: "国际" },
        { categroy: "yule", title: "娱乐" },
        { categroy: "tiyu", title: "体育" },
        { categroy: "junshi", title: "军事" },
        { categroy: "keji", title: "科技" },
        { categroy: "caijing", title: "财经" },
        { categroy: "shishang", title: "时尚" }
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
      this.currentType = event || "games";
      // http://v.juhe.cn/toutiao/index?type=&key=f53d292ce8d1d53e83e82adc737514c7
      this.axios
        .get(
          this.url + "?ext=" + this.currentType + this.params + this.currentPage
        )
        .then(res => {
          if (this.currentPage == 0) {
            this.newsList = res.data.data;
          } else {
            this.newsList = this.newsList.concat(res.data.data);
          }
          // this.newsList = res.result.data; -
          // this.newsList = res.data.data; --

          //初始化iscroll  //接口更新完成了去调用它  这个时候就能滚动了
          this.$nextTick(function() {
            if (this.myScroll) {
              //有这个实例
              this.myScroll.refresh(); //渲染一下
            } else {
              this.initIScroll(); //没有重新绑定一下
            }
          });
        });
    },

    initIScroll() {
      //新数据的长度不一样 还要重新调用 就拿出来用这个方法
      var vm = this; //定义实例  this.refash = '松开刷新'
      //数据加载完 new iscroll把wrapper
      this.myScroll = new IScroll("#wrapper", {
        scrollbars: true, //iscroll官网里滚动条
        mouseWheel: true,
        probeType: 2 //iscroll的属性，监听的档位
      });

      //监听滚动距离 滚动就会触发
      //scroll事件可以通过改变probeType选项值来改变scroll事件的触发时机
      this.myScroll.on("scroll", function() {
        if (this.y > 50) {
          vm.refash = "松开刷新";
          vm.isrefash = true;
        } else if (this.y < this.maxScrollY) {
          //maxScrollY数据里最大滚动值
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
          //为真的话 多加载一行
          vm.currentPage++; //把第二页取来 给覆盖第一页
          vm.getNewsList(vm.currentType);
        }
      });
    }
  }
};
</script>      