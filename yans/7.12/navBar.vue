<<template>
    <div class="swiper-container" id="navBar">
        <ul class='nav-bar swiper-wrapper'>
            <li class='swiper-slide' @click="activeIndex==index" :class="{active:index==activeIndex}" v-for="(item,index) in list" :key="index">
                {{item}}
            </li>
        </ul>
    </div>
</template>


<script>
import Swiper from 'swiper';
console.log(Swiper)
export default {
    props:['data'],
    data(){
        return{
            activeIndex：0,
            list:this.data || ['推荐','热门','科技','推荐','热门','科技','推荐','热门','科技'],
            mySwiper:null,
        }
    },
    watch:{
        activeIndex(v){
            this.$emit('indexChange',v);
        }
    }
    mounted() {
        this.mySwiper = new Swiper('.swiper-container', {
            autoplay: true,
            slidesPerView : 6,
            freeMode : true
        })
    },
}
</script>
<style scoped>
    #navBar{
        border-bottom:1px solid #ccc;
    }
    #navBar ul{
        padding:0;
    }
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