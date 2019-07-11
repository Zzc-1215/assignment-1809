<template>
    <div>
        <div>
            <nav-bar :data="list" @indexChange="i=$event" style="position:fixed;top:0;left:0;background:#fff;"></nav-bar>
        </div>
       
        <ul class="news-list">
            <li v-for="(item,index) in newsList[i]" :key="index">
                <p>{{item.title}}</p>
                <div class="listImgs">
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
    export default {
        data(){
            return{
                i:0,
                list:['关注','推荐','热点','科技','娱乐','NBA','体育','游戏','旅游'],
                newsList:[
                    [
                    {
                        title:'一夜之间，农民伯伯的瓜，全部被砍裂',
                        imgs:['1.jpg','2.jpg','3.jpg'],
                        author:'无忧',
                        time:'2019/7/11'
                    },{
                        title:'面包车撞上劳斯莱斯',
                        imgs:['1.jpg','2.jpg','3.jpg'],
                        author:'无忧',
                        time:'2019/7/11'
                    },{
                        title:'蜂蜜加柠檬，让你白回来',
                        imgs:['1.jpg','2.jpg','3.jpg'],
                        author:'无忧',
                        time:'2019/7/11'
                    },{
                        title:'热水，水温在多少的时候，才不会伤害身体',
                        imgs:['1.jpg','2.jpg','3.jpg'],
                        author:'无忧',
                        time:'2019/7/11'
                    },
                ],[
                    {
                        title:'面包车撞上劳斯莱斯',
                        imgs:['1.jpg','2.jpg','3.jpg'],
                        author:'无忧',
                        time:'2019/7/11'
                    },{
                        title:'一夜之间，农民伯伯的瓜，全部被砍裂',
                        imgs:['1.jpg','2.jpg','3.jpg'],
                        author:'无忧',
                        time:'2019/7/11'
                    },{
                        title:'蜂蜜加柠檬，让你白回来',
                        imgs:['1.jpg','2.jpg','3.jpg'],
                        author:'无忧',
                        time:'2019/7/11'
                    },{
                        title:'热水，水温在多少的时候，才不会伤害身体',
                        imgs:['1.jpg','2.jpg','3.jpg'],
                        author:'无忧',
                        time:'2019/7/11'
                    },
                ],[
                    {
                        title:'一夜之间，农民伯伯的瓜，全部被砍裂',
                        imgs:['1.jpg','2.jpg','3.jpg'],
                        author:'无忧',
                        time:'2019/7/11'
                    },{
                        title:'面包车撞上劳斯莱斯',
                        imgs:['1.jpg','2.jpg','3.jpg'],
                        author:'无忧',
                        time:'2019/7/11'
                    },{
                        title:'蜂蜜加柠檬，让你白回来',
                        imgs:['1.jpg','2.jpg','3.jpg'],
                        author:'无忧',
                        time:'2019/7/11'
                    },{
                        title:'热水，水温在多少的时候，才不会伤害身体',
                        imgs:['1.jpg','2.jpg','3.jpg'],
                        author:'无忧',
                        time:'2019/7/11'
                    },
                ],[
                    {
                        title:'一夜之间，农民伯伯的瓜，全部被砍裂',
                        imgs:['1.jpg','2.jpg','3.jpg'],
                        author:'无忧',
                        time:'2019/7/11'
                    },{
                        title:'面包车撞上劳斯莱斯',
                        imgs:['1.jpg','2.jpg','3.jpg'],
                        author:'无忧',
                        time:'2019/7/11'
                    },{
                        title:'蜂蜜加柠檬，让你白回来',
                        imgs:['1.jpg','2.jpg','3.jpg'],
                        author:'无忧',
                        time:'2019/7/11'
                    },{
                        title:'热水，水温在多少的时候，才不会伤害身体',
                        imgs:['1.jpg','2.jpg','3.jpg'],
                        author:'无忧',
                        time:'2019/7/11'
                    },
                ],[
                    {
                        title:'一夜之间，农民伯伯的瓜，全部被砍裂',
                        imgs:['1.jpg','2.jpg','3.jpg'],
                        author:'无忧',
                        time:'2019/7/11'
                    },{
                        title:'面包车撞上劳斯莱斯',
                        imgs:['1.jpg','2.jpg','3.jpg'],
                        author:'无忧',
                        time:'2019/7/11'
                    },{
                        title:'蜂蜜加柠檬，让你白回来',
                        imgs:['1.jpg','2.jpg','3.jpg'],
                        author:'无忧',
                        time:'2019/7/11'
                    },{
                        title:'热水，水温在多少的时候，才不会伤害身体',
                        imgs:['1.jpg','2.jpg','3.jpg'],
                        author:'无忧',
                        time:'2019/7/11'
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
    .listImgs img{
        display:inline-block;
        width:30%;
        height:130px;
        border:1px #ccc solid;
        margin: 0 1.5%;
        margin-bottom:10px;
    }
    .news-list{
        margin-top:50px;
        background:#f4f4f4;
    }
    .news-list li{
        padding:5px 30px;
        box-sizing:border-box;
        margin-bottom:10px;
        background:#fff;
    }
    .news-list p{
        line-height:1.4rem;
        margin-bottom:10px;
    }
    .text-muted{
        color:#ccc;
        font-size:1rem;
    }
</style>