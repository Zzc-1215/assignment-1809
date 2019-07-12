<template>
  <div>
    <div style="position:fixed;top:0;left:0;background:#fff;width:100%;">
      <nav-bar :data="menu"></nav-bar>
    </div>
    <ul class="news-list">
      <li v-for="(item,index) in newsList" :key="index">
        <h3>{{item.title}}</h3>
        <div>
          <img :src="item.imgs[0]" alt />
          <img :src="item.imgs[1]" alt />
          <img :src="item.imgs[2]" alt />
          <p>
            <span>{{item.author}}</span>
            <span>{{item.time}}</span>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import navBar from "./navBar.vue";
export default {
  data() {
    return {
      menu: [
        "推荐",
        "热门",
        "科技",
        "推荐",
        "热门",
        "科技",
        "推荐",
        "热门",
        "科技",
        "娱乐"
      ],
      newsList: [
        {
          title: "新闻",
          imgs: ["", "", ""],
          author: "作者",
          time: "4天前"
        },
        {
          title: "新闻",
          imgs: ["", "", ""],
          author: "作者",
          time: "4天前"
        },
        {
          title: "新闻",
          imgs: ["", "", ""],
          author: "作者",
          time: "4天前"
        },
        {
          title: "新闻",
          imgs: ["", "", ""],
          author: "作者",
          time: "4天前"
        },
        {
          title: "新闻",
          imgs: ["", "", ""],
          author: "作者",
          time: "4天前"
        },
        {
          title: "新闻",
          imgs: ["", "", ""],
          author: "作者",
          time: "4天前"
        }
      ]
    };
  },
  components: {
    navBar
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul.news-list{
    padding-top: 50px;
  }
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
}
</style>
