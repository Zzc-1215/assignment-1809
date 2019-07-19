<template>
  <div class="three">
    <div class="swiper-container" id="swiper1">
      <ul class="swiper-wrapper dataList">
        <li class="swiper-slide" v-for="l in num.future" :key="l.date-'1'" id="cen">
          <span id="font">{{l.week}}</span>
          <p id="riqi">{{l.date}}</p>
        </li>
      </ul>
    </div>
    <div class="swiper-container" id="swiper2">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="l in num.future" :key="l.date+'1'" id="cc">
          <p id="wen">{{l.temperature}}</p>
          <p id="tian">
            <span>{{l.weather}}</span>
          </p>
          <div style="height:3rem;background:#fff" class="li">
            <p>
              风力
              <span>{{l.wind}}</span>
            </p>
            <p>
              日出-日落
              <span>04:45-19:45</span>
            </p>
            <p>
              限行尾号
              <span>1和6</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import Swiper from "swiper";
export default {
  name: "aain",

  data() {
    return {};
  },
  computed: {
    num() {
      return this.$route.params.num;
    }
  },
  mounted() {
    // this.swiper1=new Swiper('#swiper1',{
    //     slidesPerView: 4,
    //     slidesPerGroup:1
    // });
    this.swiper1 = new Swiper("#swiper2", {
      thumbs: {
        swiper: {
          el: "#swiper1",
          slidesPerView: 4,
          slidesPerGroup: 1
        }
      },
      slideThumbActiveClass: "active"
    });
  },
  created() {
    console.log(this.num);
  }
};
</script>
<style scoped>
@import "../../node_modules/swiper/dist/css/swiper.css";
.three {
  width: 100%;
  height: 15rem;
  background: white;
  color: black;
}
.dataList > li.swiper-slide-thumb-active span {
  background: greenyellow;
  color: white;
  text-align: center;
}
.dataList li p {
  font-size: 12px;
  color: white;
}
#font {
  font-size: 15px;
}
.li {
  font-size: 20px;
  line-height: 1rem;
  padding: 0 0.6rem;
  /* margin-top: 1.5rem */
}
.li span {
  float: right;
}
#cc {
  height: 8rem;
  background: linear-gradient(rgb(164, 164, 216), white);
}
#riqi {
  color: gray;
  margin-top: 0.1rem;
}
#wen {
  text-align: center;
  font-size: 40px;
  margin-top: 1rem;
}
#tian {
  font-size: 30px;
  text-align: center;
  margin-top: 0.5rem;
}
#swiper2 {
  margin-top: 0.5rem;
}
#cen {
  text-align: center;
}
</style>
