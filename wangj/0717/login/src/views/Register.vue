<template>
  <div>
    <el-form ref="myform" :model="form" :rules="rules">
      <el-form-item label="用户名" prop="name">
        <el-input v-model="form.name" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password1">
        <el-input type="password" v-model="form.password1" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item label="重复密码" prop="password2">
        <el-input type="password" v-model="form.password2" placeholder="请再次输入密码"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input type="email" v-model="form.email" placeholder="请输入邮箱地址"></el-input>
      </el-form-item>
      <el-button type="primary" round @click="submitForm">注册</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.myform.checkPass !== "") {
          this.$refs.myform.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.myform.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      form: {
        name: "",
        password1: "",
        password2: "",
        email: ""
      },
      rules: {
        name: [
          {
            required: true, //必填项
            message: "请输入用户名", //为空显示内容
            trigger: "blur" //触发条件
          },
          {
            min: 3, //最小长度
            max: 6, //最大长度
            message: "长度在 3 到 6 个字符",
            trigger: "blur"
          }
        ],
        password1: [
          {
            required: true,
            validator: validatePass,
            trigger: "blur"
          }
        ],
        password2: [
          {
            required: true,
            validator: validatePass2,
            trigger: "blur"
          }
        ],
        email: [
          {
            required: true,
            message: "请输入邮箱地址",
            trigger: "blur"
          },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"]
          }
        ]
      }
    };
  },
  methods: {
    submitForm(myform) {
      this.$refs[myform].validate(valid => {
        if (valid) {
          alert("注册成功");
        } else {
          alert.log("注册失败");
          return false;
        }
      });
    }
  }
};
</script>


<style>
.el-form {
  padding: 0 20px;
}
.el-form-item .el-form-item__label {
  width: 6em;
  text-align: left;
  color: #aaa;
  display: block;
  float: none;
}
.el-form-item .el-form-item__content,
.el-form-item .el-form-item__content .el-form-item__error {
  margin-left: 20px;
}
.el-input .el-input__inner {
  border: none;
  background-color: rgba(255, 255, 255, 0.1);
  color: #fff;
  border-radius: 25px;
}
</style>
