<template>
  <div style="height:100%;">
    <div style="height:50px;position:fixed;top:0;left:0;right:0;background:#fff;z-index:999;">
      <headlist :data="menu" @activechange="getNewsList"></headlist>
    </div>
    <div id="wrapper" style="width:100%;height:100%;position:relative;">
      <ul class="news-list">
        <li style="text-align:center;border:none;height:50px;line-height:50px;padding:0;font-size:14px;">{{refash}}</li>
        <li v-for="(item,index) in newsList" :key="index">
          <p>{{item.title}}</p>
          <div class="clearfix">
            <img v-for="(imgs,$index) in item.multi_imgs" v-lazy="imgs" :key="$index">
            <!-- <img
              v-if="item.thumbnail_pic_s02"
              :style="{'width':widthImg(item.thumbnail_pic_s02,item.thumbnail_pic_s03)}"
              v-lazy="item.thumbnail_pic_s02" draggable="false"
              alt
            >
            <img
              v-if="item.thumbnail_pic_s03"
              :style="{'width':widthImg(item.thumbnail_pic_s02,item.thumbnail_pic_s03)}"
              v-lazy="item.thumbnail_pic_s03"
              alt draggable="false"
            > -->
          </div>
          <p class="text-muted">{{item.author_name}}&nbsp;&nbsp;{{item.date}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import headlist from "../components/headlist.vue";
import IScroll from "iscroll/build/iscroll-probe.js";
export default {
  data() {
    return {
      myScroll: null,
      refash:'下拉刷新',
      isrefash:false,
      isLoad:false,
      url:'/irs/rcd',
      params:'&cid=56&token=c786875b8e04da17b24ea5e332745e0f&num=20&expIds=20190106A13PFT%7C20190108A04MLS&page=',
      currentType: "games",
      currentPage:0,      
      menu: [
        { categroy: "games", title: "游戏" },
        { categroy: "astro", title: "天文" },
        { categroy: "cul", title: "文化" },
        { categroy: "edu", title: "教育" },
        { categroy: "house", title: "房产" },
        { categroy: "tech", title: "科技" },
        { categroy: "finance", title: "财经" },
        { categroy: "fashion", title: "时尚" },
        { categroy: "ent", title: "娱乐" },
        { categroy: "auto", title: "汽车" }
      ],
      // [
      //   { categroy: "top", title: "头条" },
      //   { categroy: "shehui", title: "社会" },
      //   { categroy: "guonei", title: "国内" },
      //   { categroy: "guoji", title: "国际" },
      //   { categroy: "yule", title: "娱乐" },
      //   { categroy: "tiyu", title: "体育" },
      //   { categroy: "junshi", title: "军事" },
      //   { categroy: "keji", title: "科技" },
      //   { categroy: "caijing", title: "财经" },
      //   { categroy: "shishang", title: "时尚" }
      // ],
      newsList: []
    };
  },
  created() {
    this.getNewsList();
  },
  components: {
    headlist
  },
  methods: {
    getNewsList(event,page) {
      this.currentType = event || 'games';
      // http://v.juhe.cn/toutiao/index?type=&key=f53d292ce8d1d53e83e82adc737514c7
     //pacaio.match.qq.com/irs/rcd?cid=56&ext=games&token=c786875b8e04da17b24ea5e332745e0f&num=20&expIds=20190106A13PFT%7C20190108A04MLS&page=0

      this.axios.get(this.url+'?ext='+this.currentType+this.params+page).then(res => {
        console.log(res.data)
          // this.newsList = res.result.data;
          // this.newsList = res.data.result.data;
          if(this.currentPage==0){
            this.newsList = res.data.data;
          }else{
            this.newsList = this.newsList.concat(res.data.data)
          }
          this.$nextTick(function(){
            if(this.myScroll){
              this.myScroll.refresh()
            }else{
               this.initScroll();
            }
          })
        });
    },
    initScroll(){
      var page = 0;
      var vm = this;
      this.myScroll = new IScroll("#wrapper", {
        scrollbars: true,
        mouseWheel:true,
        probeType:2,
      });
      this.myScroll.on('scroll',function(){
        if(this.y>60){
          vm.refash='松手刷新';
          vm.isrefash = true;
        }else if(this.y<this.maxScrollY+30){
          vm.isLoad = true;
        }else{
          vm.refash='下拉刷新';
          vm.isrefash = false;
          vm.isLoad = false;
        }
      });
      this.myScroll.on('scrollEnd',function(){
        if(vm.isrefash){
          vm.currentPage = 0;
          vm.getNewsList(vm.currentType);
        }else if(vm.isLoad){
          page++;
          console.log(page)
          vm.getNewsList(page);
        }
      })
    },
    widthImg(b, c) {
      if (b && c) {
        return "30.33%";
      } else if (b && !c) {
        return "47%";
      } else if (!b && !c) {
        return "100%";
      }
    }
  },
  computed: {
    // imgs(){
    //   this.newsList.forEach(el=>{
    //     var imgArr = [];
    //     el.irs_imgs.'295X195'
    //   })
    // }
  },
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul.news-list {
  /* margin-top: 50px; */
  position: absolute;
  width: 100%;
}
ul.news-list li {
  padding: 8px 20px;
  border-bottom: 10px solid #ddd;
  text-align: left;
}
ul.news-list li p {
  line-height: 1.4em;
  font-size: 14px;
}
ul.news-list li div {
  margin: 10px 0;
}
ul.news-list li img {
  float: left;
  height: auto;
  width: 30%;
  height: 140px;
  margin-right: 3%;
  border: 1px solid #ccc;
}
ul.news-list li img:last-child {
  margin-right: 0;
}
.text-muted {
  color: #ccc;
  font-size: 0.8em;
}
</style>
