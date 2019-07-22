<!--  -->
<template>
  <div class="container">
    <div class="header">
      <div class="header_top">墨迹天气</div>
      <input type="text" class="inp" v-model="city" placeholder="请输入城市名" />
      <span class="search">搜索</span>
    </div>
    <ul class="ul" v-show="city">
      <li v-for="n in search" :key="n.id" @click="tiaozhuan(n)">{{n.text}}</li>
    </ul>
    <div class="content">
      <div class="popular">
        <h2>热门城市</h2>
        <ul>
          <li v-for="(item,index) in arr" :key="item.id" v-if="index < 15">
            <button
              :class="{selected:selectCity == item.id}"
              @click="tiaozhuan(item)"
            >{{item.district}}</button>
          </li>
        </ul>
      </div>
      <div class="history">
        <h2>
          历史记录
          <button class="qingkong" @click="qingkong">清空</button>
        </h2>
        <ul v-if="histroyCity.length">
          <li v-for="(i,index) in histroyCity" :key="i.id">
            <button @click="tiaozhuan(i)">{{i.district}}</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created: function() {
    this.getCitys();
  },
  data() {
    return {
      search: [],
      city: [],
      arr: [],
      histroyCity: [],
      selectCity: 0
    };
  },
  computed: {
    comcity() {
      var arr = [];
      this.arr.forEach(el => {
        arr.push({
          id: el.id,
          text: el.city + " " + el.district + " " + el.province
        });
      });
      return arr;
    }
  },
  watch: {
    city(v1, v2) {
      if (v1) {
        this.comcity.forEach(el => {
          if (el.text.indexOf(v1) > -1) {
            this.search.push(el);
          }
        });
      } else {
        this.search = [];
      }
    }
  },
  methods: {
    tiaozhuan(item) {
      this.selectCity = item.id;

      if (localStorage.storage) {
        if (localStorage.storage.indexOf(this.selectCity) == -1) {
          localStorage.storage += "," + this.selectCity;
        }
      } else {
        localStorage.storage = this.selectCity;
      }

      console.log(localStorage.storage);
      this.$router.push({
        name: "hoem",
        params: {
          item
        }
      });
    },
    qingkong() {
      this.histroyCity = [];
      localStorage.removeItem("storage");
    },
    getCitys() {
      var getUrl = "/weather/citys?dtype=&key=e86e104b509661883094df754c12b235";
      this.axios.get(getUrl).then(response => {
        this.arr = response.data.result;
        this.$nextTick(function() {
          this.getHistroy();
        });
        console.log(this.arr);
      });
    },
    getHistroy() {
      var hcs = localStorage.storage;
      if (hcs) {
        var arr2 = hcs.split(",");
        this.arr.forEach(element => {
          arr2.forEach(el => {
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
<style scoped>
.container {
  width: 7.5rem;
  height: auto;
}
.header {
  width: 100%;
  height: 1.5rem;
  padding: 0 0.3rem;
  box-sizing: border-box;
}
.header_top {
  height: 0.8rem;
  line-height: 0.8rem;
  margin-left: 0.1rem;
}

.ul li {
  font-size: 0.2rem;
  padding: 0.2rem;
  border-bottom: 1px #ccc solid;
}
.inp {
  width: 5.5rem;
  height: 0.3rem;
  border: 1px #ccc solid;
  padding: 0.05rem 0 0.05rem 0.1rem;
  float: left;
  margin-top: 0.05rem;
  margin-left: 0.1rem;
  border-radius: 0.1rem;
  background-color: rgba(9, 9, 9, 0.1);
}
.search {
  margin-left: 0.2rem;
  font-size: 0.4rem;
  /* margin-top: 0.05rem;
    float: left; */
}
.content {
  width: 100%;
  height: auto;
  padding: 0 0.45rem;
  box-sizing: border-box;
}
.popular {
  width: 100%;
  height: 5rem;
}
.popular h2,
.history h2 {
  font-weight: 400;
  font-size: 0.5rem;
}
.popular li button,
.history li button {
  width: 1.3rem;
  height: 0.5rem;
  margin-right: 0.3rem;
  margin-bottom: 0.1rem;
  border-radius: 0.1rem;
  outline: none;
  border: none;
}
.popular li,
.history li {
  float: left;
  margin-top: 0.2rem;
}
.history {
  width: 100%;
  height: 3rem;
}
.qingkong {
  float: right;
  padding: 0.05rem 0.1rem;
  margin-top: 0.15rem;
}
.selected {
  background: red;
}
</style>