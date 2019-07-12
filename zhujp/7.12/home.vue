<template>
    <div>
        <div style="position:fixed;top:0; left:0;right:0;background:#fff; height:50px;">
             <nav-bar :data="menu" @indexChange="i=$event"></nav-bar>
        </div>
        <ul class="news-list">
            <li v-for="(item,index) in newsList[i]" :key="index">
                <p>{{item.title}}</p>
                <div>
                    <img :src="item.imgs[0]">
                    <img :src="item.imgs[1]">
                    <img :src="item.imgs[2]">
                </div>
                <p class="text-muted">{{item.author}}&nbsp;{{item.time}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
import navBar from './navBar.vue'

export default {
    data(){
        return {
            i:0,
            menu:['推荐','推荐','推荐','推荐','推荐','推荐'],
            newsList:[
                [{
                    title:'部件焊接设备环境保护局啊jvchgvcfc',
                    imgs:['1.jpg','2.jpg','3.jpg',],
                    author:'xxx',
                    time:'一天前',

                },{
                    title:'tfyhyjvchgvcfc',
                    imgs:['1.jpg','2.jpg','3.jpg',],
                    author:'xxx',
                    time:'一天前',

                },{
                    title:'tfyhyjvchgvcfc',
                    imgs:['1.jpg','2.jpg','3.jpg',],
                    author:'xxx',
                    time:'一天前',

                },{
                    title:'tfyhyjvchgvcfc',
                    imgs:['1.jpg','2.jpg','3.jpg',],
                    author:'老王',
                    time:'一天前',

                },{
                    title:'tfyhyjvchgvcfc',
                    imgs:['1.jpg','2.jpg','3.jpg',],
                    author:'老王',
                    time:'一天前',

                },{
                    title:'tfyhyjvchgvcfc',
                    imgs:['1.jpg','2.jpg','3.jpg',],
                    author:'老王',
                    time:'一天前',

                }],[{
                    title:'541313515vchgvcfc',
                    imgs:['1.jpg','2.jpg','3.jpg',],
                    author:'xxx',
                    time:'一天前',

                },{
                    title:'tfyhyjvchgvcfc',
                    imgs:['1.jpg','2.jpg','3.jpg',],
                    author:'xxx',
                    time:'一天前',

                },{
                    title:'tfyhyjvchgvcfc',
                    imgs:['1.jpg','2.jpg','3.jpg',],
                    author:'xxx',
                    time:'一天前',

                },{
                    title:'tfyhyjvchgvcfc',
                    imgs:['1.jpg','2.jpg','3.jpg',],
                    author:'老王',
                    time:'一天前',

                },{
                    title:'tfyhyjvchgvcfc',
                    imgs:['1.jpg','2.jpg','3.jpg',],
                    author:'老王',
                    time:'一天前',

                },{
                    title:'tfyhyjvchgvcfc',
                    imgs:['1.jpg','2.jpg','3.jpg',],
                    author:'老王',
                    time:'一天前',

                }],[{
                    title:'tfyhyjvchgvcfc',
                    imgs:['1.jpg','2.jpg','3.jpg',],
                    author:'xxx',
                    time:'一天前',

                },{
                    title:'tfyhyjvchgvcfc',
                    imgs:['1.jpg','2.jpg','3.jpg',],
                    author:'xxx',
                    time:'一天前',

                },{
                    title:'tfyhyjvchgvcfc',
                    imgs:['1.jpg','2.jpg','3.jpg',],
                    author:'xxx',
                    time:'一天前',

                },{
                    title:'tfyhyjvchgvcfc',
                    imgs:['1.jpg','2.jpg','3.jpg',],
                    author:'老王',
                    time:'一天前',

                },{
                    title:'tfyhyjvchgvcfc',
                    imgs:['1.jpg','2.jpg','3.jpg',],
                    author:'老王',
                    time:'一天前',

                },{
                    title:'tfyhyjvchgvcfc',
                    imgs:['1.jpg','2.jpg','3.jpg',],
                    author:'老王',
                    time:'一天前',

                }]
            ]

        }
    },
  components:{
    navBar
  },
}
</script>

<style scoped>
ul.news-list{
    margin-top:50px;
}
    ul.news-list li{
        padding:5px 20px;
        border-bottom:10px solid #f4f4f4;
    }
    ul.news-list li p{
        line-height:1.4em;
        magin-bottom:10px;
    }
    ul.news-list li img{
        display:inline-block;
        width:28%;
        height:100px;
        margin-right:3.333%;
        border:1px solid #ccc;
    }
    .text-muted{
        color:#ccc;
        font-size:.8em;
    }
</style>
