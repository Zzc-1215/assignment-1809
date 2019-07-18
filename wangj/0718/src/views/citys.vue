<template>
  <div id="city">
    <header>
      <input type="text" />
      <span>确定</span>
    </header>
    <div class="citys">
      <h2>热门城市</h2>
      <ul>
        <li v-for="(city,index) in citys" :key="city.id" v-if="index<15">
          <btn
            :class="{selected:selectCity == city.id}"
            @click.native="jumpHome(city)"
          >{{city.district}}</btn>
        </li>
      </ul>
      <h2>
        历史记录
        <a v-if="histroyCity.length" @click="clearHistory">清空记录</a>
      </h2>
      <ul v-if="histroyCity.length">
        <li v-for="c in histroyCity" :key="c.id">
          <btn @click.native="jumpHome(city)">{{c.district}}</btn>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import btn from "@/components/btn";
export default {
  components: {
    btn
  },
  created() {
    console.log(this.axios);
    this.getCitys();
  },
  data() {
    return {
      histroyCity: [],
      selectCity: 0,
      citys: []
    };
  },
  methods: {
    jumpHome(city) {
      this.selectCity = city.id;
      var isPush = true;
      this.histroyCity.forEach(element => {
        if (element.id == city.id) {
          isPush = false;
        }
      });
      if (isPush) {
        this.histroyCity.push(city);
      }
      console.log(city);
      this.$router.push({
        name: "home",
        params: {
          city
        }
      });
    },
    clearHistory() {
      this.histroyCity = [];
    },
    getCitys() {
      var getUrl =
        "/simpleWeather/cityList?city=&key=cbdb7fae8fa908281eed35e58e1ef7a0";
      this.axios.get(getUrl).then(response => {
        this.citys = response.data.result;
      });
    }
  }
};
</script>
<style>
header {
  width: 10rem;
  padding: 0.133333rem 0.4rem;
  font-size: 14px;
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
}
header span {
  display: inline-block;
  width: 12%;
  line-height: 0.8rem;
  vertical-align: middle;
  text-align: center;
}
/*  */
.citys {
  padding: 0 0.4rem;
}
.citys h2 {
  margin: 0.613333rem 0 0.373333rem 0;
  font-size: 16px;
  font-weight: 500;
}
.citys ul > li {
  display: inline-block;
}
h2 > a {
  float: right;
  font-size: 60%;
}
</style>

