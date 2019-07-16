<template>
  <div class="box">
    <div class="header">
      <router-link :to="{path:'/'}">
        <div class="zuo" @click="fan()">&lt;</div>
      </router-link>
      <div class="you">{{con}}</div>
    </div>
    <iframe :src="url" frameborder="0"></iframe>
  </div>
</template>
<script>
export default {
  data() {
    return {
      con: this.$store.state.count,
      url: this.$store.state.url
    };
  },
  methods: {
    fan() {
    //   location.href = "http://localhost:8080/";
    }
  }
};
</script>
<style>
.box {
  width: 100%;
  height: 100%;
}
.header {
  width: 100%;
  height: 50px;
  /* background-color: red; */
}
.zuo {
  width: 20%;
  height: 100%;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  float: left;
}
.you {
  float: left;
  height: 100%;
  width: 80%;
  line-height: 50px;
  font-size: 20px;
}
.box iframe {
  width: 100%;
  height: 100%;
}
</style>


