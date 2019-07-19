<template>
  <div>
    <header class="clearfix">
      <div class="header_left fl">
        <router-link to="/">&lt;</router-link>
        <span>墨迹天气</span>
      </div>
      <div class="header_right fr">
        <b> &weierp;</b> &nbsp; | &nbsp; <b> &empty; </b>
      </div>
    </header>
    <div class="search clearfix">
      <input type="text"
             placeholder="请输入城市名，快速查询天气信息"
             class="fl"
             v-model="searchKey">
      <!-- 点击的时候清空 searchKey  因为监听就会清空列表 -->
      <span class="fr"
            @click="searchKey=''">取消</span>
    </div>
    <!-- 判断如果是真的就隐藏 -->
    <div class="searchList"
         v-if="searchList.length">
      <div v-for="i in searchList"
           @click="gotoIndex(i)"
           :key="i.id+'a'">{{i.province+' '+i.district +' '+i.city}}</div>
    </div>
    <div class="guess">
      <h3>猜你想找</h3>
      <!-- 判断如果数据的长度小于或者等于0的时候就显示 -->
      <div class="loading"
           v-if="cityList.length<=0">加载中。。。</div>
      <ul class="clearfix">
        <!-- <li class="active">定位</li> -->
        <template v-for="(i,$index) in cityList">
          <li :key="$index"
              @click="gotoIndex(i)"
              v-if="i.province == i.district && i.province!='吉林'">
            {{i.province}}
            <!-- {{i.id-'1'}} -->
          </li>
        </template>

      </ul>
    </div>
    <div class="history">
      <p class="clearfix">
        <span class="record fl">历史记录</span>
        <span class="del fr"
              @click="clearHistroy"><b>&otimes;</b>清空</span>
      </p>
      <ul class="list clearfix">
        <li v-for="(i,$index) in histroyList"
            :key="$index+'z'">{{i.district}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      cityList: [],  //放数据的
      searchKey: '', //搜索关键字的
      searchList: [],//搜索的列表
      histroyList: [],//拿本地的历史纪录
    }
  },
  //监听 searchKey 改变就调用 searchListChange方法改变列表
  watch: {
    searchKey () {
      this.searchListChange();
    }
  },
  //创建完成后 调取 getcity的方法
  created () {
    this.getCity();
    this.getHistroy();
  },
  methods: {
    //清除本地存储
    clearHistroy () {
      localStorage.removeItem('histroySearch');
      this.histroyList = [];
    },
    //进页面拿数据
    getHistroy () {
      if (localStorage.histroySearch) {
        this.histroyList = JSON.parse(localStorage.histroySearch);
      }
      // location.href = ''

    },
    //返回首页
    gotoIndex (i) {
      this.saveHistroy(i)
      // console.log(i)  打印点击那一项的参数
    },
    //接收数据 存储本地
    saveHistroy (i) {
      //本地数据类型是字符串 所以需要转 一下字符串
      var array = [];
      var str
      if (localStorage.histroySearch) {
        array = JSON.parse(localStorage.histroySearch);
        array.push(i);
        str = JSON.stringify(array);
      } else {
        array.push(i)
        str = JSON.stringify(array);
      }
      localStorage.histroySearch = str;
    },
    //获取数据
    getCity () {
      this.axios.get('./weather.json').then((res) => {
        this.cityList = res.data.result;
        console.log(this.cityList)
      }).catch((err) => {
        console.log(err)
      })
    },
    //搜索列表改变
    searchListChange () {
      // city: (...) 市
      // district: (...) 区
      // id: (...)
      // province: (...)  省

      //改变列表之前得清空
      this.searchList = [];

      //判断如果是空就往里面塞东西
      if (this.searchKey) {
        this.cityList.forEach((item) => {
          var str = item.province + item.district + item.city;
          if (str.indexOf(this.searchKey) > -1) {
            this.searchList.push(item)
          }
        });
      }

    }
  },

}
</script>
<style scoped>
header {
  width: 7.2rem;
  height: 0.92rem;
  line-height: 0.92rem;
  font-size: 0.3rem;
  padding: 0 0.27rem;
}
.header_left > a {
  padding-right: 0.3rem;
}
.header_right {
  width: 1.74rem;
  height: 0.56rem;
  line-height: 0.45rem;
  text-align: center;
  border: 0.05rem solid #ccc;
  border-radius: 0.3rem;
  margin-top: 0.18rem;
}
.search {
  width: 7.2rem;
  /* height: 0.78rem; */
  padding: 0.12rem 0.29rem;
  border-bottom: 0.05rem solid #f2f2f2;
}
.search > input {
  width: 5.76rem;
  height: 0.5rem;
  background: #f2f2f2;
  border: 0.01rem solid #ccc;
  border-radius: 0.1rem;
  outline: none;
  padding-left: 0.3rem;
  font-size: 0.24rem;
}
.search > ::-webkit-input-placeholder {
  font-size: 0.24rem;
  color: #aeaeae;
}
.search > span {
  font-size: 0.32rem;
  margin-top: 0.03rem;
}
.guess {
  width: 7.2rem;
  padding: 0.44rem 0.29rem 0.36rem 0.29rem;
}
.guess > h3 {
  font-size: 0.3rem;
  margin-bottom: 0.25rem;
}
.guess > ul {
  font-size: 0.24rem;
}
.guess > ul > li {
  width: 31%;
  text-align: center;
  margin: 1%;
  height: 0.56rem;
  line-height: 0.56rem;
  color: #666;
  border-radius: 0.15rem;
  background: #f2f2f2;
  float: left;
}
.guess > ul > li.active {
  background: #4294ea;
  color: #fff;
}
.history {
  padding: 0 0.29rem;
}
.history > p {
  font-size: 0.3rem;
  height: 0.5rem;
  line-height: 0.5rem;
}
.del {
  font-size: 0.25rem;
}
.del > b {
  padding-right: 0.1rem;
  vertical-align: top;
}
.list {
  padding-top: 0.5rem;
}
.list > li {
  width: 22%;
  text-align: center;
  margin: 1.5%;
  height: 0.56rem;
  line-height: 0.56rem;
  color: #666;
  border-radius: 0.2rem;
  background: #f2f2f2;
  float: left;
  font-size: 0.24rem;
}
.loading {
  font-size: 0.5rem;
  text-align: center;
  font-weight: bold;
}
.searchList {
  font-size: 0.3rem;
  text-align: center;
}
</style>

