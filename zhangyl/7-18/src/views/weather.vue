<template>
  <div class="box">
    <div class="header clearfix">
      <div class="header-left">
        <router-link to="/index">
          <span class="iconfont icon-zuojiantou"></span>
        </router-link>墨迹天气
      </div>
      <div class="header-right">
        <span class="iconfont icon-sangedian"></span>
        <span class="circle iconfont icon-yuandian"></span>
      </div>
    </div>
    <div class="search clearfix">
      <input type="text" class="input" placeholder="请输入城市名，快速查询天气信息" v-model="searchKey" />
      <span class="iconfont icon-search"></span>
      <p class="quxiao" @click="searchKey=''">取消</p>
    </div>
    <ul class="search-list" v-if="searchList.length">
      <!-- <li style="text-align:center;font-size:0.3rem;" v-if>未找到城市</li> -->
      <li
        v-for="item in searchList"
        :key="item.id+'a'"
        @click="gotoHome(item)"
      >{{item.province+' '+item.city+' '+item.district}}</li>
    </ul>
    <div class="content">
      <div class="first">
        <h3>猜你想找</h3>
        <div class="list clearfix">
          <div class="loading" v-if="cityList.length<=0">加载中...</div>
          <ul v-else>
            <!-- <li>定位</li> -->
            <template
              v-for="(item,index) in cityList"
              :class="{active:indexs==index}"
              @click="dianji(index)"
            >
              <li
                @click="gotoHome(item)"
                v-if="item.province==item.district"
                :key="index"
              >{{item.province}}</li>
            </template>
          </ul>
        </div>
      </div>
      <div class="second">
        <div class="history clearfix">
          <h3>历史记录</h3>
          <span class="iconfont icon-qingchu" @click="clearHistory">清除</span>
        </div>
        <div class="list">
          <ul>
            <li v-for="(item,index) in historyList" :key="index+'h'">{{item.district}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // indexs:0,
      cityList: [],
      searchKey: "",
      searchList: [],
      historyList: []
    };
  },
  watch: {
    searchKey() {
      this.searchCity();
    }
  },
  // methods:{
  //      dianji(index,value){
  //         this.indexs=index;
  //         console.log(this.indexs);
  //     }
  // },
  created() {
    this.getCityList();
    this.getHistory();
  },
  methods: {
    // 清除历史纪录
    clearHistory() {
      localStorage.removeItem("historyCity");
      this.historyList = [];
    },
    getHistory() {
      if (localStorage.historyCity) {
        this.historyList = JSON.parse(localStorage.historyCity);
      }
    },
    // 保存历史纪录
    saveHistory(item) {
      var arr = [];
      var str = "";
      if (localStorage.historyCity) {
        arr = JSON.parse(localStorage.historyCity);
        arr.push(item);
        str = JSON.stringify(arr);
      } else {
        arr.push(item);
        str = JSON.stringify(arr);
      }

      localStorage.historyCity = str;
    },
    gotoHome(item) {
      this.saveHistory(item);
      console.log(item);
    },
    getCityList() {
      this.$http
        .get("./weather.json")
        .then(res => {
          console.log(res);
          console.log(res.data.result);
          this.cityList = res.data.result;
        })
        .catch(err => {
          console.log(err);
        });
    },
    searchCity() {
      this.searchList = [];
      if (this.searchKey) {
        this.cityList.forEach(element => {
          var str = element.province + element.city + element.district;
          if (str.indexOf(this.searchKey) > -1) {
            this.searchList.push(element);
          }
        });
      }
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.box {
  overflow: hidden;
}
.header {
  width: 100%;
  height: 0.85rem;
}
.header-left {
  float: left;
  height: 0.85rem;
  line-height: 0.85rem;
  font-size: 0.4rem;
}
.header-left span {
  display: inline-block;
  font-size: 0.4rem;
  margin-left: 0.2rem;
  line-height: 0.85rem;
}
.header-right {
  float: right;
  width: 1.75rem;
  height: 0.5rem;
  margin-top: 0.3rem;
  border-radius: 0.3rem;
  border: 1px solid #ccc;
  margin-right: 0.2rem;
}

.header-right > span {
  float: left;
  margin-left: 0.2rem;
  font-size: 0.5rem;
}
.loading {
  font-size: 0.4rem;
  text-align: center;
}
.search {
  margin-top: 0.2rem;
  height: 0.85rem;
  border-bottom: 0.01rem solid #ccc;
  position: relative;
}
.input {
  width: 5rem;
  height: 0.55rem;
  vertical-align: top;
  background: #f2f2f2;
  float: left;
  outline: none;
  border: none;
  margin-top: 0.15rem;
  margin-left: 0.3rem;
  border-radius: 0.1rem;
  color: #999999;
  padding-left: 0.5rem;
  display: inline-block;
}
.search > span {
  position: absolute;
  left: 0.4rem;
  top: 0.3rem;
}
.search-list li {
  height: 0.6rem;
  line-height: 0.6rem;
  font-size: 0.3rem;
  text-align: center;
  color: rgba(77, 72, 72, 0.637);
  border-bottom: 0.01rem solid #ccc;
}
.quxiao {
  font-size: 0.35rem;
  text-align: center;
  line-height: 0.85rem;
}
.first {
  min-height: 4rem;
}
.first h3 {
  font-size: 0.3rem;
  padding-top: 0.2rem;
  padding-left: 0.3rem;
  line-height: 0.5rem;
}
.list {
  min-height: 2.1rem;
}
.list li {
  width: 30%;
  height: 0.55rem;
  line-height: 0.55rem;
  border: 0.01rem solid #ccc;
  background: #f2f2f2;
  color: #666666;
  font-size: 0.22rem;
  text-align: center;
  float: left;
  margin: 5px;
  list-style: none;
  border-radius: 5px;
}
.list li.active {
  background: rgb(38, 0, 255);
  color: #fff;
}
.second {
  min-height: 3rem;
}
.history {
  height: 0.5rem;
  width: 6.4rem;
}
.history h3 {
  font-size: 0.3rem;
  padding-left: 0.3rem;
  line-height: 0.5rem;
  float: left;
}
.history span {
  float: right;
  padding-top: 0.1rem;
  padding-right: 0.3rem;
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
</style>
