
        var commodity = Vue.extend({
            template: `
            <div class="container">
                <div class="commodity-header">
                    <div>
                        < 庆丰包子铺（窦店）
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
                                <p>{{item.text}}</p>
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
                    <router-link  :to="{name:'count',params:{calculate}}">去结算</router-link>
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
                            img: 'http://p0.meituan.net/wmproduct/50137a2b668f606f2efc2fff577a64c827438.jpg@130w_130h_1e_1c',
                            text: '猪肉大葱',
                            price: 12,
                        }, {
                            img: 'http://p1.meituan.net/wmproduct/8a8fbebf8d6cbc183fc41da6117b44e834452.jpg@130w_130h_1e_1c',
                            text: '素三鲜',
                            price: 12,
                        },{
                            img: 'http://img2.imgtn.bdimg.com/it/u=3761987825,925723237&fm=26&gp=0.jpg',
                            text: '茶叶蛋',
                            price: 12,
                        }, {
                            img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4292844575,1757041827&fm=26&gp=0.jpg',
                            text: '棒渣粥',
                            price: 12,
                        }],
                    }, {
                        type: '熟食',
                        list: [{
                            img: 'http://img2.imgtn.bdimg.com/it/u=3761987825,925723237&fm=26&gp=0.jpg',
                            text: '茶叶蛋',
                            price: 12,
                        }, {
                            img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4292844575,1757041827&fm=26&gp=0.jpg',
                            text: '棒渣粥',
                            price: 12,
                        },{
                            img: 'http://img2.imgtn.bdimg.com/it/u=3761987825,925723237&fm=26&gp=0.jpg',
                            text: '茶叶蛋',
                            price: 12,
                        }, {
                            img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4292844575,1757041827&fm=26&gp=0.jpg',
                            text: '棒渣粥',
                            price: 5,
                        }],
                    }, {
                        type: '水饺',
                        list: [{
                            img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2177942075,950190465&fm=26&gp=0.jpg',
                            text: '猪肉白菜水饺',
                            price: 20,
                        }, {
                            img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1304809467,3081487397&fm=26&gp=0.jpg',
                            text: '鱿鱼三鲜水饺',
                            price: 20,
                        },{
                            img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1304809467,3081487397&fm=26&gp=0.jpg',
                            text: '牛肉芹菜水饺',
                            price: 20,
                        },{
                            img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1304809467,3081487397&fm=26&gp=0.jpg',
                            text: '虾仁三鲜水饺',
                            price: 20,
                        }],
                    }, {
                        type: '流食',
                        list: [{
                            img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3209462403,3801079367&fm=26&gp=0.jpg',
                            text: '鲜肉混沌',
                            price: 12,
                        }, {
                            img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2376505469,1171838866&fm=26&gp=0.jpg',
                            text: '紫米粥莲子粥',
                            price: 12,
                        },{
                            img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4292844575,1757041827&fm=26&gp=0.jpg',
                            text: '棒渣粥',
                            price: 12,
                        }, {
                            img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2376505469,1171838866&fm=26&gp=0.jpg',
                            text: '荠菜馄饨',
                            price: 12,
                        },{
                            img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2376505469,1171838866&fm=26&gp=0.jpg',
                            text: '鲜虾馄饨',
                            price: 12,
                        }, {
                            img: 'http://img3.imgtn.bdimg.com/it/u=1998810528,3356936245&fm=26&gp=0.jpg',
                            text: '芥兰黄豆',
                            price: 20,
                        }],
                    }],
                }
            }
        })        































