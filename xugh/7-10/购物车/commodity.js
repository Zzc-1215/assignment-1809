var commodity = Vue.extend({
    template: `
    <div class="container">
        <div class="commodity-header">
            <div>
                庆丰包子铺（窦店）
            </div>
        </div>
        <div class="commodity-main">
            <div class="commodity-leftnav">
                <div v-for="item,index in listarr" @click="classify(index)" :class="{'active':i==index}">{{item.type}}</div>
            </div>
            <div class="commodity-list">
                <div class="item clearfix" v-for="item,index in listarr[i].list">
                    <div class="img">
                        <img :src="item.img">
                    </div>
                    <div class="content">
                        <h3>{{item.text}}</h3>
                        <h6>{{item.texts}}</h6>
                        <div class="bottom">
                            <span>￥{{item.price}}</span>
                            <div class="btn-box">
                                <i class="iconfont icon-jian" @click="jian(item)"></i>
                                <span>{{item.quantity || 0}}</span>
                                <i class="iconfont icon-54" @click="jia(item)"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="commodity-footer" v-if="show">
            <div>￥<span>{{totalPrices}}</span></div>
            <router-link  :to="{name:'account',params:{calculate}}">去结算</router-link>
        </div>
    </div>
    `,
    methods: {
        classify(index) {
            this.i = index;
        },
        jia(item) {
            if (item.quantity) {
                item.quantity++;
            } else {
                this.$set(item, 'quantity', 1)
            }
        },
        jian(item) {
            if (item.quantity) {
                if (item.quantity == 0) return;
                item.quantity--
            }
        },
    },
    computed: {
        calculate() {
            var arr = [];
            this.listarr.forEach(element => {
                if (element.list && element.list.length > 0) {
                    element.list.forEach(item => {
                        if (item.quantity) {
                            arr.push(item);
                        }
                    })
                }
            });
            return arr;
        },
        totalPrices() {
            var num = 0;
            this.calculate.forEach(item => {
                num += item.price * item.quantity;
            })
            return num.toFixed(1);
        }
    },
    watch: {
        calculate(v1) {
            if (v1.length > 0) {
                this.show = true;
            } else {
                this.show = false;
            }
        }
    },
    data() {
        return {
            show: false,
            i: 0,
            listarr: [{
                type: '水饺',
                list: [{
                    img: 'https://img13.360buyimg.com/n7/jfs/t4345/24/1244632536/377382/8f52854b/58bf7ccaN56298637.jpg',
                    text: '必品阁菌菇三鲜王饺子',
                    texts:'必品阁自营旗舰店',
                    price: 23.90,
                }, {
                    img: 'https://img11.360buyimg.com/n7/jfs/t1/70542/19/1269/171900/5cf8a9daEcd19bc12/f3b2a8cf3fb6403c.jpg',
                    text: '湾仔码头玉米蔬菜猪肉口味 ',
                    texts:' 湾仔码头京东自营旗舰店',
                    price: 49.90,
                },{
                    img: 'https://img13.360buyimg.com/n7/jfs/t4345/24/1244632536/377382/8f52854b/58bf7ccaN56298637.jpg',
                    text: '必品阁菌菇三鲜王饺子',
                    texts:' 必品阁自营旗舰店',
                    price: 23.90,
                },{
                    img: 'https://img11.360buyimg.com/n7/jfs/t1/70542/19/1269/171900/5cf8a9daEcd19bc12/f3b2a8cf3fb6403c.jpg',
                    text: '湾仔码头玉米蔬菜猪肉口味 ',
                    texts:' 湾仔码头京东自营旗舰店',
                    price: 49.90,
                },{
                    img: 'https://img13.360buyimg.com/n7/jfs/t4345/24/1244632536/377382/8f52854b/58bf7ccaN56298637.jpg',
                    text: '必品阁菌菇三鲜王饺子',
                    texts:' 必品阁自营旗舰店',
                    price: 23.90,
                },{
                    img: 'https://img11.360buyimg.com/n7/jfs/t1/70542/19/1269/171900/5cf8a9daEcd19bc12/f3b2a8cf3fb6403c.jpg',
                    text: '湾仔码头玉米蔬菜猪肉口味 ',
                    texts:' 湾仔码头京东自营旗舰店',
                    price: 49.90,
                }],
            }, {
                type: '流食',
                list: [{
                    img: 'https://img12.360buyimg.com/n7/jfs/t26179/46/2134919815/252207/ffad0f08/5bf8efd1Ndde188e4.png',
                    text: '中老年燕麦米粉',
                    texts:'年中特惠，买二送一，关注店铺享优惠，支持7天无理由退换货',
                    price: 59.90,
                }, {
                    img: 'https://img13.360buyimg.com/n7/jfs/t28660/262/619555375/131508/3b835c9c/5bf90b26N360e0d40.jpg',
                    text: ' 中老年营养配方小米粉',
                    texts:'年中特惠，买二送一，关注店铺享优惠，支持7天无理由退换货',
                    price: 69.90,
                },{
                    img: 'https://img12.360buyimg.com/n7/jfs/t26179/46/2134919815/252207/ffad0f08/5bf8efd1Ndde188e4.png',
                    text: '中老年燕麦米粉',
                    texts:'年中特惠，买二送一，关注店铺享优惠，支持7天无理由退换货',
                    price: 59.90,
                }, {
                    img: 'https://img13.360buyimg.com/n7/jfs/t28660/262/619555375/131508/3b835c9c/5bf90b26N360e0d40.jpg',
                    text: ' 中老年营养配方小米粉',
                    texts:'年中特惠，买二送一，关注店铺享优惠，支持7天无理由退换货',
                    price: 69.90,
                },{
                    img: 'https://img12.360buyimg.com/n7/jfs/t26179/46/2134919815/252207/ffad0f08/5bf8efd1Ndde188e4.png',
                    text: '中老年燕麦米粉',
                    texts:'年中特惠，买二送一，关注店铺享优惠，支持7天无理由退换货',
                    price: 59.90,
                },],
            }, {
                type: '凉菜',
                list: [{
                    img: 'https://img13.360buyimg.com/n7/jfs/t6502/75/77025175/244697/a7e0c377/5938c58dNc793f9f3.jpg',
                    text: '海藻寿司料理',
                    texts:'调味裙带菜 250g 海藻寿司料理 海带丝',
                    price: 15.80,
                }, {
                    img: 'https://img12.360buyimg.com/n7/jfs/t3526/84/348034575/115624/b90c6aa0/580711d7N4fe392a5.jpg',
                    text: ' 糯米藕桂花蜜汁莲藕',
                    texts:'熟食河藕扬州特产380至500克每袋',
                    price: 9.90,
                },{
                    img: 'https://img13.360buyimg.com/n7/jfs/t6502/75/77025175/244697/a7e0c377/5938c58dNc793f9f3.jpg',
                    text: '海藻寿司料理',
                    texts:'调味裙带菜 250g 海藻寿司料理 海带丝',
                    price: 15.80,
                }, {
                    img: 'https://img12.360buyimg.com/n7/jfs/t3526/84/348034575/115624/b90c6aa0/580711d7N4fe392a5.jpg',
                    text: ' 糯米藕桂花蜜汁莲藕',
                    texts:'熟食河藕扬州特产380至500克每袋',
                    price: 9.90,
                },{
                    img: 'https://img13.360buyimg.com/n7/jfs/t6502/75/77025175/244697/a7e0c377/5938c58dNc793f9f3.jpg',
                    text: '海藻寿司料理',
                    texts:'调味裙带菜 250g 海藻寿司料理 海带丝',
                    price: 15.80,
                }],
            },{
                type: '包子',
                list: [{
                    img: 'https://img11.360buyimg.com/n7/jfs/t1/68338/14/108/59175/5ce27ba4Ea3a58b6e/fbc48155e5dd32f6.jpg',
                    text: '五丰富春 鲜肉包',
                    texts:' 速食 蓬松绵软 清鲜香醇 速冻面点 早餐点心 1.6kg',
                    price: 52.56,
                }, {
                    img: 'https://img13.360buyimg.com/n7/jfs/t1/66104/25/1334/429081/5cf930d8E6001c766/ba93382e79c5952e.jpg',
                    text: ' 正大食品  猪肉圆白菜包 ',
                    texts:'510g（6只装 馒头花卷 儿童早餐）',
                    price: 9.90,
                },{
                    img: 'https://img11.360buyimg.com/n7/jfs/t1/68338/14/108/59175/5ce27ba4Ea3a58b6e/fbc48155e5dd32f6.jpg',
                    text: '五丰富春 鲜肉包',
                    texts:' 速食 蓬松绵软 清鲜香醇 速冻面点 早餐点心 1.6kg',
                    price: 52.56,
                }, {
                    img: 'https://img13.360buyimg.com/n7/jfs/t1/66104/25/1334/429081/5cf930d8E6001c766/ba93382e79c5952e.jpg',
                    text: ' 正大食品  猪肉圆白菜包 ',
                    texts:'510g（6只装 馒头花卷 儿童早餐）',
                    price: 9.90,
                }, {
                    img: 'https://img13.360buyimg.com/n7/jfs/t1/66104/25/1334/429081/5cf930d8E6001c766/ba93382e79c5952e.jpg',
                    text: ' 正大食品  猪肉圆白菜包 ',
                    texts:'510g（6只装 馒头花卷 儿童早餐）',
                    price: 9.90,
                }],
            },{
                type: '庆丰福粽',
                list: [{
                    img: 'https://img11.360buyimg.com/n7/jfs/t29308/18/1585187912/170505/aa794b2b/5ce54439N2e47ac8e.jpg',
                    text: '五芳斋 中华老字号',
                    texts:' 端午节 嘉兴特产 五芳鲜肉粽280g',
                    price:13.00,
                }, {
                    img: 'https://img13.360buyimg.com/n7/jfs/t18643/349/752814572/387369/29400611/5aa73002N044f0560.jpg',
                    text: ' 五芳斋 速冻鲜肉',
                    texts:' 1000g 100g*10只 嘉兴特产 团购送礼',
                    price: 19.90,
                },{
                    img: 'https://img11.360buyimg.com/n7/jfs/t29308/18/1585187912/170505/aa794b2b/5ce54439N2e47ac8e.jpg',
                    text: '五芳斋 中华老字号',
                    texts:' 端午节 嘉兴特产 五芳鲜肉粽280g',
                    price:13.00,
                }, {
                    img: 'https://img13.360buyimg.com/n7/jfs/t18643/349/752814572/387369/29400611/5aa73002N044f0560.jpg',
                    text: ' 五芳斋 速冻鲜肉',
                    texts:' 1000g 100g*10只 嘉兴特产 团购送礼',
                    price: 19.90,
                },{
                    img: 'https://img11.360buyimg.com/n7/jfs/t29308/18/1585187912/170505/aa794b2b/5ce54439N2e47ac8e.jpg',
                    text: '五芳斋 中华老字号',
                    texts:' 端午节 嘉兴特产 五芳鲜肉粽280g',
                    price:13.00,
                }],
            },{
                type: '庆丰特色冷饮',
                list: [{
                    img: 'https://img12.360buyimg.com/n7/jfs/t1/43027/28/3698/213814/5ccf9fabEc70dad18/8ce4fa60b386ee9d.png',
                    text: ' 格瓦斯',
                    texts:'  俄罗斯口味  300ml*12瓶装哈尔滨东北特产 原味格瓦斯300ml*12瓶',
                    price:32.50,
                }, {
                    img: 'https://img11.360buyimg.com/n7/jfs/t1/41136/11/3377/445552/5cce900bE01005e7b/2a0dd19822041523.jpg',
                    text: ' 可口可乐',
                    texts:'  500/600ml*24瓶 整箱装 可口可乐公司出品 新老包装随机发货',
                    price: 62.00,
                },{
                    img: 'https://img12.360buyimg.com/n7/jfs/t1/43027/28/3698/213814/5ccf9fabEc70dad18/8ce4fa60b386ee9d.png',
                    text: ' 格瓦斯',
                    texts:'  俄罗斯口味  300ml*12瓶装哈尔滨东北特产 原味格瓦斯300ml*12瓶',
                    price:32.50,
                }, {
                    img: 'https://img11.360buyimg.com/n7/jfs/t1/41136/11/3377/445552/5cce900bE01005e7b/2a0dd19822041523.jpg',
                    text: ' 可口可乐',
                    texts:'  500/600ml*24瓶 整箱装 可口可乐公司出品 新老包装随机发货',
                    price: 62.00,
                },{
                    img: 'https://img12.360buyimg.com/n7/jfs/t1/43027/28/3698/213814/5ccf9fabEc70dad18/8ce4fa60b386ee9d.png',
                    text: ' 格瓦斯',
                    texts:'  俄罗斯口味  300ml*12瓶装哈尔滨东北特产 原味格瓦斯300ml*12瓶',
                    price:32.50,
                }
                   ],
            },{
                type: '豆浆饮品',
                list: [{
                    img: 'https://img11.360buyimg.com/n7/jfs/t1/75288/36/1151/116089/5cf73249E44cec42a/c09e307cdf672773.jpg',
                    text: '格瓦斯豆本豆',
                    texts:' 唯甄豆奶  原味早餐奶 250ml*24盒 整箱装 唯甄豆奶250ml*24盒',
                    price:49.90,
                }, {
                    img: 'https://img14.360buyimg.com/n7/jfs/t23362/195/2353817188/273947/ca1fe0bc/5b7d2718N6413cb0d.jpg',
                    text: ' 早餐豆奶 植物蛋白饮料',
                    texts:'  蒙牛纯甄大牌秒杀日！酸奶2箱减20元！领券149再减15！',
                    price: 25.90,
                },{
                    img: 'https://img11.360buyimg.com/n7/jfs/t1/75288/36/1151/116089/5cf73249E44cec42a/c09e307cdf672773.jpg',
                    text: '格瓦斯豆本豆',
                    texts:' 唯甄豆奶  原味早餐奶 250ml*24盒 整箱装 唯甄豆奶250ml*24盒',
                    price:49.90,
                }, {
                    img: 'https://img14.360buyimg.com/n7/jfs/t23362/195/2353817188/273947/ca1fe0bc/5b7d2718N6413cb0d.jpg',
                    text: ' 早餐豆奶 植物蛋白饮料',
                    texts:'  蒙牛纯甄大牌秒杀日！酸奶2箱减20元！领券149再减15！',
                    price: 25.90,
                },
                {
                    img: 'https://img11.360buyimg.com/n7/jfs/t1/75288/36/1151/116089/5cf73249E44cec42a/c09e307cdf672773.jpg',
                    text: '格瓦斯豆本豆',
                    texts:' 唯甄豆奶  原味早餐奶 250ml*24盒 整箱装 唯甄豆奶250ml*24盒',
                    price:49.90,
                }],
            }],
        }
    }
})