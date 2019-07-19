<template>
    <div>
        <div class="header">
            <span><router-link to='/?id=%5Bobject%20Object%5D'><i class="iconfont fanhui">&#xe65b;</i></router-link>墨迹天气</span>
            <div class="right">
                <i class="iconfont gd">&#xe63b;</i> |
                <i class="iconfont yd">&#xe60a;</i>
            </div>
        </div>
        <div class="search">
            <i class="iconfont sousuo">&#xe606;</i>
            <input type="text" placeholder="请输入城市名，快速查看天气" id="search" v-model='searchKey'>
            <span class="quxiao" @click="searchKey = ''">取消</span>
        </div>
        <ul class="search-list" v-if="searchList.length">
            <li v-for="(item,index) in searchList" :key="item.id+'a'"  @click='click(item,index)'>{{item.province +''+item.city +''+ item.district}}</li>
        </ul>
        <div class="con">
            <div  class="top">
                <p>猜你想找</p>
                <div class="loading" v-if="cityList.length<=0">加载中...</div>
                <ul v-else>
                    <li>定位</li>
                    <template v-for='(item,index) in cityList'>
                        <li @click='click(item,index)'  :class="{active:(indexs==index)}" v-if="item.province == item.district" :key='index' >{{item.district}}</li>
                    </template>
                </ul>
            </div>
            
            <div class="bottom">
                <p>
                    历史记录
                    <span @click='clearHistroy'><i class="iconfont shanchu">&#xe696;</i>清空</span>
                </p>
                <ul>
                    <li @click='click(item,index)' v-for="(item,index) in histroyList" :key="index+'h'">{{item.district}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data(){
        return{
            indexs:-1,
            searchKey:'',
            cityList:[],
            searchList:[],
            histroyList:[],
            data:[],
        }
        
    },
    watch:{
        searchKey(){
            this.searchCity()
        }
    },
    created() {
        this.getCitysList();
        this.getHistroy();
    },
    methods:{
        //清空
        clearHistroy(){
            localStorage.removeItem('histroyCity')
            this.histroyList = [];
        },
        getHistroy(){
            if(localStorage.histroyCity){
                this.histroyList =JSON.parse(localStorage.histroyCity);
            }
            
        },
        saveHistroy(item){
            var arr = [];
            var str = '';
            if(localStorage.histroyCity){
                arr = JSON.parse(localStorage.histroyCity);
                arr.push(item);
                str = JSON.stringify(arr);
                
            }else{
                arr.push(item);
                str = JSON.stringify(arr);
            }
            localStorage.histroyCity = str;
            
        },
        click(item,index){
            this.indexs=index;
            this.saveHistroy(item);
            console.log(item);
            this.$nextTick(function(){
                this.$router.push({name:'index',query:{id:item}});
            })
        },
        getCitysList(){
            // http://apis.juhe.cn/simpleWeather/cityList?key=f1d197655f3dac22850212f0e04274e9
		     this.axios.get('./city.json').then((res)=>{
                console.log(res.data.result)
                this.cityList = res.data.result;
                this.data = res.data.result;
                
      	    })
        },
        searchCity(key){
            this.searchList=[];
            if(this.searchKey){
                this.cityList.forEach(element => {
                    var str = element.province +element.city + element.district
                    if(str.indexOf(this.searchKey)>-1){
                        this.searchList.push(element)
                    }
                });
            }
        },
    },
}
</script>


<style scoped>
.header{
    width: 7.5rem;
    height: 0.8rem;
    line-height: 0.8rem;
    position: fixed;
    top: 0;
    left: 0;
    background: #fff
}
.header span{
    font-size: 0.38rem;
    float: left;
    margin-left: 0.2rem;
    font-family:"Times New Roman",Georgia,Serif;
}
.header span a{
    text-decoration: none;
    color: #000;
    margin-right:0.15rem;
}
.fanhui{
    font-size: 0.3rem;
    line-height: 0.6rem;
}
.right{
  width: 1.5rem;
  height: 0.5rem;
  line-height: 0.45rem;
  float: right;
  margin: 0.15rem 0.3rem 0 0;
  border: 1px solid #ccc;
  border-radius: 0.3rem;
  font-size: 0.3rem;
  color: #ccc;
  font-weight: 100;
}
.gd{
  float: left;
  line-height: 0.5rem;
  width: 0.7rem;
  text-align: center;
}
.yd{
  float: right;
  line-height: 0.5rem;
  width: 0.7rem;
  text-align: center;
}
.iconfont {
  color: #000;
  font-size: 0.28rem;
}


.search{
    width: 7.5rem;
    min-height: 0.8rem;
    border-bottom: 1px solid #ccc;
    position: relative;
    margin-top: 0.8rem;
}
#search{
    width: 6rem;
    height: 0.4rem;
    background: #f2f2f2;
    color: #959595;
    font-size: 0.2rem;
    border-radius: 0.1rem;
    outline: none;
    border-style: none;
    padding-left: 0.8rem;
    position: absolute;
    top: 0.2rem;
    left: 0.2rem;
    
}
.search-list li{
    height: 0.6rem;
    line-height: 0.6rem;
    text-align: center;
    font-size: 0.26rem;
    border-bottom: 1px solid #ccc;
}
.sousuo{
    position: absolute;
    top: 0.24rem;
    left: 0.4rem;
    font-size: 0.3rem;
    color: #a1a1a1;
    z-index: 1;
}
.quxiao{
    font-size: 0.26rem;
    float: right;
    line-height: 0.8rem;
    margin-right: 0.4rem;
    color: #000;
}


.con{
    width: 7.5rem;
    height: 3rem;
    margin-top: 0.2rem;
}
.loading{
    text-align: center;
    font-size: 0.3rem;
}
.top,.bottom{
    width: 7.1rem;
    min-height: 3rem;
    margin: auto;
}
.top p{
    font-size: 0.32rem;
}
.top ul li{
    font-size: 0.26rem;
    list-style-type: none;
    width: 30%;
    height: 0.5rem;
    line-height: 0.5rem;
    margin: 1.6%;
    float: left;
    text-align: center;
    border-radius: 0.1rem;
    background: #f2f2f4;
    color: #666668;
}
.top ul li:nth-child(1){
    background: blue;
    color: #fff;
}
.top ul li.active{
    background: blue;
    color: #fff;
}
.bottom p{
    font-size: 0.32rem;
}
.bottom ul li{
    font-size: 0.26rem;
    list-style-type: none;
    width: 30%;
    height: 0.5rem;
    line-height: 0.5rem;
    margin: 1.6%;
    float: left;
    text-align: center;
    border-radius: 0.1rem;
    background: #f2f2f4;
    color: #666668;
}
.bottom span{
    float: right;
    font-size: 0.3rem;
    margin-right: 0.1rem;
}
.shanchu{
    font-size: 0.3rem;
    margin-right: 0.1rem;
}

</style>
