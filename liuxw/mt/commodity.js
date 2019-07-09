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
                }],
            }, {
                type: '卤味熟食',
                list: [{
                    img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=411535005,2239393545&fm=26&gp=0.jpg',
                    text: '卤味熟食',
                    price: 10.8,
                }, {
                    img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=411535005,2239393545&fm=26&gp=0.jpg',
                    text: '卤味熟食',
                    price: 10.8,
                }],
            }, {
                type: '牛奶面包',
                list: [{
                    img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=547626741,3664254765&fm=26&gp=0.jpg',
                    text: '牛奶面包',
                    price: 10.8,
                }, {
                    img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=547626741,3664254765&fm=26&gp=0.jpg',
                    text: '牛奶面包',
                    price: 10.8,
                }],
            }, {
                type: '热饮',
                list: [{
                    img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3209462403,3801079367&fm=26&gp=0.jpg',
                    text: '热饮',
                    price: 10.8,
                }, {
                    img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3209462403,3801079367&fm=26&gp=0.jpg',
                    text: '热饮',
                    price: 10.8,
                }],
            }, {
                type: '冰淇淋',
                list: [{
                    img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1112536199,1625697658&fm=26&gp=0.jpg',
                    text: '冰淇淋',
                    price: 10.8,
                }, {
                    img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1112536199,1625697658&fm=26&gp=0.jpg',
                    text: '冰淇淋',
                    price: 10.8,
                }],
            }, {
                type: '饮料酒水',
                list: [{
                    img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=979102686,3511629738&fm=26&gp=0.jpg',
                    text: '饮料酒水',
                    price: 10.8,
                }, {
                    img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=979102686,3511629738&fm=26&gp=0.jpg',
                    text: '饮料酒水',
                    price: 10.8,
                }],
            }, {
                type: '休闲食品',
                list: [{
                    img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=884279678,1014790896&fm=26&gp=0.jpg',
                    text: '休闲食品',
                    price: 10.8,
                }, {
                    img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=884279678,1014790896&fm=26&gp=0.jpg',
                    text: '休闲食品',
                    price: 10.8,
                }],
            }, {
                type: '方便速食',
                list: [{
                    img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1465297987,570030747&fm=26&gp=0.jpg',
                    text: '方便速食',
                    price: 10.8,
                }, {
                    img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1465297987,570030747&fm=26&gp=0.jpg',
                    text: '方便速食',
                    price: 10.8,
                }],
            }, {
                type: '数码家电',
                list: [{
                    img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3522765762,3537431987&fm=26&gp=0.jpg',
                    text: '数码家电',
                    price: 10.8,
                }, {
                    img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3522765762,3537431987&fm=26&gp=0.jpg',
                    text: '数码家电',
                    price: 10.8,
                }],
            }, {
                type: '环球美食',
                list: [{
                    img: 'https://f10.baidu.com/it/u=2975402329,3905704794&fm=72',
                    text: '环球美食',
                    price: 10.8,
                }, {
                    img: 'https://f10.baidu.com/it/u=2975402329,3905704794&fm=72',
                    text: '环球美食',
                    price: 10.8,
                }],
            }, {
                type: '户外运动',
                list: [{
                    img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3614035837,3019484591&fm=26&gp=0.jpg',
                    text: '户外运动',
                    price: 10.8,
                }, {
                    img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3614035837,3019484591&fm=26&gp=0.jpg',
                    text: '户外运动',
                    price: 10.8,
                }],
            }],
        }
    }
})