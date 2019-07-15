<template>
    <div>
        <div style="position:fixed;top:0;left:0;right:0;background:#fff;z-index:3;">
            <nav-bar :data="menu" @indexchange="getNewsList"></nav-bar>
        </div>
        <div id="wrapper" style="width:100%;height:100%;position:absolute;">
            <ul class="news-list">
                <li style="text-align:center;line-height:50px;padding:0px;">{{refash}}</li>
                <li @click="goto(item.url,item.title)" v-for="(item,index) in newlist" :key="index">
                    <p>{{item.title}}</p>
                    <div>
                        <img v-lazy="item.multi_imgs[0]" alt />
                        <img v-lazy="item.multi_imgs[1]" alt />
                        <img v-lazy="item.multi_imgs[2]" alt />
                    </div>
                    <p class="text-muted">{{item.source}}--{{item.update_time}}</p>
                </li>
                <li style="text-align:center;line-height:50px;padding:0px;">{{outrefash}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import navBar from "./navBar.vue";
import IScroll from "iscroll/build/iscroll-probe.js";
import "../main.js";
export default {
    data() {
        return {
            currentType: "astro",
            refash: "下拉刷新",
            outrefash:"上拉加载",
            isrefash: false,
            isLoad:false,
            myScroll: null,
            currentpage:0,
            menu: [
                { categroy: 'astro', title: "天文" },
                { categroy: 'cul', title: "文化" },
                { categroy: 'edu', title: "教育" },
                { categroy: 'house', title: "房产" },
                { categroy: 'sports', title: "体育" },
                { categroy: 'tech', title: "技术" },
                { categroy: 'games', title: "游戏" },
                { categroy: 'finance', title: "金融" },
                { categroy: 'fashion', title: "时尚" },
                { categroy: 'ent', title: "养生" },
                { categroy: 'auto', title: "汽车" }
            ],
            newlist: [],
        // item22:this,
        };
    },
    created() {
        this.getNewsList();
    },
    components: {
        navBar
    },
    methods: {
        goto(item,item1){
           this.$store.state.itemurl={url:item,title:item1};
            location.href="http://localhost:8080/#/detail";
        },
        getNewsList(event) {
            this.currentType = event ? this.currentType = event : this.currentType;
            this.axios.get("/irs/rcd?cid=56&ext=" + this.currentType + "&token=c786875b8e04da17b24ea5e332745e0f&num=5&expIds=20190106A13PFT%7C20190108A04MLS&page="+this.currentpage).then((res) => {
                if(this.currentpage==0){
                    this.newlist = res.data.data;
                }else{
                    this.newlist=this.newlist.concat(res.data.data);
                }
                //初始化iscroll
                this.$nextTick(function() {
                    if (this.myScroll) {
                        this.myScroll.refresh();
                    } else {
                        this.initIScroll();
                    }
                })
            })
        },
        initIScroll() {
            var vm = this;
            this.myScroll = new IScroll("#wrapper", {
                scrollbars: true,
                mouseWheel: true,
                probeType: 2
            });
            this.myScroll.on("scroll", function() {
                if (this.y > 50) {
                    vm.refash = "松手刷新";
                    vm.isrefash = true;
                }else if(this.y<this.maxScrollY){
                    vm.isLoad=true;
                }else {
                    vm.refash = "下拉刷新";
                    vm.isrefash = false;
                    vm.isLoad=false;
                }
            });
            this.myScroll.on("scrollEnd", function() {
                if (vm.isrefash) {
                    vm.currentpage=0;
                    vm.getNewsList(vm.currentType);
                }else if(vm.isLoad){
                    vm.currentpage++;
                    vm.getNewsList(vm.currentType);
                }
            })
        }
    }
};
</script>

<style scoped>
ul.news-list li p {
    line-height: 1.4em;
    font-size:0.525rem;
    margin-bottom: 0.25rem;
}

ul.news-list li {
    padding: 0.5rem;
    border-bottom: 0.25rem solid #ccc;
}
ul.news-list li img {
    display: inline-block;
    width: 30%;
    margin-right: 3%;
    min-height: 2rem;
    border: 1px solid red;
    max-height:4rem;
}

.text-muted {
    color: #ccc;
    font-size: 0.25rem;
}
</style>
