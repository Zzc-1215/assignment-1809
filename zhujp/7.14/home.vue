<template>
    <div style="height:100%;">
        <div style="position:fixed;top:0; left:0;right:0;background:#fff; height:50px;z-index:1;">
             <nav-bar :data="menu" @indexChange="getNewsList"></nav-bar>
        </div>
        <div id="wrapper" style="height:100%;width:100%;position:relative;">
            <ul class="news-list">
                <li style="text-align:center;line-height:50px;">{{refash}}</li>
                <li v-for="(item,index) in newsList" :key="index">
                    <p>{{item.title}}</p>
                    <div>
                        <img v-lazy="item.multi_imgs[0]">
                        <img v-lazy="item.multi_imgs[1]">
                        <img v-lazy="item.multi_imgs[2]">
                    </div>
                    <p class="text-muted">{{item.source}}&nbsp;&nbsp;{{item.update_time}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import IScroll from 'iscroll/build/iscroll-probe.js';
import navBar from './navBar.vue';
export default {
    data(){
        return {
            refash:'下拉刷新',
            isrefash:false,
            isLoad:false,
            myScroll: null,
            currentType: '',
            currentPage:0,
            menu:[
                {ext:'astro',title:'天文'},
                {ext:'cul',title:'网络'},
                {ext:'edu',title:'教育'},
                {ext:'house',title:'房产'},
                {ext:'sports',title:'体育'},
                {ext:'tech',title:'技术'},
                {ext:'games',title:'游戏'},
                {ext:'finance',title:'金融'},
                {ext:'fashion',title:'时尚'},
                {ext:'ent',title:'医学'},
                {ext:'auto',title:'汽车'}
            ],
            newsList:[],
        }
    },
  created(){
      this.getNewsList();
  },
  components:{
    navBar
  },
  methods:{
        getNewsList(event){
            this.currentType = event || 'astro';
            this.axios.get('/irs/rcd?cid=56&ext='+this.currentType+'&token=c786875b8e04da17b24ea5e332745e0f&num=5&expIds=20190106A13PFT%7C20190108A04MLS&page='+this.currentPage+'').then((res)=>{
                console.log(res.data.data)
                if(this.currentPage == 0){
                    this.newsList = res.data.data;
                }else{
                    this.newsList = this.newsList.concat(res.data.data);
                }
                //初始化IScroll
                this.$nextTick(function(){
                    if(this.myScroll){
                        this.myScroll.refresh();
                    }else{
                        this.initIScroll();
                    }
                })
            })
        },
        initIScroll(){
            var vm = this
            this.myScroll = new IScroll('#wrapper',{
                scrollbars:true,
                mouseWheel:true,
                probeType:2,
            })
            this.myScroll.on('scroll',function(){
                if(this.y>50){
                    vm.refash = '松开刷新'
                    vm.isrefash = true
                }else if(this.y<this.maxScrollY){
                    vm.isLoad = true
                }else{
                    vm.refash = '下拉刷新'
                    vm.isrefash = false
                    vm.isLoad = false 
                }
            })
            this.myScroll.on('scrollEnd',function(){
                if(vm.isrefash){
                    vm.currentPage = 0;
                   vm.getNewsList(vm.currentType);
                }else if(vm.isLoad){
                    vm.currentPage ++;
                    vm.getNewsList(vm.currentType);
                }
            })
        },
    }
}
</script>

<style scoped>
    ul.news-list li{
        padding:5px 20px;
        border-bottom:10px solid #f4f4f4;
    }
    ul.news-list li p{
        line-height:1.4em;
        magin-bottom:10px;
    }
    ul.news-list li img{
        display:inline-block;
        width:28%;
        height:100px;
        margin-right:4%;
        border:1px solid #ccc;
    }
    .text-muted{
        color:#ccc;
        font-size:.8em;
    }
</style>
