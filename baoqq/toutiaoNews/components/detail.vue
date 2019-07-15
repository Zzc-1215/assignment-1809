<template>
  <div id="myapp">

    <header @click="back">
      <div class="fl leftArr">&lt; </div>
      <div class="fl lTitle">
        <!-- {{data.title}} -->
      </div>
    </header>
    <!-- <iframe src="https://www.baidu.com/"></iframe> -->
    <iframe></iframe>
  </div>
</template>


<script>

import home from './home.vue';

export default {
  name: 'myapp',
  data () {
    return {
      props: ['item.title'],
    }
  },

  methods: {
    back () {
      location.href = "http://localhost:8080/#/"
    }
  },
  components: {
    home,
  }

}
</script>

<style>
#myapp {
  width: 100%;
  height: 100%;
  font-size: 0.5rem;
}
#myapp iframe {
  width: 100%;
  height: 100%;
}
header {
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  padding-left: 0.3rem;
  box-sizing: border-box;
  background: cyan;
  cursor: pointer;
}
.fl {
  float: left;
}
.leftArr {
  width: 20%;
  padding-left: 1rem;
}
.lTitle {
  width: 80%;
}
</style>
