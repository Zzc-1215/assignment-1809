<template>
    <div>
        <div class="header">
            <span><router-link to='/index'><i class="iconfont fanhui">&#xe65b;</i></router-link>墨迹天气</span>
        </div>
        <div class="search">
            <i class="iconfont sousuo">&#xe606;</i>
            <input type="search" placeholder="请输入城市名，快速查看天气" id="search">
            <router-link to='/index'><span class="quxiao">取消</span></router-link>
        </div>
        <div class="con">
            <div  class="top">
                <p>猜你想找</p>
                <ul>
                    <li>定位</li>
                    <li v-for='(item,index) in newsList' v-if='index<7' :key='index' :class="{active:(indexs==index)}" @click='click(index)'>{{item.district}}</li>
                </ul>
            </div>
            
            <div class="bottom">
                <p>
                    历史记录
                    <span><i class="iconfont shanchu">&#xe696;</i>清空</span>
                </p>
                <ul>
                    <li>北京市</li>
                    <li>北京市</li>
                    <li>北京市</li>
                    <li>北京市</li>
                    <li>北京市</li>
                </ul>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data(){
        return{
            indexs:-1,
            newsList:[],
        }
    },
    created() {
        this.getNewsList();
    },
    methods:{
        getNewsList(){
            // http://apis.juhe.cn/simpleWeather/cityList?key=f1d197655f3dac22850212f0e04274e9
		     this.axios.get('/simpleWeather/cityList?key=f1d197655f3dac22850212f0e04274e9').then((res)=>{
                console.log(res.data.result)
                this.newsList = res.data.result;
      	    })
        },
        click(index,value){
            this.indexs=index;
            // this.$emit('click',value)
        }
    },
}
</script>


<style scoped>
.header{
    width: 7.5rem;
    height: 0.6rem;
    line-height: 0.6rem;
}
.header span{
    font-size: 0.38rem;
    float: left;
    margin-left: 0.2rem;
    font-family:"Times New Roman",Georgia,Serif;
}
.header span a{
    text-decoration: none;
    color: #000;
    margin-right:0.15rem;
}
.fanhui{
    font-size: 0.3rem;
    line-height: 0.6rem;
}
.search{
    width: 7.5rem;
    height: 0.8rem;
    border-bottom: 1px solid #ccc;
    position: relative;
}
#search{
    width: 6rem;
    height: 0.4rem;
    background: #f2f2f2;
    color: #959595;
    font-size: 0.2rem;
    border-radius: 0.1rem;
    outline: none;
    border-style: none;
    padding-left: 0.8rem;
    position: absolute;
    top: 0.2rem;
    left: 0.2rem;
    
}
.sousuo{
    position: absolute;
    top: 0.24rem;
    left: 0.4rem;
    font-size: 0.3rem;
    color: #a1a1a1;
    z-index: 1;
}
.quxiao{
    font-size: 0.26rem;
    float: right;
    line-height: 0.8rem;
    margin-right: 0.4rem;
    color: #000;
}


.con{
    width: 7.5rem;
    height: 3rem;
    margin-top: 0.2rem;
}
.top,.bottom{
    width: 7.1rem;
    height: 3rem;
    margin: auto;
}
.top p{
    font-size: 0.32rem;
}
.top ul li{
    font-size: 0.26rem;
    list-style-type: none;
    width: 30%;
    height: 0.5rem;
    line-height: 0.5rem;
    margin: 1.6%;
    float: left;
    text-align: center;
    border-radius: 0.1rem;
    background: #f2f2f4;
    color: #666668;
}
.top ul li:nth-child(1){
    background: blue;
    color: #fff;
}
.top ul li.active{
    background: blue;
    color: #fff;
}
.bottom p{
    font-size: 0.32rem;
}
.bottom ul li{
    font-size: 0.26rem;
    list-style-type: none;
    width: 30%;
    height: 0.5rem;
    line-height: 0.5rem;
    margin: 1.6%;
    float: left;
    text-align: center;
    border-radius: 0.1rem;
    background: #f2f2f4;
    color: #666668;
}
.bottom span{
    float: right;
    font-size: 0.3rem;
    margin-right: 0.1rem;
}
.shanchu{
    font-size: 0.3rem;
    margin-right: 0.1rem;
}

</style>
