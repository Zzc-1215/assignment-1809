<template>
	<div id="box">
		<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
			<el-form-item label="账号" prop="use">
				<el-input type="text" v-model="ruleForm.use" autocomplete="off" style="width:80%;margom-top:20px;"></el-input>
			</el-form-item>
			<el-form-item label="密码" prop="pass">
				<el-input type="password" v-model="ruleForm.pass" autocomplete="off" style="width:80%"></el-input>
			</el-form-item>
			<el-form-item label="确认密码" prop="checkPass">
				<el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" style="width:80%"></el-input>
			</el-form-item>
			<template>
				<Vcode :show="isShow" />
			</template>
			<el-form-item style="margin-top:350px;">
				<el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
				<el-button @click="resetForm('ruleForm')">重置</el-button>
			</el-form-item>
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
			var checkAge = (rule, value, callback) => {
				setTimeout(() => {
					if (!Number.isInteger(value)) {
						callback(new Error('请输入数字值'));
					}
				}, 1000);
			};
			var validatePass1 = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请输入账号'));
				} else {
					if (this.ruleForm.checkPass !== '') {
						this.$refs.ruleForm.validateField('checkPass');
					}
					callback();
				}
			};
			var validatePass2 = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请输入密码'));
				} else {
					if (this.ruleForm.checkPass !== '') {
						this.$refs.ruleForm.validateField('checkPass');
					}
					callback();
				}
			};

			var validatePass3 = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请再次输入密码'));
				} else if (value !== this.ruleForm.pass) {
					callback(new Error('两次输入密码不一致!'));
				} else {
					callback();
				}
			};
			return {
				isShow: true,
				ruleForm: {
					use: '',
					pass: '',
					checkPass: '',
				},
				rules: {
					use: [{
						validator: validatePass1,
						trigger: 'blur'
					}],
					pass: [{
						validator: validatePass2,
						trigger: 'blur'
					}],
					checkPass: [{
						validator: validatePass3,
						trigger: 'blur'
					}],
					age: [{
						validator: checkAge,
						trigger: 'blur'
					}]
				}
			};
		},
		methods: {
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						alert('submit!');
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			}
		}
	}
</script>
<style scoped>
	.vue-puzzle-vcode.show {
		width: 350px;
		height: 226px;
		position: absolute;
		top: 330px;
		left:50%;
		margin-left: -175px;
	}

	#box {
		position: relative;
		margin: 50px auto;
		padding: 30px;
		max-width: 525px;
		min-height: 670px;
		position: relative;
		background: url(http://www.jq22.com/demo/slidingverification201809162215/img/bg.jpg) no-repeat center;
		box-shadow: 0 12px 15px 0 rgba(0, 0, 0, .24), 0 17px 50px 0 rgba(0, 0, 0, .19);
		background-size: 100% 100%;
	}

	.el-form-item__label{
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #fff;
}

</style>
