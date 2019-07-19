<template>
  <div id="app">
    <home></home>
    <router-view></router-view>
    <div class="search-input">
      <i class="iconfont icon-fangdajing">&#xe622;</i>
      <input type="text" placeholder="请输入城市名,快速查询天气信息" v-model="searchval" @input="searchajax">
      <span @click="searchArr=[];searchval=''">取消</span>
    </div>
    <ul class="search-list" v-if="searchval">
      <li style="text-align:center" v-if="searchArr.length==0">未找到城市</li>
      <li v-else v-for="(item,index) in searchArr" :key="index" @click="gotoHome(item)">{{item.district}}&nbsp;&nbsp;&nbsp;{{item.province}}</li>
    </ul>
    <div class="hot-list">
      <h3>猜你想找</h3>
      <div class="loading" v-if="citylist.length<=0">加载中...</div>
      <ul class="hot-list-box" v-else>
        <!-- <li class="active">定位</li> -->
        <template v-for="(item,index) in citylist">
          <li @click="gotoHome(item)" v-if="item.province == item.district" :key="index">
            {{item.district}}
          </li>
        </template>
        
      </ul>
      <h3>历史记录<span @click="clearHistory"><i class="iconfont">&#xe69c;</i>清空</span></h3>
      <ul class="hot-list-box">
        <li v-for="(item,index) in historyList" :key="index">{{item.district}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Home from './views/home'
import './font/iconfont.css'

export default {
  components: {
    Home,
  },
  data(){
    return{
      searchval:'',
      cityid:0,
      searchArr:[],
      showCard:false,
      citylist:[],
      searchList:[],
      historyList:[]
    }
  },
  created(){
      this.cityajax();
      this.getHistory();
  },
  watch:{
    searchval(){
      this.searchajax();
    }
  },
  methods: {
    clearHistory(){
      localStorage.removeItem('historyCity');
      this.historyList = [];
    },
    getHistory(){
      if(localStorage.historyCity){
        this.historyCity = JSON.parse(localStorage.historyCity);
      }
    },
    setHistroy(item){
      var arr = [];
      var str = '';
      if(localStorage.historyCity){
        arr = JSON.parse(localStorage.historyCity);
        arr.push(item);
        str = JSON.stringify(arr);
      }else{
        arr.push(item);
        str = JSON.stringify(arr)
      }
      localStorage.historyCity = str;
    },
    gotoHome(item){
      this.setHistroy(item);
      console.log(item);
    },
    cityajax(){
      var getUrl="/weather/citys?dtype=&key=3e8a4be6431f59d421bf97a0b1c6717e"
      this.axios.get(getUrl).then((res) => {
        console.log(res.data.result)
        this.citylist = res.data.result;
        // this.showHistory();
        this.showCard=true;
      })
    },
    searchajax(){
      this.searchArr=[];
      this.citylist.forEach(item=>{
        if(item.province.indexOf(this.searchval)>-1||item.district.indexOf(this.searchval)>-1){
          this.searchArr.push(item)
          this.showCard=true;
          // console.log(this.searchArr)
        }
      })
    }
  },
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  user-select: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.loading{
  text-align: center;
  line-height: 1rem;
  font-size: 0.4rem;
}
.search-input{
  width: 100%;
  padding-left: 0.3rem;
  position: relative;
  box-sizing: border-box;
  border-bottom: 0.01rem #ccc solid;
  padding-bottom: 0.13rem;
  margin-top: -0.13rem;
}
.search-input input{
  width: 6rem;
  height: 0.8rem;
  border: none;
  background: #eee;
  outline: none;
  border-radius: 0.1rem;
  padding-left:0.6rem;
  box-sizing: border-box;
  font-size: 0.28rem;
}
.search-input i{
  font-size: 0.28rem;
  position: absolute;
  left: 0.65rem;
  top: 0.7rem;
  color: #aaa;
}
.search-input span{
  font-size: 0.28rem;
  color: #000;
  padding: 0 0.15rem;
}
.search-list{
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  overflow: auto;
  padding-bottom: 2rem;
}
.search-list li{
  width: 100%;
  font-size: 0.25rem;
  padding: 0.25rem;
  border-bottom: 1px solid #ccc;
}
.hot-list{
  width: 100%;
  height: 100%;
  padding: 0.3rem;
  box-sizing: border-box;
  overflow: auto;
}
.hot-list h3{
  line-height: 0.46rem;
  text-align: left;
  font-size: 0.32rem;
  color: #000;
}
.hot-list h3 span{
  float: right;
  font-size: 0.25rem;
}
.hot-list h3 span i{
  font-size: 0.36rem;
  margin-right: 0.05rem;
}
.hot-list-box{
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 0.3rem;
}
.hot-list-box li{
  height: 0.59rem;
  padding: 0 0.14rem;
  list-style: none;
  border-radius: 0.1rem;
  margin-top: 0.16rem;
  text-align: center;
  line-height: 0.59rem;
  font-size: 0.25rem;
  background: #f2f2f2;
  border: 0.01rem #eee solid;
  box-sizing: border-box;
  margin-right: 0.11rem;
}
.hot-list-box .active{
  background: #4393ec;
  color: #fff;
  border: 0.01rem #6ba3e3 solid;
}
</style>
