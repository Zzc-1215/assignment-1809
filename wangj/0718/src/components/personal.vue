<!--  -->
<template>
  <div>
    <div class="personal-container">
      <div class="personal-header">
        <div class="personal-header-top">
          <span style="display:block; float:left; margin-left:0.2rem" @click="click">< 返回</span>
          <span style="float:left;margin-left:2.3rem">墨迹天气</span>
        </div>
      </div>
      <swiper class="swiper-container gallery-thumbs">
        <swiper-slide class="swiper-slide" v-for="(item,o, index) in slide" :key="index">
          <li>{{item.week.slice(-1)}}</li>
        </swiper-slide>
      </swiper>
      <swiper class="swiper-container gallery-top">
        <swiper-slide class="swiper-slide" v-for="(item,o, index) in slide" :key="index">
          <ul class="weather-top">
            <li>{{item.temperature}}</li>
            <li>{{item.weather}}</li>
          </ul>
          <ul class="weather-tow">
            <li>
              风力
              <span>{{item.wind}}</span>
            </li>
            <li>
              星期
              <span>{{item.week}}</span>
            </li>
            <li>
              日期
              <span>{{item.date}}</span>
            </li>
          </ul>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  data() {
    return {
      arr: "",
      slide: this.$route.params.item
    };
  },

  mounted() {
    this.arr = this.$route.params.item;
    console.log(this.arr);

    var galleryThumbs = new Swiper(".gallery-thumbs", {
      spaceBetween: 10,
      slidesPerView: 5,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true
    });
    var galleryTop = new Swiper(".gallery-top", {
      spaceBetween: 10,

      thumbs: {
        swiper: galleryThumbs
      }
    });
  },
  methods: {
    click() {
      this.$router.go(-2);
    }
  }
};
</script>
<style scoped>
.personal-container {
  width: 7.5rem;
  height: auto;
  overflow: hidden;
}
.personal-header {
  width: 100%;
  height: 0.6rem;
}
.personal-header-top {
  width: 7.5rem;
  height: 0.6rem;
  text-align: center;
  line-height: 0.6rem;
  border-bottom: 1px solid #ccc;
}
.personal-content {
  width: 100%;
  height: 5rem;
  background: red;
}

.gallery-thumbs2 {
  height: 7rem;
}
.weather-top {
  width: 100%;
  height: 3rem;
  background: rgba(115, 163, 207, 0.5);
  text-align: center;
  padding-top: 0.7rem;
  box-sizing: border-box;
}
.weather-tow {
  width: 100%;
  height: 5rem;
  font-size: 0.3rem;
}
.weather-tow li {
  padding: 0.5rem;
}
.weather-tow span {
  float: right;
}

/*  */

.swiper-container {
  width: 100%;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
  font-size: 0.5rem;
}
.swiper-slide {
  background-size: cover;
  background-position: center;
}
.gallery-thumbs {
  font-size: 0.3rem;
}
.gallery-thumbs li {
  width: 1rem;
  text-align: center;
}
.gallery-top {
  height: 80%;
  width: 100%;
  background: -webkit-linear-gradient(top, #a2d1ef, #fff);
}
.gallery-top .weather-top {
  width: 100%;
  height: 3rem;
  background: rgba(115, 163, 207, 0.5);
  text-align: center;
}
.gallery-thumbs {
  height: 20%;
  box-sizing: border-box;
  padding: 10px 0;
}
.gallery-thumbs .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}
.gallery-thumbs .swiper-slide-thumb-active {
  opacity: 1;
}
</style>