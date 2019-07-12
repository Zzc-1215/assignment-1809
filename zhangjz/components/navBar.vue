<template>
  <div class="swiper-container"
       id="nav">
    <ul class="nav-bar swiper-wrapper">
      <li class="swiper-slide"
          @click="activeIndex=$index"
          :class="{active:$index==activeIndex}"
          v-for="(i,$index) in list"
          :key="$index">{{i}}</li>
    </ul>
  </div>
</template>
<script>
import Swiper from 'swiper';
console.log(Swiper);
export default {
  props: ['data'],
  data () {
    return {
      list: this.data || ['郝哥哥请你传点数据吧'],
      mySwiper: null,
      activeIndex: 0,
    }
  },
  watch: {
    activeIndex (v) {
      this.$emit('indexChange', v)
    }
  },
  // 渲染完成后
  mounted () {
    this.mySwiper = new Swiper('.swiper-container', {
      slidesPerView: 6,
      //   slidesPerGroup: 5,
      freeMode: true,
    })
  }
}
</script>
<style scoped>
#nav {
  border-bottom: 1px solid #000;
}
#nav ul {
  padding: 0;
}
#nav ul li {
  line-height: 50px;
  cursor: pointer;
  text-align: center;
}
#nav ul > li.active {
  color: red;
  font-size: 1.1em;
}
</style>

