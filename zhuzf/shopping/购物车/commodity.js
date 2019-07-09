var commodity = Vue.extend({
	template: `
    <div class="container">
        <div class="commodity-header">
            <div>
               庆丰包子铺 (窦店)
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
                                <i class="jian" @click="jian(item)">-</i>
                                <span>{{item.quantity || 0}}</span>
                                <i class="jia" @click="jia(item)">+</i>
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
			if(item.quantity) {
				item.quantity++;
			} else {
				this.$set(item, 'quantity', 1)
			}
		},
		jian(item) {
			if(item.quantity) {
				if(item.quantity == 0) return;
				item.quantity--
			}
		},
	},
	computed: {
		calculate() {
			var arr = [];
			this.listarr.forEach(element => {
				if(element.list && element.list.length > 0) {
					element.list.forEach(item => {
						if(item.quantity) {
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
			if(v1.length > 0) {
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
				type: '手工包子',
				list: [{
					img: '//img14.360buyimg.com/n7/jfs/t22654/213/1317554076/165403/b2f174f2/5b596d98N54af16dc.jpg',
					text: '手工狗不理包子',
					price: 10.8,
				}, {
					img: '//img13.360buyimg.com/n7/jfs/t1/66104/25/1334/429081/5cf930d8E6001c766/ba93382e79c5952e.jpg',
					text: '猪肉卷白菜包',
					price: 10.8,
				}],
			}, {
				type: '中式油条',
				list: [{
					img: '//img12.360buyimg.com/n7/jfs/t1/81240/33/1755/151203/5d01b436E6d0d8942/aa7b6d0faa66be38.jpg',
					text: '放心油条',
					price: 10.8,
				}, {
					img: '//img14.360buyimg.com/n7/jfs/t22765/65/1716252393/545565/226ecaa8/5b66baebN0e41eb7c.jpg',
					text: '火锅油条',
					price: 10.8,
				}],
			}, {
				type: '湾仔码头',
				list: [{
					img: '//img14.360buyimg.com/n7/jfs/t7480/41/604479897/172917/573c9dc2/59954e67N6b1c838c.jpg',
					text: '鲜美大肉包',
					price: 10.8,
				}, {
					img: '//img14.360buyimg.com/n7/jfs/t7480/41/604479897/172917/573c9dc2/59954e67N6b1c838c.jpg',
					text: '蜜汁叉烧包',
					price: 10.8,
				}],
			}, {
				type: '香港稻香',
				list: [{
					img: '//img13.360buyimg.com/n7/jfs/t1/3895/7/13858/138509/5bd9b5b3E78bb536c/4a678313b132c44e.jpg',
					text: '甘荀流沙包',
					price: 10.8,
				}, {
					img: '//img14.360buyimg.com/n7/jfs/t1/41523/5/6051/426871/5cf931feEec6836bf/045d303031c580b8.jpg',
					text: '香菇青菜包',
					price: 10.8,
				}],
			}],
		}
	}
})