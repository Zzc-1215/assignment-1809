<template>
    <div class="first">
        <div class="head">
            <div class="s">
                <div class="tq">
                    <router-link :to="{path:'/con'}"> <span class="iconfont jt">&#xe616;</span></router-link>
                    <p class="weather">墨迹天气</p>
                </div>
                <div class="hr">
                    <i class="iconfont gd">&#xe61d;</i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| <i class="iconfont dw">&#xe61c;</i>
                </div>
            </div>
            <div class="search">
                <i class="iconfont sou">&#xe62a;</i>
                <input type="text" placeholder="请输入城市名" id="sea" v-model="searchCity"  @click="showArr = !showArr">
                <span class="ss" @click="searchCity = ''">取消</span>
            </div>
        </div>
        <ul class="searchList" v-if="searchCity">
            <li style="text-align:center" v-if="searchArr.length==0">未找到城市</li>
            <li v-for="item in searchArr" :key="item.id+'z'" @click="gotoHome(item);gotoCon(item.id)">{{item.district}}&nbsp;&nbsp;&nbsp;{{item.province}}</li>
        </ul>
        <div class="list" v-else>
            <div class="rs">
                <h1 class="cn">猜你想找</h1>
                <p v-if="!showList" style="font-size:0.5rem;text-align:center">加载中...</p>
                <ul class="rslist" v-if="showList">
                    <li class="active">定位</li>
                    <li v-for="(item,index) in newList" :key="index+'x'" @click="gotoHome(item);gotoCon(item)">{{item.district}}</li>
                </ul>
            </div>
            <div class="history">
                <div class="ht">
                    <h1 class="ls">历史记录</h1>
                    <div class="hisr">
                        <span class="qk" @click="clearHistory"><i class="iconfont sc">&#xe696;</i>&nbsp;清空</span>
                    </div>
                </div>
                <ul class="lsList">
                    <li v-for="(item,index) in historyList" :key="index + 'm'" @click="gotoCon(item)">{{item.district}}{{item.id}}</li>
                </ul>
            </div>
        </div>     
    </div>
</template>
<script>
export default {
    created(){
        this.getNewsList();
        this.getHistory();
    },
    data(){
        return{
            searchCity:'',
            newList:[],
            showList:false,
            searchArr:[],
            showArr:false,
            arrs:[],
            historyList:[]
        }
    },
    watch:{
        searchCity(){
            this.searchajax();
        }
    },
    methods:{
        gotoCon(id){
            this.$store.commit('changeWeather',id)
            this.$router.push('/detail')
        },
        clearHistory(){
            localStorage.removeItem('historyCity');
            this.historyList = [];
        },
        getHistory(){
            if(localStorage.historyCity){
                this.historyList = JSON.parse(localStorage.historyCity)
                console.log(localStorage.historyCity)
            }
        },
        saveHistory(item){
            var list = [];
            var str = '';
            if(localStorage.historyCity){
                list = JSON.parse(localStorage.historyCity);
                list.push(item);
                str = JSON.stringify(list);
            }else{
                list.push(item);
                str = JSON.stringify(list)
            }
            localStorage.historyCity = str
        },
        gotoHome(item){
            this.saveHistory(item);
            console.log(item)
        },
        getNewsList(){
            this.axios.get('/weather/citys?dtype=&key=df875753c0bf033ae50ccccf4e4c4132').then((res)=>{
                this.arrs = res.data.result;
                console.log(res)
                for(var i=0;i<7;i++){
                    this.newList.push(this.arrs[i])
                }
                this.showList = true
            })
        },
        searchajax(){
            this.searchArr=[];
            this.arrs.forEach(item=>{
                if(item.province.indexOf(this.searchCity)>-1||item.district.indexOf(this.searchCity)>-1){
                    this.searchArr.push(item)
                    this.showArr = true
                }
            })
        }
    }
}
</script>

<style>
    .head{
        width: 100%;
        height: 1.3rem;
        position: fixed;
        top: 0;
        left: 0;
        margin-bottom: 0.1rem;
        background-color: #fff;
    }
    .s{
        width: 100%;
        height: 0.6rem;
        margin-left: 0.1rem;
    }
    .tq{
        float: left;
        margin-top: -0.5rem;
    }
    .jt{
        font-size: 0.3rem;
        height: 0.6rem;
        display: inline-block;
    }
    .weather{
        font-size: 0.22rem;
        display: inline-block;
    }
    .hr{
        width: 1.6rem;
        height: 0.4rem;
        border: 0.01rem solid #ccc;
        border-radius: 0.3rem;
        margin-top: 0.1rem;
        float: right;
        font-size: 0.3rem;
        color:darkgray;
        position: relative;
        margin-right: 0.2rem;
    }
    .gd{
        position: absolute;
        margin-top: 0.1rem;
        line-height: 0.2rem;
        right: 1.1rem;
    }
    .dw{
        position: absolute;
        right: 0.2rem;
        margin-top: 0.1rem;
        line-height: 0.2rem;
    }
    .search{
        width: 7.3rem;
        height: 0.7rem;
        border-bottom: 0.01rem solid #ccc;
        margin-bottom: 0.1rem;
    }
    .searchList{
        margin-top: 1.3rem;
    }
    .searchList li{
        font-size: 0.2rem;
        text-align: center;
        margin-bottom: 0.05rem;
    }
    #sea{
        width: 5.2rem;
        height: 0.5rem;
        border-radius: 0.2rem;
        border: 0.01rem solid #ccc;
        position: absolute;
        left: 0.2rem;
        text-indent: 2em;
        background-color: #bbbaba;
    }
    .sou{
        position: absolute;
        left: 0.3rem;
        line-height: 0.5rem;
        color: #ccc;
        z-index: 1;
    }
    .ss{
        font-size: 0.24rem;
        position: absolute;
        right: 1.2rem;
        line-height: 0.6rem;
    }
    .list{
        position: relative;
        width: 100%;
        height: 7rem;
        margin-top: 1.4rem;
    }
    .rs{
        width: 7.3rem;
        padding-left: 0.1rem;
        height: 3rem;
        margin-bottom: 0.1rem;
        margin-top: 0.9rem;
    }
    .rslist{
        width: 7.3rem;
        padding-left: 0.1rem;
    }
    .rslist li{
        width: 1.8rem;
        height: 0.5rem;
        border: 1px solid #ccc;
        line-height: 0.5rem;
        text-align: center;
        font-size: 0.2rem;
        list-style: none;
        float: left;
        margin-left: 0.1rem;
        margin-bottom: 0.1rem;
        border-radius: 0.2rem;
    }
    .active{
        background-color: cadetblue;
    }
    .cn{
        font-size: 0.2rem;
        margin-bottom: 0.1rem;
    }
    .history{
        width: 7.3rem;
        padding-left: 0.1rem;
        height: 3rem;
    }
    .ls{
        font-size: 0.2rem;
        float: left;
    }
    .ht{
        width: 7.3rem;
        height: 0.6rem;
    }
    .lsList li{
        width: 1.2rem;
        height: 0.5rem;
        border: 1px solid #ccc;
        line-height: 0.5rem;
        text-align: center;
        font-size: 0.2rem;
        list-style: none;
        float: left;
        margin-left: 0.1rem;
        margin-bottom: 0.1rem;
        border-radius: 0.2rem;
    }
    .hisr{
        font-size: 0.2rem;
        float: right;
        margin-right: 0.2rem;
    }
</style>


