var zhifu = Vue.extend({
    template: `
        <div>
            <div class="header clearfix">
                <div class="header_tit fl"><span><router-link to="/">&lt;</router-link></span>庆丰包子铺（窦店）</div>
                <div class="header_font fr">
                    <span class="search iconfont">&#xe6a4;</span>
                    <span class="iconfont">&#xe607;</span>
                </div>
            </div>

            <div class="account-main">
                <ul class="account-list clearfix">
                    <li v-for="item,i in str">
                        <div class="img">
                            <img :src="item.img">
                        </div>
                        <div class="content clearfix">
                            <p class="fl">{{item.name}}<span>x{{item.number}}</span></p>
                            <span class="fr">￥{{(item.number*item.price).toFixed(1)}}</span>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="foot">
                <span style="padding-left: 50px;">￥{{ass}}</span>
                <router-link :to="{}" class="button fr">去支付</router-link>
            </div>
        </div>
    `,
    data () {
        return {
            str: this.$route.params.sl || [],
        }
        // console.log(this.$route.params)
    },
    computed: {
        ass () {
            var num = 0;
            this.str.forEach(item => {
                num += item.price * item.number;
            })
            return num.toFixed(1);
        }
    },
})