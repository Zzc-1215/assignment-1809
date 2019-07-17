<!--  -->
<template>
<div>
 <div class="con-wrap">
        <div class="header-top">
            <router-link to="/">
                <h2>< 墨迹天气</h2>
            </router-link>
            <div class="hdr-right">
                <span>...</span>
                <span>|</span>
                <span>。。。</span>
            </div>
        </div>
        <div class="weather">
            <div class="bg"></div>
            <div class="weather-wrap" v-for="(item,value,index) in arr2" :key='index'>
                <h4>{{myage.text}}
                <span>{{myage.city}}</span>
                <span>{{myage.district}}</span>
                <span>{{myage.province}}</span>
                </h4>
                <div class="weather-tips">{{item.dressing_advice}}</div>
                
                     <div class="weather-temperature" @click='click(arr2.future)'>
                        {{item.temp}} <span>℃</span> 
                    </div>
                
                <div class="weather-patterns">
                    <p>{{item.weather}}          <span>{{item.dressing_index}}</span></p>
                </div>
                <div class="weather-rainfall">
                    <p>{{item.wind_direction}}</p>
                    <p>{{item.wind_strength}}</p>
                    <p>{{item.humidity}}</p>
                </div>
            </div>
        </div>
        <div class="tow-days" >
            <div class="one" >
                <ul  v-for="(item,value,index) in arr2.future" :key='index' v-if="index<2">
                    <li>{{item.week}}</li>
                    <li>{{item.temperature}}  </li>
                    <li>{{item.weather}}</li>
                </ul>
            </div>
        </div>
    </div>
</div>
 
</template>

<script>
export default {
    data(){
        return{
            myage:'',
            arr2:[]
        }
    },
    mounted(){
        this.myage = this.$route.params.item;
    },
  
    watch: {
        myage(v1,v2){
                var getUrl="/weather/index?cityname="+v1.id+"&dtype=&format=&key=e86e104b509661883094df754c12b235"
                this.axios.get(getUrl).then((response) => {
                this.arr2=response.data.result
                console.log(this.arr2)
            })
        }
    },
    methods:{
        click(item){
        console.log(item)
             this.$router.push({
              name:'personal',
              params:{
               item
              }
            });
        }
    }
   
    

}

</script>
<style scoped>
    .con-wrap {
        width: 7.5rem;
        height: auto;
    }
        
    .header-top {
        width: 100%;
        height: 1.2rem;
        padding: 0 0.3rem;
        box-sizing: border-box;
    }
        
    .header-top h2 {
        font-size: 0.3rem;
        font-weight: 400;
        line-height: 1.2rem;
        float: left;
    }
        
    .hdr-right {
        width: 2.5rem;
        height: 0.5rem;
        float: right;
        font-size: 0.3rem;
        margin-top: 0.4rem;
        border-radius: 0.5rem;
        overflow: hidden;
        border: 1px #ccc solid;
    }
        
    .hdr-right span {
        display: block;
        text-align: center;
        line-height: 0.4rem;
        box-sizing: border-box;
    }
        
    .hdr-right span:nth-child(1) {
        float: left;
        width: 1rem;
        height: 0.85rem;
        margin-right: 0.2rem
    }
        
    .hdr-right span:nth-child(2) {
        float: left;
    }
        
    .hdr-right span:nth-child(3) {
        float: right;
        width: 1rem;
        height: 0.85rem;
    }
    /* 主页 */
        
    .weather {
        width: 100%;
        height: 8rem;
        overflow: hidden;
        position: relative;
        margin-bottom: 1rem;
    }
        
    .bg {
        width: 100%;
        height: 10rem;
        background: -webkit-linear-gradient(top, #a2d1ef, #fff);
    }

    .weather-bottom {
        width: 100%;
        height: 1rem;
        position: absolute;
        bottom: 0;
        background: #e4edf2;
        text-align: center;
        line-height: 1rem;
        font-size: 0.3rem;
    }

    .icon {
        display: block;
        position: absolute;
        right: 1rem;
        top: 0
    }

    .weather-wrap {
        width: 5rem;
        height: 6rem;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -2.5rem;
        margin-top: -3.5rem;
        text-align: center;
    }

    .weather-wrap h4 {
        font-size: 0.4rem;
        font-weight: 400;
        margin-bottom: 0.2rem
    }

    .weather-tips {
        width: 100%;
        height: 0.6rem;
        background: rgba(0, 0, 0, .1);
        border-radius: 0.1rem;
        margin-bottom: 0.8rem;
        color:#fff;
        line-height: 0.6rem;
        overflow: hidden;
        font-size: 0.22rem;
    }

    .weather-temperature {
        width: 100%;
        height: 2rem;
        font-size: 0.9rem;
        position: relative;
        text-align: left;
        padding-left: 1.3rem;
    }

    .weather-temperature span{
        position: absolute;
        right: 2.7rem;
        top: -0.1rem;
    }

    .weather-patterns {
        font-size: 0.4rem;
        text-align: center;
    }

    .weather-patterns span{
        background-color: orange;
        color:#fff;
        font-size: 0.3rem;
        margin-left: 0.2rem;
        display: inline-block;
        width: 1rem;
    }

    .weather-rainfall {
        position: absolute;
        bottom: 0.3rem;
        width: 4rem;
        height: 0.5rem;
        left: 50%;
        margin-left: -2rem;
        padding-left: 0.6rem;
    }

    .weather-rainfall p {
        font-size: 0.3rem;
        line-height: 0.5rem;
        float: left;
        margin-right: 0.5rem;
    }

    .tow-days {
        width: 100%;
        height: 1.8rem;
    }
    .one{
        width:7.5rem;
        height: 1.8rem;
    }
    .one ul{
        float: left;
        width: 3.75rem;
        box-sizing: border-box;
    }
    .one ul:first-child{
        width: 3.75rem;
        border-right: 1px solid #000;
        box-sizing: border-box;
    }
    .one ul li:last-child{
        margin-left: 0.5rem;
    }
    .one ul li,
    .tow ul li {
        width: 1.8rem;
        height: 0.9rem;
        float: left;
        font-size: 0.3rem;
        line-height: 0.9rem;
        text-align: center;
    }

</style>