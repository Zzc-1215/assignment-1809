<template>
  <div>
    <el-form ref="myform" :model="form" :rules="rules">
      <el-form-item label="用户名" prop="name">
        <el-input v-model="form.name" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" placeholder="请输入密码"></el-input>
      </el-form-item>

      <Vcode :show="isShow" @onSuccess="login" :imgs="imgs" />

      <el-button type="primary" round @click="submitForm">登录</el-button>
    </el-form>
  </div>
</template>

<script>
import Vcode from "vue-puzzle-vcode";

export default {
  components: {
    Vcode
  },
  data() {
    return {
      isShow: false,
      imgs: [
        "http://img2.imgtn.bdimg.com/it/u=1065066012,4191325182&fm=26&gp=0.jpg",
        "http://img2.imgtn.bdimg.com/it/u=4008418499,3113963647&fm=26&gp=0.jpg",
        "http://img0.imgtn.bdimg.com/it/u=1452104399,1111153399&fm=26&gp=0.jpg",
        "http://img3.imgtn.bdimg.com/it/u=2550302398,2143123323&fm=26&gp=0.jpg",
        "http://img0.imgtn.bdimg.com/it/u=3667070252,1517707592&fm=26&gp=0.jpg"
      ],
      form: {
        name: "",
        password: ""
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
        password: [
          {
            required: true, //必填项
            message: "请输入密码", //为空显示内容
            trigger: "blur" //触发条件
          },
          {
            min: 6, //最小长度
            max: 10, //最大长度
            message: "长度在 6 到 10 个字符",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    submitForm() {
      // console.log(this.$refs.myform)
      this.$refs.myform.validate(validate => {
        if (validate) {
          this.isShow = true;
        }
        // console.log(validate)
      });
    },
    login() {
      this.isShow = false;
      this.$nextTick(function() {
        setTimeout(function() {
          alert("登录成功");
        }, 20);
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
  width: 5em;
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