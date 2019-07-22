<template>
    <div class="Box">
      <el-form :model="form" ref="myform" label-width="5em" :rules="rules">
        <el-form-item label="用户名" prop="name">
          <el-input placeholder="账户名" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="input">
          put placeholder="请输入密码" v-model="form.input" show-password></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="input">
          <el-input placeholder="确认密码" v-model="form.inputT" show-password></el-input>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="form.checked">保持登录</el-checkbox>
        </el-form-item>

        <Vcode :show="isShow" @onSuccess="onSuccess" :canvasWidth="300" :canvasHeight="220" :imgs="['https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1402367109,4157195964&fm=27&gp=0.jpg','https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1638695478,3359394321&fm=27&gp=0.jpg']" />

        <el-form-item>
          <el-button type="primary" round @click="submitForm">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
import Vcode from "vue-puzzle-vcode";
export default {
    data(){
      return {
        isShow: false, // 验证码模态框是否出现
        form: {
          name: '',
          checked: true, //  多选框
          input: ''
        },
        rules:{
          name:[
            { required: true, message: '请输入账号', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
          ],
          input:[
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
          ],
          inputT:[
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
          ]
        }
      }
    },
    components:{
      Vcode
    },
    methods:{
      submitForm(){
        // console.log(this.$refs.myform);
        this.$refs.myform.validate((validate)=>{
          if(validate){
            this.isShow = true;
          }
        });
      },
      // 用户通过了验证
      onSuccess(){
        this.isShow = false;
        this.$nextTick(function(){
          setTimeout(()=>{
            alert('登录成功')
          },10)
        })
        
      },
    }
}
</script>

<style>
    *{
        margin: 0;
        padding: 0;
        user-select: none;
    }
    .Box{
        margin: 40px auto;
        width:360px;
        height:430px;
        /* background: #ff0; */
    }
</style>
