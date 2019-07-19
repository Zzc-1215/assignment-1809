<template>
  <div id="city">
    <div id="header">
      <input type="text" placeholder="请输入你要查询的地区,快速帮你查询" v-model="city" />
      <span @click="city=''">取消</span>
    </div>
    <ul v-show="city" class="search">
      <li v-if="searchCitys.length==0" style="text-align:center">很遗憾，未找到</li>
      <li v-else v-for="s in searchCitys" :key="s.id" @click="jumpHome">{{s.text}}</li>
    </ul>
    <div id="con" v-show="!city">
      <p>热门地区</p>
      <ul>
        <li
          v-for="(i,index) in citys"
          :key="i.id"
          v-if="index<9"
          @click="jumpHome(i)"
        >{{i.district}}</li>
      </ul>
      <p>
        历史纪录
        <a id="cle" v-if="histroyCity.length" @click="clearHistory">清空记录</a>
      </p>
      <ul v-if="histroyCity.length">
        <li v-for="c in histroyCity" :key="c.id" @click.native="jumpHome(i)">{{c.district}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
window.onload = function() {
  document.documentElement.style.fontSize =
    (document.documentElement.clientWidth / 750) * 100 + "px";
  window.onresize = function() {
    document.documentElement.style.fontSize =
      (document.documentElement.clientWidth / 750) * 100 + "px";
  };
};
export default {
  created() {
    console.log(this.axios);
    this.getCitys();
  },
  data() {
    return {
      searchCitys: [],
      city: "",
      histroyCity: [],
      selectCity: 0,
      citys: []
    };
  },
  computed: {
    computedCitys() {
      var arr = [];
      this.citys.forEach(el => {
        arr.push({
          id: el.id,
          text: el.province + " " + el.city + " " + el.district
        });
      });
      return arr;
    }
  },
  watch: {
    city(v1, v2) {
      if (v1) {
        this.computedCitys.forEach(el => {
          if (el.text.indexOf(v1) > -1) {
            this.searchCitys.push(el);
          }
        });
      } else {
        this.searchCitys = [];
      }
    }
  },
  methods: {
    jumpHome(city) {
      this.selectCity = city.id;
      var isPush = true;
      this.histroyCity.forEach(element => {
        console.log(element);
        if (element.id == city.id) {
          isPush = false;
        }
      });
      if (isPush) {
        this.histroyCity.push(city);
      }
      console.log(city);
      this.$router.push({
        name: "aain",
        params: {
          city
        }
      });
    },
    clearHistory() {
      this.histroyCity = [];
    },
    getCitys() {
      console.log(this);
      var getUrl = "/weather/citys?key=d3412d1028ba32371fa3725c018b50d5";
      this.axios.get(getUrl).then(response => {
        this.citys = response.data.result;
        console.log(this.citys);
      });
    }
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  list-style-type: none;
  box-sizing: border-box;
  text-decoration: none;
}
#city {
  width: 7.5rem;
}
#header {
  width: 7.5rem;
  padding: 0.133333rem 0.4rem;
  font-size: 14px;
  border-bottom: 2px solid #f2f2f2;
}
input {
  width: 88%;
  border: none;
  background-color: #f2f2f2;
  color: #5c5c5c;
  padding: 0 0.16rem;
  height: 0.8rem;
  border-radius: 0.053333rem;
}
input span {
  display: inline-block;
  width: 12%;
  line-height: 0.8rem;
  vertical-align: middle;
  text-align: center;
}
#con {
  padding: 0 0.1rem;
}
#con p {
  margin: 0.613333rem 0 0.373333rem 0.3rem;
  font-size: 16px;
  font-weight: 500;
}
#con ul > li {
  width: 2rem;
  height: 1rem;
  background: gainsboro;
  border-radius: 8px;
  margin-left: 0.2rem;
  font-size: 20px;
  text-align: center;
  line-height: 1rem;
  display: inline-block;
}
#cle {
  float: right;
}
.search {
  line-height: 0.5rem;
  border-bottom: 1px solid #ccc;
  padding: 0.5rem;
  font-size: 0.3rem;
}
</style>

