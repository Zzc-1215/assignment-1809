<template>
  <div class="login-box">
    <el-form :model="form" ref="myform" label-width="5em" :rules="rules">
      <el-form-item label="用户名" prop="name">
        <el-input v-model="form.name" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <Vcode :show="isShow" @onSuccess="login" :canvasWidtd="200" :canvasHeight="100"></Vcode>
        <!-- <el-button round>登录</el-button> -->
      <el-button type="primary" round @click="submitForm">登录</el-button>
    </el-form>
  </div>
</template>
<script>
import Vcode from "vue-puzzle-vcode";

/*
Promise对象.then().catch();
$.ajax({
  success:func(callback){},
  error:func(){},
})

*/

export default {
  components:{
    Vcode,
  },
  data(){
    return{
      isShow:false,
      form:{
        name:'',
        password:''
      },
      rules:{
        name:[
          {required:true,message:'请输入名称',trigger:'blur'},
          {min:3,max:10,message:'长度在3到10个字符',trigger:'blur'}
        ],
        password:[
          {required:true,message:'请输入密码',trigger:'blur'},
          {min:3,max:10,message:'长度在3到10个字符',trigger:'blur'}
        ]
      }
    }
  },
  methods:{
    submitForm(){
      console.log(this.$refs.myform);
      this.$refs.myform.validate((validate)=>{
        if(validate){
          this.isShow=true;
        }
      });
    },
    login(){
      this.isShow=false;
      this.$nextTick(function(){
         alert('登陆成功');
      })
    }
  },
}
</script>
<style>
  .login-box{
    width:400px;
    height:300px;
    margin:auto;
    background-color:#ccc;
    padding:40px;
  }
</style>
