var shop = Vue.extend({
    template: `
    <!-- 头部 -->
    <div>
        <div class="header clearfix">
            <div class="header_tit fl"><span>&lt;</span>庆丰包子铺（窦店）</div>
            <div class="header_font fr">
                <span class="search iconfont">&#xe6a4;</span>
                <span class="iconfont">&#xe607;</span>
            </div>
        </div>
        <!-- 切换 -->
        <div class="options">
            <ul class="option_list clearfix">
                <li><a href="#" class="active">点餐</a></li>
                <li><a href="#">评价</a></li>
                <li><a href="#">商家</a></li>
            </ul>
        </div>
        <!-- 选项 -->
        <div class="tabs clearfix">
            <!-- 列表 -->
            <ul class="tabs_list fl">
                <li v-for="(i,$index) in arr" @click="style($index)"
                    :style="{'background':active==$index?'#fff':''}">
                    {{i.category}}</li>
                <!-- <li>流食</li>
                <li>凉菜</li>
                <li>包子</li>
                <li>庆丰福粽</li>
                <li>庆丰特色饮品</li>
                <li>豆浆饮料</li> -->
            </ul>
            <!-- 食物 -->
            <div class="food_list fl">
                <div class="food clearfix" v-for="(i,$index) in arr[i].food">
                    <div class="food_img fl">
                        <img :src="i.img" alt="">
                    </div>
                    <div class="food_message fl">
                        <h2 class="food_tit">{{i.name}}</h2>
                        <p class="food_sales">月售<span>{{i.num}}</span>份</p>
                        <div class="price_box clearfix">
                            <p class="food_price fl">{{i.price}}</p>
                            <div class="counter fr">
                                <span class="sub" @click="sub(i)">-</span>
                                <span class="amount">{{i.number || 0}}</span>
                                <span class="add" @click="add(i)">+</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="foot">
            <span>￥{{zongjia}}</span>
            <b>{{nums}}</b>
            <router-link :to="{name:'zhifu',params:{sl,zongjia}}" class="button fr">去结算</router-link>
        </div>
    </div>
    `,
    data () {
        return {
            i: 0,
            active: 0,
            arr: [{
                category: '热销',
                food: [{
                    name: '鲜虾菜心(6个)',
                    img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3344906949,987874169&fm=26&gp=0.jpg',
                    intro: '虾仁一个,万年青菜',
                    sell: 666,
                    praise: 66,
                    price: 9,
                    num: 8,
                },
                {
                    name: '猪肉大葱(6个)',
                    img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562263611276&di=ed65eab8b41b76d99d5bd8cdc354e8b0&imgtype=0&src=http%3A%2F%2Fimg22.hc360.cn%2F22%2Fbusin%2F157%2F825%2Fb%2F22-157825882.jpg',
                    intro: '正宗非洲野猪肉,买不了吃亏买不了上当',
                    sell: 222,
                    praise: 44,
                    price: 8,
                    num: 14,
                }],
            },
            {
                category: '流食',
                food: [{
                    name: '黑米粥',
                    img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562263711109&di=6209d00062f989918f4964e933b9f3b2&imgtype=0&src=http%3A%2F%2Fi5.xiachufang.com%2Fimage%2F600%2Fae77c6f6a41011e38844b8ca3aeed2d7.jpg',
                    intro: '发霉的米',
                    sell: 444,
                    praise: 4,
                    price: 4,
                    num: 33,
                },
                {
                    name: '小米粥',
                    img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=269809177,1265328030&fm=26&gp=0.jpg',
                    intro: '长大的螨虫,仔细看',
                    sell: 333,
                    praise: 44,
                    price: 2,
                    num: 22,
                }],
            }],
        }
    },
    computed: {
        // 单个数量
        sl () {
            var str = []
            this.arr.forEach(element => {
                element.food.forEach(el => {
                    if (el.number) {
                        str.push(el)
                    }
                })
            })
            console.log(str)
            return str
        },
        // 总价格
        zongjia () {
            var n = 0
            this.sl.forEach(element => {
                n += element.price * element.number
            })
            console.log(n)
            return n
        },
        // 总数量
        nums () {
            var m = 0
            this.sl.forEach(element => {
                m += element.number
            })
            return m
        }

    },
    methods: {
        // 颜色
        style (i) {
            this.i = i;
            this.active = i;
        },
        // ++
        add (i) {
            if (i.number) {
                i.number++;
            } else {
                Vue.set(i, 'number', 1);
            }
        },
        // --
        sub (i) {
            if (i.number) {
                if (i.number == 0) return;
                i.number--;
            }
        },
    },

})