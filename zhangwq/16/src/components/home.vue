<template>
  <!-- 登录 -->
  <div class="denglu">
    <button @click="dl">登录</button>
    <button @click="zc">注册</button>
    <div class="cons">
      <div class="denglu" v-show="play">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="用户名" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input v-model="ruleForm.pass"></el-input>
          </el-form-item>
          <template>
            <div class="con" v-if='play'>
              <Vcode :show="isShow" />
            </div>
          </template>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')" >登录</el-button>
          </el-form-item>
        </el-form>
      </div>

      <div class="zhuce" v-show="plays">
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="用户名" prop="names">
            <el-input type="names" v-model="ruleForm.names" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass1">
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="mailbox">
            <el-input v-model.number="ruleForm.mailbox"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="register('rule')">注册</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
  <!-- 注册 -->
</template>

<script>
import Vcode from "vue-puzzle-vcode";
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      isShow: true,
      play:true,
      plays:false,
      ruleForm: {
        name: "",
        pass: "",
        pass1: "",
        checkPass: "",
        mailbox: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        pass: [{ required: true, message: "请输入密码", trigger: "change" }],

        //home.vue
        names: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        pass1: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        mailbox: [{ required: true, message: "请输入邮箱", trigger: "change" }]
      }
    };
  },
  components: {
    Vcode
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          alert("error submit!!");
          return false;
        }
      });
    },
    registerForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          alert("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    register(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    reset(formName) {
      this.$refs[formName].resetFields();
    },
    dl: function() {
         this.play = !this.play //取反
         this.plays = !this.plays //取反
     },
     zc: function() {
        this.play = !this.play //取反
        this.plays = !this.plays //取反
     }
  }
};
</script>

<style>
#app{
    width: 600px;
    height: 672px;
    background-image: url('http://pic1.sc.chinaz.com/Files/pic/pic9/201907/hpic1175_s.jpg');
    background-size: 100% 100%;
}
.el-button {
  display: block;
  width: 100%;
}

.vue-puzzle-vcode.show {
  width: 350px;
  height: 226px;
  position: absolute;
  top: 180px;
  left: 12%;
}
.con {
  height: 280px;
}
.active{
  display: none;
}
.el-input input{
  width: 80%;
}
.el-form-item__content button{
  width:80%;
}
</style>