<template>
  <div>
    <div style="height:50px;position:fixed;top：0;left:0;right:0;background:#fafafa;">
      <nav-bar :data="lis"></nav-bar>
    </div>
    <div class="box">
      <ul class="news-list">
        <li v-for="(i,$index) in newsList"
            :key="$index">
          <p>{{i.title}}</p>
          <div>
            <img :src="i.imgs[0]"
                 alt="">
            <img :src="i.imgs[1]"
                 alt="">
            <img :src="i.imgs[2]"
                 alt="">
          </div>
          <p class="message">{{i.author}}---{{i.time}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
import navBar from './navBar.vue'
export default {
  data () {
    return {
      lis: ['推荐', '上火', '把十大', '推荐', '上火', '把十大', '推荐', '上火', '把十大'],
      newsList: [
        {
          title: 'asdadasdadsadsd',
          imgs: ['1.jpg', '2.jpg', '3.jpg'],
          author: 'xxx',
          time: '一天前'
        },
        {
          title: 'asdadasdadsadsd',
          imgs: ['1.jpg', '2.jpg', '3.jpg'],
          author: 'xxx',
          time: '一天前'
        },
        {
          title: 'asdadasdadsadsd',
          imgs: ['1.jpg', '2.jpg', '3.jpg'],
          author: 'xxx',
          time: '一天前'
        },
        {
          title: 'asdadasdadsadsd',
          imgs: ['1.jpg', '2.jpg', '3.jpg'],
          author: 'xxx',
          time: '一天前'
        },
        {
          title: 'asdadasdadsadsd',
          imgs: ['1.jpg', '2.jpg', '3.jpg'],
          author: 'xxx',
          time: '一天前'
        },
        {
          title: 'asdadasdadsadsd',
          imgs: ['1.jpg', '2.jpg', '3.jpg'],
          author: 'xxx',
          time: '一天前'
        },
        {
          title: 'asdadasdadsadsd',
          imgs: ['1.jpg', '2.jpg', '3.jpg'],
          author: 'xxx',
          time: '一天前'
        },
      ]
    }
  },
  components: {
    navBar
  }
}
</script>
<style scoped>
.box {
  padding-top: 50px;
}
ul.news-list li {
  padding: 5px 20px;
  border-bottom: 10px solid rgb(235, 174, 174);
}
ul.news-list li p {
  line-height: 1.4em;
  margin-bottom: 10px;
}
ul.news-list li img {
  display: inline-block;
  width: 30%;
  margin-right: 3.3333%;
  height: 150px;
  border: 1px solid #000;
}
.message {
  color: #aaa;
  font-size: 0.8em;
}
</style>

