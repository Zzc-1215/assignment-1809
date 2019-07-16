<template>
  <div style="height:100%" >
         <ul>
           <li @click="login=true,register=false">登录</li>
           <li @click="register=true,login=false">注册</li>
         </ul>
        <transition-group>

        </transition-group>
        <Vcode class="verify" :show="isShow" @onSuccess="onSuccess" @onClose="onClose"/>
        <button  v-show="login" @click="onSubmit">登录</button>
        <index v-show="register"></index>
        <login v-show="login"></login>
  </div>
</template>
 
<script>
  import Vcode from "vue-puzzle-vcode";
  import index from './index.vue'
  import login from './login.vue'
  export default {
    data(){
      return {
        isShow: false, 
        login:false,
        register:true,
      }
    },
    components:{
      Vcode,
      index,
      login,
    },
    methods:{
      onSubmit(){
        this.isShow = true;
      },
      onSuccess(msg){
        this.isShow = false;
      },
      onClose(){
        this.isShow = false;
      }
    }
  }
</script>


<style scoped>
ul li{
    display:inline-block;
    padding:0 10px;
    color:#FFF;
}
.verify{
    width:500px;
    /* height:600px; */
}
button{
    dislpay:block;
    margin-bottom:20px;
}
</style>
