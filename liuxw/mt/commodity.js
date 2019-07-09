var commodity = Vue.extend({
    template: `
    <div class="container">
        <div class="commodity-header">
            <div>
                派送至:
                北京石景山
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
                type: '优选水果',
                list: [{
                    img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2676343009,1944317430&fm=11&gp=0.jpg',
                    text: '优选水果',
                    price: 10.8,
                }, {
                    img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2676343009,1944317430&fm=11&gp=0.jpg',
                    text: '优选水果',
                    price: 10.8,
                },{
                    img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2676343009,1944317430&fm=11&gp=0.jpg',
                    text: '优选水果',
                    price: 10.8,
                }, {
                    img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2676343009,1944317430&fm=11&gp=0.jpg',
                    text: '优选水果',
                    price: 10.8,
                },{
                    img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2676343009,1944317430&fm=11&gp=0.jpg',
                    text: '优选水果',
                    price: 10.8,
                }, {
                    img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2676343009,1944317430&fm=11&gp=0.jpg',
                    text: '优选水果',
                    price: 10.8,
                }],
            }, {
                type: '优选水果',
                list: [{
                    img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2676343009,1944317430&fm=11&gp=0.jpg',
                    text: '优选水果',
                    price: 10.8,
                }, {
                    img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2676343009,1944317430&fm=11&gp=0.jpg',
                    text: '优选水果',
                    price: 10.8,
                },{
                    img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2676343009,1944317430&fm=11&gp=0.jpg',
                    text: '优选水果',
                    price: 10.8,
                }, {
                    img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2676343009,1944317430&fm=11&gp=0.jpg',
                    text: '优选水果',
                    price: 10.8,
                },{
                    img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2676343009,1944317430&fm=11&gp=0.jpg',
                    text: '优选水果',
                    price: 10.8,
                }, {
                    img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2676343009,1944317430&fm=11&gp=0.jpg',
                    text: '优选水果',
                    price: 10.8,
                }],
            }, {
                type: '优选水果',
                list: [{
                    img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2676343009,1944317430&fm=11&gp=0.jpg',
                    text: '优选水果',
                    price: 10.8,
                }, {
                    img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2676343009,1944317430&fm=11&gp=0.jpg',
                    text: '优选水果',
                    price: 10.8,
                },{
                    img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2676343009,1944317430&fm=11&gp=0.jpg',
                    text: '优选水果',
                    price: 10.8,
                }, {
                    img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2676343009,1944317430&fm=11&gp=0.jpg',
                    text: '优选水果',
                    price: 10.8,
                },{
                    img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2676343009,1944317430&fm=11&gp=0.jpg',
                    text: '优选水果',
                    price: 10.8,
                }, {
                    img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2676343009,1944317430&fm=11&gp=0.jpg',
                    text: '优选水果',
                    price: 10.8,
                }],
            }, {
                type: '优选水果',
                list: [{
                    img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2676343009,1944317430&fm=11&gp=0.jpg',
                    text: '优选水果',
                    price: 10.8,
                }, {
                    img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2676343009,1944317430&fm=11&gp=0.jpg',
                    text: '优选水果',
                    price: 10.8,
                },{
                    img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2676343009,1944317430&fm=11&gp=0.jpg',
                    text: '优选水果',
                    price: 10.8,
                }, {
                    img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2676343009,1944317430&fm=11&gp=0.jpg',
                    text: '优选水果',
                    price: 10.8,
                },{
                    img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2676343009,1944317430&fm=11&gp=0.jpg',
                    text: '优选水果',
                    price: 10.8,
                }, {
                    img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2676343009,1944317430&fm=11&gp=0.jpg',
                    text: '优选水果',
                    price: 10.8,
                }],
            }, {
                type: '优选水果',
                list: [{
                    img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2676343009,1944317430&fm=11&gp=0.jpg',
                    text: '优选水果',
                    price: 10.8,
                }, {
                    img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2676343009,1944317430&fm=11&gp=0.jpg',
                    text: '优选水果',
                    price: 10.8,
                },{
                    img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2676343009,1944317430&fm=11&gp=0.jpg',
                    text: '优选水果',
                    price: 10.8,
                }, {
                    img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2676343009,1944317430&fm=11&gp=0.jpg',
                    text: '优选水果',
                    price: 10.8,
                },{
                    img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2676343009,1944317430&fm=11&gp=0.jpg',
                    text: '优选水果',
                    price: 10.8,
                }, {
                    img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2676343009,1944317430&fm=11&gp=0.jpg',
                    text: '优选水果',
                    price: 10.8,
                }],
            }, {
                type: '优选水果',
                list: [{
                    img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2676343009,1944317430&fm=11&gp=0.jpg',
                    text: '优选水果',
                    price: 10.8,
                }, {
                    img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2676343009,1944317430&fm=11&gp=0.jpg',
                    text: '优选水果',
                    price: 10.8,
                },{
                    img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2676343009,1944317430&fm=11&gp=0.jpg',
                    text: '优选水果',
                    price: 10.8,
                }, {
                    img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2676343009,1944317430&fm=11&gp=0.jpg',
                    text: '优选水果',
                    price: 10.8,
                },{
                    img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2676343009,1944317430&fm=11&gp=0.jpg',
                    text: '优选水果',
                    price: 10.8,
                }, {
                    img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2676343009,1944317430&fm=11&gp=0.jpg',
                    text: '优选水果',
                    price: 10.8,
                }],
            }, {
                type: '优选水果',
                list: [{
                    img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2676343009,1944317430&fm=11&gp=0.jpg',
                    text: '优选水果',
                    price: 10.8,
                }, {
                    img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2676343009,1944317430&fm=11&gp=0.jpg',
                    text: '优选水果',
                    price: 10.8,
                },{
                    img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2676343009,1944317430&fm=11&gp=0.jpg',
                    text: '优选水果',
                    price: 10.8,
                }, {
                    img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2676343009,1944317430&fm=11&gp=0.jpg',
                    text: '优选水果',
                    price: 10.8,
                },{
                    img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2676343009,1944317430&fm=11&gp=0.jpg',
                    text: '优选水果',
                    price: 10.8,
                }, {
                    img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2676343009,1944317430&fm=11&gp=0.jpg',
                    text: '优选水果',
                    price: 10.8,
                }],
            }, {
                type: '优选水果',
                list: [{
                    img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2676343009,1944317430&fm=11&gp=0.jpg',
                    text: '优选水果',
                    price: 10.8,
                }, {
                    img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2676343009,1944317430&fm=11&gp=0.jpg',
                    text: '优选水果',
                    price: 10.8,
                },{
                    img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2676343009,1944317430&fm=11&gp=0.jpg',
                    text: '优选水果',
                    price: 10.8,
                }, {
                    img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2676343009,1944317430&fm=11&gp=0.jpg',
                    text: '优选水果',
                    price: 10.8,
                },{
                    img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2676343009,1944317430&fm=11&gp=0.jpg',
                    text: '优选水果',
                    price: 10.8,
                }, {
                    img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2676343009,1944317430&fm=11&gp=0.jpg',
                    text: '优选水果',
                    price: 10.8,
                }],
            }, {
                type: '优选水果',
                list: [{
                    img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2676343009,1944317430&fm=11&gp=0.jpg',
                    text: '优选水果',
                    price: 10.8,
                }, {
                    img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2676343009,1944317430&fm=11&gp=0.jpg',
                    text: '优选水果',
                    price: 10.8,
                },{
                    img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2676343009,1944317430&fm=11&gp=0.jpg',
                    text: '优选水果',
                    price: 10.8,
                }, {
                    img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2676343009,1944317430&fm=11&gp=0.jpg',
                    text: '优选水果',
                    price: 10.8,
                },{
                    img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2676343009,1944317430&fm=11&gp=0.jpg',
                    text: '优选水果',
                    price: 10.8,
                }, {
                    img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2676343009,1944317430&fm=11&gp=0.jpg',
                    text: '优选水果',
                    price: 10.8,
                }],
            }, {
                type: '优选水果',
                list: [{
                    img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2676343009,1944317430&fm=11&gp=0.jpg',
                    text: '优选水果',
                    price: 10.8,
                }, {
                    img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2676343009,1944317430&fm=11&gp=0.jpg',
                    text: '优选水果',
                    price: 10.8,
                },{
                    img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2676343009,1944317430&fm=11&gp=0.jpg',
                    text: '优选水果',
                    price: 10.8,
                }, {
                    img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2676343009,1944317430&fm=11&gp=0.jpg',
                    text: '优选水果',
                    price: 10.8,
                },{
                    img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2676343009,1944317430&fm=11&gp=0.jpg',
                    text: '优选水果',
                    price: 10.8,
                }, {
                    img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2676343009,1944317430&fm=11&gp=0.jpg',
                    text: '优选水果',
                    price: 10.8,
                }],
            }, ],
        }
    }
})