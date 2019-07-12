<template>
  <div>
    <div style="height:50px;position:fixed;top:0;left:0;right:0;background:#fff;">
      <nav-bar :data="menu" @indexChange="getNewsList"></nav-bar>
    </div>

    <ul class="news-list">
      <li v-for="(item,index) in newsList" :key="index">
        <p>{{item.title}}</p>
        <div>
          <img :src="item.thumbnail_pic_s" alt />
          <img :src="item.thumbnail_pic_s02" alt />
          <img :src="item.thumbnail_pic_s03" alt />
        </div>
        <p class="text-muted">{{item.author_name}}&nbsp;&nbsp;{{item.date}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import navBar from "./navBar.vue";
export default {
  data() {
    return {
      currentType: '',
      menu: [
          {categroy:'top',title:'头条'},
          {categroy:'shehui',title:'社会'},
          {categroy:'guonei',title:'国内'},
          {categroy:'guoji',title:'国际'},
          {categroy:'yule',title:'娱乐'},
          {categroy:'tiyu',title:'体育'},
          {categroy:'junshi',title:'军事'},
          {categroy:'keji',title:'科技'},
          {categroy:'caijing',title:'财经'},
          {categroy:'shishang',title:'时尚'}
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
    getNewsList(event){
      this.currentType = event;
      // http://v.juhe.cn/toutiao/index?type=&key=f53d292ce8d1d53e83e82adc737514c7
      this.axios.get('/toutiao/index?type='+this.currentType+'&key=f53d292ce8d1d53e83e82adc737514c7').then((res)=>{
        // this.newsList = res.result.data;
        this.newsList = res.data.result.data;
      })
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul.news-list {
  margin-top: 50px;
}
ul.news-list li {
  padding: 5px 20px;
  border-bottom: 10px solid #ddd;
}
ul.news-list li p {
  line-height: 1.4em;
  margin-bottom: 10px;
}
ul.news-list li img {
  display: inline-block;
  width: 30%;
  margin-right: 3.333%;
  height: 100px;
  border: 1px solid #ccc;
}
.text-muted {
  color: #ccc;
  font-size: 0.8em;
}
</style>
