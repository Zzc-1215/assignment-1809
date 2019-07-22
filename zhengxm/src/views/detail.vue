<template>
    <div class="con">
        <div class="s">
            <div class="tq">
                <p class="weather">墨迹天气</p>
            </div>
            <div class="hr">
                <i class="iconfont gd">&#xe61d;</i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| <i class="iconfont dw">&#xe61c;</i>
            </div>
        </div>
        <div class="content">
            <div class="city">
                <p class="dc"><span class="iconfont dd">&#xe611;</span>{{$store.state.count.district}}</p>
                <p class="tem" v-for="(item,index) in today" :key="index + '1'">{{item.temperature}}℃
                    <i class="tom">{{item.info}}&nbsp;&nbsp;|&nbsp;&nbsp;<em class="kk">{{item.aqi}}&nbsp;良</em></i>
                    <span class="cla">风向&nbsp;{{item.direct}}&nbsp;&nbsp;湿度{{item.humidity}}&nbsp;&nbsp;气压1002hPa</span>
                </p>
            </div>
            <ul class="box">
                <router-link :to="{path:'/first',params:{conList}}">
                    <li class="jto" >
                        <div class="l" >
                            <p class="jl">今天&nbsp;&nbsp;<span class="liang">良</span></p>
                            <p class="yu" v-for="(item,index) in zoor" :key="index+'a'">{{item.weather}}</p>
                        </div>
                        <div class="r" >
                            <p class="wd" v-for="(item,index) in zoor" :key="index+'b'">{{item.temperature}}</p>
                        </div>
                    </li>
                    <li class="mt">
                        <div class="l" >
                            <p class="jl">明天&nbsp;&nbsp;&nbsp;<span class="liang">良</span></p>
                            <p class="yu" v-for="(item,index) in one" :key="index+'c'">{{item.weather}}</p>
                        </div>
                        <div class="r">
                            <p class="wd" v-for="(item,index) in one" :key="index+'d'">{{item.temperature}}</p>
                        </div>
                    </li>
                </router-link>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            id:this.$store.state.count.id,
            contentl:[],
            today:[],
            future:[],
            all:[],
            zoor:[],
            one:[]
        }
    },
    created(){
        this.conList();
    },
    methods:{
        conList(){
            console.log(this.id)
            this.axios.get('/simpleWeather/query?city='+this.id+'&key=ae424baab7ceba58a7fa97b0c08e0ceb').then((res)=>{
                console.log(res.data.result)
                this.today.push(res.data.result.realtime);
                this.future.push(res.data.result.future)
                this.all = this.future[0]
                console.log(this.all[0])
                this.zoor.push(this.all[0])
                console.log(this.zoor)
                this.one.push(this.all[1])
                // console.log(this.zoor)
            })
        }
    }
}
</script>

<style>
.con{
    width: 7.5rem;
    height: 10rem;
    background-image: url('https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1563497284&di=7dcbce369a9d3aa8ef7bcaff83fc84be&src=http://img4.xitongzhijia.net/allimg/150214/53-150214112243.jpg');
    background-size: 100% 10rem;
    background-repeat: no-repeat;
}
    .s{
        width: 100%;
        height: 0.6rem;
        margin-left: 0.1rem;
    }
    .tq{
        float: left;
        margin-top: -0.5rem;
    }
    .weather{
        font-size: 0.22rem;
        display: inline-block;
    }
    .hr{
        width: 1.6rem;
        height: 0.4rem;
        border: 0.01rem solid #ccc;
        border-radius: 0.3rem;
        margin-top: 0.1rem;
        float: right;
        font-size: 0.3rem;
        color:darkgray;
        position: relative;
        margin-right: 0.2rem;
    }
    .gd{
        position: absolute;
        margin-top: 0.1rem;
        line-height: 0.2rem;
        right: 1.1rem;
    }
    .dw{
        position: absolute;
        right: 0.2rem;
        margin-top: 0.1rem;
        line-height: 0.2rem;
    }
    .content{
        width: 7.3rem;
        padding:0.3rem 0.1rem 0 0.1rem;
    }
    .city{
        text-align: center;
        height: 8rem;
    }
    .dd{
        font-size: 0.5rem;
        margin-right: 0.03rem;
    }
    .dc{
        font-size: 0.5rem;
        height: 0.8rem;
        margin-bottom: 0.4rem;
    }
    .tem{
        font-size: 2.4rem;
    }
    .tom{
        font-size: 0.4rem;
        font-style: normal;
        display: block;
        margin-bottom: 0.3rem;
    }
    .kk{
        font-size: 0.4rem;
        font-style: normal;
        width: 1.2rem;
        height: 0.5rem;
        background-color: burlywood;
        color: #fff;
        text-align: center;
        line-height: 0.5rem;
        display: inline-block;
    }
    .cla{
        font-size: 0.4rem;
        display: block;
        color: #ccc
    }
    .box{
        width: 7.5rem;
        height: 5rem;
    }
    .jto{
        width: 3.2rem;
        float: left;
        height: 0.8rem;
        border-right: 1px solid #ccc;
        list-style: none;
        margin-left: 0.4rem;
        color:black;
    }
    .l,.r{
        float: left;
    }
    .r{
        margin-left: 0rem;
    }
    .jl,.yu,.wd{
        font-size: 0.3rem;
        /* margin-left: 10px; */
    }
    .wd{
        margin-left: 0.2rem;
    }
    .mt{
        width: 3.2rem;
        float: right;
        height: 0.8rem;
        list-style: none;
        color:black;
    }
</style>


