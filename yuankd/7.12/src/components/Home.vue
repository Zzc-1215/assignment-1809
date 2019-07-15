<template>
    <div style="height:100%">
        <div style="position:fixed;top:0;left:0;background:#FFF;z-index:1;">
            <nav-bar :data="metun" @indexChange="getNewsList"></nav-bar>
        </div>
        <div id="wrapper" style="width:100%;height:100%;position:relative">
            <ul  class="news-list">
                <li style="text-align:center;line-height:60px;">{{refash}}</li>
                <li v-for="(item,index) in newList" :key="index">
                    <!-- {{item}} -->
                    <p>{{item.title}}</p>
                    <div>
                        <img v-lazy="item.multi_imgs[0]">
                        <img v-lazy="item.multi_imgs[1]">
                        <img v-lazy="item.multi_imgs[2]">
                    </div>
                    <p>{{item.tags}}&nbsp;&nbsp;&nbsp;&nbsp;{{item.update_time}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import IScroll from 'iscroll/build/iscroll-probe.js'
    import navBar from './navBar.vue'
    
    export default{
        data(){
            return{
                refash:'下拉刷新',
                isrefash:false,
                isLoad:false,
                currentPage:0,
                currentType:'astro',
                metun:[
                    {ext:'astro',title:'天文'},
                    {ext:'cul',title:'社会'},
                    {ext:'edu',title:'国内'},
                    {ext:'house',title:'国际'},
                    {ext:'sports',title:'娱乐'},
                    {ext:'tech',title:'体育'},
                    {ext:'games',title:'军事'},
                    {ext:'finance',title:'科技'},
                    {ext:'fashion',title:'财经'},
                    {ext:'ent',title:'时尚'}
                ],
                newList:[]
            }
        },
        components: {
            navBar
        },
        created(){
            this.getNewsList()
        },
        methods: {
            getNewsList(event){
                // console.log(event)
                this.currentType = event || 'astro';
                this.axios.get('/irs/rcd?cid=56&ext='+this.currentType+'&token=c786875b8e04da17b24ea5e332745e0f&num=20&expIds=20190106A13PFT%7C20190108A04MLS&page='+this.currentPage).then((res)=>{
                console.log(res.data.data)
                if(this.currentPage==0){
                    this.newList = res.data.data

                }else{
                    this.newList=this.newList.concat(res.data.data)
                }
                // console.log(res.data.data)
                

                //iscroll滚动 初始化iscroll
                    this.$nextTick(function(){
                        if(this.myScroll){
                            this.myScroll.refresh()
                        }else{
                            this.initIScroll()
                        }
                        
                    })
                })
            },

            initIScroll(){
                var vm=this;
                 this.myScroll = new IScroll('#wrapper',{
                    scrollbars:true,
                    mouseWheel:true,
                    probeType:2,
                    // bounce:false,
                });
                this.myScroll.on('scroll',function(){
                    if(this.y>50){
                        vm.refash='松手刷新'
                        vm.isrefash=true
                    }else if(this.y<this.maxScrollY){
                        vm.isLoad=true;
                    }else{
                        vm.refash='下拉刷新'
                        vm.isrefash=false
                        vm.isLoad=false;
                    }

                })
                this.myScroll.on('scrollEnd',function(){
                    if(vm.isrefash){
                        // vm.isrefash = false;
                        vm.currentPage = 0;
                        vm.getNewsList(vm.currentType);
                    }else if(vm.isLoad){
                        vm.currentPage++
                        vm.getNewsList(vm.currentType);
                    }
                })
            }
        }
    }
</script>
<style scoped>
    .news-list{
        background:#f4f4f4;
        border-bottom:solid 1px #ccc;
    }
    .news-list li{
        padding:0 20px;
        background:#FFF;
        margin-bottom:10px;
        font-size:18px
    }
    .news-list li:nth-child(1){
        margin-bottom:0;
    }
    .news-list li img{
        display: inline-block;
        width: 30%;
        height:200px;
        margin-right: 20px;
    }
    .news-list li p:nth-child(1){
        font-size:20px;
        line-height: 2.2em;
        margin-bottom:10px;
        text-align:left;
    }
    .news-list li p:nth-child(3){
        font-size:16px;
        line-height:50px;
    }
</style>

