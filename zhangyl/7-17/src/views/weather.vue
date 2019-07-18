<template>
    <div class='box'>
        <div class='header clearfix'>
            <div class='header-left'>
                <router-link to='/index'><span class='iconfont icon-zuojiantou'></span></router-link>墨迹天气
            </div>
            <div class='header-right'>
                <span class='iconfont icon-sangedian'></span>
                <span class='circle iconfont icon-yuandian'></span>
            </div>
        </div>
        <div class='search clearfix'>
            <input type="text" class='input' placeholder="请输入城市名，快速查询天气信息">
            <span class='iconfont icon-search'></span>
            <router-link to='/index'><p class='quxiao'>取消</p></router-link>
        </div>
        <div class='content'>
            <div class='first'>
                <h3>猜你想找</h3>
                <div class='list'>
                    <ul>
                        <li>定位</li>
                        <li v-for='(item,index) in newsList' v-if ='index<6' :key='index' :class="{active:(indexs==index)}" @click='dianji(index)'>{{item.district}}</li>
                    </ul>
                </div>
            </div>
            <div class='second'>
                <div class='history'>
                    <h3>历史记录</h3>
                    <span class='iconfont icon-qingchu'>清除</span>
                </div>
                <div class='list'>
                    <ul>
                        <li>北京市</li>
                        <li>广州市</li>
                        <li>深圳市</li>
                        <li>上海市</li>
                        <li>南京市</li>
                        <li>杭州市</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            indexs:0,
            newsList:[]
        }
    },
    created() {
        this.getNewsList();
    },
    methods:{
        getNewsList(){
            this.axios.get('/simpleWeather/cityList?key=9766a13cacb4c75e8edcfdbee892dea2').then((res)=>{
                console.log(res.data.result);
                 this.newsList = res.data.result;
            })
        },
         dianji(index,value){
            this.indexs=index;
        }
    },
}
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .box{
        box-sizing: border-box;
        overflow: hidden;
    }
    .header{
        width:100%;
        height: 0.85rem;
    }
    .header-left{
        float: left;
        height: 0.85rem;
        line-height: 0.85rem;
        font-size: 0.4rem;
    }
    .header-left span{
        display: inline-block;
        font-size: 0.4rem;
        margin-left: 0.2rem;
        line-height: 0.85rem;
    }
    .header-right{
        float: right;
        width:1.75rem;
        height: 0.5rem;
        margin-top: 0.3rem;
        border-radius: 0.3rem;
        border:1px solid #ccc;
        margin-right:0.2rem;
    }

    .header-right>span{
        float: left;
        margin-left:0.2rem;
        font-size: 0.5rem;
    }
   
    .search{
        margin-top:0.2rem;
        height: 0.85rem;
        border-bottom:0.01rem solid #ccc;
        position: relative;
    }
    .input{
        width:5rem;
        height: 0.55rem;
        vertical-align: top;
        background: #f2f2f2;
        float: left;
        outline: none;
        border:none;
        margin-top:0.15rem;
        margin-left:0.3rem;
        border-radius: 0.1rem;
        color:#999999;
        text-align: center;
        display: inline-block;
    }
    .search>span{
        position: absolute;
        left: 0.4rem;
        top:0.3rem;
    }
    .quxiao{
        font-size: 0.35rem;
        text-align: center;
        line-height: 0.85rem;
    }
    .content{

    }
    .first{
        height: 3.3rem;
    }
    .first h3{
        font-size: 0.3rem;
        padding-top:0.2rem;
        padding-left:0.3rem;
        line-height: 0.5rem;
    }
    .list{
        height: 2.1rem;
    }
    .list li{
        width:30%;
        height: 0.55rem;
        line-height: 0.55rem;
        border:0.01rem solid #ccc;
        background: #f2f2f2;
        color: #666666;
        font-size: 0.22rem;
        text-align: center;
        float: left;
        margin: 5px;
        list-style: none;
        border-radius: 5px;
    }
    .history{
        height: 0.5rem;
        width:6.4rem;
    }
   .history h3{
        font-size: 0.3rem;
        padding-left:0.3rem;
        line-height: 0.5rem;
        float: left;
    }
    .history span{
        float: right;
        padding-top:0.1rem;
        padding-right:0.3rem;
    }
    
    .clearfix{
         zoom:1;
      }
	
    .clearfix::after,.clearfix::before{

        content:'';
            
        display:block;
            
        width:0;
            
        height:0;
            
        visibility:hidden;
            
        clear:both;
        
    }
   
   

</style>
