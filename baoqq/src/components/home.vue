<template>
  <div style="height:100%;">
    <div class="menuList">
      <nav-bar :data="menu"
               @indexChange="getNewsList"></nav-bar>
    </div>

    <!-- 组件里面可以绑定style -->
    <!-- wrapper必须有高度 -->
    <div id="wrapper"
         style="height:100%;width:100%;position:relative;">
      <ul class="news_list">
        <li style="text-align:center;line-height:50px;">
          {{refresh}}
        </li>
        <li v-for="(item,index) in newsList"
            :key="index"
            @click="$store.state.num=item.url">
          <router-link :to="{name:'/detail'}">
            <p>{{item.title}}</p>
            <div>
              <!-- 懒加载：其实没有给src绑数据，当滚动到屏幕当前滚动区域的话，就把当前的item.multi_imgs[0]给src属性，就是动态的改变了src -->
              <img v-lazy="item.multi_imgs[0]">
              <img v-lazy="item.multi_imgs[1]">
              <img v-lazy="item.multi_imgs[2]">
            </div>
          </router-link>
          <p class="text_muted">{{item.author_name}}&nbsp;&nbsp;{{item.date}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

import IScroll from 'iscroll/build/iscroll-probe.js';


import navBar from './navBar.vue'

// import detail from './detail.vue'

export default {
  data () {
    return {
      refresh: '下拉刷新',
      isrefresh: false,
      isLoad: false,
      myScroll: null,
      url: '/irs/rcd',
      // https://pacaio.match.qq.com/irs/rcd?cid=56&ext=games&token=c786875b8e04da17b24ea5e332745e0f&num=20&expIds=20190106A13PFT%7C20190108A04MLS&page=0
      params: '&cid=56&ext=games&token=c786875b8e04da17b24ea5e332745e0f&num=20&expIds=20190106A13PFT%7C20190108A04MLS&page=0',
      currentType: 'astro',
      currentPage: 0,
      menu: [
        { categroy: 'astro', title: '头条' },
        { categroy: 'cul', title: '社会' },
        { categroy: 'edu', title: '国内' },
        { categroy: 'house', title: '国际' },
        { categroy: 'sports', title: '娱乐' },
        { categroy: 'tech', title: '体育' },
        { categroy: 'games', title: '军事' },
        { categroy: 'finance', title: '科技' },
        { categroy: 'fashion', title: '财经' },
        { categroy: 'ent', title: '时尚' },
        { categroy: 'auto', title: '其他' }
      ],
      newsList: []
    };
  },
  created () {
    this.getNewsList();
  },
  components: {
    navBar,
  },
  methods: {
    // jump (item) {
    //   location.href = "http://localhost:8080/#/detail";
    //   console.log(item.title)
    // },
    getNewsList (event) {
      this.currentType = event || 'astro';

      this.currentType = event ? this.currentType = event : 'astro';

      this.axios.get(this.url + '?ext=' + this.currentType + this.params + this.currentPage).then((res) => {
        console.log(res.data.data)

        if (this.currentPage == 0) {
          this.newsList = res.data.data;
        } else {
          this.newsList = this.newsList.concat(res.data.data);
        }

        // newsList数据被改变了，但是dom结构还得去渲染，并不能及时的去生效，dom结构里面并不能出现那么的数据

        // 所以当所有的dom结构渲染完之后才能调用这些方法

        // 初始化iscroll
        this.$nextTick(function () {
          // 如果这里不加判断的话，就是下拉刷新就会出现好多条数据，加了判断之后，一次只加载一条数据
          if (this.myScroll) {
            this.myScroll.refresh();
            // refresh()是iscroll的一个方法
          } else {
            this.initIScroll();
          }

        })
        // 局部更新完之后再调用nextTick
        // nextTick就是局部的update

      })
    },
    initIScroll () {
      // 初始化iscroll
      this.myScroll = new IScroll('#wrapper', {
        scrollbars: true,
        mouseWheel: true,
        probeType: 2,//越灵敏占用的内存越高
        // bounce: false,//不回弹
      });
      var vm = this;
      // scroll，内容滚动时触发，只有在scroll-probe.js版本中有效
      this.myScroll.on('scroll', function () {
        // 监听滚动的距离，一直打印y轴
        // console.log(this.y);
        if (this.y > 50) {
          vm.refresh = '松开刷新';
          vm.isrefresh = true;
        } else if (this.y < this.maxScrollY) {
          vm.isLoad = true
        } else {
          vm.refresh = '下拉刷新';
          vm.isrefresh = false;
          vm.isLoad = false;
        }


      });
      this.myScroll.on('scrollEnd', function () {
        // console.log(1)
        if (vm.isrefresh) {
          vm.currentPage = 0;
          vm.getNewsList(vm.currentType);
        } else if (vm.isLoad) {
          vm.currentPage++;
          vm.getNewsList(vm.currentType);
        }
      })
    }
  }
}
</script>


<style scoped>
.menuList {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 2;
}
ul.news_list {
  /* margin-top: 50px; */
}
ul.news_list > li {
  text-align: center;
  padding: 5px 20px;
  font-size: 0.3rem;
  border-bottom: 1px solid #f4f4f4;
}
ul.news_list > li p {
  line-height: 1.4em;
  margin-bottom: 10px;
}
ul.news_list > li div img {
  width: 30%;
  height: 100px;
  display: inline-block;
  border: 1px solid #ccc;
  margin-right: 3.33%;
}
.text_muted {
  color: #ccc;
  font-size: 0.6em;
}
</style>

