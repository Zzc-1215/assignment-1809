<template>
    <div>
        <div style="height:50px;position:fixed;top:0;left:0;right:0;background:fff;">
            <nav-bar :data="menu" @indexChange="i=$event"></nav-bar>
        </div>

        <ul class="news-list">
            <li v-for="(item,index) in newList[i]" :key="index">
                <p>{{item.title}}</p>
                <div>
                    <img src="item.imgs[0]" alt="">
                    <img src="item.imgs[1]" alt="">
                    <img src="item.imgs[2]" alt="">
                </div>
                <p class="text-muted">{{item.author}}&nbsp;&nbsp;{{item.time}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
import navBar from './navBar.vue'
export default{
    data(){
        return{
            i:0,
            menu:['推荐','数字','字母'],
            newList:[
                [
                {
                    title:'撒发声法打扑克；福德宫；爱履历的高能量的能力能否',
                    imgs:['1.jpg','2.jpg','3.jpg'],
                    author:'老王',
                    time:'一天前'
                },{
                    title:'safasd',
                    imgs:['1.jpg','2.jpg','3.jpg'],
                    author:'老王',
                    time:'一天前'
                },{
                    title:'safasd',
                    imgs:['1.jpg','2.jpg','3.jpg'],
                    author:'老王',
                    time:'一天前'
                },{
                    title:'safasd',
                    imgs:['1.jpg','2.jpg','3.jpg'],
                    author:'老王',
                    time:'一天前'
                },
            ],[
                {
                    title:'61614561131317328560322',
                    imgs:['1.jpg','2.jpg','3.jpg'],
                    author:'老王',
                    time:'一天前'
                },{
                    title:'safasd',
                    imgs:['1.jpg','2.jpg','3.jpg'],
                    author:'老王',
                    time:'一天前'
                },{
                    title:'safasd',
                    imgs:['1.jpg','2.jpg','3.jpg'],
                    author:'老王',
                    time:'一天前'
                },{
                    title:'safasd',
                    imgs:['1.jpg','2.jpg','3.jpg'],
                    author:'老王',
                    time:'一天前'
                },
            ],[
                {
                    title:'dfsdfdsfsdfdsfsdntyjruk7',
                    imgs:['1.jpg','2.jpg','3.jpg'],
                    author:'老王',
                    time:'一天前'
                },{
                    title:'safasd',
                    imgs:['1.jpg','2.jpg','3.jpg'],
                    author:'老王',
                    time:'一天前'
                },{
                    title:'safasd',
                    imgs:['1.jpg','2.jpg','3.jpg'],
                    author:'老王',
                    time:'一天前'
                },{
                    title:'safasd',
                    imgs:['1.jpg','2.jpg','3.jpg'],
                    author:'老王',
                    time:'一天前'
                },
            ]
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
    ul.news-list li {
        padding:5px 20px;
        border-bottom:10px solid #ddd;
    }
    ul.news-list li p{
        line-height:1.4em;
        margin-bottom:10px;
    }
    ul.news-list li img{
        display:inline-block;
        width:30%;
        margin-right:3.333%;
        height:100px;
        border:1px solid #ccc;
    }
    .text-muted{
        color:#ccc;
        font-size:.8em;
    }
</style>