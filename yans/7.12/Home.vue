<template>
  <div>
      <div style:"height:50px;position:fixed;top:0;left:0;right:0;background:#fff;">
          <nav-bar :data="menu" @indexChange="i=$event"></nav-bar>
      </div>

        <ul  class='news-list'>
            <li v-for="(itme,index) in newList[i]" :key="index">
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
            i:,
            menu:['推荐','热门','科技','推荐','热门','科技','推荐','热门','科技'],
            newList:[
                [
                    {
                        title:我很开心很开心,
                        imgs:['1.jpg','2.jpg','3.jpg'],
                        author:'xx',
                        time:'一天前'
                    },
                    {
                        title:我很开心很开心,
                        imgs:['1.jpg','2.jpg','3.jpg'],
                        author:'xx',
                        time:'一天前'
                    },
                   {
                        title:我很开心很开心,
                        imgs:['1.jpg','2.jpg','3.jpg'],
                        author:'xx',
                        time:'一天前'
                    },
                    {
                        title:我很开心很开心,
                        imgs:['1.jpg','2.jpg','3.jpg'],
                        author:'xx',
                        time:'一天前'
                    },
                    {
                        title:我很开心很开心,
                        imgs:['1.jpg','2.jpg','3.jpg'],
                        author:'xx',
                        time:'一天前'
                    },
                   {
                        title:我很开心很开心,
                        imgs:['1.jpg','2.jpg','3.jpg'],
                        author:'xx',
                        time:'一天前'
                    },
                   {
                        title:我很开心很开心,
                        imgs:['1.jpg','2.jpg','3.jpg'],
                        author:'xx',
                        time:'一天前'
                    }
                ],
                [
                    {
                        title:我很开心很开心,
                        imgs:['1.jpg','2.jpg','3.jpg'],
                        author:'xx',
                        time:'一天前'
                    },
                    {
                        title:我很开心很开心,
                        imgs:['1.jpg','2.jpg','3.jpg'],
                        author:'xx',
                        time:'一天前'
                    },
                   {
                        title:我很开心很开心,
                        imgs:['1.jpg','2.jpg','3.jpg'],
                        author:'xx',
                        time:'一天前'
                    },
                    {
                        title:我很开心很开心,
                        imgs:['1.jpg','2.jpg','3.jpg'],
                        author:'xx',
                        time:'一天前'
                    },
                    {
                        title:我很开心很开心,
                        imgs:['1.jpg','2.jpg','3.jpg'],
                        author:'xx',
                        time:'一天前'
                    },
                   {
                        title:我很开心很开心,
                        imgs:['1.jpg','2.jpg','3.jpg'],
                        author:'xx',
                        time:'一天前'
                    },
                   {
                        title:我很开心很开心,
                        imgs:['1.jpg','2.jpg','3.jpg'],
                        author:'xx',
                        time:'一天前'
                    }
                ],
               [
                    {
                        title:我很开心很开心,
                        imgs:['1.jpg','2.jpg','3.jpg'],
                        author:'xx',
                        time:'一天前'
                    },
                    {
                        title:我很开心很开心,
                        imgs:['1.jpg','2.jpg','3.jpg'],
                        author:'xx',
                        time:'一天前'
                    },
                   {
                        title:我很开心很开心,
                        imgs:['1.jpg','2.jpg','3.jpg'],
                        author:'xx',
                        time:'一天前'
                    },
                    {
                        title:我很开心很开心,
                        imgs:['1.jpg','2.jpg','3.jpg'],
                        author:'xx',
                        time:'一天前'
                    },
                    {
                        title:我很开心很开心,
                        imgs:['1.jpg','2.jpg','3.jpg'],
                        author:'xx',
                        time:'一天前'
                    },
                   {
                        title:我很开心很开心,
                        imgs:['1.jpg','2.jpg','3.jpg'],
                        author:'xx',
                        time:'一天前'
                    },
                   {
                        title:我很开心很开心,
                        imgs:['1.jpg','2.jpg','3.jpg'],
                        author:'xx',
                        time:'一天前'
                    }
                ],
            ]
        }
    },
  components: {
    navBar
  }
}
</script>

<style scoped>
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