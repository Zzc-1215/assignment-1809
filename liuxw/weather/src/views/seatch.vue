<template>
  <div>
    <div class="title">
      <span @click="back" class="el-icon-arrow-left"></span>墨迹天气
    </div>
    <div class="sea">
      <input type="text" @input="upcity" v-model="val" class="intxt" />
      <input type="button" value="搜索" @click="send(val)" class="inbtn" />
      <div class="mh">
        <ul>
          <li v-for="(item,index) in list" @click="ssinput(item)" :key="index">{{item}}</li>
        </ul>
      </div>
    </div>
    <div class="cai">
      <p class="tiptitle">猜你喜欢</p>
      <ul class="list clearfix">
        <li v-for="(item,index) in likelist" @click="getwea(item)" :key="index">{{item}}</li>
      </ul>
    </div>
    <div class="cai">
      <p class="tiptitle">历史记录</p>
      <span style="line-height: .796rem;" class="del el-icon-delete" @click="delall">清空</span>
      <ul class="list clearfix">
        <li @click="ssinput(item)" v-for="(item,index) in hislist" :key="index">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import "../main.js";
export default {
  name: "home",
  data() {
    return {
      list: [],
      likelist: [],
      hislist: [],
      val: "",
      isdata: null
    };
  },
  beforeRouteLeave(to, from, next) {
    if (this.val) {
      next();
    }
  },
  methods: {
    back() {
      alert("已经是首页了!");
    },
    send(val) {
      if (this.val) {
        this.axios
          .get("https://www.tianqiapi.com/api/?version=v1&city=" + val)
          .then(data => {
            this.isdata = data.data;
            this.$router.push({ name: "today", params: { isdt: this.isdata } });
          });
      } else {
        alert("请输入城市");
        return;
      }
    },
    delall() {
      localStorage.weaarr = "[]";
      this.hislist = [];
    },
    ssinput(v) {
      this.list = [];
      this.val = v;
    },
    getwea(item) {
      this.ssinput(item);
      if (localStorage.weaarr) {
        if (this.hislist.indexOf(item) == -1) {
          this.hislist.push(item);
          localStorage.weaarr = JSON.stringify(this.hislist);
        }
      }
    },
    ischinese(s) {
      var ret = true;
      for (
        var i = 0;
        i < s.length;
        i++ 
      )
        ret = ret && s.charCodeAt(i) >= 10000; 
      return ret;
    },
    upcity() {
      if (this.val != "" && this.ischinese(this.val)) {
        this.axios.get("./city.json").then(data => {
          var arr = data.data.result;
          this.list = [];
          for (var i = 0; i < arr.length; i++) {
            if (this.list.length == 10) {
              break;
            } else {
              if (arr[i].district.indexOf(this.val) == 0) {
                this.list.push(arr[i].district);
              }
            }
          }
        });
      }
    }
  },
  mounted() {
    this.axios.get("./city.json").then(data => {
      var arr = data.data.result;
      for (var i = 0; i < arr.length; i++) {
        if (this.likelist.length <= 10) {
          this.likelist.push(arr[i].district);
        } else {
          break;
        }
      }
    });
    if (!localStorage.weaarr) {
      localStorage.weaarr = JSON.stringify(this.hislist);
    } else {
      this.hislist = JSON.parse(localStorage.weaarr);
    }
  }
};
</script>

<style scope>
html,body{-moz-user-select: none; -khtml-user-select: none; user-select: none;}
* {
  margin: 0;
  padding: 0;
  border-style: none;
}
.clearfix {
  zoom: 1;
}
.clearfix::after {
  display: block;
  clear: both;
  content: "";
}
.cai {
  width: 100%;
  padding: 0rem 0.398rem;
  box-sizing: border-box;
  height: auto;
  position: relative;
  margin-bottom: 1.852rem;
}

.tiptitle {
  height: 0.796rem;
  font-size: 0.407rem;
  line-height: 0.796rem;
  text-align: left;
  margin-bottom: 0.185rem;
}

.del {
  height: 0.796rem;
  position: absolute;
  display: block;
  right: 0.398rem;
  top: 0;
  font-size: 0.37rem;
}

.list li {
  height: 0.787rem;
  width: 2.626rem;
  font-size: 0.333rem;
  text-align: center;
  float: left;
  line-height: 0.787rem;
  border-radius: 0.028rem;
  background: #4394e6;
  color: #fff;
  margin: 0rem 0.185rem 0.278rem 0rem;
}

.sea {
  border-bottom: 0.037rem solid #f7f7f7;
  width: 100%;
  padding: 0rem 0.398rem;
  box-sizing: border-box;
  margin-bottom: 0.463rem;
  position: relative;
}

.mh {
  z-index: 5;
  position: absolute;
  width: 80%;
  height: auto;
  top: 0.8rem;
  margin: 0 auto;
}

.mh ul li {
  width: 100%;
  background: #fff;
  font-size: 0.37rem;
  text-align: left;
  height: 0.926rem;
}

.intxt {
  width: 80%;
  height: 0.778rem;
  line-height: 0.778rem;
  border-radius: 0.028rem;
  margin-bottom: 0.185rem;
  background: #f2f2f2;
  float: left;
}

.inbtn {
  width: 19%;
  height: 0.778rem;
  border: 2px solid #f2f2f2;
  background: rgb(177, 246, 255);
  font-size: 0.463rem;
}

.title {
  width: 100%;
  text-align: left;
  font-size: 0.463rem;
  height: 0.926rem;
  padding-left: 0.343rem;
  margin: 0.556rem auto;
  height: 0.556rem;
}

.title span {
  width: 0.926rem;
  display: inline-block;
}
</style>
