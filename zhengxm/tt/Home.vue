<template>
  <div>
    <div style="height:50px;position:fixed;top:0;left:0;right:0;background:#fff;">
      <nav-bar :data='menu' @indexChange="i=$event"></nav-bar>
    </div>
      <ul class="news-list">
        <li v-for='(item,index) in newList[i]' :key="index">
          <p>{{item.title}}</p>
          <div>
            <img :src="item.imgs[0]" alt="">
            <img :src="item.imgs[1]" alt="">
            <img :src="item.imgs[2]" alt="">
          </div>
          <p class="text-muted">{{item.author}}{{item.time}}</p>
        </li>
      </ul>
  </div>
</template>

<script>
import navBar from './navBar.vue'
export default {
  data(){
    return{
      i:0,
      menu:['推荐','热门','影视','娱乐'],
      newList:[
            [
            {
              title:'查看数据内存卡见到你',
              imgs:['/img/1.2b1dcd2b.jpg','/img/2.e4e5b69b.jpg','/img/3.c2618c4b.jpg'],
              author:'jdncj',
              time:'一天前'
            },
            {
              title:'xajsncjksdnckdsm',
              imgs:['/img/1.2b1dcd2b.jpg','/img/2.e4e5b69b.jpg','/img/3.c2618c4b.jpg'],
              author:'jdncj',
              time:'一天前'
            },
            {
              title:'xajsncjksdnckdsm',
              imgs:['/img/1.2b1dcd2b.jpg','/img/2.e4e5b69b.jpg','/img/3.c2618c4b.jpg'],
              author:'jdncj',
              time:'一天前'
            },
            {
              title:'xajsncjksdnckdsm',
              imgs:['/img/1.2b1dcd2b.jpg','/img/2.e4e5b69b.jpg','/img/3.c2618c4b.jpg'],
              author:'jdncj',
              time:'一天前'
            }
          ],
          [
            {
              title:'查看数据内存卡见到你',
              imgs:['/img/1.2b1dcd2b.jpg','/img/2.e4e5b69b.jpg','/img/3.c2618c4b.jpg'],
              author:'jdncj',
              time:'一天前'
            },
            {
              title:'xajsncjksdnckdsm',
              imgs:['/img/1.2b1dcd2b.jpg','/img/2.e4e5b69b.jpg','/img/3.c2618c4b.jpg'],
              author:'jdncj',
              time:'一天前'
            },
            {
              title:'xajsncjksdnckdsm',
              imgs:['/img/1.2b1dcd2b.jpg','/img/2.e4e5b69b.jpg','/img/3.c2618c4b.jpg'],
              author:'jdncj',
              time:'一天前'
            },
            {
              title:'xajsncjksdnckdsm',
              imgs:['/img/1.2b1dcd2b.jpg','/img/2.e4e5b69b.jpg','/img/3.c2618c4b.jpg'],
              author:'jdncj',
              time:'一天前'
            }
          ],
          [
            {
              title:'查看数据内存卡见到你',
              imgs:['/img/1.2b1dcd2b.jpg','/img/2.e4e5b69b.jpg','/img/3.c2618c4b.jpg'],
              author:'jdncj',
              time:'一天前'
            },
            {
              title:'xajsncjksdnckdsm',
              imgs:['/img/1.2b1dcd2b.jpg','/img/2.e4e5b69b.jpg','/img/3.c2618c4b.jpg'],
              author:'jdncj',
              time:'一天前'
            },
            {
              title:'xajsncjksdnckdsm',
              imgs:['/img/1.2b1dcd2b.jpg','/img/2.e4e5b69b.jpg','/img/3.c2618c4b.jpg'],
              author:'jdncj',
              time:'一天前'
            },
            {
              title:'xajsncjksdnckdsm',
              imgs:['/img/1.2b1dcd2b.jpg','/img/2.e4e5b69b.jpg','/img/3.c2618c4b.jpg'],
              author:'jdncj',
              time:'一天前'
            }
          ],
          [
            {
              title:'查看数据内存卡见到你',
              imgs:['/img/1.2b1dcd2b.jpg','/img/2.e4e5b69b.jpg','/img/3.c2618c4b.jpg'],
              author:'jdncj',
              time:'一天前'
            },
            {
              title:'xajsncjksdnckdsm',
              imgs:['/img/1.2b1dcd2b.jpg','/img/2.e4e5b69b.jpg','/img/3.c2618c4b.jpg'],
              author:'jdncj',
              time:'一天前'
            },
            {
              title:'xajsncjksdnckdsm',
              imgs:['/img/1.2b1dcd2b.jpg','/img/2.e4e5b69b.jpg','/img/3.c2618c4b.jpg'],
              author:'jdncj',
              time:'一天前'
            },
            {
              title:'xajsncjksdnckdsm',
              imgs:['/img/1.2b1dcd2b.jpg','/img/2.e4e5b69b.jpg','/img/3.c2618c4b.jpg'],
              author:'jdncj',
              time:'一天前'
            }
          ]
      ]
    }
  },
  components: {
    navBar,
  }
}
</script>
<style>
ul.news-list{
  margin-top: 52px;
}
  ul.news-list li{
    padding: 5px 20px;
    border-bottom: 1px solid #ccc;
    list-style: none;
  }
  ul.news-list li p{
    line-height: 1.4em;
  }
  ul.news-list li img{
    display: inline-block;
    width: 20%;
    height: 100px;
    margin-right: 3.33%;
    border: 1px solid #ccc;
  }
  .text-muted{
    color: #ccc;
    font-size: 0.8em;
  }
</style>

