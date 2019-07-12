<template>
  <div class="swiper-container" id="navBar">
    <ul class="nav-bar swiper-wrapper">
      <li
        class="swiper-slide"
        :class="{active:index==activeIndex}"
        v-for="(item,index) in list"
        :key="index"
        @click="activeIndex=index"
      >{{item}}</li>
    </ul>
  </div>
</template>

<script>
import Swiper from "swiper";
// console.log(Swiper);
export default {
  props: ["data"],
  data() {
    return {
      activeIndex: 0,
      list: this.data || ["推荐"],
      mySwiper: null
    };
  },
  watch: {
    activeIndex(v) {
      this.$emit("indexChange", v);
    }
  },
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      autoplay: true,
      slidesPerView: 5,
      freeMode: true,
    });
  }
};
</script>

<style scoped>
#navBar {
  border-bottom: 1px solid #ccc;
}
#navBar ul {
  list-style: none;
  text-align: center;
  padding: 0;
}
#navBar ul li {
  line-height: 50px;
  cursor: pointer;
}
#navBar ul li.active {
  color: red;
  font-size: 1.1em;
}
</style>