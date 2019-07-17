<template>
	<div>
		<Vcode :show="isShow"  @onSuccess="onSuccess" @onClose="onClose" />
		<!-- <button @click="onSubmit">登录</button> -->
	</div>
</template>

<script>
	 import Vcode from "vue-puzzle-vcode";
	  export default {
		data(){
		  return {
			isShow: true, // 验证码模态框是否出现
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
			this.isShow = true; // 通过验证后，需要手动隐藏模态框
		  },
		  // 用户点击遮罩层，应该关闭模态框
		  onClose(){
			this.isShow = true;
		  }
		}
	  }
</script>
	
<style>
	.vue-puzzle-vcode{
		width: 350px;
		height: 270px;
		position: relative;
		top: -380px;
		left: 30px;
		background-color:rgba(0,0,0,0);
		
	}
	.vue-auth-box{
		position: absolute;
		top: 130px;
		left:180px;
	}
</style>
