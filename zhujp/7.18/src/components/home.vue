<template>
    <div class="box">
        <div class="header">
            <p><span class="iconfont">&#xe602;</span>墨迹天气</p>
        </div>
        <div class="search">
            <input type="text" placeholder="请输入城市名，快速查询天气信息"/>
            <span>取消</span>
            <i class="iconfont">&#xe600;</i>
        </div>
        <div class="content">
            <p>猜你想找</p>
            <h3 v-if="!showList" style="font-size:0.2rem" @click="getNewsList">加载中...</h3>
            <div class="item clearfix" v-if="showList">
                <span class="active">定位</span>
                <span v-for="(item,index) in list" :key="index">{{item[index].district}}</span>
            </div>
        </div>
        <div class="footer clearfix">
            <p>历史记录</p>
            <span><i class="iconfont">&#xe601;</i>清空</span>
        </div>
        <ul class="searchList" v-if="searchCity">
            <li style="text-align:center" v-if="searchArr.length==0">未找到城市</li>
            <li v-else v-for="item in searchArr" :key="item.id+'se'" @click="particular(item)">{{item.district+' '+item.province}}</li>
        </ul>
    </div>
</template>
<script>
import city from './components/city.vue'
export default {
    data(){
        return {
            searchCity:'',
            currentIndex:-1,
            list:[],
            showList:false,
            searchArr:[]
        }
    },
    create(){
        this.getNewsList();
    },
    methods:{
        dianji(index){
            this.currentIndex = index;
        },
        getNewsList(){
            this.axios.get('/simpleWeather/cityList?key=ae424baab7ceba58a7fa97b0c08e0ceb').then((res)=>{
                var arrs = res.data.result;
                for(var i=0;i<7;i++){
                    this.list.push(arrs)
                }
                this.showList = true
        })
        console.log(this.newList)
        },
        searchajax(){
            this.searchArr=[];
            this.newList.forEach(item=>{
                if(item.province.indexOf(this.searchCity)>-1||item.district.indexOf(this.searchCity)>-1){
                    this.searchArr.push(item)
                }
            })
        }
    }
}
</script>

<style>
    .box{
        width:6.4rem;
        padding:0.15rem 0rem 0rem 0rem;
    }
    .header{
        width:6.4rem;
        padding-bottom:.35rem;
    }
    .header p{
        font-size:0.4rem;
        margin-left:0.25rem;
    }
    .header p span{
        padding-right:0.3rem;
        display:block;
        margin-top:0.1rem;
        float:left;
        font-size:0.35rem;
    }
    .search{
         border-bottom:1px solid #ccc;
         height:0.65rem;
         margin-bottom:0.5rem;
    }
    .search span{
        font-size:0.3rem;
        padding-left:0.2rem;
        padding-top:0.1rem;
    }
    .search input{
        width:5rem;
        height:0.5rem;
        margin-left:0.25rem;
        font-size:0.2rem;
        text-indent:2.5em;
        position:relative;
        background:#ccc;
        border:1px solid #ccc;
        border-radius:
    }
    .search i{
        position:absolute;
        left:0.4rem;
        top:1.15rem;
    }
    .content{
        width:6rem;
        height:4rem;
        margin:auto;
        margin-bottom:0.2rem;
    }
    .content p{
        font-size:0.3rem;
        margin-top:0.3rem;
    }
    .item{

    }
    .item span{
        font-size:0.25rem;
        display:block;
        float:left;
        text-align:center;
        border-radius:0.15rem;
        width:1.8rem;
        height:0.84rem;
        line-height:0.84rem;
        background:#ccc;
        margin:0.16rem 0.16rem 0.16rem 0;
    }
    .item .active{
        color:#fff;
        background:cyan;
    }
    .footer{
        margin-left:0.25rem;
        margin-right:0.25rem;
    }
    .footer p{
        font-size:0.4rem;
        float:left;
    }
    .footer span{
        display:block;
        float:right;
        font-size:0.4rem;
    }
    .footer i{
        font-size:0.4rem;
        display:block;
        float:left;
        margin-top:0.1rem;
    }
</style>