<template>
  <div id="app">
    <home></home>
    <div class="zhezhao"></div>
    <div class="zhuce">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="form.name" id="input"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.name" id="input"></el-input>
        </el-form-item>
        <el-form-item label="重复密码">
          <el-input v-model="form.name" id="input"></el-input>
        </el-form-item>
        <el-form-item label="邮箱地址">
          <el-input v-model="form.name" id="input"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" id="btn_up">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import home from './components/home.vue'
export default {
  name: 'app',
  components: {
    home,
  },
  data() {
      return {
        form: {
          name: '',
          region: '',
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
}
</script>

<style>
  #app{
    width:500px;
    height:670px;
    background-image:url(https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=701714133,2030184069&fm=26&gp=0.jpg);
    background-repeat:no-repeat;
    background-size:100% 100%;
    margin:0 auto;
    position:relative;
  }
  .zhezhao{
    width:100%;
    height:100%;
    background-color:rgba(40,57,101,.9);
  }
  .zhuce{
    position:absolute;
    top:150px;
    left:110px;
  }
  #input{
    width:200px;
    display:block;
    height:30px;
  }
  #btn_up{
    width:300px;
    height:40px;
    margin-top:20px;
  }
</style>

<div class="denglu">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="form.name" id="input"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.name" id="input"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" id="btn_in">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
