<template>
    <div>
        <Vcode :show="isShow" @onSuccess="onSuccess" @onClose="onClose"/>
        <div class="box">
            <span class="login_in">登录</span>
            <span class="login_up">注册</span>
        </div>
        <login></login>
    </div>
</template>

<script>
import Vcode from "vue-puzzle-vcode";
export default {
    data(){
      return {
        isShow: false,
      }
    },
    components:{
      Vcode,
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

<style>
  .box{
      position:absolute;
      left:100px;
      top:100px;
  }
  .login_in{
      padding:10px;
  }
  .login_up{
      padding:10px;
  }
</style>