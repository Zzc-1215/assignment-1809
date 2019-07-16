var commodity = Vue.extend({
    template: `
    <div class="container">
        <div class="commodity-header clearfix">
            <span class="icon iconfont">&#xe601;</span>
            <h3>庆丰包子铺（窦店）</h3>
            <div class="right-span">
                <span class="icon iconfont sreach">&#xe605;</span>
                <span class="icon iconfont fx">&#xe625;</span>
            </div>
            <div class="nav">
                <li><a href="javascript:;">点餐</a></li>
                <li><a href="javascript:;">评价</a></li>
                <li><a href="javascript:;">商家</a></li>
            </div>

        </div>
        <div class="commodity-main">
            <ul class="commodity-leftnav">
                <li v-for="item,index in listarr" @click="classify(index)" :class="{'active':i==index}">{{item.type}}</li>
            </ul>
            <div class="commodity-list">
                <div class="item clearfix" v-for="item,index in listarr[i].list">
                    <div class="img">
                        <img :src="item.img">
                    </div>
                    <div class="content">
                        <p>{{item.text}}</p>
                        <span class="pj2">{{item.info}}</span>
                        <span class="pj1">{{item.eval}}</span>
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
                type: '热销',
                list: [{
                    img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2202050081,1260015096&fm=27&gp=0.jpg',
                    text: '炸鸡',
                    price: 20,
                    info: '月销量50',
                    eval: '好评率：50%'
                }, {
                    img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2497571715,1431891556&fm=27&gp=0.jpg',
                    text: '素三鲜水饺',
                    price: 10,
                    info: '月销量50',
                    eval: '好评率：50%'
                },{
                    img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2634954541,352124651&fm=27&gp=0.jpg',
                    text: '猪肉水饺',
                    price: 10,
                    info: '月销量50',
                    eval: '好评率：50%'
                },{
                    img: 'https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=3731185612,2693089362&fm=85&s=1320FEA74C4346D68E8B327F0300705A',
                    text: '鸡蛋汤',
                    price: 6,
                    info: '月销量50',
                    eval: '好评率：50%'
                }],
            }, {
                type: '流食',
                list: [{
                    img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=398600143,4053879256&fm=27&gp=0.jpg',
                    text: '绿豆粥',
                    price: 3,
                    info: '月销量50',
                    eval: '好评率：50%'
                }, {
                    img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=305840843,1891919891&fm=27&gp=0.jpg',
                    text: '红枣莲子粥',
                    price: 8,
                    info: '月销量50',
                    eval: '好评率：50%'
                },{
                    img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3019227062,1872021934&fm=27&gp=0.jpg',
                    text: '皮蛋瘦肉粥',
                    price: 8,
                    info: '月销量50',
                    eval: '好评率：50%'
                }],
            }, {
                type: '水饺',
                list: [{
                    img: 'https://f10.baidu.com/it/u=4282036640,831512286&fm=72',
                    text: '猪肉大葱水饺',
                    price: 10,
                    info: '月销量50',
                    eval: '好评率：50%'
                }, {
                    img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562255798314&di=65d96390961564d8dbf556d1b8c8f574&imgtype=0&src=http%3A%2F%2Fimg1.voc.com.cn%2FUpLoadFile%2F2016%2F08%2F25%2F201608250717393006.jpg',
                    text: '三鲜水饺',
                    price: 10,
                    info: '月销量50',
                    eval: '好评率：50%'
                }, {
                    img: 'https://f10.baidu.com/it/u=4282036640,831512286&fm=72',
                    text: '韭菜水饺',
                    price: 8,
                    info: '月销量50',
                    eval: '好评率：50%'
                }],
            }, {
                type: '凉菜',
                list: [{
                    img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1481868521,3172249719&fm=27&gp=0.jpg',
                    text: '青椒丝',
                    price: 10,
                    info: '月销量50',
                    eval: '好评率：50%'
                }, {
                    img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=270643652,285130330&fm=27&gp=0.jpg',
                    text: '冰糖黄瓜',
                    price: 15,
                    info: '月销量50',
                    eval: '好评率：50%'
                }, {
                    img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3482189062,3654786555&fm=27&gp=0.jpg',
                    text: '素肉',
                    price: 25,
                    info: '月销量50',
                    eval: '好评率：50%'
                }],
            }, {
                type: '包子',
                list: [{
                    img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3607722980,2957536157&fm=26&gp=0.jpg',
                    text: '三鲜包子',
                    price: 15,
                    info: '月销量50',
                    eval: '好评率：50%'
                }, {
                    img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562255798314&di=65d96390961564d8dbf556d1b8c8f574&imgtype=0&src=http%3A%2F%2Fimg1.voc.com.cn%2FUpLoadFile%2F2016%2F08%2F25%2F201608250717393006.jpg',
                    text: '豆沙包子',
                    price: 10.8,
                    info: '月销量50',
                    eval: '好评率：50%'
                }],
            }, {
                type: '庆丰福粽',
                list: [{
                    img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2878435730,3259854871&fm=27&gp=0.jpg',
                    text: '红豆粽子',
                    price: 6,
                    info: '月销量50',
                    eval: '好评率：50%'
                }, {
                    img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=113208759,494844991&fm=27&gp=0.jpg',
                    text: '豆沙粽子',
                    price: 6,
                    info: '月销量50',
                    eval: '好评率：50%'
                }, {
                    img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3260009669,3872177725&fm=27&gp=0.jpg',
                    text: '肉粽',
                    price: 9,
                    info: '月销量50',
                    eval: '好评率：50%'
                }],
            }, {
                type: '冷饮',
                list: [{
                    img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4068085479,4112711859&fm=27&gp=0.jpg',
                    text: '彩虹饮',
                    price: 10,
                    info: '月销量50',
                    eval: '好评率：50%'
                }, {
                    img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2851374011,1876830024&fm=27&gp=0.jpg',
                    text: '层层靓',
                    price: 20,
                    info: '月销量50',
                    eval: '好评率：50%'
                }, {
                    img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2863762430,957922078&fm=27&gp=0.jpg',
                    text: '草莓冰沙',
                    price: 15,
                    info: '月销量50',
                    eval: '好评率：50%'
                }, {
                    img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1588377916,234136657&fm=27&gp=0.jpg',
                    text: '水果家族',
                    price: 25,
                    info: '月销量50',
                    eval: '好评率：50%'
                }],
            }, {
                type: '豆浆饮品',
                list: [{
                    img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1480845651,2744082904&fm=27&gp=0.jpg',
                    text: '黄豆豆浆',
                    price: 5,
                    info: '月销量50',
                    eval: '好评率：50%'
                }, {
                    img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1058289598,3767790234&fm=27&gp=0.jpg',
                    text: '现磨豆浆',
                    price: 5,
                    info: '月销量50',
                    eval: '好评率：50%'
                }],
            }],
        }
    }
})