<template>
  <div style="width:100%;max-width:525px;min-height:670px;background:url('http://www.jq22.com/demo/slidingverification201809162215/img/bg.jpg') no-repeat center;position:relative;">
    <div style="width:100%;height:100%;background:rgba(40,57,101,.9);position:absolute;"></div>
    <div style="width:80%;margin:auto;padding-top:100px;position:absolute;left:20%;">
      <ul class="nav_list">
        <li class="active">登录</li>
        <li>注册</li>
      </ul>
      <div class="cont" style="position:relative;width:100%;">
        <div class="item bk">
          <label for="user_in">用户名</label>
          <input type="text" name="" id="user_in">
          <label for="pass_in">密码</label>
          <input type="password" name="" id="pass_in">
        </div>
        <div class="item">
          <label for="user_up">用户名</label>
          <input type="text" name="" id="user_up">
          <label for="pass_up">密码</label>
          <input type="password" name="" id="pass_up">
          <label for="pass_up_sure">重复密码</label>
          <input type="password" name="" id="pass_up_sure">
          <label for="email">邮箱地址</label>
          <input type="email" name="" id="email">
        </div>
      </div>
    </div>
    <!-- <Vcode :show="isShow" @onSuccess="onSuccess" @onClose="onClose" />
    <button @click="onSubmit">登录</button> -->
  </div>
</template>

<script>
// import Vcode from 'vue-puzzle-vcode'
export default {
//   data() {
//     return {
//       isShow: false // 验证码模态框是否出现
//     };
//   },
//   components: {
//     Vcode
//   },
//   methods: {
//     onSubmit() {
//       this.isShow = true;
//     },
//     // 用户通过了验证
//     onSuccess(msg) {
//       this.isShow = false; // 通过验证后，需要手动隐藏模态框
//     },
//     // 用户点击遮罩层，应该关闭模态框
//     onClose() {
//       this.isShow = false;
//     }
//   }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .nav_list{
    width: 100%;
    height: 50px;
    font-size: 22px;
    line-height: 30px;
  }
  .nav_list li{
    color: #6a6f8c;
    margin: 0 15px 10px 0;
    float: left;
  }
  .nav_list li.active{
    color: #fff;
    border-bottom:3px solid #00f;
  }
  .cont .item{
    position: absolute;
    display: none;
  }
  .cont .item.bk{
    display: block;
  }
  .cont .item input,.cont .item label{
    text-align: left;
    display: block;
  }
   .cont .item input{
     padding: 15px 20px;
     border:0;
     background-color: rgba(255, 255, 255,.1);
     border-radius: 25px;
     outline: none;
     margin-bottom: 15px;
     color: #fff;
   }
  .cont .item label{
    font-size: 12px;
    color: #aaa;
  }
</style>
