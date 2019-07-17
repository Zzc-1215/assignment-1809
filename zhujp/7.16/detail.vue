<template>
    <div>
        <div class="header">
            <h3><router-link :to="{name:'home'}"><span><</span></router-link>标题</h3>
        </div>
        <div>
            <img src="">
            <img src="">
            <img src="">
        </div>
    </div>
</template>
<script>

export default {

}
</script>
<style scoped>
    .header{
        width:100%;
        height:50px;
        border-bottom:1px solid #ccc;
    }
    .header h3{
        text-align:center;
        line-height:50px;
        font-size:18px;
    }
    .header h3 span{
        display:block;
        float:left;
        padding-left:25px;
        font-size:18px;
        color:#000;
    }
</style>
