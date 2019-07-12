<template>
  <div class="swiper-container" id="navBar">
    <ul class="nav_bar swiper-wrapper">
      <li class="swiper-slide" v-for="(item,index) in list" :key="index" :class="{active:index==activeIndex}" @click="activeIndex=index">{{item}}</li>
    </ul>
  </div>
</template>
<script>
import Swiper from "swiper";
console.log(Swiper);
export default {
    props:['data'],
  data() {
    return {
        activeIndex:0,
      list: this.data || ['推荐'],
      mySwiper: null
    };
  },
  watch: {
      activeIndex(v){
          this.$emit('indexChange',v)
      }
  },
  mounted() {
    this.mySwiper = new Swiper(".swiper-container", {
      autoplay: true,
      freeMode:true,
      slidesPerView:2,
    //   slidesPerGrop:1,
    });
  }
};
</script>
<style scoped>
#navBar {
  border-bottom: 1px solid #ccc;
}
#navBar ul{
 padding: 0;
}
#navBar ul>li{
  list-style: none;
  padding: 0;
  line-height: 50px;
  cursor: pointer;
  text-align: center
}
#navBar ul>li.active{
    color: red;
    font-size: 1.1em;
}
</style>

