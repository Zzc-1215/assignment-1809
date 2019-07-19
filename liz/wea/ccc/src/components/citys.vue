<template>
  <div id="city">
    <header>
      <input type="text" v-model="city" placeholder="请输入城市名查询..." />
      <span @click="city=''">清空</span>
    </header>
    <ul id="list" v-show="city">
      <li v-if="searchcitys.length==0" style="text-align:center;border:none;line-height:5rem;">瞎几把搜</li>
      <li v-else v-for="city in searchcitys" :key="city.id" @click="jumpHome(city)">{{city.text}}</li>
    </ul>
    <div class="citys" v-show="!city">
      <h2>热门城市</h2>
      <ul>
        <li
          :class="{selected:selectCity == city.id}"
          v-for="(city,index) in citys"
          :key="city.id"
          v-if="index<15"
          @click="jumpHome(city)"
        >{{city.district}}</li>
      </ul>
      <h2>
        历史记录
        <a v-if="histroyCity.length" @click="clearhistory">清空记录</a>
      </h2>
      <ul>
        <li v-for="c in histroyCity" :key="c.id">{{c.district}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchcitys: [],
      city: "",
      histroyCity: [],
      selectCity: 0,
      citys: []
    };
  },
  created() {
    this.getCitys();
  },
  computed: {
    computedcitys() {
      var arr = [];
      this.citys.forEach(el => {
        arr.push({
          id: el.id,
          text: el.city + " " + el.province + " " + el.district
        });
      });
      return arr;
    }
  },
  watch: {
    city(v1, v2) {
      if (v1) {
        this.computedcitys.forEach(el => {
          if (el.text.indexOf(v1) > -1) {
            this.searchcitys.push(el);
          }
        });
      } else {
        this.searchcitys = [];
      }
    }
  },
  methods: {
    getCitys() {
      var getUrl = "/weather/citys?key=76943d446c5707e1491d70e58b969693";
      this.axios.get(getUrl).then(response => {
        this.citys = response.data.result;
      });
    },
    jumpHome(city) {
      this.selectCity = city.id;
      var ispush = true;
      this.histroyCity.forEach(element => {
        if (element.id == city.id) {
          ispush = false;
        }
      });
      if (ispush) {
        this.histroyCity.push(city);
      }
      // if(localStorage.histroyCitys){
      //   if(localStorage.histroyCitys.indexof(this.selectCity)==-1){

      //   }
      //   localStorage.histroyCitys+=','+this.selectCity;
      // }else{
      //   localStorage.histroyCitys=this.selectCity;

      // }
      // console.log(localStorage.histroyCitys)
      this.$router.push({
        name: "aain",
        params: {
          city
        }
      });
    },

    clearhistory() {
      this.histroyCity = [];
    },
    gethistiryCitys() {
      var hs = localStorage.histroyCitys;
      if (hs) {
        var arr = hs.split(",");
        this.citys.forEach(element => {
          arr.forEach(el => {
            if (element.id == el) {
              this.histroyCity.push(element);
            }
          });
        });
      }
    }
  }
};
</script>
<style scope>
header {
  width: 10rem;
  padding: 0.3333rem 0.4rem;
  border-bottom: 2px solid #f2f2f2;
}
header input {
  width: 88%;
  border: none;
  background-color: #f2f2f2;
  color: #5c5c5c;
  padding: 0 0.16rem;
  height: 0.8rem;
  border-radius: 0.053333rem;
  font-size: 0.4rem;
}
header span {
  display: inline-block;
  width: 12%;
  line-height: 0.8rem;
  vertical-align: middle;
  text-align: center;
}
.citys {
  padding: 0 0.4rem;
}
#list li {
  width: 90%;
  height: 0.75rem;
  border-bottom: 1px solid #ccc;
  padding-top: 17px;
  margin-left: 5%;
}
.citys h2 {
  margin: 0.613333rem 0 0.373333rem 0;
  font-weight: 500;
}
.citys ul > li {
  width: 2.67rem;
  height: 0.67rem;
  background: rgb(231, 223, 223);
  margin-left: 18px;
  display: inline-block;
  line-height: 0.67rem;
  text-align: center;
  font-size: 0.37rem;
  margin-top: 12px;
  border-radius: 0.13rem;
}
h2 > a {
  float: right;
  font-size: 0.37rem;
}
.selected {
  background: blueviolet;
}
</style>

