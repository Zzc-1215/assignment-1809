<template>
  <div class="container">
    <div class="content">
      <router-link to="/" style="color:#fff;">
        <span class="back fl">
          &lt;
            房山区 现代管理大学
        </span>
      </router-link>
      <div class="fr head_r">
        <span>&bull;&bull;&bull;</span>
        <router-link to="/"
                     class="circle">&omicron;</router-link>
      </div>
    </div>
    <div class="search clearfix">
      <div class="clearfix">
        <div class="search_box  fl">
          <input id="ipt"
                 type="search"
                 placeholder="请输入城市名，快速查询天气信息"
                 v-model="searchKey"
                 @input="searchCity">
        </div>
        <div class="searchBack fr clearfix"
             @click="searchList = ''">取消</div>
      </div>
      <ul class="search-list" v-if="searchKey.length">
        <li v-for="item in searchList" :key="item.id+'a'" @click="gotoHome(item)">
          {{item.province + item.city + item.district}}
        </li>
      </ul>
    </div>
    <div class="guess">
      <h3 style="font-size=0.3rem">猜你想找</h3>
      <div class="loading" v-if="cityList.length<=0">
        加载中。。。
      </div>
      <ul class="list" v-else>
        <template v-for="(item,index) in cityList">
          <li @click="gotoHome(item)" v-if="item.province == item.district && item.province!='吉林'" :key="index">
            {{item.province}}
          </li>
        </template>
      </ul>
    </div>
    <div class="history">
      <div class="history_top clearfix">
        <span class="fl history_con clearfix">历史记录</span>
        <span class="fr empty" @click="clearHistory">&otimes;清空</span>
      </div>
      <div class="history_bottom">
        <ul>
          <li v-for="(item,index) in historyList" :key="index+'h'">
            {{item.district}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      searchKey: '',//v-model
      cityList: [],//总
      searchList: [],//新
      historyList:[],//历史记录
    }
  },
  watch: {
    searchKey () {
      this.searchCity()
    }
  },

  created () {
    this.getCityList();
    this.getHistory();
  },
  methods: {
    clearHistory(){
      localStorage.removeItem('historyCity');
      this.historyList = [];
    },
    getHistory(){
      if(localStorage.historyCity){
        // console.log(localStorage.historyCity)
        this.historyList = JSON.parse(localStorage.historyCity);
      }
    },
    saveHistory(item){
      var arr=[];
      var str;
      if(localStorage.historyCity){
        arr = JSON.parse(localStorage.historyCity);
        arr.push(item);
        str = JSON.stringify(arr);
      }else{
        arr.push(item);
        str = JSON.stringify(arr);
      }
      localStorage.historyCity = str;

    },
    gotoHome(item){
      this.saveHistory(item);
      // console.log(item);
      // this.$route.push('/weatherDetail');
      this.$router.push({name:'head',params:{address:item}});
    },
    getCityList () {
      // get("/simpleWeather/cityList?key=3aea42bf8b82624c939c42a0f1c57e98")
      this.$http.get("./data.json").then((res) => {
        console.log(res.data.result);
        this.cityList = res.data.result;
      }).catch((err) => {
        console.log(err)
      })
    },
    searchCity () {
      // searchKey 北  （京）
      this.searchList = [];
      this.cityList.forEach(element => {
        
        var str = element.province + element.city + element.district;
        if (str.indexOf(this.searchKey) > -1) {
          this.searchList.push(element);
        }
      });
    }
  },
}
</script>


<style>
.fl {
  float: left;
}
.fr {
  float: right;
}

.clearfix {
  zoom: 1;
}

.clearfix::after,
.clearfix::before {
  content: "";
  display: block;
  width: 0;
  height: 0;
  visibility: hidden;
  clear: both;
}
.container {
  background: url("https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1460611193,3175527856&fm=26&gp=0.jpg");
  background-size: 100% 100%;
}
.content {
  width: 7.5rem;
  height: 1.1rem;
  line-height: 1.1rem;
  font-size: 0.3rem;
}
.back {
  font-size: 0.4rem;
  margin-left: 0.5rem;
}
.back a {
  text-decoration: none;
  color: #000;
}

.head_r {
  width: 2rem;
  height: 0.7rem;
  margin-top: 0.15rem;
  border: 2px solid #ccc;
  border-radius: 0.45rem;
  margin-right: 0.3rem;
  vertical-align: top;
}
.head_r > span {
  color: #000;
  width: 40%;
  box-sizing: border-box;
  height: 0.7rem;
  display: inline-block;
  vertical-align: top;
  line-height: 0.7rem;
  text-align: center;
}
.head_r > a {
  display: inline-block;
  width: 50%;
  height: 0.7rem;
  line-height: 0.7rem;
  text-align: center;
  text-decoration: none;
  color: #000;
  vertical-align: top;
  font-size: 0.5rem;
  border-left: 1px solid #ccc;
}

.search {
  width: 7.5rem;
  height: auto;
  border-bottom: 2px solid #ccc;
}
.search_box {
  width: 6rem;
  height: auto;
}
.search_box > input {
  width: 5.8rem;
  margin-left: 0.2rem;
  height: 1rem;
  outline: none;
  border: none;
  background: #f2f2f2;
  vertical-align: top;
  font-size: 0.3rem;
  border-radius: 0.5rem;
  text-indent: 1.5em;
}
.search > ul {
  width: 100%;
  height: auto;
}
.loading {
  text-align: center;
}
.list {
  height: auto;
  padding: 0.9rem 0;
}
.list li {
  width: 1.6rem;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
  font-size: 0.3rem;
  margin: 0.2rem;
  background: #f2f2f2;
  display: inline-block;
  border-radius: 0.3rem;
}
.search-list li {
  font-size: 0.3rem;
  text-align: center;
  color: #fff;
  background: yellowgreen;
}
.searchBack {
  width: 1.5rem;
  height: 0.92rem;
  line-height: 0.92rem;
  font-size: 0.4rem;
  text-align: center;
  color: #fff;
}

.guess {
  width: 6rem;
  margin: auto;
  font-size: 0.46rem;
}
.guess > h3 {
  font-size: 0.3rem;
}

.guess_con {
  height: auto;
  width: 6rem;
  margin-top: 0.2rem;
}
.guess_con span {
  font-size: 0.2rem;
  display: inline-block;
  padding: 5px 30px;
  margin: 10px;
  background: #f2f2f2;
  border-radius: 0.2rem;
}
.guess_con span.active {
  background: #4394e5;
  border-radius: 0.2rem;
}

.history {
  width: 6rem;
  height: auto;
  min-height: 10rem;
  margin: auto;
  padding-top: 0.2rem;
  border-top: 2px solid #ccc;
}
.history_con {
  font-size: 0.3rem;
}
.empty {
  font-size: 0.3rem;
}

.history_bottom ul li{
  list-style-type: none;
  font-size: 0.3rem;
  display: inline-block;
  width: 1.6rem;
  height: 0.6rem;
  line-height: 0.6rem;
  background: #ccc;
  border-radius: 0.2rem;
  text-align: center;
  margin-left: 0.2rem;
}
</style>
