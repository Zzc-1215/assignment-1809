<template>
  <div>
	  <Vcode  :show="isShow"  @onSuccess="onSuccess"  @onClose="onClose" />
  </div>
</template>

<script>
	import Vcode from "vue-puzzle-vcode";
  export default {
    data(){
      return {
        isShow: false, // 验证码模态框是否出现
      }
    },
    components:{
      Vcode
    },
    methods:{
      onSubmit(){
        this.isShow = true;
      },
      // 用户通过了验证
      onSuccess(msg){
        this.isShow = false; // 通过验证后，需要手动隐藏模态框
				console.log(msg)
      },
      // 用户点击遮罩层，应该关闭模态框
      onClose(){
        this.isShow = false;
      }
    }
  }

</script>

<style>
</style>
