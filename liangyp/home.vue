<template>
    <div>
        <div style="height:50px;position:fixed;top:0;left:0;right:0;background:#fff;">
            <nav-bar :data="menu" @indexChange="i=$event"></nav-bar>
        </div>
        
        <ul class="news-list">
            <li v-for="(item,index) in newsList[i]" :key="index">
                <p>{{item.title}}</p>
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
                    title:'谭谈交通晕军拖与拖晕晕晕晕晕晕晕晕晕',
                    imgs:['/img/1.844778df.jpg','/img/14.e1af28a7.jpg','/img/15.68a30903.jpg'],
                    author:'辅导辅导',
                    time:'10小时前'
                },
                {
                    title:'让他忽然他忽然他也',
                    imgs:['/img/1.844778df.jpg','/img/14.e1af28a7.jpg','/img/15.68a30903.jpg'],
                    author:'辅热导',
                    time:'60小时前'
                },
                {
                    title:'热特让他热特',
                    imgs:['/img/1.844778df.jpg','/img/14.e1af28a7.jpg','/img/15.68a30903.jpg'],
                    author:'热天',
                    time:'50小时前'
                },
                {
                    title:'热特人特让他',
                    imgs:['/img/1.844778df.jpg','/img/14.e1af28a7.jpg','/img/15.68a30903.jpg'],
                    author:'辅导辅导',
                    time:'40小时前'
                },
                {
                    title:'报告根据规划',
                   imgs:['/img/1.844778df.jpg','/img/14.e1af28a7.jpg','/img/15.68a30903.jpg'],
                    author:'小龙',
                    time:'5小时前'
                },
                {
                    title:'而如同一条荣誉',
                    imgs:['/img/1.844778df.jpg','/img/14.e1af28a7.jpg','/img/15.68a30903.jpg'],
                    author:'老王',
                    time:'10小时前规范化'
                }],
                [{
                    title:'呵呵呵呵呵',
                    imgs:['/img/1.844778df.jpg','/img/14.e1af28a7.jpg','/img/15.68a30903.jpg'],
                    author:'辅导辅导',
                    time:'10小时前'
                },
                {
                    title:'地方官34',
                    imgs:['/img/1.844778df.jpg','/img/14.e1af28a7.jpg','/img/15.68a30903.jpg'],
                    author:'辅热导',
                    time:'60小时前'
                },
                {
                    title:'待发货43',
                    imgs:['/img/1.844778df.jpg','/img/14.e1af28a7.jpg','/img/15.68a30903.jpg'],
                    author:'辅导辅导',
                    time:'50小时前'
                },
                {
                    title:'法国恢复恢复4546',
                    imgs:['/img/1.844778df.jpg','/img/14.e1af28a7.jpg','/img/15.68a30903.jpg'],
                    author:'辅导辅导',
                    time:'40小时前'
                },
                {
                    title:'广发华福饭4564',
                    imgs:['/img/1.844778df.jpg','/img/14.e1af28a7.jpg','/img/15.68a30903.jpg'],
                    author:'小龙',
                    time:'5小时前'
                },
                {
                    title:'钢结构',
                    imgs:['/img/1.844778df.jpg','/img/14.e1af28a7.jpg','/img/15.68a30903.jpg'],
                    author:'老王',
                    time:'10小时前'
                }],
                [{
                    title:'几个号',
                    imgs:['/img/1.844778df.jpg','/img/14.e1af28a7.jpg','/img/15.68a30903.jpg'],
                    author:'辅导辅导',
                    time:'10小时前'
                },
                {
                    title:'金龟换酒',
                    imgs:['/img/1.844778df.jpg','/img/14.e1af28a7.jpg','/img/15.68a30903.jpg'],
                    author:'辅热导',
                    time:'60小时前'
                },
                {
                    title:'好几个好几个',
                    imgs:['/img/1.844778df.jpg','/img/14.e1af28a7.jpg','/img/15.68a30903.jpg'],
                    author:'辅导辅导',
                    time:'50小时前'
                },
                {
                    title:'客观环境',
                    imgs:['/img/1.844778df.jpg','/img/14.e1af28a7.jpg','/img/15.68a30903.jpg'],
                    author:'辅导辅导',
                    time:'40小时前'
                },
                {
                    title:'规划局规划和健康更好看顾客给客户看过',
                    imgs:['/img/1.844778df.jpg','/img/14.e1af28a7.jpg','/img/15.68a30903.jpg'],
                    author:'小龙',
                    time:'5小时前'
                },
                {
                    title:'后即可缓解',
                    imgs:['/img/1.844778df.jpg','/img/14.e1af28a7.jpg','/img/15.68a30903.jpg'],
                    author:'老王',
                    time:'10小时前'
                }],
                [{
                    title:'76575',
                    imgs:['/img/1.844778df.jpg','/img/14.e1af28a7.jpg','/img/15.68a30903.jpg'],
                    author:'辅导辅导',
                    time:'10小时前'
                },
                {
                    title:'6546',
                    imgs:['/img/1.844778df.jpg','/img/14.e1af28a7.jpg','/img/15.68a30903.jpg'],
                    author:'辅热导',
                    time:'60小时前'
                },
                {
                    title:'546',
                    imgs:['/img/1.844778df.jpg','/img/14.e1af28a7.jpg','/img/15.68a30903.jpg'],
                    author:'辅导辅导',
                    time:'50小时前'
                },
                {
                    title:'6654',
                    imgs:['/img/1.844778df.jpg','/img/14.e1af28a7.jpg','/img/15.68a30903.jpg'],
                    author:'辅导辅导',
                    time:'40小时前'
                },
                {
                    title:'6456',
                    imgs:['/img/1.844778df.jpg','/img/14.e1af28a7.jpg','/img/15.68a30903.jpg'],
                    author:'小龙',
                    time:'5小时前'
                },
                {
                    title:'7554',
                    imgs:['/img/1.844778df.jpg','/img/14.e1af28a7.jpg','/img/15.68a30903.jpg'],
                    author:'老王',
                    time:'10小时前'
                }],
                [{
                    title:'54',
                    imgs:['/img/1.844778df.jpg','/img/14.e1af28a7.jpg','/img/15.68a30903.jpg'],
                    author:'辅导辅导',
                    time:'10小时前'
                },
                {
                    title:'432646',
                    imgs:['/img/1.844778df.jpg','/img/14.e1af28a7.jpg','/img/15.68a30903.jpg'],
                    author:'辅热导',
                    time:'60小时前'
                },
                {
                    title:'4324234',
                    imgs:['/img/1.844778df.jpg','/img/14.e1af28a7.jpg','/img/15.68a30903.jpg'],
                    author:'辅导辅导',
                    time:'50小时前'
                },
                {
                    title:'43242',
                    imgs:['/img/1.844778df.jpg','/img/14.e1af28a7.jpg','/img/15.68a30903.jpg'],
                    author:'辅导辅导',
                    time:'40小时前'
                },
                {
                    title:'fdsgfds23423gfdgdf',
                    imgs:['/img/1.844778df.jpg','/img/14.e1af28a7.jpg','/img/15.68a30903.jpg'],
                    author:'小龙',
                    time:'5小时前'
                },
                {
                    title:'2344234',
                    imgs:['/img/1.844778df.jpg','/img/14.e1af28a7.jpg','/img/15.68a30903.jpg'],
                    author:'老王',
                    time:'10小时前'
                }],
                [{
                    title:'几个号',
                    imgs:['/img/1.844778df.jpg','/img/14.e1af28a7.jpg','/img/15.68a30903.jpg'],
                    author:'辅导辅导',
                    time:'10小时前'
                },
                {
                    title:'金龟换酒',
                    imgs:['/img/1.844778df.jpg','/img/14.e1af28a7.jpg','/img/15.68a30903.jpg'],
                    author:'辅热导',
                    time:'60小时前'
                },
                {
                    title:'好几个好几个',
                    imgs:['/img/1.844778df.jpg','/img/14.e1af28a7.jpg','/img/15.68a30903.jpg'],
                    author:'辅导辅导',
                    time:'50小时前'
                },
                {
                    title:'客观环境',
                    imgs:['/img/1.844778df.jpg','/img/14.e1af28a7.jpg','/img/15.68a30903.jpg'],
                    author:'辅导辅导',
                    time:'40小时前'
                },
                {
                    title:'规划局规划和健康更好看顾客给客户看过',
                    imgs:['/img/1.844778df.jpg','/img/14.e1af28a7.jpg','/img/15.68a30903.jpg'],
                    author:'小龙',
                    time:'5小时前'
                },
                {
                    title:'后即可缓解',
                    imgs:['/img/1.844778df.jpg','/img/14.e1af28a7.jpg','/img/15.68a30903.jpg'],
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
        list-style: none;
        border-bottom: solid 10px #f4f4f4;
    }
    ul.news-list li p{
        line-height: 2em;
        line-height: 1.5em;
        margin-bottom: 10px;
    }
    ul.news-list li img{
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
