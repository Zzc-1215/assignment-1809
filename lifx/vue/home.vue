<template>
  <div>
      <div  style="position:fixed;top:0;left:0;right:0;background:#fff;height:50px;">
          <nav-bar :data="menu" @indexChange="i=$event"></nav-bar>
      </div>
    
    <ul class="news_list">
      <li v-for="(item,index) in newslist[i]" :key="index">
        <p>{{item.title}}</p>
        <div>
          <img :src="item.imgs[0]" alt />
          <img :src="item.imgs[1]" alt />
          <img :src="item.imgs[2]" alt />
        </div>
        <p class="text_m">{{item.author}}&nbsp;&nbsp;&nbsp;&nbsp;{{item.time}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import navBar from "./navBar.vue";
export default {
  data() {
    return {
        i:0,
      menu: ["推荐", "热点", "科技"],
      newslist:[ [
        {
          title: "【教育行者】80后老师带11名毕业生骑行1800公里，校领导紧张，家长被气住院，有人流泪开车跟几公里",
          imgs: ["//p1.pstatp.com/list/190x124/pgc-image/a317ea34e72b4c28b77c761bea6fffab", "//p3.pstatp.com/list/190x124/pgc-image/2a679b99ade34e51997ed020e97f1652", "//p3.pstatp.com/list/190x124/pgc-image/192cfd0ec87c46008b22a994bba0e3dd"],
          author: " 民办教育 ⋅",
          time: " 2分钟前"
        },
        {
          title: "3毛钱的生意，一年赚22亿，80多个国家都要他供货？",
          imgs: ["//p3.pstatp.com/list/190x124/pgc-image/ab95d11ba15f43c099423418fe20360d", "//p1.pstatp.com/list/190x124/pgc-image/d6f38c32a9474d8fb5fd37e455523ba8", "//p1.pstatp.com/list/dfic-imagehandler/930c00b8-b1d8-48a9-84b8-4082673ba6b8"],
          author: " 老牛校尉 ⋅",
          time: " 5分钟前"
        },
        {
          title: "终身戴孝，一生守陵！他们是成吉思汗的守陵人",
          imgs: ["//p3.pstatp.com/list/190x124/pgc-image/7ce6f64e64dd458da7d1e652fbd52dd3", "//p1.pstatp.com/list/190x124/pgc-image/ee200261ceb54f9599dacb53a287497a", "//p9.pstatp.com/list/190x124/pgc-image/9b144272053647a988da232a256ed566"],
          author: " 国家地理中文网 ",
          time: " 9分钟前"
        },{
          title: "【教育行者】80后老师带11名毕业生骑行1800公里，校领导紧张，家长被气住院，有人流泪开车跟几公里",
          imgs: ["//p1.pstatp.com/list/190x124/pgc-image/a317ea34e72b4c28b77c761bea6fffab", "//p3.pstatp.com/list/190x124/pgc-image/2a679b99ade34e51997ed020e97f1652", "//p3.pstatp.com/list/190x124/pgc-image/192cfd0ec87c46008b22a994bba0e3dd"],
          author: " 民办教育 ⋅",
          time: " 2分钟前"
        },
      ], [
        {
          title: "【教育行者】80后老师带11名毕业生骑行1800公里，跟几公里",
          imgs: ["https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3973878772,3338382160&fm=26&gp=0.jpg", "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1477030534,3856417906&fm=26&gp=0.jpg", "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4160486861,639582715&fm=26&gp=0.jpg"],
          author: " 民办教育 ⋅",
          time: " 2分钟前"
        },
        {
          title: "3毛钱的生意，一年赚22亿，80多个国？",
          imgs: ["https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1466005185,4285804592&fm=26&gp=0.jpg", "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3372034649,513365852&fm=26&gp=0.jpg", "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3267569463,3369395237&fm=26&gp=0.jpg"],
          author: " 老牛校尉 ⋅",
          time: " 5分钟前"
        },
        {
          title: "终身戴孝，一生守陵守陵人",
          imgs: ["https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=291190245,1136860577&fm=26&gp=0.jpg", "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3230556576,2262070531&fm=26&gp=0.jpg", "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2161399393,4237734835&fm=26&gp=0.jpg"],
          author: " 国家地理中文网 ",
          time: " 9分钟前"
        },{
          title: "【教育行者】80后公里，校领导紧张，家长被气住院，有人流泪开车跟几公里",
          imgs: ["https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=291075640,643600697&fm=26&gp=0.jpg", "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3143512031,394516405&fm=26&gp=0.jpg", "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3021769566,318488286&fm=26&gp=0.jpg"],
          author: " 民办教育 ⋅",
          time: " 2分钟前"
        },
      ], [
        {
          title: "【教育行者】80后老师带11名毕业生骑行1800被气住院，有人流泪开车跟几公里",
          imgs: ["https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1731234581,2670732719&fm=26&gp=0.jpg", "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3951600299,366616291&fm=26&gp=0.jpg", "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4081019476,595369738&fm=26&gp=0.jpg"],
          author: " 民办教育 ⋅",
          time: " 2分钟前"
        },
        {
          title: "3毛钱的生意，一年国家都要他供货？",
          imgs: ["https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3617422489,3795807031&fm=26&gp=0.jpg", "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2260836807,3289834018&fm=26&gp=0.jpg", "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=733003575,2119605177&fm=26&gp=0.jpg"],
          author: " 老牛校尉 ⋅",
          time: " 5分钟前"
        },
        {
          title: "终身戴孝思汗的守陵人",
          imgs: ["https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3321300595,2020716403&fm=26&gp=0.jpg", "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2611977257,698668970&fm=26&gp=0.jpg", "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2833367680,297779193&fm=26&gp=0.jpg"],
          author: " 国家地理中文网 ",
          time: " 9分钟前"
        },{
          title: "【教育行者】80后老师带1领导紧张，家长被气住院，有人流泪开车跟几公里",
          imgs: ["https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=260159937,2526240275&fm=26&gp=0.jpg", "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3149908668,4106948514&fm=26&gp=0.jpg", "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3898592378,1662752343&fm=26&gp=0.jpg"],
          author: " 民办教育 ⋅",
          time: " 2分钟前"
        },
      ]]
    };
  },
  components: {
    navBar
  }
};
</script>
    
<style scoped>
ul.news_list{
    margin-top: 50px;
}
ul.news_list li{
    padding:5px 20px;
    border-bottom: 10px solid #f4f4f4;
}
ul.news_list li p{
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
    .text_m{
        color: #ccc;
        font-size: 0.8em
    }
</style>
