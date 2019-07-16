<template>
    <div>
        <div style='position:fixed;top:0;left:0;right:0; background:#fff;;height:50px;'>
            <nav-bar :data="menu" @indexChange="i=$event"></nav-bar>
        </div>
        <div id="wrapper" style='height:100%;width:100%;position:relative'>
             <ul class='news-list'>
                 <li style='text-align:center;line-hight:50px;'>{{refash}}</li>
                <li v-for='(itme,index) in newsList' :key='index'>
                    <p>{{itme.title}}</p>
                    <div>
                        <img :src='itme.img' alt=''>
                        <img :src='itme.img' alt=''>
                        <img :src='itme.img' alt=''>
                    </div>
                    <p class='text-muted'>{{itme.source}}&nbsp;&nbsp;{{itme.time}}</p>
                </li>
            </ul>
        </div>
       
    </div>
</template>

<script>
// @ is an alias to /src
import IScroll from 'iscroll/build/iscroll-probe.js'
import navBar from './navBar.vue'
// console.log(navBar)
export default {
    data(){
        return{
            refash:'下拉刷新',
            myScroll:null,
            isrefash:false,
            isLoad:false,
            // i:0,
            url:'/irs/rcd',
            params:'cid=56&ext=games&token=c786875b8e04da17b24ea5e332745e0f&num=20&expIds=20190106A13PFT%7C20190108A04MLS&page=0',
            currentType:'games',
            currentPage:0,
            menu:[
                {categroy:'games',title:'游戏'},
                {categroy:'astro',title:'天文'},
                {categroy:'cul',title:'文化'},
                {categroy:'edu',title:'教育'},
                {categroy:'house',title:'房产'},  
                {categroy:'sports',title:'体育'},
                {categroy:'tech',title:'科技'},
                {categroy:'finance',title:'财经'},
                {categroy:'fashion',title:'时尚'},
                {categroy:'ent',title:'娱乐'},
                {categroy:'auto',title:'汽车'},
            ],
            newsList:[
            //     [
            //     {
            //         title:'111',
            //         imgs:['1.jpg','2.jpg','3.jpg'],
            //         author:'xxx',
            //         time:'一天前'
            //     },
            //     {
            //         title:'111',
            //         imgs:['1.jpg','2.jpg','3.jpg'],
            //         author:'xxx',
            //         time:'一天前'
            //     },{
            //         title:'111',
            //         imgs:['1.jpg','2.jpg','3.jpg'],
            //         author:'xxx',
            //         time:'一天前'
            //     },{
            //         title:'111',
            //         imgs:['1.jpg','2.jpg','3.jpg'],
            //         author:'xxx',
            //         time:'一天前'
            //     }
            // ],
            // [
            //     {
            //         title:'1ww11',
            //         imgs:['1.jpg','2.jpg','3.jpg'],
            //         author:'xxx',
            //         time:'一天前'
            //     },
            //     {
            //         title:'111',
            //         imgs:['1.jpg','2.jpg','3.jpg'],
            //         author:'xxx',
            //         time:'一天前'
            //     },{
            //         title:'111',
            //         imgs:['1.jpg','2.jpg','3.jpg'],
            //         author:'xxx',
            //         time:'一天前'
            //     },{
            //         title:'111',
            //         imgs:['1.jpg','2.jpg','3.jpg'],
            //         author:'xxx',
            //         time:'一天前'
            //     }
            // ],
            // [
            //     {
            //         title:'11111111111111111111111122222211',
            //         imgs:['1.jpg','2.jpg','3.jpg'],
            //         author:'xxx',
            //         time:'一天前'
            //     },
            //     {
            //         title:'111',
            //         imgs:['1.jpg','2.jpg','3.jpg'],
            //         author:'xxx',
            //         time:'一天前'
            //     },{
            //         title:'111',
            //         imgs:['1.jpg','2.jpg','3.jpg'],
            //         author:'xxx',
            //         time:'一天前'
            //     },{
            //         title:'111',
            //         imgs:['1.jpg','2.jpg','3.jpg'],
            //         author:'xxx',
            //         time:'一天前'
            //     }
            // ],
            // [
            //     {
            //         title:'111',
            //         imgs:['1.jpg','2.jpg','3.jpg'],
            //         author:'xxx',
            //         time:'一天前'
            //     },
            //     {
            //         title:'111',
            //         imgs:['1.jpg','2.jpg','3.jpg'],
            //         author:'xxx',
            //         time:'一天前'
            //     },{
            //         title:'111',
            //         imgs:['1.jpg','2.jpg','3.jpg'],
            //         author:'xxx',
            //         time:'一天前'
            //     },{
            //         title:'111',
            //         imgs:['1.jpg','2.jpg','3.jpg'],
            //         author:'xxx',
            //         time:'一天前'
            //     }
            // ],
            ]
        }
    },
    created(){
        this.getNewsList()
    },
  components: {
    navBar
  },
  methods:{
      getNewsList(event){
          this.currentType=event ||"games"
          this.axios.get(this.url+'?ext='+(event||this.currentType)+this.params+this.currentPage).then((res)=>{
              this.newsList = res.data.result.data;
            //初始化IScroll
            this.$nextTick(function () {
                if(this.myScroll){
                    this.myScroll.refash()
                }else{
                    this.initIScroll()
                }
                
            })
          })
      },
      initIScroll(){
          var vm=this
        this.myScroll=new IScroll('#wrapper',{
                scrollbars:true,
                mouseWheel:true,
                probeType:2,
            });
        this.myScroll.on('scroll',function(){
           if(this.y>50){
                vm.refash='松开刷新';
                vm.isrefash=true;
            } else if(this.y<this.maxScrollY){
                vm.isLoad=true;
            }else{
                vm.refash='下拉刷新',
                vm.isrefash=false;
                 vm.isLoad=false;
            }
           
        });
        this.myScroll.on('scrollEnd',function(){
            if(this.isrefash){
                // this.goToPage(0,50,1000,'easing')
                vm.getNewsList(vm.crurrentType)
            }else if(vm.iscroll){
                vm.currentPage++;
                vm.getNewsList(vm.crurrentType)
            }
        })
      }
  }
}
</script>

<style scoped>
ul.news-list {
  margin-top: 50px;
}
ul.news-list li {
  padding: 5px 20px;
  border-bottom: 10px solid #ddd;
}
ul.news-list li p {
  line-height: 1.4em;
  margin-bottom: 10px;
}
ul.news-list li img {
  display: inline-block;
  width: 30%;
  margin-right: 3.333%;
  height: 100px;
  border: 1px solid #ccc;
}
.text-muted {
  color: #ccc;
  font-size: 0.8em;
}
</style>