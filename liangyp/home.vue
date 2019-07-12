<template>
    <div>
        <div style="height:50px;position:fixed;top:0;left:0;right:0;background:#fff;">
            <nav-bar :data="menu" @indexChange="i=$event"></nav-bar>
        </div>
        
        <ul class="news-list">
            <li v-for="(item,index) in newsList[i]" :key="index">
                <p>{{item.titem}}</p>
                <div>
                    <img :src="item.imgs[0]" alt="">
                    <img :src="item.imgs[1]" alt="">
                    <img :src="item.imgs[2]" alt="">
                </div>
                <p class="text-muted">{{item.author}}---&nbsp;&nbsp;&nbsp;{{item.time}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
import navBar from './navBar.vue';
export default {
    data(){
        return {
            i:0,
            menu:['推荐','科技','游戏','美女','新闻','社会'],
            newsList:[
                [{
                    title:'fdsgfdsgfdgdf',
                    imgs:['./1.jpg','./14.jpg','./15.jpg'],
                    author:'辅导辅导',
                    time:'10小时前'
                },
                {
                    title:'fdsgfdsgfdgdf',
                    imgs:['./1.jpg','./14.jpg','./15.jpg'],
                    author:'辅热导',
                    time:'60小时前'
                },
                {
                    title:'fdsgfdsgfdgdf',
                    imgs:['./1.jpg','./14.jpg','./15.jpg'],
                    author:'辅导辅导',
                    time:'50小时前'
                },
                {
                    title:'fdsgfdsgfdgdf',
                   imgs:['./1.jpg','./14.jpg','./15.jpg'],
                    author:'辅导辅导',
                    time:'40小时前'
                },
                {
                    title:'fdsgfdsgfdgdf',
                   imgs:['./1.jpg','./14.jpg','./15.jpg'],
                    author:'小龙',
                    time:'5小时前'
                },
                {
                    title:'fdsgfdsgfdgdf',
                    imgs:['./1.jpg','./14.jpg','./15.jpg'],
                    author:'老王',
                    time:'10小时前'
                }],
                [{
                    title:'fdsgfdsgfdgdf',
                    imgs:['./1.jpg','./14.jpg','./15.jpg'],
                    author:'辅导辅导',
                    time:'10小时前'
                },
                {
                    title:'fdsgfdsgfdgdf',
                    imgs:['./1.jpg','./14.jpg','./15.jpg'],
                    author:'辅热导',
                    time:'60小时前'
                },
                {
                    title:'fdsgfdsgfdgdf',
                    imgs:['./1.jpg','./14.jpg','./15.jpg'],
                    author:'辅导辅导',
                    time:'50小时前'
                },
                {
                    title:'fdsgfdsgfdgdf',
                   imgs:['./1.jpg','./14.jpg','./15.jpg'],
                    author:'辅导辅导',
                    time:'40小时前'
                },
                {
                    title:'fdsgfdsgfdgdf',
                   imgs:['./1.jpg','./14.jpg','./15.jpg'],
                    author:'小龙',
                    time:'5小时前'
                },
                {
                    title:'fdsgfdsgfdgdf',
                    imgs:['./1.jpg','./14.jpg','./15.jpg'],
                    author:'老王',
                    time:'10小时前'
                }],
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
        margin-top: 50px;
    }
    ul.news-list li{
        padding: 6px 20px;
        border-bottom: solid 10px #f4f4f4;
    }
    ul.news-list li p{
        line-height: 2em;
        line-height: 1.5em;
        margin-bottom: 10px;
    }
    ul.news-list ul>li img{
        display: inline-block;
        width: 30%;
        margin-right: 3%;
        height: 100px;
        border: solid 1px #ccc;
    }
    .text-muted{
        color: #ccc;
        font-size: 12px;
    }
</style>
