<template>
  <div class="swiper-container"
       id="navBar">
    <ul class="nav_bar swiper-wrapper">
      <!-- for循环完了之后才能循环swiper -->
      <li class="swiper-slide"
          @click="activeCategroy=item.categroy"
          :class="{active:item.categroy==activeCategroy}"
          v-for="(item,index) in list"
          :key="index">
        {{item.title}}
      </li>
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
      activeCategroy: 'astro',
      list: this.data || ['推荐'],//如果没有的话，默认传的是空，或者是一些其他的处理，一些缺省页等等
      mySwiper: null,
      // 如果list里面写{}的话，上面写key就报错了
    }
  },
  watch: {
    //   监听下标的变化，即li的颜色的改变
    activeCategroy (v) {
      this.$emit('indexChange', v)
    }
  },
  mounted () {
    //   相当于生命周期一个局部的变量，就是一个swiper的实例
    // 需要拿这个实例去操作实例方法
    this.mySwiper = new Swiper('.swiper-container', {
      // autoplay: true,//可选选项，自动滑动
      slidesPerView: 4,
      slidesPerGroup: 1,
      freeMode: true,
    })
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
#navBar {
  border-bottom: 1px solid #ccc;
}
#navBar ul {
  padding: 0;
}
#navBar ul > li {
  list-style: none;
  text-align: center;
  line-height: 1rem;
  font-size: 0.4rem;
  cursor: pointer;
}
#navBar ul > li.active {
  color: red;
  font-size: 0.5rem;
}
</style>

