<template>
  <div>
    <div class="header">
      <div class='header-left'>
            墨迹天气
        </div>
      <div class='header-right'>
            <span class='iconfont icon-sangedian'></span>
            <span class='circle iconfont icon-yuandian'></span>
         </div>
    </div>
    <div class='content'>
      <p><router-link to='/weather'></router-link></p>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      
      data:'',
    }
  },
}
</script>

<style scoped>

.header{
  width: 6.4rem;
  height: 1rem;
  border-bottom: 1px solid #ccc;
}
 .header-left{
        float: left;
        height: 0.85rem;
        line-height: 0.85rem;
        font-size: 0.4rem;
    }
    .header-left span{
        display: inline-block;
        font-size: 0.4rem;
        margin-left: 0.2rem;
        line-height: 0.85rem;
    }
    .header-right{
        float: right;
        width:1.75rem;
        height: 0.5rem;
        margin-top: 0.3rem;
        border-radius: 0.3rem;
        border:1px solid #ccc;
        margin-right:0.2rem;
    }

    .header-right>span{
        float: left;
        margin-left:0.2rem;
        font-size: 0.5rem;
    }
.content{
  width: 6.4rem;
  height:5rem;
 background: #ccc;
}
.content p{
  height: 0.6rem;
  text-align: center;
}
.content p a{
  text-decoration: none;
  font-size: 0.3rem;
  line-height: 0.6rem;
  position: absolute;
  left: 50%;
  margin-left: -0.3rem;
}
</style>
