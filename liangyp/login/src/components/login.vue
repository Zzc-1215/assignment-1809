<template>
    <div  style="margin: 40px auto;width:40%;height:60%;">
      <Vcode
        :show="isShow"
        @onSuccess="onSuccess"
        @onClose="onClose"
      />
      <button @click="onSubmit">登录</button>
      <!-- 账户 -->
      账户：<el-input
        placeholder="请输入内容"
        v-model="input"
        clearable>
      </el-input>
      <!-- 密码 -->
      密码：<el-input placeholder="请输入密码" v-model="input" show-password></el-input>
      <el-checkbox v-model="checked">保持登录</el-checkbox>
    </div>
</template>
 
<script>
  import Vcode from "vue-puzzle-vcode";
  export default{
    data(){
      return {
        checked: true, //  多选框
        isShow: false, // 验证码模态框是否出现
        input: ''
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
      },
      // 用户点击遮罩层，应该关闭模态框
      onClose(){
        this.isShow = false;
      }
    }
  }
</script>