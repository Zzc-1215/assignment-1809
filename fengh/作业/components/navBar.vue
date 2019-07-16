<<template>
    <!-- 在for循环完初始化swiper  -->
    <div class="swiper-container" id="navBar">
        <ul class='nav-bar swiper-wrapper'>
            <li class='swiper-slide' @click="activeCategroy==item.categroy" :class="{active:item.categroy==activeCategroy}" v-for="(item,index) in list" :key="index">
                {{item.title}}
            </li>
            <!-- class="{active:index==activeIndex}用在渲染li字体变大为红 -->
        </ul>
    </div>
</template>


<script>
// @ is an alias to /src
import Swiper from 'swiper';
console.log(Swiper)
export default {
    props:['data'],//因为要把list暴露出去 因为home.vue需要用
    data(){
        return{
            activeCategroy:'top',
            // activeIndex:0,
            list:this.data || ['推荐'],//没传 就显示一下推荐
            // list:['推荐','热门','科技','推荐','热门','科技','推荐','热门','科技'],
            mySwiper:null,
        }
    },
    watch:{//只要监听到li有变化，就暴露传出去
        activeCatgegroy(v){
            this.$emit('indexChange',v);
        }
    },
    mounted() {
        //要在外面用 在data里面存一下mySwiper
        this.mySwiper = new Swiper('.swiper-container', {
            autoplay: true,//可选选项，自动滑动
            //swiper多个滑动效果
            slidesPerView : 6,
            // slidesPerGroup : 1,
            freeMode : true
        })
    },
}
</script>
<style scoped>
    /* swiper盒子 */
    #navBar{
        border-bottom:1px solid #ccc;
    }
    #navBar ul{
        padding:0;
    }
    /* li样式 */
    .nav-bar ul>li{
        list-style:none;
        padding:0;
        line-height:50px;
        cursor:pointer;
    }
    .nav-bar ul>li.active{
        color:red;
        font-size:1.1rem;
    }
</style>