var indexs = Vue.extend({
    template: `
    <div class="bgBox">
        <header class="header clearfix">
            <i class="iconfont returns">&#xe65b;</i>
            <span>
                庆丰包子铺(窦店)
            </span>
            <div class="ltcont">
                <a href="#"><i class="iconfont search">&#xe661;</i></a>
                <a href="#"><i class="iconfont share">&#xe639;</i></a>
            </div>
        </header>
        <div class="contentbox">
            <div class="listBox clearfix">
                <ul class="listBox_nav">
                    <li class="listBox_nav_li" :class="typeInx==$index?'active':''" @click="classify($index)"
                        v-for="(item,$index) in foods">{{item.ltypes}}</li>
                </ul>
                <div class="productBox">
                    <div class="productBox_item clearfix" v-for="(cont,i) in foods[typeInx].food">
                        <div class="imgBox">
                            <img :src='cont.img' alt="">
                        </div>
                        <div class="productBox_item_cont">
                            <p class="product_name">{{cont.name}}</p>
                            <p class="product_info">{{cont.info}}</p>
                            <div class="product_price clearfix">
                                <p class="price">￥{{cont.price}}</p>
                                <div class="box">
                                    <span class="prev" @click="prev(cont)">-</span>
                                    <span>{{cont.quantity || 0}}</span>
                                    <span class="next" @click="next(cont)">+</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer class="footer" v-if="show">
            <div class="car">
                <i class="iconfont gwc">&#xe600;</i>
            </div>
            <div class="settled">
                &yen;{{totalPrices}}
            </div>
            <router-link :to="{name:'confirm',params:{calculate}}" class="toPay">
                    去结算
            </router-link>
        </footer>
    </div>
    `,
    methods: {
        classify($index) {
            this.typeInx = $index;
        },
        next(cont) {
            if (cont.quantity) {
                cont.quantity++;
            } else {
                this.$set(cont, 'quantity', 1)
            }
        },
        prev(cont) {
            if (cont.quantity) {
                if (cont.quantity == 0) return;
                cont.quantity--
            }
        },
    },
    computed: {
        calculate() {
            var arr = [];
            this.foods.forEach(element => {
                if (element.food && element.food.length > 0) {
                    element.food.forEach(item => {
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
            show:false,
            typeInx:0,
            foods: [
                {
                    ltypes: '水饺',
                    food: [{
                        name: '猪肉白菜水饺',
                        price: '16',
                        info: '月售18份，好评率100%',
                        img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1877410185,2760910629&fm=26&gp=0.jpg'
                    }, {
                        name: '鲅鱼三鲜水饺',
                        price: '20',
                        info: '月售18份，好评率100%',
                        img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2177409641,2693109708&fm=26&gp=0.jpg'
                    }, {
                        name: '虾仁三鲜水饺',
                        price: '25',
                        info: '月售19份，好评率100%',
                        img: 'https://f12.baidu.com/it/u=2846344889,4254991245&fm=72'
                    }, {
                        name: '南瓜皮菌菇三鲜猪肉水饺',
                        price: '24',
                        info: '月售18份，好评率100%',
                        img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3037188577,955349426&fm=26&gp=0.jpg'
                    },]
                }, {
                    ltypes: '流食',
                    food: [{
                        name: '绿豆粥',
                        price: '3',
                        info: '月售19份，好评率100%',
                        img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3297863117,2099093432&fm=26&gp=0.jpg'
                    }, {
                        name: '鲜肉馄饨',
                        price: '20',
                        info: '猪肉(肥瘦适中),大葱',
                        img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3607722980,2957536157&fm=26&gp=0.jpg'
                    }, {
                        name: '小米粥',
                        price: '3',
                        info: '月售19份，好评率100%',
                        img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2961899089,2359868428&fm=26&gp=0.jpg'
                    }, {
                        name: '紫米粥',
                        price: '3',
                        info: '月售19份，好评率100%',
                        img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1766754300,2127965162&fm=26&gp=0.jpg'
                    },]
                }, {
                    ltypes: '凉菜',
                    food: [{
                        name: '茶叶蛋',
                        price: '2',
                        info: '月售19份，好评率100%',
                        img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3714831195,2496805530&fm=26&gp=0.jpg'
                    }]
                }, {
                    ltypes: ' 包子',
                    food: [{
                        name: '素三鲜包子',
                        price: '9',
                        info: '月售19份，好评率100%',
                        img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2850083183,3570198426&fm=26&gp=0.jpg'
                    }, {
                        name: '猪肉梅干菜',
                        price: '9',
                        info: '猪肉,梅干菜',
                        img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1434478260,714915744&fm=26&gp=0.jpg'
                    }, {
                        name: '牛肉大葱',
                        price: '9',
                        info: '月售19份，好评率100%',
                        img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=459723164,1031081223&fm=26&gp=0.jpg'
                    }, {
                        name: '猪肉茴香',
                        price: '7',
                        info: '猪肉,茴香',
                        img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=461559683,1034562744&fm=26&gp=0.jpg'
                    },]
                }, {
                    ltypes: '庆丰福棕',
                    food: [{
                        name: '黄米豆沙粽',
                        price: '5',
                        info: '月售19份，好评率100%',
                        img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1598047703,1841800608&fm=26&gp=0.jpg'
                    }, {
                        name: '香菇卤肉粽',
                        price: '5',
                        info: '月售19份，好评率100%',
                        img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4079914492,1020146587&fm=15&gp=0.jpg'
                    }, {
                        name: '江米蜜枣粽',
                        price: '5',
                        info: '月售19份，好评率100%',
                        img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1303447562,2302959512&fm=26&gp=0.jpg'
                    },]
                }
            ]
        }
    },
})