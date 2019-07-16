<template>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="name" class="label">
        <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" class="label">
        <el-input v-model="ruleForm.pass" type="password"></el-input>
        </el-form-item>
        <el-form-item label="重复密码" prop="repeat" class="label">
        <el-input v-model="ruleForm.pass" type="password"></el-input>
        </el-form-item>
        <el-form-item label="邮箱地址" prop="email" class="label">
        <el-input v-model="ruleForm.email" type="password"></el-input>
        </el-form-item>
        <el-button id="btn" type="primary" @click="submitForm('ruleForm')">注册</el-button>
        </el-form-item>
        </el-form>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        repeat: [
          { required: true, message: "请确认密码", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        email: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],

      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
        //   console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style>
#btn{
    width:300px;
    margin:40px auto;
    display: block;
    border-radius:20px;
}
.label{
    width:380px;
    color:#FFF;
}
</style>
