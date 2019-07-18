<template>
  <div>
    <div class="header">
      <span>墨迹天气</span>
      <!-- <img src="" alt=""> -->
    </div>
    <div class='content'>
      <p><router-link to='/search' @click="onval">地址</router-link></p>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      // props:[],
      data:'',
    }
  },
  // methods:{
  //   onval(event){
  //     this.data=event;
  //     console.log(this.data)
  //   }
  // }
}
</script>

<style scoped>
.header{
  width: 7.5rem;
  height: 1rem;
  border-bottom: 1px solid #ccc;
}
.header span{
  font-size: 0.42rem;
  line-height: 1rem;
  float: left;
  padding-left: 0.56rem;
}
.content{
  width: 7.5rem;
  height:5rem;
  background: linear-gradient(blue,#fff,#fff);
}
.content p{
  height: 0.6rem;
  text-align: center;
}
.content p a{
  text-decoration: none;
  font-size: 0.3rem;
  line-height: 0.6rem;
  position: absolute;
  left: 50%;
  margin-left: -0.3rem;
}
</style>
