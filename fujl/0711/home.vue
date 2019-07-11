<template>
    <div>
        
        <div class="news-list">
            <div style="position:fixed;top:0;left:0;background:#FFF;">
                <nav-bar :data = "metun"></nav-bar>
            </div>
            <ul>
                <li v-for="(item,index) in newList" :key="index">
                    <!-- {{item}} -->
                    <p>{{item.title}}</p>
                    <div>
                        <img :src="item.img[0]">
                        <img :src="item.img[1]">
                        <img :src="item.img[2]">
                        <!-- <img src="./3.jpg"> -->
                    </div>
                    <p>{{item.author}}&nbsp;&nbsp;&nbsp;&nbsp;{{item.time}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import navBar from './navBar.vue'
    
    export default{
        data(){
            return{
                metun:['推荐','北京','视频','互联网','游戏','搞笑','科技','动漫','少儿','记录',''],
                newList:[
                    {
                        title:'呢U放你宿舍都不符合苏覅苏荷风少年独服苏俄',
                        img:['http://img3.imgtn.bdimg.com/it/u=3677209778,3519789803&fm=26&gp=0.jpg','http://img3.imgtn.bdimg.com/it/u=400062461,2874561526&fm=26&gp=0.jpg','http://img3.imgtn.bdimg.com/it/u=1820523987,3798556096&fm=26&gp=0.jpg'],
                        author:'啊是的哇大时代',
                        time:'一天前'
                    },
                    {
                        title:'商务部：中美双方经贸团队将重启经贸磋商',
                         img:['http://img3.imgtn.bdimg.com/it/u=3677209778,3519789803&fm=26&gp=0.jpg','http://img3.imgtn.bdimg.com/it/u=400062461,2874561526&fm=26&gp=0.jpg','http://img3.imgtn.bdimg.com/it/u=1820523987,3798556096&fm=26&gp=0.jpg'],
                        author:'怒叫恶风起',
                        time:'2小时前'
                    },
                    {
                        title:'商务部：中美双方经贸团队将重启经贸磋商商务部：中美双方经贸团队将重启经贸磋商商务部：中美双方经贸团队将重启经贸磋商',
                         img:['http://img3.imgtn.bdimg.com/it/u=3677209778,3519789803&fm=26&gp=0.jpg','http://img3.imgtn.bdimg.com/it/u=400062461,2874561526&fm=26&gp=0.jpg','http://img3.imgtn.bdimg.com/it/u=1820523987,3798556096&fm=26&gp=0.jpg'],
                        author:'高的人过的人更多',
                        time:'4分钟前'
                    },
                ]
            }
        },
        components:{
            navBar
        }
    }
</script>
<style scoped>
    .news-list{
        background:#f4f4f4;
    }
    .news-list ul {
        margin-top:60px;
    }
    .news-list ul li{
        padding:0 20px;
        background:#FFF;
        margin:10px 0;
    }
    .news-list ul li img{
        display: inline-block;
        width: 30%;
        height:200px;
        margin-right: 20px;
    }
    .news-list ul li p:nth-child(1){
        font-size:20px;
        line-height: 2.2em;
        margin-bottom:10px;
        text-align:left;
    }
    .news-list ul li p:nth-child(3){
        font-size:16px;
        line-height:50px;
    }
</style>