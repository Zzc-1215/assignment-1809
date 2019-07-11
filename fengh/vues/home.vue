<template>
  <div>
      <div style:"height:50px;position:fixed;top:0;left:0;right:0;background:#fff;">
          <nav-bar :data="menu" @indexChange="i=$event"></nav-bar>
          <!-- position:fixed定位需要中间数据滚动 -->
          <!-- @indexChange="i=$event" 这个改变了里面的i就会改变 li循环的newsList[i]也会改变 -->
      </div>

        <ul  class='news-list'>
            <li v-for="(itme,index) in newList[i]" :key="index">
                <!-- 放的数据 -->
                <p>{{itme.title}}</p>
                <div>
                    <img :src="{{itme.imgs[1]}}">
                    <img :src="{{itme.imgs[2]}}">
                    <img s:rc="{{itme.imgs[3]}}">
                </div>
                <p class="text-muted">{{itme.author}}&nusp;&nusp;&nusp;{{itme.time}}</p>
            </li>
        </ul>

  </div>	
</template>

<script>
// @ is an alias to /src
import navBar from './navBar.vue'

export default {
    data(){
        return{
            i:,//默认显示第0条数据
            //props传数据
            menu:['推荐','热门','科技','推荐','热门','科技','推荐','热门','科技'],
            //中间内容的数据 news-list
            newList:[//对应每个li的数据 就在套一个数组
                [
                    {
                        title:'风风风风风风风风风风风风风风风',
                        imgs:['1.jpg','2.jpg','3.jpg'],
                        author:'冯河',
                        time:'一天前'
                    },
                    {
                        title:'风风风风风风风风风风风风风风风',
                        imgs:['1.jpg','2.jpg','3.jpg'],
                        author:'冯河',
                        time:'一天前'
                    },
                    {
                        title:'风风风风风风风风风风风风风风风',
                        imgs:['1.jpg','2.jpg','3.jpg'],
                        author:'冯河',
                        time:'一天前'
                    },
                    {
                        title:'的好时机撒开花结实答案的撒谎的',
                        imgs:['1.jpg','2.jpg','3.jpg'],
                        author:'冯河',
                        time:'一天前'
                    },
                    {
                        title:'的好时机撒开花结实答案的撒谎的',
                        imgs:['1.jpg','2.jpg','3.jpg'],
                        author:'冯河',
                        time:'一天前'
                    },
                    {
                        title:'的好时机撒开花结实答案的撒谎的',
                        imgs:['1.jpg','2.jpg','3.jpg'],
                        author:'冯河',
                        time:'五天前'
                    },
                    {
                        title:'的好时机撒开花结实答案的撒谎的',
                        imgs:['1.jpg','2.jpg','3.jpg'],
                        author:'冯河',
                        time:'三天前'
                    },
                    {
                        title:'的好时机撒开花结实答案的撒谎的',
                        imgs:['1.jpg','2.jpg','3.jpg'],
                        author:'冯河',
                        time:'十分钟'
                    }
                ],
                [
                    {
                        title:'的好时机撒开花结实多岁的砂进口的号地块',
                        imgs:['1.jpg','2.jpg','3.jpg'],
                        author:'冯河',
                        time:'一天前'
                    },
                    {
                        title:'的好时机撒开花结实大活动撒谎登记卡萨号地块',
                        imgs:['1.jpg','2.jpg','3.jpg'],
                        author:'冯河',
                        time:'一天前'
                    },
                    {
                        title:'的好时机撒开花结实答案的撒谎的',
                        imgs:['1.jpg','2.jpg','3.jpg'],
                        author:'冯河',
                        time:'一天前'
                    },
                    {
                        title:'的好时机撒开花结实答案的撒谎的',
                        imgs:['1.jpg','2.jpg','3.jpg'],
                        author:'冯河',
                        time:'一天前'
                    },
                    {
                        title:'的好时机撒开花结实答案的撒谎的',
                        imgs:['1.jpg','2.jpg','3.jpg'],
                        author:'冯河',
                        time:'一天前'
                    },
                    {
                        title:'的好时机撒开花结实答案的撒谎的',
                        imgs:['1.jpg','2.jpg','3.jpg'],
                        author:'冯河',
                        time:'五天前'
                    },
                    {
                        title:'的好时机撒开花结实答案的撒谎的',
                        imgs:['1.jpg','2.jpg','3.jpg'],
                        author:'冯河',
                        time:'三天前'
                    },
                    {
                        title:'的好时机撒开花结实答案的撒谎的',
                        imgs:['1.jpg','2.jpg','3.jpg'],
                        author:'冯河',
                        time:'十分钟'
                    }
                ],
                [
                    {
                        title:'滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴',
                        imgs:['1.jpg','2.jpg','3.jpg'],
                        author:'冯河',
                        time:'一天前'
                    },
                    {
                        title:'滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴',
                        imgs:['1.jpg','2.jpg','3.jpg'],
                        author:'冯河',
                        time:'一天前'
                    },
                    {
                        title:'滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴',
                        imgs:['1.jpg','2.jpg','3.jpg'],
                        author:'冯河',
                        time:'一天前'
                    },
                    {
                        title:'的好时机撒开花结实答案的撒谎的',
                        imgs:['1.jpg','2.jpg','3.jpg'],
                        author:'冯河',
                        time:'一天前'
                    },
                    {
                        title:'的好时机撒开花结实答案的撒谎的',
                        imgs:['1.jpg','2.jpg','3.jpg'],
                        author:'冯河',
                        time:'一天前'
                    },
                    {
                        title:'的好时机撒开花结实答案的撒谎的',
                        imgs:['1.jpg','2.jpg','3.jpg'],
                        author:'冯河',
                        time:'五天前'
                    },
                    {
                        title:'的好时机撒开花结实答案的撒谎的',
                        imgs:['1.jpg','2.jpg','3.jpg'],
                        author:'冯河',
                        time:'三天前'
                    },
                    {
                        title:'的好时机撒开花结实答案的撒谎的',
                        imgs:['1.jpg','2.jpg','3.jpg'],
                        author:'冯河',
                        time:'十分钟'
                    }
                ]
            ]
        }
    },
//   name: 'home',
  components: {
    navBar
  }
}
</script>

<style scoped>
/* 中间数据的样式 */
ul.news-list{
    margin-top:50px;
}
 ul.news-list li{
     padding:5px 20px;
     border-bottom:solid 10px #dedede;
 }
    ul.news-list li p{
        line-height:1.4em;
        margin-bottom:10px;
    }
    ul.news-list li img{
        display:inline-block;
        width:30%;
        margin-right:3%;
        height:100px;
        border:1px solid #ccc;
    }
    .text-muted{
        color:#ccc;
        font-size:0.8em;
    }
</style>