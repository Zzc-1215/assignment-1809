var goodsList = Vue.component('goodsList', {
    template: `
    <div class="lists clearfix">
        <ul class="listUl">
            <li class="litem" :class="typeInx==$index?'active':''" @click="typeInx=$index" v-for="(food,$index) in foods">{{food.ltypes}}</li>
        </ul>
        <div class="productbox">
                <!-- <div class="typetit">
                    {{foods[typeInx].ltypes}}
                </div> -->
                <div v-if="typeInx==$index" v-for="(ltypect,$index) in foods">
                    <div class="babycont clearfix" v-for="(cont,i) in ltypect.food" :key="i+$index+'cont'">
                        <div class="imgbox">
                            <img :src='cont.img' alt="">
                        </div>
                        <div class="babybox">
                            <p class="titbaby">{{cont.name}}</p>
                            <p class="infobaby">{{cont.info}}</p>
                            <div class="jg clearfix">
                                <p class="price">￥{{cont.price}}</p>
                                <count v-model="cont.num" :min="0"></count>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
    `,
    // props: ['sp'], //接收父组件的数据
        // props:{
        //     sp:{
        //         default:function(){
        //             return[
        //                     {
        //                         ltypes: '水饺1',
        //                         food: [{
        //                             name: '猪肉白菜水饺',
        //                             price: '16',
        //                             info: '虾仁一个，万年青菜',
        //                             img: 'https://f10.baidu.com/it/u=4282036640,831512286&fm=72'
        //                         }]
        //                     }
        //                 ]
        //         }
        //     }
        // },

            data() {
                return {
                    typeInx: 0,
                    value: 0,
                    // foods: this.sp,
                    foods: [
                        {
                            ltypes: '水饺1',
                            food: [{
                                name: '猪肉白菜水饺',
                                price: '16',
                                info: '虾仁一个，万年青菜',
                                img: 'https://f10.baidu.com/it/u=4282036640,831512286&fm=72'
                            }]
                        }, {
                            ltypes: '水饺2',
                            food: [{
                                name: '白菜水饺',
                                price: '16',
                                info: '虾仁一个，万年青菜',
                                img: 'https://f10.baidu.com/it/u=4282036640,831512286&fm=72'
                            }]
                        }
                    ]
                }
            },
            watch: {
                total(val, oldval) { //监听总价格的变化 暴露给父组件(根实例)
                    this.$emit('ttchange', val);
                    this.$emit('datachange',this.foods);
                },
                allnum(val, oldval) {
                    this.$emit('numchange', val)
                }
            },
            computed: {
                total() { //商品总价格
                    var total = 0;
                    this.foods.forEach(item => {
                        item.food.forEach(cont => {
                            // cont.num = 0;
                            total += (cont.num || 0) * cont.price;
                        })
                    })
                    return total;
                },
                allnum() { //商品总数量
                    var allnum = 0;
                    this.foods.forEach(item => {
                        item.food.forEach(cont => {
                            allnum += (cont.num || 0);
                        })
                    })
                    return allnum;
                }
        }
})