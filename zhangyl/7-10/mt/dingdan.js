var dingdan = Vue.component('dingdan',{
    template:`
    <div class="ddxxboxbg">
        <div class="ddxxbox">
            <div class="Pay_babylist">
            <template v-if='selectData.length==0'>
                <router-link :to="'/'" style='display:block;text-align:center;line-height:1rem;'>
                    请去选择商品
                </router-link>
                
            </template>
            <template v-else>
                <div class="Pay_item" v-for='item in selectData'>
                    <img src="" alt="">
                    <p class="Pay_item_name">{{item.name}}</p>
                    <p class="Pay_item_nu fl">x{{item.num}}</p>
                    <p class="Pay_item_price fr">￥{{item.num*item.price}}</p>
                </div>
            </template>
            <div class="Pay_infolist">
                 <div class="fl Pay_ltspan"><span class="bz">包装</span></div>
                 <p class="ch fl">餐盒</p>
                <p class="chprice fr">￥4</p>
             </div>
             <div class="Pay_infolist">
                 <div class="fl Pay_ltspan"><span class="bz fn">蜂鸟</span></div>
                <p class="fl ch">配送费</p>
                 <p class="chprice fr">￥8</p>
             </div>
             <div class="Pay_infolist">
                 <div class="yh fl">优惠说明?</div>
                 <p class="chprice fr">小计 ￥<span style="font-size:0.5rem;font-weight: bold;">{{total+8+4}}</span></p>
             </div>
            </div>
        </div>
    </div>
    `,
    created(){
        console.log(this.$route);
    },
    data() {
        return {
            data:this.$route.params.data,
        }
    },
    computed:{
        selectData(){
            var arr=[];
            if(!this.data) return [];
            this.data.forEach(element => {
                element.food.forEach(el=>{
                    if(el.num){
                        arr.push(el);
                    } 
                })
            });
            return arr;
        },
        total(){
            var t=0;
            this.selectData.forEach(el=>{
                t+=el.num*el.price;
            })
            return t;
        }
    }
})


