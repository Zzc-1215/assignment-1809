<template>
    <div>
        <div class="title"><span class="el-icon-arrow-left"></span>墨迹天气</div>
        <div class="sea">
            <input type="text" @input="upcity" v-model="val" class="intxt">
            <input type="button" value="搜索" class="inbtn">
            <div class="mh">
                <ul>
                    <li v-for="(item,index) in list" :key="index">{{item}}</li>
                </ul>
            </div>
        </div>
        <div class="cai">
            <p class="tip">猜你喜欢</p>
            <ul class="list">
                <li v-for="(item,index) in likelist" :key="index">{{item}}</li>
            </ul>
        </div>
        <div class="cai">
            <p class="tip">历史记录</p>
            <span style="line-height: .796rem;" class="del el-icon-delete">清空</span>
            <ul class="list">
            </ul>
        </div>
    </div>
</template>

<script>
import "../main.js";
// /simpleWeather/query?city=%E5%8C%97%E4%BA%AC&key=d05d59ba6250afcd02b4fc8a7026bb9c 搜索
// /simpleWeather/cityList?key=d05d59ba6250afcd02b4fc8a7026bb9c 模糊匹配城市
export default {
    name: 'home',
    data() {
        return {
            list: [],
            likelist: [],
            val: ""
        }
    },
    methods: {
        ischinese(s) {
            var ret = true;
            for (var i = 0; i < s.length; i++) //遍历每一个文本字符
                ret = ret && (s.charCodeAt(i) >= 10000); //判断文本字符的unicode值
            return ret;
        },
        upcity() {
            if (this.val != "" && this.ischinese(this.val)) {
                this.axios.get("/simpleWeather/cityList?key=d05d59ba6250afcd02b4fc8a7026bb9c").then((data) => {
                    var arr1 = data.data.result;
                    this.list = [];
                    for (var i = 0; i < arr1.length; i++) {
                        if (arr1[i].district.indexOf(this.val) == 0) {
                            this.list.push(arr1[i].district);
                        }
                    }
                })
            }
        }
    },
    mounted() {
        this.axios.get("/simpleWeather/cityList?key=d05d59ba6250afcd02b4fc8a7026bb9c").then((data) => {
            var arr = data.data.result;
            for (var i = 0; i < arr.length; i++) {
                if (this.likelist.length <= 10) {
                    this.likelist.push(arr[i].district);
                } else {
                    break;
                }
            }
        })
    },
}
</script>

<style scope>
* {
    margin: 0;
    padding: 0;
    border-style: none;
}

.cai {
    width: 100%;
    padding: 0px .398rem/* 43/108 */
    ;
    box-sizing: border-box;
    height: 4.259rem/* 460/108 */
    ;
    position: relative;
    margin-bottom: 1.852rem/* 200/108 */
    ;
}

.tip {
    height: .796rem/* 86/108 */
    ;
    font-size: .407rem/* 44/108 */
    ;
    line-height: .796rem/* 86/108 */
    ;
    text-align: left;
    margin-bottom: .185rem/* 20/108 */
    ;
}

.del {
    height: .796rem/* 86/108 */
    ;
    position: absolute;
    display: block;
    right: .398rem;
    top: 0;
    font-size: .37rem/* 40/108 */
    ;
}

.list li {
    height: .787rem/* 85/108 */
    ;
    width: 2.926rem/* 316/108 */
    ;
    font-size: .333rem/* 36/108 */
    ;
    text-align: center;
    float: left;
    line-height: .787rem/* 85/108 */
    ;
    border-radius: 3px;
    background: #4394e6;
    color: #fff;
    margin: 0px .185rem .278rem 0px;
}

.sea {
    border-bottom: .037rem/* 4/108 */
    solid #f7f7f7;
    width: 100%;
    padding: 0px .398rem/* 43/108 */
    ;
    box-sizing: border-box;
    margin-bottom: .463rem/* 50/108 */
    ;
    position: relative;
}

.mh {
    z-index: 5;
    position: absolute;
    width: 80%;
    height: auto;
    /* background: red; */
    top: .8rem/* 100/108 */
    ;
    margin: 0 auto;
}

.mh ul li {
    width: 100%;
    background: #fff;
    font-size: .37rem/* 40/108 */
    ;
    text-align: left;
    height: .926rem/* 100/108 */
    ;
}

.intxt {
    width: 7.963rem/* 860/108 */
    ;
    height: .778rem;
    line-height: .778rem;
    border-radius: 3px;
    margin-bottom: .185rem/* 20/108 */
    ;
    background: #f2f2f2;
}

.inbtn {
    width: 1.204rem/* 130/108 */
    ;
    height: .778rem;
    background: #fff;
}

.title {
    width: 100%;
    text-align: left;
    font-size: .463rem/* 50/108 */
    ;
    height: .926rem/* 100/108 */
    ;
    padding-left: .343rem/* 37/108 */
    ;
    margin: .556rem auto;
    height: .556rem/* 60/108 */
    ;
}

.title span {
    width: .926rem/* 100/108 */
    ;
    display: inline-block;
}
</style>
