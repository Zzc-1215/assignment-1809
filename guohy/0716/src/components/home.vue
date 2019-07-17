<template>
	<div>
		<jc></jc>
		<div>
			<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
			  <el-form-item label="账号" prop="user" >
				<el-input v-model.number="ruleForm2.user"></el-input>
			  </el-form-item>
			  <el-form-item label="密码" prop="pass" >
				<el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
			  </el-form-item>
			  <el-form-item label="确认密码" prop="checkPass">
				<el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
			  </el-form-item>
			  <el-form-item>
				<el-button type="primary" @click="submitForm('ruleForm2')" id='btn'>登录</el-button>
				<!-- <el-button @click="resetForm('ruleForm2')">重置</el-button> -->
			  </el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
	import jc from "./jiance.vue"
	export default{
		components:{
			jc
		},
		data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('账号不能为空·'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value.length<=3) {
              callback(new Error('长度必须大于3'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          pass: '',
          checkPass: '',
          user: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          user: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('登录成功');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      // resetForm(formName) {
      //   this.$refs[formName].resetFields();
      // }
    }
  }
	
	
</script>

<style>

	.el-form{
		text-align: center;
		padding-right: 60px;
		padding-top: 20px;
	}
	#btn{
		margin-top: 280px;
		margin-right:20px;
	}
	.el-form-item__label{
		color:#fff;
	}
</style>
