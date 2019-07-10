var total=Vue.component('total',{
    template:`
    <div>
        <div class="car">
            <i class="iconfont">&#xe602;</i>
            <div class="allnum">
                <slot name="allnum">0</slot>
            </div>
        </div>
            <div class="goprice">
                <p class="money">￥{{total}}</p>
                <p class="ps">另需配送费8元</p>
            </div>
        <div class="goPay" @click='go'>
            去结算
        </div>
    </div>
    `,
    props:['data','total'],
    methods:{
        go(){
            if(this.total==0) return;
            this.$router.push({name:'dingdan',params:{data:this.data,total:this.total}});
        }
    }
})


