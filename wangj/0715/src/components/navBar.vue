<template>
  <div class="swiper-container" id="navBar">
    <ul class="nav-bar swiper-wrapper">
      <li
        class="swiper-slide"
        :class="{active:item.categroy==activeCategroy}"
        v-for="(item,index) in list"
        :key="index"
        @click="activeCategroy=item.categroy"
      >{{item.title}}</li>
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
      activeCategroy: "astro",
      list: this.data || ["推荐"],
      mySwiper: null
    };
  },
  watch: {
    activeCategroy(v) {
      this.$emit("indexChange", v);
    }
  },
  mounted() {
    this.mySwiper = new Swiper(".swiper-container", {
      // autoplay: true, //可选选项，自动滑动
      slidesPerView: 6,
      freeMode: true
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
